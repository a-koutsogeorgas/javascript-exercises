const palindromes = function (a) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    return a.replaceAll(" ","").toLowerCase().split('').filter((letter) => punctuation.indexOf(letter) === -1).join("") == a.replaceAll(" ","").toLowerCase().split('').filter((letter) => punctuation.indexOf(letter) === -1).reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
