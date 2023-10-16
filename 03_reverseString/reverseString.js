const reverseString = function(inputString) {
    let reversedString = '';
    for(let i = inputString.length; i>=0; i--){
        reversedString += inputString.charAt(i);
    }
    return reversedString;
};
//READ THE SOLUTION REALLY ELEGANT!
// Do not edit below this line
module.exports = reverseString;
