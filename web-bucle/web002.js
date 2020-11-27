
/*
    TODO:

    Crea una funció que rebi 4 paràmetres:
    - valor: tipus text
    - color: tipus text
    - repeticions: tipus numèric
    - vertical: tipus boleà

    El valor conté la cadena que s'ha d'escriure
    a la capa amb id='result'

    Aquesta cadena ha de ser del color rebut al
    paràmetre 'color'

    I s'ha de repetir les vegades especificades
    al paràmetre 'repeticions'

    A més, si el paràmetre 'vertical' és 'true'
    entre cada repetició hi ha d'haver un salt
    de línia perquè quedi vertical

*/
function mostra(valor, color, repeticions, vertical) {

    let cnt = 0
    let html = ''
    let refResult = document.getElementById('result')

    for (cnt = 0; cnt < repeticions; cnt = cnt + 1) {
        html = html + valor
        if (vertical) html = html + '<br/>'
    }

    refResult.style.color = color

    refResult.innerHTML = html
}