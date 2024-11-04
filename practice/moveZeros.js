function moveZero(arr) {
    const resultArr = [];
    let count=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            count+=1
        }else {
            resultArr.push(arr[i])
        }
    }

    for(let i=0; i<count ; i++){
        resultArr.push(0)
    }

    return resultArr;
}


console.log(moveZero([0,1,0,3,12]));
