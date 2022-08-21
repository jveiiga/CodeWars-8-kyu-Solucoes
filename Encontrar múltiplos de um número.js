function findMultiples(int, limite) {
    let mult = []
    
    for (let i = 0; i < limite; i++) {
    
        let numLimit = i + 1

        if(numLimit % int === 0) {

            mult.push(numLimit)
        }
    }
    return mult
}
console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))
console.log(findMultiples(5, 7))
console.log(findMultiples(4, 27))
console.log(findMultiples(11, 54))