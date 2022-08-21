function contamination(text, char) {

    let resultText = ""
    for (let i = 0; i < text.length; i++) {

        let letter = text[i]

        if(letter != "") {
            resultText += char
        }
        if(letter === "") {
            resultText += ""
        }
    }
    return resultText
}
console.log(contamination("abc", "z"))
console.log(contamination("", "z"))
console.log(contamination("abc", ""))
console.log(contamination("_3ebzgh4", "&"))
console.log(contamination("//case", " "))