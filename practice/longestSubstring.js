function lcs(str){
    let left =0;
    let charFequency = {};
    let maxLength =0;
    let start =0;

    for(let i=0; i<str.length; i++) {
        const char = str[i];

        if(char in charFequency && charFequency[char]>=left){
            left = charFequency[char]+1
        }

        charFequency[char]=i;

        const currrentLength = i-left+1
        if(currrentLength>maxLength){
            maxLength= currrentLength;
            start= left;
        }
    }

    return str.substring(start, maxLength+start)
}


console.log(lcs("abcabcbb"))