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

// Menú principal compacto y accesible en pantallas pequeñas.
const setupMobileNavigation = () => {
    const navigationBars = document.querySelectorAll('.navbar, .gallery-navbar, .post-navbar');

    navigationBars.forEach((bar, index) => {
        const nav = bar.matches('.post-navbar') ? bar.querySelector('nav') : bar;
        const list = nav?.querySelector('ul');
        const controls = bar.matches('.post-navbar')
            ? bar.querySelector('.post-navbar-inner')
            : bar.querySelector('.container');

        if (!list || !controls || controls.querySelector('.nav-toggle')) return;

        list.id = list.id || `primary-navigation-${index + 1}`;

        const brand = document.createElement('a');
        brand.className = 'mobile-brand';
        brand.href = '/';
        brand.setAttribute('aria-label', 'Ir al inicio');
        brand.innerHTML = '<img src="/media/logos/Belenbuuur-white-sn-fondo.png" alt="" width="120" height="42">';

        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', list.id);
        toggle.setAttribute('aria-label', 'Abrir menú');
        toggle.innerHTML = '<span></span><span></span><span></span>';

        controls.insertBefore(brand, controls.firstChild);
        controls.insertBefore(toggle, nav === bar ? list : nav);

        const closeMenu = () => {
            bar.classList.remove('menu-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menú');
        };

        toggle.addEventListener('click', () => {
            const willOpen = !bar.classList.contains('menu-open');
            bar.classList.toggle('menu-open', willOpen);
            toggle.setAttribute('aria-expanded', String(willOpen));
            toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
        });

        list.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeMenu();
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 767) closeMenu();
        });
    });
};

setupMobileNavigation();

