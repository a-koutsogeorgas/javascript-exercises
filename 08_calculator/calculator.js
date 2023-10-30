const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let factorial = 1;
  while(a){
    factorial = factorial * a;
    a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
