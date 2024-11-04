function numberToDigits(numArray) {
    let result = [];
    
    for (let i = 0; i < numArray.length; i++) {
        let currentNum = numArray[i];
        
        // Process the digits of the current number from left to right
        let digits = [];
        while (currentNum > 0) {
            digits.push(currentNum % 10);
            currentNum = Math.floor(currentNum / 10);
        }

        // Add digits in reverse order to maintain the correct order
        for (let j = digits.length - 1; j >= 0; j--) {
            result.push(digits[j]);
        }
    }
    
    return result;
}

console.log(numberToDigits([12, 34, 56, 23]));