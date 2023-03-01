// Write a function to check if a number a positive even number 
// If yes, return true. Otherwise return false

// tao test
// flag
// v1
function isPositiveEvenNumber(n) {
 let isValid; // underfined

 // checking ...
 if (n >0 && n % 2 === 0) {
     isValid = true;    
 } else {
     isValid = false;
 }

 return isValid;
}

//v2
function isPositiveEvenNumber(n) {
 let isValid = false;

// checking ...
 if (n >0 && n % 2 === 0) {
     isValid = true;    
 } 

 return isValid;
}

// v3
function isPositiveEvenNumber(n) {

// checking ...
 if (n >0 && n % 2 === 0) {
  return true;
 } 

 return false;
}
// v4
function isPositiveEvenNumber(n) {
 return n >0 && n % 2 === 0;
}

console.log(isPositiveEvenNumber(4));








