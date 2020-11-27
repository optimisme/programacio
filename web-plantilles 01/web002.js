/*
    TODO:

    La funció 'mostrar()', ha de mostrar un llistat
    amb totes les consoles de l'array 'dadesConsoles'
    a la capa 'dades' de la pàgina

    Per fer-ho, ha de fer servir el codi HTML 
    de la plantilla amb id 'plantilla'

    Per agafar el codi HTML de la plantilla,
    fa falta una referència a la plantilla i agafa 
    el codi amb 'refPlantilla.innerHTML'

    Un cop tenim el codi de la plantilla, 
    com que és un text, es pot substituir 
    les paraules entre {{ }} per la informació
    que volem mostrar amb la funció 'replace'

    Finalment es posa el codi HTML resultat d'aquesta 
    substicució a la capa amb id 'dades' de la pàgina

    En resum:

    - Agafar el codi de la plantilla
    - Substituir les cadenes de text que volem canviar
    - Posar el resultat a la capa 'dades'

    Fes que enlloc de mostrar només la primera consola
    de la llista, les mostri totes
    
    Fes-ho amb un bucle 'for' per cada 
    element de 'dadesConsoles'
*/

function mostrar() {

    let refPlantilla = document.getElementById('plantilla')
    let refDades = document.getElementById('dades')
    let html = ''
    let cnt = 0

    for (cnt = 0; cnt < dadesConsoles.length; cnt = cnt + 1) {
        html = html + refPlantilla.innerHTML
            .replace(/{{nom}}/g, dadesConsoles[cnt].nom)
            .replace(/{{data}}/g, dadesConsoles[cnt].data)
            .replace(/{{processador}}/g, dadesConsoles[cnt].processador)
            .replace(/{{fabricant}}/g, dadesConsoles[cnt].fabricant)
            .replace(/{{imatge}}/g, dadesConsoles[cnt].imatge)
    }

    refDades.innerHTML = html
}