//longest Substring with k unique charecters

function longest (s, k){
let left=0;
let max_length = 0;
let maxSubstring = "";
let charMap = {};

for(let i=0; i< s.length ; i++) {

    charMap[s[i]] = (charMap[s[i]] || 0) +1;

    //shink the window
    while(Object.keys(charMap).length > k) {
        const leftChar = s[left];

        charMap[leftChar]--;
        if(charMap[leftChar] === 0) {
            delete charMap[leftChar]
        }
        left++
    }


    //update max length

    if(Object.keys(charMap).length === k) {
        const currentLength = i- left+1;
        if(currentLength> max_length) {
            max_length = currentLength;
            maxSubstring = s.slice(left, i+1)
        }
    }
}

return (max_length, maxSubstring)
}

console.log(longest("aabacbebebe", 3))