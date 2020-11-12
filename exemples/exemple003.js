
function suma (a, b) {
    return a + b
}

function concatena (a, b, c) {
    return a + ' ' + b + ' ' + c
}


let resultat0 = suma(4, 5)
let resultat1 = concatena(3, 4, 5)

console.log("El resultat de cridar a la funció suma és: ", resultat0)
console.log("El resultat de cridar a la funció concatena és: ", resultat1)

resultat0 = suma("Un camió", "vermell") 
resultat1 = concatena("Un camió", "vermell", "molt gran")

console.log("El resultat de cridar a la funció suma és: ", resultat0)
console.log("El resultat de cridar a la funció concatena és: ", resultat1)