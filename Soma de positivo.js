function positiveSum(arr) {
  
    let soma = 0

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i]

        if(num > 0) {
            soma += num
        }
    }
    return soma
}
console.log(positiveSum([1,2,3,4,5]))
console.log(positiveSum([1,-2,3,4,5]))
console.log(positiveSum([]))
console.log(positiveSum([-1,-2,-3,-4,-5]))
console.log(positiveSum([-1,2,3,4,-5]))