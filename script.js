const correoEnlace = document.getElementById("correo");
    const modal = document.getElementById("modal-copiado");

    // Función para copiar al portapapeles y mostrar el modal
    correoEnlace.addEventListener("click", () => {
        // Copiar el correo al portapapeles
        const correo = "jrodricon25@gmail.com";
        navigator.clipboard.writeText(correo).then(() => {
            // Mostrar el modal
            modal.classList.add("visible");

            // Ocultar el modal después de 3 segundos
            setTimeout(() => {
                modal.classList.remove("visible");
            }, 3000);
        });
    });