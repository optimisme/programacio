/*
    TODO:

    La funció 'mostrar(tipus)', ha de mostrar el llistat
    amb totes les consoles de l'array 'dadesConsoles'
    a la capa 'dades' de la pàgina

    Per fer-ho, ha de fer servir el codi HTML 
    ha de decidir quina plantilla fer servir
    amb el paràmetre 'tipus'

    Quan hagi agafat el text de la plantilla
    correcte amb .innerHTML

    L'ha de fer servir per generar el codi
    final, amb l'ajut d'un bucle que recorri
    l'objecte de dades 'dadesConsoles'

    Finalment es posa el codi HTML resultat d'aquesta 
    substicució a la capa amb id 'dades' de la pàgina

    En resum:

    - Agafar el codi de la plantilla que toca
    - Substituir les cadenes de text que volem canviar
    - Posar el resultat a la capa 'dades'
*/

function mostrar(tipus) {

    let refPlantillaImatge = document.getElementById('plantillaImatge')
    let refPlantillaText = document.getElementById('plantillaText')
    let refDades = document.getElementById('dades')
    let plantilla = ''
    let html = ''
    let cnt = 0

    if (tipus === 'imatge') {
        plantilla = refPlantillaImatge.innerHTML
    } else {
        plantilla = refPlantillaText.innerHTML
    }

    for (cnt = 0; cnt < dadesConsoles.length; cnt = cnt + 1) {
        html = html + plantilla
            .replace(/{{nom}}/g, dadesConsoles[cnt].nom)
            .replace(/{{data}}/g, dadesConsoles[cnt].data)
            .replace(/{{processador}}/g, dadesConsoles[cnt].processador)
            .replace(/{{fabricant}}/g, dadesConsoles[cnt].fabricant)
            .replace(/{{imatge}}/g, dadesConsoles[cnt].imatge)
    }

    refDades.innerHTML = html
}