// =============================
// FyP Soluciones Empresariales
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("FyP Soluciones Empresariales cargado correctamente.");

    // Animación suave al hacer clic en el menú
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            if(destino){
                destino.scrollIntoView({
                    behavior:'smooth'
                });
            }
        });
    });

});