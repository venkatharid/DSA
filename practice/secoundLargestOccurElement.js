function secoundLargest(arr) {
    const obj = {};
    for(let i=0; i<arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }


    var largest = -Infinity;
    let secondLargest = -Infinity;
    let largestKey = null;
    let secondLargestKey = null;

    for( key in obj){
        if(obj[key] > largest){
            secondLargest = largest;
            secondLargestKey = largestKey;
            largest = obj[key];
            largestKey = key;
        }else if( obj[key] !== largest  && obj[key] > secondLargest){
            secondLargest = obj[key];
            secondLargestKey = key;
        }
    }
    console.log(secondLargestKey)
}

secoundLargest(['aa','bb','aa','aa','cc','cc'])