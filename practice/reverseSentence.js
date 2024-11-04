// e.g "tom is my sister" => sister my is tom"


function reverseSentence (str) {
    let result= "";
    let word = ""
    for(let i=str.length-1; i>=0; i--) {
        if(str[i] === " ") {
            result += word+" "
            word= ""
        }else {
            word = str[i] + word 
        }
    }
     result += word+" "


   return result.trim()
}

console.log(reverseSentence("tom is my sister"))