// Normaliza URLs antiguas con .html a rutas limpias con barra final.
const redirectLegacyHtmlUrl = () => {
    if (window.location.protocol === 'file:') return;

    // Los servidores locales de vista previa sirven los archivos físicos, pero
    // no siempre resuelven las rutas limpias de directorio como GitHub Pages.
    // Conservamos /index.html durante el desarrollo para evitar falsos 404.
    if (['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)) return;

    const path = window.location.pathname;
    const lowerPath = path.toLowerCase();
    let cleanPath = null;

    // Servicios conserva su entrada física para evitar un bucle con servicios.html
    // en servidores que priorizan el archivo sobre el directorio homónimo.
    if (lowerPath.endsWith('/servicios/index.html')) return;

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
    document.querySelectorAll('.navbar a, .gallery-navbar a, .post-navbar nav a').forEach(link => {
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

// Personaliza los CTA de servicios y conserva el contexto al llegar a Contacto.
const setupContextualCtas = () => {
    const serviceLabels = {
        'comuniones-bautizos': ['Escríbeme', 'comunión o bautizo'],
        bodas: ['Escríbeme', 'boda'],
        'otras-celebraciones': ['Escríbeme', 'celebración'],
        mascotas: ['Escríbeme', 'sesión con mascota'],
        'carreras-empresa': ['Escríbeme', 'carrera de empresa'],
        'equipos-locales': ['Escríbeme', 'equipo local'],
        gimnasios: ['Escríbeme', 'fotografía para gimnasio'],
        'eventos-deportivos': ['Escríbeme', 'evento deportivo'],
        'fiestas-patronales': ['Escríbeme', 'fiesta patronal'],
        festivales: ['Escríbeme', 'festival'],
        falleros: ['Escríbeme', 'sesión de fallero/a'],
        exterior: ['Escríbeme', 'sesión exterior'],
        artistico: ['Escríbeme', 'sesión artística'],
        infantil: ['Escríbeme', 'sesión infantil'],
        halloween: ['Escríbeme', 'sesión de Halloween'],
        navidad: ['Escríbeme', 'sesión de Navidad'],
        gastronomica: ['Escríbeme', 'fotografía gastronómica']
    };

    Object.entries(serviceLabels).forEach(([id, config]) => {
        const action = document.querySelector(`#${id} .collab-action`);
        if (!action) return;
        action.textContent = config[0];
        action.href = `/contacto/?servicio=${encodeURIComponent(config[1])}`;
    });

    document.querySelectorAll('.shop-card').forEach(card => {
        const action = card.querySelector('.collab-action');
        const title = card.querySelector('h3')?.textContent.trim();
        if (!action || !title) return;
        action.textContent = 'Consultar disponibilidad';
        action.href = `/contacto/?servicio=${encodeURIComponent(title)}`;
        action.classList.add('collab-action--secondary');
    });

    const exhibitionAction = document.querySelector('.exhibition-copy .collab-action');
    if (exhibitionAction) {
        exhibitionAction.textContent = 'Escríbeme';
        exhibitionAction.href = '/contacto/?servicio=exposici%C3%B3n-temporal';
    }

    if (document.body.classList.contains('collabs-page')) {
        const mobileCta = document.createElement('a');
        mobileCta.className = 'mobile-session-cta';
        mobileCta.href = '/contacto/?servicio=sesi%C3%B3n-fotogr%C3%A1fica';
        mobileCta.textContent = 'Consultar sesión';
        document.body.appendChild(mobileCta);

        const updateMobileCta = () => {
            const sessions = document.getElementById('collabs-list');
            const footer = document.querySelector('.site-footer');
            if (!sessions) return;
            const hasStarted = window.scrollY > Math.max(320, sessions.offsetTop - window.innerHeight * 0.45);
            const footerVisible = footer && footer.getBoundingClientRect().top < window.innerHeight;
            mobileCta.classList.toggle('is-visible', hasStarted && !footerVisible);
        };

        window.addEventListener('scroll', updateMobileCta, { passive: true });
        window.addEventListener('resize', updateMobileCta);
        updateMobileCta();
    }

    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get('servicio');
    if (!document.body.classList.contains('contact-page') || !selectedService) return;

    const readableService = selectedService.replace(/-/g, ' ');
    const contactIntro = document.querySelector('.contact-header p');
    if (contactIntro) {
        contactIntro.textContent = `Cuéntame los detalles de tu ${readableService}. Te responderé con opciones y disponibilidad, sin compromiso.`;
    }

    const subject = `Consulta sobre ${readableService}`;
    const message = `Hola, me interesa recibir información sobre ${readableService}.`;
    const emailLink = document.querySelector('.contact-social-link[href^="mailto:"]');
    const whatsappLink = document.querySelector('.contact-social-link[href*="wa.me"]');
    if (emailLink) {
        emailLink.href = `mailto:belenbuuur@outlook.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/34623947223?text=${encodeURIComponent(message)}`;
    }
};

setupContextualCtas();

// Fichas de producto abiertas dentro de la tienda.
const setupShopProductViewer = () => {
    const productCards = document.querySelectorAll('[data-shop-product]');
    if (!productCards.length) return;

    const imagePath = (folder, filename) => {
        const encodedFolder = folder.split('/').map(encodeURIComponent).join('/');
        return `../media/img/tienda/${encodedFolder}/${encodeURIComponent(filename)}`;
    };

    const products = {
        poster: {
            tag: 'Impresiones',
            title: 'Póster A4',
            price: 'Desde 18 €',
            description: 'Póster fotográfico de la colección Belenbuuur, preparado para enmarcar o combinar con otras piezas.',
            details: ['Diseño Londres', 'Formato A4', 'Disponibilidad bajo consulta'],
            images: [
                ['2022 Londres.webp', 'Póster Londres de Belenbuuur']
            ].map(([file, alt]) => ({ src: imagePath('Poster', file), alt }))
        },
        totebags: {
            tag: 'Textil',
            title: 'Totebags',
            price: 'Desde 20 €',
            description: 'Bolsas de tela con fotografías y composiciones originales Belenbuuur para llevar arte fotográfico a diario.',
            details: ['Seis diseños disponibles', 'Impresión fotográfica', 'Disponibilidad bajo consulta'],
            images: [
                '2021 Medusas 1.webp', '2021 Medusas 2.webp', '2026 Rosaleda, Madrid.webp',
                '2026 Michirrines.webp', '2026 Campeonato de Cross.webp', '2026 Fiestas del Cerro.webp'
            ].map((file) => ({
                src: imagePath('Totebags', file),
                alt: `Totebag ${file.replace(/^\d{4}\s*/, '').replace(/\.webp$/i, '')}`
            }))
        },
        tshirts: {
            tag: 'Textil',
            title: 'Camisetas',
            price: 'Desde 20 €',
            description: 'Camisetas con fotografías y composiciones originales Belenbuuur. Una colección pensada para llevar arte fotográfico en una prenda cómoda y cotidiana.',
            details: ['Diseños originales Belenbuuur', 'Impresión en parte delantera y trasera', 'Tallas y disponibilidad bajo consulta'],
            images: [
                ['2026 Flores.webp', 'Camiseta Flores, vista delantera y trasera'],
                ['2026 Barrio y vecinos.webp', 'Camiseta Barrio y vecinos, vista delantera y trasera']
            ].map(([file, alt]) => ({ src: imagePath('Camisetas', file), alt }))
        },
        retro: {
            tag: 'Impresiones',
            title: 'Láminas retro',
            price: 'Desde 3 €',
            description: 'Láminas fotográficas de la colección retro Belenbuuur. Cada diseño se puede comprar de forma individual y también hay packs con precios especiales.',
            details: ['Ocho diseños disponibles', 'Láminas individuales desde 3 €', 'Packs con precios especiales', 'Disponibilidad bajo consulta'],
            images: [
                '2026 La última gota del invierno.webp', '2026 Llévame a mi pueblo.webp',
                '2026 Florecer de primavera.webp', '2026 Pureza.webp', '2026 Barrio y Vecinos.webp',
                '2026 Ilusiones que el alma quería.webp', '2026 Arquibuuur.webp', '2026 El mar, la mar.webp'
            ].map((file) => ({
                src: imagePath('Laminas Retro', file),
                alt: `Lámina retro ${file.replace(/^\d{4}\s*/, '').replace(/\.webp$/i, '')}`
            }))
        },
        polaroid: {
            tag: 'Impresiones',
            title: 'Láminas Polaroid',
            price: 'Desde 3 €',
            description: 'Láminas estilo Polaroid con fotografías seleccionadas del archivo Belenbuuur. Cada lámina se puede comprar de forma individual por 3 € y también hay packs con precios especiales.',
            details: ['Láminas individuales a 3 € cada una', 'Packs con precios especiales', 'Selección de fotografías disponible bajo consulta', 'Un formato ideal para regalar, decorar o coleccionar'],
            images: [
                '(2022) Amanecer en la Malvarrosa.webp', '(2022) Danza.webp', '(2022) Fallera.webp',
                '(2022) Florencia.webp', '(2022) Luna Creciente.webp', '(2022) Mariquita.webp',
                '(2022) Michi trepador.webp', "(2022) Nou d'Octubre.webp", '(2022) Oceanogràfic Valencia.webp',
                '(2022) Playa la Malvarrosa, Valencia.webp', '(2022) Rotterdam.webp', '(2022) Rural.webp',
                '(2022) Torres Blancas, Madrid.webp', '(2023) Laguna de Gallocanta.webp',
                '(2023) Puuurr en la Alcazaba, Almería.webp', '(2023) Semana Santa Marinera de Valencia.webp'
            ].map((file) => ({
                src: imagePath('Láminas Polaroid', file),
                alt: `Lámina Polaroid ${file.replace(/^\(\d{4}\)\s*/, '').replace(/\.webp$/i, '')}`
            }))
        },
        bookmarks: {
            tag: 'Detalle',
            title: 'Marcapáginas ilustrado',
            price: 'Desde 2 €',
            description: 'Marcapáginas con fotografías originales Belenbuuur impresas en un formato pequeño, ligero y pensado para acompañar tus lecturas.',
            details: ['Tres diseños fotográficos disponibles', 'Formato vertical', 'Disponibilidad de cada modelo bajo consulta'],
            images: [
                '(2024) Marcapáginas Ferrari Cheste.webp',
                '(2024) Marcapáginas Gallocanta.webp',
                '(2024) Marcapáginas Peñíscola.webp'
            ].map((file) => ({
                src: imagePath('Marcapáginas', file),
                alt: file.replace(/^\(\d{4}\)\s*/, '').replace(/\.webp$/i, '')
            }))
        }
    };

    const viewer = document.createElement('div');
    viewer.className = 'shop-product-viewer';
    viewer.hidden = true;
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.setAttribute('aria-labelledby', 'shop-product-title');
    viewer.innerHTML = `
        <div class="shop-product-backdrop" data-shop-close></div>
        <article class="shop-product-sheet">
            <button class="shop-product-close" type="button" data-shop-close aria-label="Cerrar ficha de producto">&times;</button>
            <div class="shop-product-gallery">
                <div class="shop-product-main-image"><img src="" alt=""></div>
                <div class="shop-product-thumbnails" aria-label="Imágenes del producto"></div>
            </div>
            <div class="shop-product-copy">
                <p class="shop-product-tag"></p>
                <h2 id="shop-product-title"></h2>
                <p class="shop-product-description"></p>
                <ul class="shop-product-details"></ul>
                <p class="shop-product-price"></p>
                <a class="collab-action shop-product-contact" href="/contacto/">Consultar disponibilidad</a>
            </div>
        </article>`;
    document.body.appendChild(viewer);

    const mainImage = viewer.querySelector('.shop-product-main-image img');
    const thumbnails = viewer.querySelector('.shop-product-thumbnails');
    const closeButton = viewer.querySelector('.shop-product-close');
    let opener = null;

    const selectImage = (image, button) => {
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        mainImage.parentElement.style.backgroundColor = image.background || '';
        thumbnails.querySelectorAll('button').forEach((thumb) => {
            const selected = thumb === button;
            thumb.classList.toggle('is-active', selected);
            thumb.setAttribute('aria-current', selected ? 'true' : 'false');
        });
    };

    const openProduct = (key, card) => {
        const product = products[key];
        if (!product) return;
        opener = card;
        viewer.querySelector('.shop-product-sheet').dataset.product = key;
        viewer.querySelector('.shop-product-tag').textContent = product.tag;
        viewer.querySelector('#shop-product-title').textContent = product.title;
        viewer.querySelector('.shop-product-description').textContent = product.description;
        viewer.querySelector('.shop-product-price').textContent = product.price;
        viewer.querySelector('.shop-product-details').innerHTML = product.details.map((detail) => `<li>${detail}</li>`).join('');
        viewer.querySelector('.shop-product-contact').href = `/contacto/?servicio=${encodeURIComponent(product.title)}`;
        thumbnails.innerHTML = '';
        product.images.forEach((image, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', `Ver imagen ${index + 1} de ${product.images.length}`);
            button.style.backgroundColor = image.background || '';
            button.innerHTML = `<img src="${image.src}" alt="" loading="lazy">`;
            button.addEventListener('click', () => selectImage(image, button));
            thumbnails.appendChild(button);
            if (index === 0) selectImage(image, button);
        });
        viewer.hidden = false;
        document.body.classList.add('shop-product-open');
        closeButton.focus();
    };

    const closeProduct = () => {
        if (viewer.hidden) return;
        viewer.hidden = true;
        document.body.classList.remove('shop-product-open');
        opener?.focus();
    };

    productCards.forEach((card) => {
        card.classList.add('shop-card--interactive');
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', `Ver artículo ${card.querySelector('h3')?.textContent.trim() || ''}`);

        const openFromCard = (event) => {
            if (event.target.closest('a, button')) return;
            openProduct(card.dataset.shopProduct, card);
        };
        card.addEventListener('click', openFromCard);
        card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            openProduct(card.dataset.shopProduct, card);
        });
    });

    viewer.querySelectorAll('[data-shop-close]').forEach((control) => control.addEventListener('click', closeProduct));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeProduct();
    });
};

setupShopProductViewer();

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
