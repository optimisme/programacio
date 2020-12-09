/*
    TODO:

    Fes que la funcio 'mostrar()' 
    sense paràmetres que filtri
    els continguts segons la
    selecció del formulari
*/

function mostrar() {

    let refPlantillaImatge = document.getElementById('plantillaImatge')
    let refPlantillaText = document.getElementById('plantillaText')
    let refDades = document.getElementById('dades')
    let fabricant = getInputRadioValue('fabricant')
    let color = getInputRadioValue('color')
    let venudes = getInputRadioValue('venudes')
    let tipus = getInputRadioValue('tipus')
    let plantilla = ''
    let html = ''
    let cnt = 0

    if (tipus === 'imatge') {
        plantilla = refPlantillaImatge.innerHTML
    } else {
        plantilla = refPlantillaText.innerHTML
    }

    for (cnt = 0; cnt < dadesConsoles.length; cnt = cnt + 1) {
        if ((fabricant == 'Tots' || fabricant == dadesConsoles[cnt].fabricant)
            && (color == 'Tots' || color == dadesConsoles[cnt].color)
            && (venudes == 'Tots' || 
                (venudes == 'fins10M' && dadesConsoles[cnt].venudes < 10000000)  ||
                (venudes == 'fins50M' && dadesConsoles[cnt].venudes >= 10000000 && dadesConsoles[cnt].venudes < 50000000)  ||
                (venudes == 'fins100M' && dadesConsoles[cnt].venudes >= 50000000 && dadesConsoles[cnt].venudes < 100000000)  ||
                (venudes == 'mes100M' && dadesConsoles[cnt].venudes >= 100000000)
            )) {
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