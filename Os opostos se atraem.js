function lovefunc(flower1, flower2){
    
    if( flower1 % 2 === 0 && flower2 % 2 !== 0 ) {

        return true

    }else if( flower2 % 2 === 0 && flower1 % 2 !== 0 ) {
        
        return true

    }else if( flower1 % 2 === 0 && flower2 % 2 === 0 ) {

        return false
    }else {

        return false
        
    } 


}
console.log(lovefunc(1,4))
console.log(lovefunc(2,2))
console.log(lovefunc(0,1))
console.log(lovefunc(0,0))
