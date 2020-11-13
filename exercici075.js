const prompt = require('prompt-promise')
const fs = require('fs')

let joc = {
  guanyat: false,
  perdut: false,
  pantalla: 'bosc'
}

/*

Modifica el següent programa segons les instruccions

*/

/* TODO:

    Crea una funció 'executaComanda' que rebrà el paràmetre 'comanda'
    - El paràmetre 'comanda' és la comanda introduida per l'usuari en el bucle 'while' del 'main'

    Dins d'aquesta funció, fes les següents condicions:
    
    - Si la pantalla és 'bosc' i la comanda 'ajuda' escriu: 
      'Ets al bosc, pots demanar: ajuda, mirar, caminar, escalar, cridar'
    
    - Si la pantalla és 'vall' i la comanda 'ajuda' escriu: 
      'Ets a la vall, pots demanar: ajuda, mirar, tornar, escalar, cridar'
    
    - Si la pantalla és 'muntanya' i la comanda 'ajuda' escriu: 
      'Ets a la muntanya, pots demanar: ajuda, mirar, caminar, cridar'

    - Si la pantalla és 'bosc' i la comanda 'mirar' escriu: 
      'Des del bosc, pots veure una vall, una muntanya i el cel'
    
    - Si la pantalla és 'vall' i la comanda 'mirar' escriu: 
      'Des de la vall, pots veure un bosc, una muntanya i el cel'
    
    - Si la pantalla és 'muntanya' i la comanda 'mirar' escriu: 
      'Des de la muntanya, pots veure una vall, un bosc, una ciutat i el cel'
    
    - Si la pantalla és 'bosc' i la comanda 'caminar' escriu: 
      'Camines a la vall'
      i posa el valor 'vall' a la variable 'pantalla' de l'objecte 'joc'
    
    - Si la pantalla és 'vall' i la comanda 'tornar' escriu: 
      'Tornes al bosc, estàs en un bosc perdut i és fosc'
      i posa el valor 'bosc' a la variable 'pantalla' de l'objecte 'joc'
    
    - Si la pantalla és 'muntanya' i la comanda 'caminar' escriu: 
      'Camines fins a la ciutat'
      i posa la variable 'guanyat' de l'objecte 'joc' a certa, 
      per indicar que s'ha guanyat la partida
    
    - Si la comanda és 'escalar' escriu:
      'Pujes a dalt de la muntanya'
      i posa el valor 'muntanya' a la variable 'pantalla' de l'objecte 'joc'

    - Si la comanda és 'cridar' escriu:
      `Els llops senten que crides, venen i se't menjen`
      i posa la variable 'perdut' de l'objecte 'joc' a certa, 
      per indicar que s'ha perdut la partida
    
    - En qualsevol altre cas escriu:
      'No entenc la comanda'
*/

async function main () {

  let comanda = ''
  let jugar = true

  console.log('Hola viatjer,')
  console.log('Estàs en un bosc perdut i és fosc ...')
  console.log('Escriu \x1b[32m"ajuda"\x1b[0m si no saps què pots fer')

  while (jugar) {
      // Demana una comanda a l'usuari i guarda el valor a la variable comanda
      comanda = await prompt('\x1b[2mQuè vols fer? \x1b[0m')

      // Crida a la funció 'executaComanda' amb els paràmetres necessaris
      executaComanda(comanda)

      // Si el joc està 'guanyat' o 'perdut' posa la variable jugar a false
      // per sortir del bucle i acabar la partida
      if (joc.guanyat || joc.perdut) {
          jugar = false
      }
  }

  // Si s'ha guanyat el joc, escriure: '\x1b[32mHas sobreviscut, gracies per jugar!\x1b[0m\n'
  // Si s'ha perdut, esriure: '\x1b[31mGame over, loser\x1b[0m\n'
  if (joc.guanyat) {
      console.log('\x1b[32mHas sobreviscut, gracies per jugar!\x1b[0m\n')
  } else {
      console.log('\x1b[31mGame over, loser\x1b[0m\n')
  }

  prompt.end()
}

main()