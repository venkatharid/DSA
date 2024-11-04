function removeDuplicates(data) {
    let uniqarr = [];
  
  for (let i=0; i < data.length; i++){
    if(uniqarr.indexOf(data[i]) < 0){
      uniqarr.push(data[i]);
    }
  }
  return uniqarr;
}

console.log(removeDuplicates([1,2,3,4,3,1,2]))