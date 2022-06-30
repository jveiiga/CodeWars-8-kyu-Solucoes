//usando método to toLowerCase, split, rever e join
function isPalindrome(a) {
  
    return a.toLowerCase() == a.toLowerCase().split('').reverse().join('')
    
}

// usando loop for e método charAt
function isPalindrome(string) {
  
    let str = string.toLowerCase()
    let strReverse = ''
    
    for( let i = str.length -1; i >= 0; i-- ) {
      
        strReverse += str.charAt(i)
      
    }
    
    return str === strReverse 
    
}

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("Abba"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Bob"))
console.log(isPalindrome("Madam"))
console.log(isPalindrome("AbBa"))
console.log(isPalindrome(""))