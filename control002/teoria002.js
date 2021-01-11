/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let obj = {
        nom: "Goku",
        edat: 10,
        aficions: ['menjar', 'dormir']
    }

    obj.edat = 12

    console.log(obj.nom)
    console.log(obj.edat)
    console.log(obj.aficions[0])
    console.log(obj.aficions[1])
    console.log(obj.aficions.length)
}

main()