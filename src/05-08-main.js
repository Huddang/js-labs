// Write a function to check if a number a positive even number
// Viết 1 function để kiểm tra xem hàm đó có phải là 1 số dương chẳn hay ko

// If yes, return true. Otherwise return false
//Nếu đúng, return true. Nếu ko là return false

// flag
// v1
function isPositiveEvenNumber01(n) {
  let isValid; // underfined

  // checking ...

  // vesion 1

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

//vesion 2
function isPositiveEvenNumber0(n) {
  let isValid = false;

  // checking ...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

console.log(isPositiveEvenNumber0(4));

// v3
function isPositiveEvenNumber1(n) {
  // checking ...
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}
// v4
function isPositiveEvenNumber2(n) {
  return n > 0 && n % 2 === 0;
}

console.log(isPositiveEvenNumber01(4));
