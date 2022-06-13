//usando loop for
function squareSum(num){

    let result = 0

    for ( let i = 0; i < num.length; i++ ) {

        result += num[i] * num[i]

    }

    return result;
  
}
console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))