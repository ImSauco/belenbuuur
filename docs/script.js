// MAPA DE NAVEGACIÓN
// Línea 26: Función redirectLegacyHtmlUrl
// Línea 45: Función markActiveNavLink
// Línea 46: Función normalizePath
// Línea 102: Función updateNavbarState
// Línea 121: Función loadLatestAlbum
// Línea 166: Función loadLatestPost
// Línea 21: Elementos principales para controlar el estado del menú
// Línea 44: Marca el enlace de navegación correspondiente a la página actual
// Línea 67: Soporte swipe táctil para el lightbox
// Línea 86: Oculta muestra la post navbar o gallery navbar al hacer scroll
// Línea 101: Activa el modo "sticky" cuando el scroll supera la altura del hero
// Línea 115: Escucha cambios de scroll y resize para recalcular
// Línea 120: Función para cargar el álbum más reciente en la página de inicio
// Línea 122: Verificar la página de inicio y los datos de álbumes
// Línea 126: Filtrar álbumes vacíos y obtener el más reciente (primero en el array)
// Línea 154: Actualizar el enlace para abrir la galería en ese álbum
// Línea 158: Cargar el álbum más reciente cuando la página esté lista
// Línea 165: Función para cargar el post más reciente en la página de inicio

// Elementos principales para controlar el estado del menú
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

// Normaliza URLs antiguas con .html a rutas limpias con barra final.
const redirectLegacyHtmlUrl = () => {
    const path = window.location.pathname;
    const lowerPath = path.toLowerCase();
    let cleanPath = null;

    if (lowerPath.endsWith('/index.html')) {
        cleanPath = path.slice(0, -10) || '/';
    } else if (lowerPath.endsWith('.html')) {
        cleanPath = `${path.slice(0, -5)}/`;
    }

    if (cleanPath && cleanPath !== path) {
        window.location.replace(cleanPath + window.location.search + window.location.hash);
    }
};

redirectLegacyHtmlUrl();

// Marca el enlace de navegación correspondiente a la página actual como activo
const markActiveNavLink = () => {
    const normalizePath = (path) => {
        let normalized = (path || '/').toLowerCase();
        normalized = normalized.replace(/\/index\.html$/, '/');
        normalized = normalized.replace(/\.html$/, '/');
        if (!normalized.endsWith('/')) normalized += '/';
        return normalized;
    };

    const currentPath = normalizePath(window.location.pathname);
    document.querySelectorAll('.navbar a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkPath = normalizePath(new URL(href, window.location.origin).pathname);
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
};
markActiveNavLink();

// Soporte swipe táctil para el lightbox
let _swipeTouchStartX = 0;
document.addEventListener('touchstart', (e) => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('is-open')) {
        _swipeTouchStartX = e.changedTouches[0].screenX;
    }
}, { passive: true });
document.addEventListener('touchend', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('is-open')) return;
    const dx = e.changedTouches[0].screenX - _swipeTouchStartX;
    if (Math.abs(dx) < 50) return;
    const btn = dx > 0
        ? document.querySelector('.lightbox-prev')
        : document.querySelector('.lightbox-next');
    if (btn) btn.click();
}, { passive: true });

// Oculta/muestra la post-navbar o gallery-navbar al hacer scroll
const postNavbar = document.querySelector('.post-navbar, .gallery-navbar');
if (postNavbar) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
            postNavbar.classList.add('nav-hidden');
        } else {
            postNavbar.classList.remove('nav-hidden');
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// Activa el modo "sticky" cuando el scroll supera la altura del hero
const updateNavbarState = () => {
    if (!navbar || !hero) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= heroBottom - navbar.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Escucha cambios de scroll y resize para recalcular
window.addEventListener('scroll', updateNavbarState);
window.addEventListener('resize', updateNavbarState);
updateNavbarState();

// Función para cargar el álbum más reciente en la página de inicio
const loadLatestAlbum = () => {
    // Verificar si estamos en la página de inicio y si existen los datos de álbumes
    const newsCardAlbum = document.querySelector('.news-card-album');
    if (!newsCardAlbum || typeof rawAlbums === 'undefined') return;

    // Filtrar álbumes vacíos y obtener el más reciente (primero en el array)
    const albums = rawAlbums.filter(album => Array.isArray(album.files) && album.files.length > 0);
    if (albums.length === 0) return;

    const latestAlbum = albums[0];
    
    // Extraer título y fecha
    const titleParts = latestAlbum.title.match(/^(.+?)\s+(\d{1,2}\s+(?:de\s+)?\w+\s+(?:a|y)?\s*\d*\s*(?:de\s+)?\w*\s*(?:de\s+)?(\d{4}))$/)
        || [null, latestAlbum.title, '', ''];
    const mainTitle = titleParts[1];
    const dateStr = titleParts[2];
    
    // Construir la URL de la imagen de portada
    const encodedFolder = encodeURIComponent(latestAlbum.folder);
    const encodedFile = encodeURIComponent(latestAlbum.files[0].replace(/\.[^.]+$/, '.webp'));
    const coverSrc = `media/previews/img/${encodedFolder}/${encodedFile}`;
    
    // Actualizar el contenido de la tarjeta
    const imageEl = newsCardAlbum.querySelector('.news-card-image img');
    const titleEl = newsCardAlbum.querySelector('h3');
    const dateEl = newsCardAlbum.querySelector('.news-card-date');
    const descEl = newsCardAlbum.querySelector('.news-card-content p:last-child');
    
    if (imageEl) imageEl.src = coverSrc;
    if (titleEl) titleEl.textContent = mainTitle;
    if (dateEl) dateEl.textContent = dateStr;
    if (descEl) descEl.textContent = `Explora las últimas ${latestAlbum.files.length} fotografías agregadas a la galería.`;
    
    // Actualizar el enlace para abrir la galería en ese álbum
    newsCardAlbum.href = `/galeria/?album=0`;
};

// Cargar el álbum más reciente cuando la página esté lista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLatestAlbum);
} else {
    loadLatestAlbum();
}

// Función para cargar el post más reciente en la página de inicio
const loadLatestPost = () => {
    const newsCardBlog = document.querySelector('.news-card-blog');
    if (!newsCardBlog || typeof rawPosts === 'undefined' || rawPosts.length === 0) return;

    const latest = rawPosts[0];

    const imageEl = newsCardBlog.querySelector('.news-card-image img');
    const titleEl = newsCardBlog.querySelector('h3');
    const dateEl = newsCardBlog.querySelector('.news-card-date');
    const descEl = newsCardBlog.querySelector('.news-card-content p:last-child');

    if (imageEl) { imageEl.src = latest.image; imageEl.alt = latest.title; }
    if (titleEl) titleEl.textContent = latest.title;
    if (dateEl) dateEl.textContent = latest.date;
    if (descEl) descEl.textContent = latest.excerpt;
    newsCardBlog.href = latest.url;
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLatestPost);
} else {
    loadLatestPost();
}
