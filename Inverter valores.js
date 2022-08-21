function invert(array) {
    let result = []

    for (let i = 0; i < array.length; i++ ) {
        
        let num = array[i]

        if (num > 0) {
            
            result.push((num - num) - num)

        }else if(num < 0) {

            result.push((num - num) - num)

        }else {

            result.push(-0)
        }
    }
    return result
 }
console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))
console.log(invert([0]))