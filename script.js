document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Renderización y Animación de Tarjetas de Reseña ---
    const infoPerfil = [
        {
            icono: "📦",
            titulo: "Experto en Logística",
            descripcion: "12 años optimizando inventarios y cadenas de suministro con precisión.Profesional con experiencia en gestión de almacenes y actualmente en formación como Analista y Desarrollador de Software. Combino habilidades prácticas en logística y almacenamiento con conocimientos técnicos en desarrollo de software, lo que me permite tener una visión integral para optimizar procesos empresariales."
        },
        {
            icono: "💻",
            titulo: "Desarrollador ADSO",
            descripcion: "Actualmente cursando Análisis y Desarrollo de Software. Mi enfoque es digitalizar procesos complejos mediante código eficiente y escalable.Busco integrar mis conocimientos en gestión de almacenes con las competencias técnicas en análisis y desarrollo de software para contribuir al crecimiento de organizaciones mediante soluciones tecnológicas innovadoras y eficientes."
        }
    ];

    const contenedorTarjetas = document.getElementById('dynamic-cards-container');

    // Usamos el DOM para crear y renderizar
    infoPerfil.forEach((item, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card'; // Comienza oculta por CSS
        
        tarjeta.innerHTML = `
            <div class="icon">${item.icono}</div>
            <h3>${item.titulo}</h3>
            <p>${item.descripcion}</p>
        `;
        
        contenedorTarjetas.appendChild(tarjeta);

        // --- ANIMACIÓN DE REVELADO SECUENCIAL ---
        // Aplicamos la clase .reveal con un retraso basado en el índice
        setTimeout(() => {
            tarjeta.classList.add('reveal');
        }, 300 * (index + 1)); // Retraso de 300ms entre cada tarjeta
    });


    // --- 2. Animaciones de Entrada (Hero Section) ---
    const heroText = document.getElementById('hero-text-container');
    const heroImg = document.getElementById('hero-img-container');

    // Pequeño timeout para asegurar que el navegador cargó todo
    setTimeout(() => {
        heroText.classList.add('show-up');
        heroImg.classList.add('show-up');
    }, 150);


    // --- 3. Animación Pulso del Botón ---
    const btnContacto = document.getElementById('btn-contact');
    
    // Activa un pulso sutil cada 4 segundos
    setInterval(() => {
        btnContacto.classList.add('btn-pulse');
        // Quita la clase después de que la animación termine (2s)
        setTimeout(() => {
            btnContacto.classList.remove('btn-pulse');
        }, 2000);
    }, 4000);


    // --- 4. Interactividad del Header y Foto (Mantenidos) ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    });

    const fotoPerfil = document.getElementById('main-profile-img');
    fotoPerfil.addEventListener('mouseenter', () => {
        fotoPerfil.style.transform = 'scale(1.05) rotate(1deg)';
    });
    fotoPerfil.addEventListener('mouseleave', () => {
        fotoPerfil.style.transform = 'scale(1) rotate(0deg)';
    });

    console.log("Portafolio Premium de Bileyner cargado con animaciones avanzadas.");
});