const removeFromArray = function(inputArray, ...removeArray) {
    for (let i =0; i<removeArray.length; i++){
        inputArray = inputArray.filter((val)=>val!==removeArray[i]);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
