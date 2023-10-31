const fibonacci = function(n) {
    if (n<0) return "OOPS";
    if (n===0) return 0;
    
    let f = [0,1];
    for(let i = 1; i < Number(n); i++){
        f.push(f[f.length-1]+f[f.length-2]);
    }
    return f[f.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
