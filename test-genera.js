const fs = require('fs')
const spawn = require('child_process').spawn;

let crides = [
    { "num": "001", "inputs": [], "args": null },
    { "num": "002", "inputs": [], "args": null },
    { "num": "003", "inputs": [], "args": null },
    { "num": "004", "inputs": [ "500", "50" ], "args": null },
    { "num": "004", "inputs": [ "200", "25" ], "args": null },
    { "num": "005", "inputs": [], "args": null },
    { "num": "006", "inputs": [ "blau" ], "args": null },
    { "num": "006", "inputs": [ "taronja" ], "args": null },
    { "num": "007", "inputs": [ "25", "50" ], "args": null },
    { "num": "007", "inputs": [ "2", "5" ], "args": null },
    { "num": "008", "inputs": [ "voltregà" ], "args": null },
    { "num": "008", "inputs": [ "manlleu" ], "args": null },
    { "num": "009", "inputs": [ "25" ], "args": null },
    { "num": "009", "inputs": [ "50" ], "args": null },
    { "num": "009", "inputs": [ "75" ], "args": null },
    { "num": "010", "inputs": [ "50", "25" ], "args": null },
    { "num": "010", "inputs": [ "25", "50" ], "args": null },
    { "num": "010", "inputs": [ "40", "40" ], "args": null },
    { "num": "011", "inputs": [ "verd" ], "args": null },
    { "num": "011", "inputs": [ "blau" ], "args": null },
    { "num": "011", "inputs": [ "vermell" ], "args": null },
    { "num": "011", "inputs": [ "groc" ], "args": null },
    { "num": "011", "inputs": [ "lila" ], "args": null },
    { "num": "012", "inputs": [ "verd" ], "args": null },
    { "num": "012", "inputs": [ "blau" ], "args": null },
    { "num": "012", "inputs": [ "vermell" ], "args": null },
    { "num": "012", "inputs": [ "groc" ], "args": null },
    { "num": "012", "inputs": [ "lila" ], "args": null },
    { "num": "013", "inputs": [ "9" ], "args": null },
    { "num": "013", "inputs": [ "10" ], "args": null },
    { "num": "013", "inputs": [ "11" ], "args": null },
    { "num": "013", "inputs": [ "17" ], "args": null },
    { "num": "013", "inputs": [ "18" ], "args": null },
    { "num": "013", "inputs": [ "19" ], "args": null },
    { "num": "013", "inputs": [ "29" ], "args": null },
    { "num": "013", "inputs": [ "30" ], "args": null },
    { "num": "013", "inputs": [ "31" ], "args": null },
    { "num": "013", "inputs": [ "39" ], "args": null },
    { "num": "013", "inputs": [ "40" ], "args": null },
    { "num": "013", "inputs": [ "41" ], "args": null },
    { "num": "013", "inputs": [ "59" ], "args": null },
    { "num": "013", "inputs": [ "60" ], "args": null },
    { "num": "013", "inputs": [ "61" ], "args": null },
    { "num": "014", "inputs": [ "musica" ], "args": null },
    { "num": "014", "inputs": [ "esports" ], "args": null },
    { "num": "014", "inputs": [ "amics" ], "args": null },
    { "num": "014", "inputs": [ "menjar" ], "args": null },
    { "num": "014", "inputs": [ "viatjar" ], "args": null },
    { "num": "014", "inputs": [ "saltar" ], "args": null },
    { "num": "015", "inputs": [ "gat", "corda" ], "args": null },
    { "num": "015", "inputs": [ "gat", "pilota" ], "args": null },
    { "num": "015", "inputs": [ "gos", "corda" ], "args": null },
    { "num": "015", "inputs": [ "gos", "pilota" ], "args": null },
    { "num": "016", "inputs": [ "pasta", "fruita" ], "args": null },
    { "num": "016", "inputs": [ "arròs", "fruita" ], "args": null },
    { "num": "016", "inputs": [ "sopa", "fruita" ], "args": null },
    { "num": "016", "inputs": [ "carn", "gelat" ], "args": null },
    { "num": "016", "inputs": [ "carn", "cafè" ], "args": null },
    { "num": "016", "inputs": [ "arròs", "yogurt" ], "args": null },
    { "num": "016", "inputs": [ "arròs", "flam" ], "args": null },
    { "num": "017", "inputs": [ "5" ], "args": null },
    { "num": "017", "inputs": [ "9" ], "args": null },
    { "num": "018", "inputs": [ "5" ], "args": null },
    { "num": "018", "inputs": [ "8" ], "args": null },
    { "num": "019", "inputs": [], "args": null },
    { "num": "020", "inputs": [], "args": null },
    { "num": "021", "inputs": [], "args": null },
    { "num": "022", "inputs": [], "args": null },
    { "num": "023", "inputs": [ "2" ], "args": null },
    { "num": "023", "inputs": [ "5" ], "args": null },
    { "num": "024", "inputs": [ "8" ], "args": null },
    { "num": "024", "inputs": [ "16" ], "args": null },
    { "num": "025", "inputs": [ "7" ], "args": null },
    { "num": "025", "inputs": [ "42" ], "args": null },
    { "num": "026", "inputs": [ "gat gos guineu lleó ovella" ], "args": null },
    { "num": "026", "inputs": [ "conill roselló" ], "args": null },
    { "num": "027", "inputs": [], "args": null },
    { "num": "028", "inputs": [], "args": null },
    { "num": "029", "inputs": [], "args": null },
    { "num": "030", "inputs": [], "args": null },
    { "num": "031", "inputs": [], "args": null },
    { "num": "032", "inputs": [], "args": null },
    { "num": "033", "inputs": [], "args": null },
    { "num": "034", "inputs": [], "args": null },
    { "num": "035", "inputs": [], "args": null },
    { "num": "036", "inputs": [], "args": null },
    { "num": "037", "inputs": [], "args": null },
    { "num": "038", "inputs": [ "22 25 12 181 2 3 4 5 6 7 8 9" ], "args": null },
    { "num": "039", "inputs": [ "1 2 3 4 5 6 7 8 9" ], "args": null },
    { "num": "039", "inputs": [ "22 25 12 18 17 15 44" ], "args": null },
    { "num": "040", "inputs": [ "1", "8" ], "args": null },
    { "num": "040", "inputs": [ "4", "6" ], "args": null },
    { "num": "041", "inputs": [ "4", "22" ], "args": null },
    { "num": "041", "inputs": [ "17", "37" ], "args": null },
    { "num": "042", "inputs": [ "22 25 12" ], "args": null },
    { "num": "042", "inputs": [ "12 18 17 15 44" ], "args": null },
    { "num": "043", "inputs": [ "22 25 12 7 5 6" ], "args": null },
    { "num": "044", "inputs": [], "args": null },
    { "num": "045", "inputs": [], "args": null },
    { "num": "046", "inputs": [], "args": null },
    { "num": "047", "inputs": [], "args": null },
    { "num": "048", "inputs": [ "Albert", "verd", "41", "181", "programació musica passejar" ], "args": null },
    { "num": "049", "inputs": [], "args": null },
    { "num": "050", "inputs": [ "La Marta i en Manel tornen de l'hort amb una eixada, alls i patates" ], "args": null },
    { "num": "051", "inputs": [], "args": null },
    { "num": "052", "inputs": [], "args": null },
    { "num": "053", "inputs": [ "verd" ], "args": null },
    { "num": "053", "inputs": [ "groc" ], "args": null },
    { "num": "054", "inputs": [ "3", "5" ], "args": null },
    { "num": "054", "inputs": [ "11", "4" ], "args": null },
    { "num": "055", "inputs": [ "11", "4", "16" ], "args": null },
    { "num": "055", "inputs": [ "8", "200", "25" ], "args": null },
    { "num": "056", "inputs": [ "6", "7" ], "args": null },
    { "num": "056", "inputs": [ "11", "19" ], "args": null },
    { "num": "057", "inputs": [ "verd", "blau" ], "args": null },
    { "num": "057", "inputs": [ "groc", "vermell" ], "args": null },
    { "num": "057", "inputs": [ "blanc", "taronja" ], "args": null },
    { "num": "058", "inputs": [ "6", "7" ], "args": null },
    { "num": "058", "inputs": [ "11", "19" ], "args": null },
    { "num": "058", "inputs": [ "5", "5" ], "args": null },
    { "num": "059", "inputs": [ "1", "2", "3" ], "args": null },
    { "num": "059", "inputs": [ "1", "3", "2" ], "args": null },
    { "num": "059", "inputs": [ "2", "1", "3" ], "args": null },
    { "num": "059", "inputs": [ "2", "3", "2" ], "args": null },
    { "num": "059", "inputs": [ "3", "1", "2" ], "args": null },
    { "num": "059", "inputs": [ "3", "2", "1" ], "args": null },
    { "num": "059", "inputs": [ "3", "1", "1" ], "args": null },
    { "num": "059", "inputs": [ "2", "2", "1" ], "args": null },
    { "num": "059", "inputs": [ "3", "1", "3" ], "args": null },
    { "num": "059", "inputs": [ "1", "2", "1" ], "args": null },
    { "num": "060", "inputs": [ "34" ], "args": null },
    { "num": "060", "inputs": [ "35" ], "args": null },
    { "num": "060", "inputs": [ "36" ], "args": null },
    { "num": "060", "inputs": [ "49" ], "args": null },
    { "num": "060", "inputs": [ "50" ], "args": null },
    { "num": "060", "inputs": [ "51" ], "args": null },
    { "num": "061", "inputs": [], "args": null },
    { "num": "062", "inputs": [], "args": null },
    { "num": "063", "inputs": [], "args": null },
    { "num": "064", "inputs": [ "exercici064.txt" ], "args": null },
    { "num": "069", "inputs": [ "king", "3" ], "args": null }
]

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
        let child = null
        let out = ''
        let cntInput = 0
        child = spawn('node ' + file, args, { shell: true })
        child.stdin.setEncoding('utf-8')
        child.stdout.on('data', (data) => {
            if (cntInput < inputs.length) {
                child.stdin.write(inputs[cntInput])
                out = out + data + inputs[cntInput] + '\n'
                cntInput = cntInput + 1
            } else {
                out = out + data
            }
       })
       child.stdout.on('close', () => {
            resolve(out)
       })
    })
}

async function comprova (num, inputs, args) {

    let carpetaSolucions = './solucions/'
    let out = await runNode(`${carpetaSolucions}exercici${num}.js`, inputs)

    console.log(num, inputs)

    return {
        num: num,
        inputs: inputs,
        args: args,
        out: out
    }
}

async function main () {

    let cnt = 0
    let arrRst = []

    for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {
        arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args))
    }

    // await fs.promises.writeFile('test-validacions.json', JSON.stringify(arrRst, null, 4), { encoding: 'utf8' })
}

main()