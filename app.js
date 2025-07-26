// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*  Identificadores HTML
    id="amigo"          (Elemento)
    id="listaAmigos"    (ARRAY)
    id="resultado"      (Elemento)
*/

//VARIABLES
let listaAmigosSecretos = [];

//FUNCIONES
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() !== "") {
        listaAmigosSecretos.push(nombre);
        document.getElementById('amigo').value = "";
        mostrarListaAmigos();
    }else{
        alert('Por favor, ingresa un nombre válido.');
    }
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    listaAmigosSecretos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigosSecretos.length < 2) {
        asignarTextoElemento('#resultado', 'Necesitas al menos dos amigos para sortear.');
        return;
    }

    // Selecciona un amigo al azar
    const indiceAmigo = Math.floor(Math.random() * listaAmigosSecretos.length);
    const amigo = listaAmigosSecretos[indiceAmigo];

    // Selecciona un amigo secreto diferente al amigo seleccionado
    let sorteo = listaAmigosSecretos.filter(a => a !== amigo);
    const amigoSecreto = sorteo[Math.floor(Math.random() * sorteo.length)];

    // Muestra solo el resultado de ese amigo
    let lista = document.getElementById('resultado');
    lista.innerHTML = "";
    let listaAmigos = document.createElement('li');
    listaAmigos.textContent = amigoSecreto;
    lista.appendChild(listaAmigos);

    // Reemplaza la lista de amigos mostrados por el amigo secreto sorteado
    document.getElementById('listaAmigos').innerHTML = "";
}
