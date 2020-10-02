const prompt = require('prompt-promise');

/*

Primer executa aquest programa i mira com funciona a partir del codi

Després, modifica aquest programa, per tal que:

- Enlloc de demanar el temps, demani si "Creus que plourà?"
- Arregla les respostes perquè tingui sentit la nova conversa

*/

async function run () {

    let temps = await prompt("- Avui fa bon dia? (Si/No) ")

    if (temps == "Si") {

        console.log("Si, mira quin sol que fà")

    } else {
        
        console.log("No, que no veus que està plovent!")
    }

    let jugar = await prompt("- Creus que podrem jugar a futbol? (Si/No) ")

    if (jugar == "Si" && temps == "Si") {
        
        console.log("Com que fa bon dia i podem jugar, quedem a les 15 al camp")

    } else if (jugar == "Si" && temps == "No") {

        console.log("Vinga, anem a jugar a futbol encara que no faci sol")

    } else if (jugar == "No" && temps == "Si") {

        console.log("Tot i que fa bon dia, no podrem jugar perquè ets un aburrit")

    } else {

        console.log("Doncs res, ni fa bon dia ni jugarem a futbol")
    }

    prompt.end()
}

run()
