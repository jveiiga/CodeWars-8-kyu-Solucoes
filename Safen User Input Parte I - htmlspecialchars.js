function htmlspecialchars(formData) {
    let caracConvert = ""

    for (let i = 0; i < formData.length; i++) {

        let carc = formData[i]

        if(carc === "<") {
            caracConvert += "&lt;"
        }
        if(carc === ">") {
            caracConvert += "&gt;"
        }
        if(carc === '"') {
            caracConvert += "&quot;"
        }
        if(carc === "&") {
            caracConvert += "&amp;"
        }
        if(carc !== "<" && carc !== ">" && carc !== '"' && carc  !== "&") {
            caracConvert += carc
        }
    }
    return caracConvert
}
console.log(htmlspecialchars("<h2>Hello World</h2>"))
console.log(htmlspecialchars("Hello, how would you & I fare?"))
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'))
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"))