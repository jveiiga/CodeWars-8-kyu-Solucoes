function monkeyCount(num) {
   
   let arr = [] 

   for( let i = 1; i <= num; i++ ) {
    
        arr.push(i)

   }

   return arr
   
}
console.log(monkeyCount(5))
console.log(monkeyCount(3))
console.log(monkeyCount(9))
console.log(monkeyCount(10))
console.log(monkeyCount(20))