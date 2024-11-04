function firstLetterCapital(str){
    var result =  str[0].toUpperCase();
    for(let i=1; i< str.length ; i++){
        if(str[i-1]=== " "){
            result += str[i].toUpperCase()
        }else{
            result +=str[i]
        }
    }
 return result;
}

console.log(firstLetterCapital("hello from javascript"));
