function maps(arr){

    let res = []

    for ( let i = 0; i < arr.length; i++ ) {

        res.push(arr[i] * 2)
    }

    return res

}
console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))
console.log(maps([2, 2, 2, 2, 2, 2]))