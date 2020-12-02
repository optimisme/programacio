/*
    TODO:

    Fes que la funcio 'mostrar(tipus) filtri
    els continguts i mostri només els del 
    fabricant seleccionat
*/

function mostrar(tipus) {

    let refPlantillaImatge = document.getElementById('plantillaImatge')
    let refPlantillaText = document.getElementById('plantillaText')
    let refDades = document.getElementById('dades')
    let fabricant = getInputRadioValue('fabricant')
    let plantilla = ''
    let html = ''
    let cnt = 0

    if (tipus === 'imatge') {
        plantilla = refPlantillaImatge.innerHTML
    } else {
        plantilla = refPlantillaText.innerHTML
    }

    for (cnt = 0; cnt < dadesConsoles.length; cnt = cnt + 1) {
        if (fabricant == 'Tots' || fabricant === dadesConsoles[cnt].fabricant) {
            html = html + plantilla
                .replace(/{{nom}}/g, dadesConsoles[cnt].nom)
                .replace(/{{data}}/g, dadesConsoles[cnt].data)
                .replace(/{{processador}}/g, dadesConsoles[cnt].processador)
                .replace(/{{fabricant}}/g, dadesConsoles[cnt].fabricant)
                .replace(/{{imatge}}/g, dadesConsoles[cnt].imatge)
        }
    }

    refDades.innerHTML = html
}