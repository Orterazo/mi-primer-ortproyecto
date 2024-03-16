
    // Lista de imágenes para rotar
    const imagenes = [
        './f2.jpg',
        './f3.jpg',
        
    ];

    let indiceActual = 0; // Comienza por la primera imagen

    // Función para cambiar la imagen
    function cambiarImagen() {
        const elementoImagen = document.getElementById('imagen-destacada');
        elementoImagen.style.opacity = 0; // Hace la imagen actual invisible suavemente
    
        // Espera a que termine la transición de desvanecimiento antes de cambiar la imagen
        setTimeout(() => {
            elementoImagen.src = imagenes[indiceActual];
            indiceActual = (indiceActual + 1) % imagenes.length; // Avanza al siguiente índice o vuelve al inicio
            elementoImagen.style.opacity = 1; // Hace la nueva imagen visible suavemente
        }, 1000); // Corresponde al tiempo de duración de la transición de opacidad
    }
    

    // Establecer el intervalo para cambiar la imagen cada 5 segundos
    setInterval(cambiarImagen, 3000);

    // Asegúrate de llamar a cambiarImagen inicialmente para establecer la primera imagen
    window.onload = cambiarImagen;

