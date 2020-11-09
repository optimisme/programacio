const prompt = require('prompt-promise')
const fs = require('fs')
const http = require("http");

/*

Modifica el següent programa segons les instruccions

    Busca les dades d'una sèrie (per exemple 'walking dead'): walking dead
    Quants resultats vols mostrar? 2
    Resultat número 0:
        Puntuació: 32.34042
        Nom: The Walking Dead
        Tipus: Scripted
    Resultat número 1:
        Puntuació: 26.551563
        Nom: The Walking Dead: World Beyond
        Tipus: Scripted
    Mostrant 2 resultats de 10 rebuts

*/

async function cridaJSON (url) {

    return new Promise((resolve, request) => {
        http.get(url, res => {
            let body = ""
            res.setEncoding("utf8")
            res.on("data", data => {
                body += data
            })
            res.on("end", () => {
                try {
                    resolve(JSON.parse(body))
                } catch (e) {
                    console.log(e)
                    resolve({})
                }
            })
        })
    })
}


async function main () {

    let cnt = 0
    let paraules = await prompt("Busca les dades d'una sèrie (per exemple 'walking dead'): ")
    let resultats = parseFloat(await prompt("Quants resultats vols mostrar? "))
    let cerca = paraules.replace(/ /g, '%20')
    let dades = []
    
    dades = await cridaJSON('http://api.tvmaze.com/search/shows?q=' + cerca)

    // TODO: Investiga l'objecte dades que rebs de l'anterior crida,
    //       es tracta d'un array amb resulats de series de televisió
    //       Mostra els resultats entre 0 i el valor de la variable 'resultats'
    //       segons l'exemple de l'exercici
    //       Vigila, posa una condició per tal que no s'intentin dibuixar
    //       resultats, si el valor introduit per l'usuari és superior
    //       al número de resultats rebuts
    //       (en aquest cas, mostra només els rebuts)

    console.log(`Mostrant ${resultats} resultats de ${dades.length} rebuts`)

    prompt.end()
}

main()