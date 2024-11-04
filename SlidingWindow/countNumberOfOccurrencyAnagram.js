

function anagram(s,p) {
    let countMap = {};
    let windowMap = {};
    let k = p.length;
    let textLength = s.length;
    let count =0;

    for(let i=0;i<k;i++) {
        countMap[p[i]] = (countMap[p[i]]|| 0) + 1;
        windowMap[s[i]] = (windowMap[s[i]] || 0) +1;
    }
    if (compareMap(countMap, windowMap)) {
        count++;
    }

    for(let i=k; i<textLength; i++) {
        let newChar = s[i];
        let oldChar = s[i-k];

        windowMap[newChar] = (windowMap[newChar] || 0) +1;

        if(windowMap[oldChar]=== 1) {
            delete windowMap[oldChar]
        }else {
            windowMap[oldChar]--;
        }

        if(compareMap(countMap, windowMap)){
            count++
        }
    }
    return count;
}


function compareMap(m1, m2){
    if(Object.keys(m1).length !== Object.keys(m2).length){
        return false;
    }
    for(let i in m1){
        if(m1[i] !== m2[i]){
            return false;
        }
    }
    return true;
}

console.log(anagram('cbaebabacd',"abc"));
