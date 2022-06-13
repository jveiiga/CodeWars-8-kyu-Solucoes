//usando loop for 
function powersOfTwo(num){
   
    let arr = []

    for( let i = 0; i <= num; i++ ) {

        arr[i] = 2 ** i 

    }

    return arr

}
console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))
//usando loop for e fazendo o push com metodo Math.pow
function powerOfTwo(num){
   
    let arr = []

    for( let i = 0; i <= num; i++ ) {

        arr.push(Math.pow(2, i))

    }

    return arr

}
console.log(powerOfTwo(0))
console.log(powerOfTwo(1))
console.log(powerOfTwo(4))
