function past(horas, minutos, segundos){
  
    return horas * 60 * 60 * 1000 + minutos * 60 * 1000 + 1000 * segundos
  
}
console.log(past(0,1,1))
console.log(past(1,1,1))
console.log(past(0,0,0))
console.log(past(1,0,1))
console.log(past(1,0,0))