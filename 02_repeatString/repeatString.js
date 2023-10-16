const repeatString = function(string, num) {
    if(num<0) return 'ERROR';
    let output ='';
    while(num){
        output += string;
        num--;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
