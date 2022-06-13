// usando loop for 
function removeEveryOther(arr){

    let res = []
    
    for( let i = 0; i < arr.length; i += 2 ) {

        res.push(arr[i])

    }

    return res

  }
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  console.log(removeEveryOther([[1, 2]]))
  console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))    
//usando for in e operador de módulo 
function removeEveryOthers(arr){
    let res = []

    for( let i in arr) {

        if(i % 2 == 0) {

            res.push(arr[i])

        }
    }

   return res

}
console.log(removeEveryOthers(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOthers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOthers([[1, 2]]))
console.log(removeEveryOthers([['Goodbye'], {'Great': 'Job'}])) 