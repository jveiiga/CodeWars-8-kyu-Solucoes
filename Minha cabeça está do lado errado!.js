// usando loop for
function fixTheMeerkat(arr) {

    let res = []

    for( let i = arr.length; i > -1; i-- ) {
            if(arr[i] !== undefined ) {

                res.push(arr[i])
            }
    }
    
    return res
    
}
console.log(fixTheMeerkat(["tail", "body", "head"]))
console.log(fixTheMeerkat(["tails", "body", "heads"]))
console.log(fixTheMeerkat(["bottom", "middle", "top"]))
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]))
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]))

// usando método reverse
function fixTheMeerkatt(arr) {
    return arr.reverse()
}
console.log(fixTheMeerkatt(["tail", "body", "head"]))
console.log(fixTheMeerkatt(["tails", "body", "heads"]))
console.log(fixTheMeerkatt(["bottom", "middle", "top"]))
console.log(fixTheMeerkatt(["lower legs", "torso", "upper legs"]))
console.log(fixTheMeerkatt(["ground", "rainbow", "sky"]))