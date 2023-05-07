const pantalla = document.querySelector(".pantalla"); // Obtiene el elemento con la clase pantalla
const botones = document.querySelectorAll(".btn"); // Obtiene todos los elementos con la clase btn

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent; // Obtiene el texto del elemento que se ha apretado

        if (boton.id === "c") {
            pantalla.textContent = "0"; // Si el elemento apretado tiene el id c, se pone la pantalla a 0
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0"; // Si la pantalla tiene un solo caracter o es ¡Error!, se pone la pantalla a 0
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); // Si no, se borra el último caracter
                return;
            }
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); // Si el elemento apretado tiene el id igual, se evalua la pantalla
            } catch (error) {
                pantalla.textContent = "¡Error!"; // Si hay un error, se muestra ¡Error!
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonApretado; // Si la pantalla es 0 o Error!, se pone el texto del elemento apretado
        } else {
            pantalla.textContent += botonApretado; // Si no, se añade el texto del elemento apretado a la pantalla
        }
    }); // Añade un evento click a cada elemento con la clase btn
}); // Recorre todos los elementos con la clase btn