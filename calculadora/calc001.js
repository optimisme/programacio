

function afegeix(valor) {
    let refDisplay = document.getElementById('display')
    refDisplay.value = refDisplay.value + valor
}

function borrar () {
    let refDisplay = document.getElementById('display')
    refDisplay.value = ''
}

function calcular () {
    let refDisplay = document.getElementById('display')
    try {
        refDisplay.value = eval(refDisplay.value)
    } catch (error) {
        refDisplay.value = 'Error'
    }  
}