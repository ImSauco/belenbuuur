(function () {
    const albumListEl = document.getElementById('album-list');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (!albumListEl || typeof rawAlbums === 'undefined') return;

    const keywords = Array.isArray(window.ALBUM_PAGE_KEYWORDS)
        ? window.ALBUM_PAGE_KEYWORDS
            .map((keyword) => String(keyword).trim().toLowerCase())
            .filter(Boolean)
        : [];

    const matchesPage = (album) => {
        if (!Array.isArray(album.files) || album.files.length === 0) return false;
        if (keywords.length === 0) return true;

        const haystack = `${album.folder} ${album.title}`.toLowerCase();
        return keywords.some((keyword) => haystack.includes(keyword));
    };

    const albums = rawAlbums.filter(matchesPage);
    if (albums.length === 0) return;

    const buildImageSrc = (folder, file) => `media/img/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

    let activeAlbumIndex = -1;
    let activePhotoIndex = 0;
    let inlinePanel = null;

    const getRowLastIndex = (cards, index) => {
        const top = cards[index].getBoundingClientRect().top;
        let last = index;

        for (let i = index + 1; i < cards.length; i++) {
            if (Math.abs(cards[i].getBoundingClientRect().top - top) < 5) {
                last = i;
            } else {
                break;
            }
        }

        return last;
    };

    const closeInlinePanel = () => {
        if (inlinePanel && inlinePanel.parentNode) {
            inlinePanel.parentNode.removeChild(inlinePanel);
        }

        inlinePanel = null;
        albumListEl.querySelectorAll('.album-card').forEach((card) => card.classList.remove('is-active'));
        activeAlbumIndex = -1;
    };

    const updateLightbox = (album) => {
        const file = album.files[activePhotoIndex];
        lightboxImage.src = buildImageSrc(album.folder, file);
        lightboxImage.alt = `${album.title} ${activePhotoIndex + 1}`;
        lightboxCaption.textContent = `${album.title} (${activePhotoIndex + 1}/${album.files.length})`;
    };

    const openLightbox = (album, index) => {
        activePhotoIndex = index;
        activeAlbumIndex = albums.indexOf(album);
        updateLightbox(album);
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
    };

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
    };

    const stepPhoto = (direction) => {
        const album = albums[activeAlbumIndex];
        if (!album) return;

        activePhotoIndex = (activePhotoIndex + direction + album.files.length) % album.files.length;
        updateLightbox(album);
    };

    const openInlinePanel = (index) => {
        const album = albums[index];
        const cards = Array.from(albumListEl.querySelectorAll('.album-card'));

        if (inlinePanel && inlinePanel.parentNode) {
            inlinePanel.parentNode.removeChild(inlinePanel);
            inlinePanel = null;
        }

        cards.forEach((card) => card.classList.remove('is-active'));
        cards[index].classList.add('is-active');
        activeAlbumIndex = index;

        const lastInRow = getRowLastIndex(cards, index);

        inlinePanel = document.createElement('div');
        inlinePanel.className = 'album-inline-view';
        inlinePanel.innerHTML = `
            <div class="album-inline-header">
                <button class="album-inline-close" type="button" aria-label="Cerrar álbum">×</button>
            </div>
            <div class="album-inline-photos photo-grid"></div>
        `;

        cards[lastInRow].insertAdjacentElement('afterend', inlinePanel);

        const photoGridEl = inlinePanel.querySelector('.album-inline-photos');
        album.files.forEach((file, fileIndex) => {
            const src = buildImageSrc(album.folder, file);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'photo-item';
            button.innerHTML = `<img src="${src}" alt="${album.title} ${fileIndex + 1}" loading="lazy">`;
            button.addEventListener('click', () => openLightbox(album, fileIndex));
            photoGridEl.appendChild(button);
        });

        inlinePanel.querySelector('.album-inline-close').addEventListener('click', closeInlinePanel);

        setTimeout(() => {
            inlinePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
    };

    const renderAlbumList = () => {
        albumListEl.innerHTML = '';

        albums.forEach((album, index) => {
            const coverSrc = buildImageSrc(album.folder, album.files[0]);
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'album-card';
            card.style.setProperty('--album-cover', `url("${coverSrc}")`);
            card.dataset.index = String(index);

            const titleParts = album.title.match(/^(.+?)\s+(\d{1,2}\s+(?:de\s+)?\w+\s+(?:a|y)?\s*\d*\s*(?:de\s+)?\w*\s*(?:de\s+)?\d{4})$/)
                || [null, album.title, ''];
            const mainTitle = titleParts[1];
            const dateStr = titleParts[2];

            card.innerHTML = `
                <span class="album-card-overlay"></span>
                <span class="album-card-content">
                    <span class="album-card-title">${mainTitle}</span>
                    ${dateStr ? `<span class="album-card-date">${dateStr}</span>` : ''}
                    <span class="album-card-count">${album.files.length} fotos</span>
                </span>
            `;

            card.addEventListener('click', () => {
                if (activeAlbumIndex === index) {
                    closeInlinePanel();
                } else {
                    openInlinePanel(index);
                }
            });

            albumListEl.appendChild(card);
        });
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => stepPhoto(-1));
    lightboxNext.addEventListener('click', () => stepPhoto(1));
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') stepPhoto(-1);
        if (event.key === 'ArrowRight') stepPhoto(1);
    });
    window.addEventListener('resize', () => {
        if (activeAlbumIndex !== -1) closeInlinePanel();
    });

    renderAlbumList();
})();
