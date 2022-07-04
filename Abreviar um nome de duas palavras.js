function abbrevName(name){
  
    var nameArr = name.split(" ");

    return (`${nameArr[0][0]}.${nameArr[1][0]}`).toUpperCase();

 }

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))
console.log(abbrevName("P Favuzzi"))
console.log(abbrevName("David Mendieta"))