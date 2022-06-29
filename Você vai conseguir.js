function zeroFuel(distance, milhas, fuel){
    if( milhas * fuel >= distance ) {

        return true

    }else {

        return false

    }
}
console.log((zeroFuel(50, 25, 2)))
console.log((zeroFuel(100, 50, 1)))