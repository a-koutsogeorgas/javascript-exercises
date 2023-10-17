const sumAll = function(numOne, numTwo) {
    let sum=0;
    if ((numOne < 0 || numTwo < 0) || typeof numOne !== "number" ||typeof numTwo !=="number"){
        return "ERROR";
    }else{
        if (numOne>numTwo){
            for (let i=numTwo; i<=numOne; i++){
                sum += i; 
            }   
        }else if(numTwo>numOne){
            for (let i=numOne; i<=numTwo; i++){
                sum += i; 
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
