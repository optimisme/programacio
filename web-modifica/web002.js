
/*
    TODO:

    Crea una funció que rebi 2 paràmetres:

    - 'vella': Paraula a modificar
    - 'nova': Paraula per la que es modifica

    Aquesta funció canviarà el text de la capa
    'result' de tal manera que on hi ha 
    la paraula 'vella' hi posarà la paraula 'nova'

*/
function canvia (vella, nova) {

    let refResult = document.getElementById('result')
    refResult.innerHTML = refResult.innerHTML.replace(vella, nova);
}