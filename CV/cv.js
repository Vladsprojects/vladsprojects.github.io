function iniciarGaleria() {
    let indiceActual = 0;
    const imagenes = document.querySelectorAll('.galeria_mia img');
    const totalImagenes = imagenes.length;

    function rotarImagenes() {
        imagenes[indiceActual].style.display = 'none';
        indiceActual = (indiceActual + 1) % totalImagenes;
        imagenes[indiceActual].style.display = 'block';
    }

    setInterval(rotarImagenes, 5000);
}
document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.desplegable');

    secciones.forEach(function(seccion) {
        seccion.addEventListener('click', function() {
            const contenido = this.nextElementSibling;
            const simbolo = this.querySelector('.simbolo');
            if (contenido.style.display === "block") {
                contenido.style.display = "none";
                simbolo.textContent = '▼'; // Cambia a cerrado
            } else {
                contenido.style.display = "block";
                simbolo.textContent = '▲'; // Cambia a abierto
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var desplegables = document.querySelectorAll('.titulo-desplegable');

    desplegables.forEach(function(desplegable) {
        desplegable.addEventListener('click', function() {
            this.classList.toggle('activo');
            var contenido = this.nextElementSibling;
            if (contenido.style.display === "block") {
                contenido.style.display = "none";
                this.querySelector('.simbolo').textContent = '▼';
            } else {
                contenido.style.display = "block";
                this.querySelector('.simbolo').textContent = '▲';
            }
        });
    });
});


