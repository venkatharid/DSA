Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let i = 0; i<this.length; i++){
        let result = callback(this[i], i);

        newArray.push(result);
    }
    return newArray;
}



// 2. pollyfill for Array.filter() method

Array.prototype.myFilter = function(callback){
    let newArray = [];
    for(let i = 0; i<this.length; i++){
        let result = callback(this[i], i);
        
        if(result){
            newArray.push(this[i]);
        }
        
    }
    return newArray;
}
