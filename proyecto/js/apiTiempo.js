window.addEventListener('load', cargarDatos); // Cuando se cargue la página, llama a la función cargarDatos

function cargarDatos() {
    fetch('https://www.el-tiempo.net/api/json/v2/home')
        .then(response => response.json())
        .then(data => {
            // Verifica que los datos se hayan recibido correctamente
            console.log(data);

            // Maneja los datos obtenidos
            mostrarDatos(data);
        })
        .catch(error => console.error(error));
}

function mostrarDatos(data) {
    // Obtén el elemento donde deseas mostrar los datos
    const contenido = document.getElementById('datos-api');

    // Crea un elemento ul para mostrar los datos
    const ul = document.createElement('ul');

    // Recorre los datos y crea un elemento li para cada uno
    data.ciudades.forEach(ciudad => {
        const li = document.createElement('li');
        li.textContent = `${ciudad.name}: ${ciudad.stateSky.description}`;
        ul.appendChild(li);
    });

    // Agrega el elemento ul al contenido de la página
    contenido.appendChild(ul);
}