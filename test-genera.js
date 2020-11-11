const fs = require('fs')
const spawn = require('child_process').spawn;

let carpetaSolucions = './solucions/'
let crides = [
    { "num": "001", "inputs": [], "args": [] },
    { "num": "002", "inputs": [], "args": [] },
    { "num": "003", "inputs": [], "args": [] },
    { "num": "004", "inputs": [ "500", "50" ], "args": [] },
    { "num": "004", "inputs": [ "200", "25" ], "args": [] },
    { "num": "005", "inputs": [], "args": [] },
    { "num": "006", "inputs": [ "blau" ], "args": [] },
    { "num": "006", "inputs": [ "taronja" ], "args": [] },
    { "num": "007", "inputs": [ "25", "50" ], "args": [] },
    { "num": "007", "inputs": [ "2", "5" ], "args": [] },
    { "num": "008", "inputs": [ "voltregà" ], "args": [] },
    { "num": "008", "inputs": [ "manlleu" ], "args": [] },
    { "num": "009", "inputs": [ "25" ], "args": [] },
    { "num": "009", "inputs": [ "50" ], "args": [] },
    { "num": "009", "inputs": [ "75" ], "args": [] },
    { "num": "010", "inputs": [ "50", "25" ], "args": [] },
    { "num": "010", "inputs": [ "25", "50" ], "args": [] },
    { "num": "010", "inputs": [ "40", "40" ], "args": [] },
    { "num": "011", "inputs": [ "verd" ], "args": [] },
    { "num": "011", "inputs": [ "blau" ], "args": [] },
    { "num": "011", "inputs": [ "vermell" ], "args": [] },
    { "num": "011", "inputs": [ "groc" ], "args": [] },
    { "num": "011", "inputs": [ "lila" ], "args": [] },
    { "num": "012", "inputs": [ "verd" ], "args": [] },
    { "num": "012", "inputs": [ "blau" ], "args": [] },
    { "num": "012", "inputs": [ "vermell" ], "args": [] },
    { "num": "012", "inputs": [ "groc" ], "args": [] },
    { "num": "012", "inputs": [ "lila" ], "args": [] },
    { "num": "013", "inputs": [ "9" ], "args": [] },
    { "num": "013", "inputs": [ "10" ], "args": [] },
    { "num": "013", "inputs": [ "11" ], "args": [] },
    { "num": "013", "inputs": [ "17" ], "args": [] },
    { "num": "013", "inputs": [ "18" ], "args": [] },
    { "num": "013", "inputs": [ "19" ], "args": [] },
    { "num": "013", "inputs": [ "29" ], "args": [] },
    { "num": "013", "inputs": [ "30" ], "args": [] },
    { "num": "013", "inputs": [ "31" ], "args": [] },
    { "num": "013", "inputs": [ "39" ], "args": [] },
    { "num": "013", "inputs": [ "40" ], "args": [] },
    { "num": "013", "inputs": [ "41" ], "args": [] },
    { "num": "013", "inputs": [ "59" ], "args": [] },
    { "num": "013", "inputs": [ "60" ], "args": [] },
    { "num": "013", "inputs": [ "61" ], "args": [] },
    { "num": "014", "inputs": [ "musica" ], "args": [] },
    { "num": "014", "inputs": [ "esports" ], "args": [] },
    { "num": "014", "inputs": [ "amics" ], "args": [] },
    { "num": "014", "inputs": [ "menjar" ], "args": [] },
    { "num": "014", "inputs": [ "viatjar" ], "args": [] },
    { "num": "014", "inputs": [ "saltar" ], "args": [] },
    { "num": "015", "inputs": [ "gat", "corda" ], "args": [] },
    { "num": "015", "inputs": [ "gat", "pilota" ], "args": [] },
    { "num": "015", "inputs": [ "gos", "corda" ], "args": [] },
    { "num": "015", "inputs": [ "gos", "pilota" ], "args": [] },
    { "num": "016", "inputs": [ "pasta", "fruita" ], "args": [] },
    { "num": "016", "inputs": [ "arròs", "fruita" ], "args": [] },
    { "num": "016", "inputs": [ "sopa", "fruita" ], "args": [] },
    { "num": "016", "inputs": [ "carn", "gelat" ], "args": [] },
    { "num": "016", "inputs": [ "carn", "cafè" ], "args": [] },
    { "num": "016", "inputs": [ "arròs", "yogurt" ], "args": [] },
    { "num": "016", "inputs": [ "arròs", "flam" ], "args": [] },
    { "num": "017", "inputs": [ "5" ], "args": [] },
    { "num": "017", "inputs": [ "9" ], "args": [] },
    { "num": "018", "inputs": [ "5" ], "args": [] },
    { "num": "018", "inputs": [ "8" ], "args": [] },
    { "num": "019", "inputs": [], "args": [] },
    { "num": "020", "inputs": [], "args": [] },
    { "num": "021", "inputs": [], "args": [] },
    { "num": "022", "inputs": [], "args": [] },
    { "num": "023", "inputs": [ "2" ], "args": [] },
    { "num": "023", "inputs": [ "5" ], "args": [] },
    { "num": "024", "inputs": [ "8" ], "args": [] },
    { "num": "024", "inputs": [ "16" ], "args": [] },
    { "num": "025", "inputs": [ "7" ], "args": [] },
    { "num": "025", "inputs": [ "42" ], "args": [] },
    { "num": "026", "inputs": [ "gat gos guineu lleó ovella" ], "args": [] },
    { "num": "026", "inputs": [ "conill roselló" ], "args": [] },
    { "num": "027", "inputs": [], "args": [] },
    { "num": "028", "inputs": [], "args": [] },
    { "num": "029", "inputs": [], "args": [] },
    { "num": "030", "inputs": [], "args": [] },
    { "num": "031", "inputs": [], "args": [] },
    { "num": "032", "inputs": [], "args": [] },
    { "num": "033", "inputs": [], "args": [] },
    { "num": "034", "inputs": [], "args": [] },
    { "num": "035", "inputs": [], "args": [] },
    { "num": "036", "inputs": [], "args": [] },
    { "num": "037", "inputs": [], "args": [] },
    { "num": "038", "inputs": [ "22 25 12 181 2 3 4 5 6 7 8 9" ], "args": [] },
    { "num": "039", "inputs": [ "1 2 3 4 5 6 7 8 9" ], "args": [] },
    { "num": "039", "inputs": [ "22 25 12 18 17 15 44" ], "args": [] },
    { "num": "040", "inputs": [ "1", "8" ], "args": [] },
    { "num": "040", "inputs": [ "4", "6" ], "args": [] },
    { "num": "041", "inputs": [ "4", "22" ], "args": [] },
    { "num": "041", "inputs": [ "17", "37" ], "args": [] },
    { "num": "042", "inputs": [ "22 25 12" ], "args": [] },
    { "num": "042", "inputs": [ "12 18 17 15 44" ], "args": [] },
    { "num": "043", "inputs": [ "22 25 12 7 5 6" ], "args": [] },
    { "num": "044", "inputs": [], "args": [] },
    { "num": "045", "inputs": [], "args": [] },
    { "num": "046", "inputs": [], "args": [] },
    { "num": "047", "inputs": [], "args": [] },
    { "num": "048", "inputs": [ "Albert", "verd", "41", "181", "programació musica passejar" ], "args": [] },
    { "num": "049", "inputs": [], "args": [] },
    { "num": "050", "inputs": [ "La Marta i en Manel tornen de l'hort amb una eixada, alls i patates" ], "args": [] },
    { "num": "051", "inputs": [], "args": [] },
    { "num": "052", "inputs": [], "args": [] },
    { "num": "053", "inputs": [ "verd" ], "args": [] },
    { "num": "053", "inputs": [ "groc" ], "args": [] },
    { "num": "054", "inputs": [ "3", "5" ], "args": [] },
    { "num": "054", "inputs": [ "11", "4" ], "args": [] },
    { "num": "055", "inputs": [ "11", "4", "16" ], "args": [] },
    { "num": "055", "inputs": [ "8", "200", "25" ], "args": [] },
    { "num": "056", "inputs": [ "6", "7" ], "args": [] },
    { "num": "056", "inputs": [ "11", "19" ], "args": [] },
    { "num": "057", "inputs": [ "verd", "blau" ], "args": [] },
    { "num": "057", "inputs": [ "groc", "vermell" ], "args": [] },
    { "num": "057", "inputs": [ "blanc", "taronja" ], "args": [] },
    { "num": "058", "inputs": [ "6", "7" ], "args": [] },
    { "num": "058", "inputs": [ "11", "19" ], "args": [] },
    { "num": "058", "inputs": [ "5", "5" ], "args": [] },
    { "num": "059", "inputs": [ "1", "2", "3" ], "args": [] },
    { "num": "059", "inputs": [ "1", "3", "2" ], "args": [] },
    { "num": "059", "inputs": [ "2", "1", "3" ], "args": [] },
    { "num": "059", "inputs": [ "2", "3", "2" ], "args": [] },
    { "num": "059", "inputs": [ "3", "1", "2" ], "args": [] },
    { "num": "059", "inputs": [ "3", "2", "1" ], "args": [] },
    { "num": "059", "inputs": [ "3", "1", "1" ], "args": [] },
    { "num": "059", "inputs": [ "2", "2", "1" ], "args": [] },
    { "num": "059", "inputs": [ "3", "1", "3" ], "args": [] },
    { "num": "059", "inputs": [ "1", "2", "1" ], "args": [] },
    { "num": "060", "inputs": [ "34" ], "args": [] },
    { "num": "060", "inputs": [ "35" ], "args": [] },
    { "num": "060", "inputs": [ "36" ], "args": [] },
    { "num": "060", "inputs": [ "49" ], "args": [] },
    { "num": "060", "inputs": [ "50" ], "args": [] },
    { "num": "060", "inputs": [ "51" ], "args": [] },
    { "num": "061", "inputs": [], "args": [] },
    { "num": "062", "inputs": [], "args": [] },
    { "num": "063", "inputs": [], "args": [] },
    { "num": "064", "inputs": [ "exercici064.txt" ], "args": [] },
    { "num": "065", "inputs": [ "En Tintin va anar al Tibet" ], "args": [] },
    { "num": "065", "inputs": [ "L'Asterix va anar a roma" ], "args": [] },
    { "num": "066", "inputs": [ "En Tintin va anar al Tibet", "i va passar molt fred" ], "args": [] },
    { "num": "066", "inputs": [ "L'Asterix va anar a roma", "i es va enfadar amb els funcionaris" ], "args": [] },
    { "num": "067", "inputs": [], "args": [] },
    { "num": "068", "inputs": [], "args": [] },
    { "num": "069", "inputs": [ "king", "3" ], "args": [] }
]

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
        let child = null
        let out = ''
        let cntInput = 0
        child = spawn(`node ${file}`, args, { cwd: carpetaSolucions, shell: true })
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

    
    let out = await runNode(`exercici${num}.js`, inputs)

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