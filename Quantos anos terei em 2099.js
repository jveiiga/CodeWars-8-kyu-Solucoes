function calculateAge(yearNew , yearOld) {

    let yearReverse = yearNew - yearOld
    let normalYear = yearOld -  yearNew


    if( yearOld < yearNew ) {

        if( yearReverse == 1) {

            return `You will be born in ${yearReverse} year.`
            
        }

       return `You will be born in ${yearReverse} years.`

    } 
    
    if( yearNew < yearOld ) {

        if( normalYear == 1) {

            return `You are ${normalYear} year old.`
            
        }

       return `You are ${normalYear} years old.`

    }  

    if( yearNew == yearOld ) {

        return `You were born this very year!`

    }
}
console.log(calculateAge(2012, 2016))
console.log(calculateAge(1989, 2016))
console.log(calculateAge(2000, 2090))
console.log(calculateAge(2000, 1990))
console.log(calculateAge(3400, 3400))
console.log(calculateAge(900, 2900))
console.log(calculateAge(2010, 1990))
console.log(calculateAge(2010, 1500))
console.log(calculateAge(2011, 2012))
console.log(calculateAge(2000, 1999))