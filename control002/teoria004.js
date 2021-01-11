/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let arrA = ['Hola', 'què', 'tal']

    console.log(arrA.length)
    console.log(arrA[1])
    
    arrA.push('vas')
    arrA.push('pel')
    arrA.push('món')
    
    let strA = arrA.shift()
    let strB = arrA.join('-+')

    console.log(strA)
    console.log(strB)
    console.log(arrA.indexOf('tal'))
    console.log(arrA.length)
    
    let arrB = strB.split('-')
    let strC = arrB.join('')
    console.log(strC)

}

main()