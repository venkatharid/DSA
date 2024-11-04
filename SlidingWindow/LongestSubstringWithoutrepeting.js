//longest substring without repeating charecters

function longest(s){

    let left = 0;
    let max_length =0;
    let charMap= {};
    let start =0;

    for(let i =0 ; i< s.length; i++){
        const char = s[i];
        if(char in charMap && charMap[char]>=left){
            left = charMap[char]+1
        }

        charMap[char] = i;

        const currentLength = i- left+1;
        if(currentLength>max_length){
            max_length= currentLength;
            start = left;
        }
    }

    return s.substring(start, start+max_length)
}


console.log(longest("abcabcdbb"))