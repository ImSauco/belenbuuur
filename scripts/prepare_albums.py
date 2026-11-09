"""Prepare new media albums for the website (requires Pillow)."""

from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import re
import subprocess

from PIL import Image, ImageCms, ImageOps


ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / 'docs' / 'media'
DATA = ROOT / 'docs' / 'albums-data.js'
VARIANTS = [('previews/img', 1600, 82), ('previews-mobile/img', 900, 80),
            ('thumbs/albums', 960, 80)]


def optimize(source):
    outputs = []
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        profile = original.info.get('icc_profile')
        if profile:
            from io import BytesIO
            image = ImageCms.profileToProfile(
                image, ImageCms.ImageCmsProfile(BytesIO(profile)),
                ImageCms.createProfile('sRGB'), outputMode='RGB')
        else:
            image = image.convert('RGB')
        for directory, size, quality in VARIANTS:
            target = MEDIA / directory / source.parent.name / (source.stem + '.webp')
            target.parent.mkdir(parents=True, exist_ok=True)
            resized = image.copy()
            resized.thumbnail((size, size), Image.Resampling.LANCZOS)
            resized.save(target, 'WEBP', quality=quality, method=6)
            with Image.open(target) as check:
                check.load()
                assert check.size == resized.size
                assert check.format == 'WEBP'
            outputs.append(target)
    return sum(p.stat().st_size for p in outputs)


def main():
    # Evaluate the existing JS data without changing its formatting or comments.
    result = subprocess.run(
        ['node', '-e', "const fs=require('fs');const vm=require('vm');"
         "console.log(JSON.stringify(vm.runInNewContext("
         "fs.readFileSync(process.argv[1],'utf8')+';rawAlbums')));", str(DATA)],
        check=True, capture_output=True, encoding='utf-8')
    existing = {album['folder'] for album in json.loads(result.stdout)}
    folders = sorted((p for p in MEDIA.iterdir() if p.is_dir()
                      and re.match(r'^\d{4}-\d{2}-\d{2}-', p.name)
                      and p.name not in existing), reverse=True)
    albums = []
    sources = []
    for folder in folders:
        files = sorted(p for p in folder.iterdir()
                       if p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp'})
        if not files:
            continue
        if len({p.stem.casefold() for p in files}) != len(files):
            raise ValueError(f'Duplicate output filenames in {folder}')
        parts = folder.name[11:].split('-')
        while parts and parts[0].lower() in {
                'belenpuuur', 'belenbruuum', 'arquibuuur', 'festibuuur',
                'chinchinbuuur', 'chinchínbuuur'}:
            parts.pop(0)
        albums.append({'folder': folder.name, 'title': ' '.join(parts),
                       'files': [p.name for p in files]})
        sources.extend(files)
    if not sources:
        print('No new albums.')
        return
    original_bytes = sum(p.stat().st_size for p in sources)
    optimized_bytes = 0
    with ThreadPoolExecutor(max_workers=4) as pool:
        for count, size in enumerate(pool.map(optimize, sources), 1):
            optimized_bytes += size
            if count % 25 == 0 or count == len(sources):
                print(f'Optimized {count}/{len(sources)} photos', flush=True)
    # Register albums only after all optimized assets have been verified.
    content = DATA.read_bytes().decode('utf-8')
    newline = '\r\n' if '\r\n' in content else '\n'
    entries = ',\n'.join('    ' + json.dumps(album, ensure_ascii=False, indent=4)
                           .replace('\n', '\n    ') for album in albums)
    marker = 'const rawAlbums = ['
    assert content.count(marker) == 1
    content = content.replace(marker, marker + newline
                              + entries.replace('\n', newline) + ',', 1)
    DATA.write_bytes(content.encode('utf-8'))
    print(json.dumps({'albums': len(albums), 'photos': len(sources),
                      'original_MB': round(original_bytes / 1048576, 2),
                      'webp_MB_all_variants': round(optimized_bytes / 1048576, 2)},
                     ensure_ascii=False), flush=True)


if __name__ == '__main__':
    main()
