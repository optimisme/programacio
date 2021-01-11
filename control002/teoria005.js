/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let varA = 18
    let varB = 'Bulma'
    let varC = ['menjar','viatjar', 'comprar']
    let varD = { 
        nom: "Goku", edat: 10, 
        aficions: ['menjar', 'dormir', 'lluitar'] }
    let varE = { 
        nom: "Mutenroshi", edat: 90, 
        aficions: ['lluitar', 'menjar', 'revistes'] }

    varB = varD.aficions[2]
    varC[1] = varD.aficions[1]
    varE.edat = varA
    varE.aficions[2] = varD.aficions[0]
    varD.aficions = varE.aficions
    varD.aficions[1] = varC[0]
    varD.edat = (varE.edat - 14) + varB.length
    varD.aficions.shift()
    varD.aficions.push(varC[0])

    console.log(varD.nom)
    console.log(varD.edat)
    console.log(varD.aficions.join(','))

}

main()