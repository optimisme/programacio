
function add () {
    let refContador = document.getElementById('contador')
    let valor = parseFloat(refContador.innerHTML)

    valor = valor + 1

    refContador.innerHTML = valor

    switch (valor) {
        case 1: refContador.style.color = 'green'; break
        case 2: refContador.style.color = 'blue'; break
        case 3: refContador.style.color = 'red'; break
        case 4: refContador.style.color = 'orange'; break
        default:
            refContador.style.color = 'black';
    }
}