// Elementos principales para controlar el estado del menú
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

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
    const encodedFile = encodeURIComponent(latestAlbum.files[0]);
    const coverSrc = `media/img/${encodedFolder}/${encodedFile}`;
    
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
    newsCardAlbum.href = `galeria.html?album=0`;
};

// Cargar el álbum más reciente cuando la página esté lista
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLatestAlbum);
} else {
    loadLatestAlbum();
}
