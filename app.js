// Author: Davis Cordeiro
// Title: JavaScript Ex1 working with Variables
// Date: 01/10/2023

let myFirstIntegerVariable = 4;
let myFirstFloatVariable = 9.9;
let myFirstBooleanVariable = true;
let myFirstName = 'Davis';
let myLastName = 'Cordeiro';
let myNullVariable = null; //intentional abscence of value.
let myUndefinedVariable; // not assigned value, undefined.

console.log(myFirstIntegerVariable);
console.log(myFirstFloatVariable);
console.log(myFirstBooleanVariable);
console.log(myFirstName + ' ' + myLastName);
console.log(myNullVariable);
console.log(myUndefinedVariable);

// Truthiness
console.log(!!myFirstIntegerVariable);
console.log(!!myFirstName);
myFirstName = '';
console.log(!!myFirstName);
console.log(!!myNullVariable);
console.log(!!myUndefinedVariable);

// Reassignment

let mySecondInt = 3;
mySecondInt = 5;

console.log('------------------------------------');
console.log('Addition');
console.log('------------------------------------');
let addition = myFirstIntegerVariable + mySecondInt;
console.log(addition);

console.log('------------------------------------');
console.log('Subtraction');
console.log('------------------------------------');
let subraction = mySecondInt - myFirstIntegerVariable;
console.log(subraction);


console.log('------------------------------------');
console.log('Multiplication');
console.log('------------------------------------');
let multiplication = mySecondInt * myFirstIntegerVariable;
console.log(multiplication);


console.log('------------------------------------');
console.log('Division');
console.log('------------------------------------');
let division = multiplication / 2;
console.log(division);


console.log('------------------------------------');
console.log('Int + Float');
console.log('------------------------------------');
let floatAdd = myFirstFloatVariable + myFirstIntegerVariable;
console.log(floatAdd);


console.log('------------------------------------');
console.log('Int - Float');
console.log('------------------------------------');
let floatSub = myFirstFloatVariable - myFirstIntegerVariable;
console.log(floatSub);


console.log('------------------------------------');
console.log('Int / Int = Float');
console.log('------------------------------------');
let divideInts = myFirstIntegerVariable / mySecondInt;
console.log(divideInts);


console.log('------------------------------------');
console.log('Int / Int = Int');
console.log('------------------------------------');
let x = myFirstIntegerVariable / 2;
console.log(x);

x = 'Chris';
console.log(x);


console.log('------------------------------------');
console.log('Mod 6 & 2');
console.log('------------------------------------');
let modResult = 6 % 2;
console.log(modResult);

console.log('------------------------------------');
console.log('Mod 13 & 4');
console.log('------------------------------------');
modResult = 13 % 4;
console.log(modResult);

console.log('------------------------------------');
console.log('++ start at 3');
console.log('------------------------------------');
let a = 3;
a++;
console.log(a);

console.log('------------------------------------');
console.log('--*2 start at 7');
console.log('------------------------------------');
let b = 7;
b--;
b--;
console.log(b);


console.log('------------------------------------');
console.log('+= 3 & 5');
console.log('------------------------------------');
let myThirdInt = 3;
myThirdInt+=mySecondInt;
console.log(myThirdInt);



console.log('------------------------------------');
console.log('-= 7 & 5');
console.log('------------------------------------');
let myForthInt = 7;
myForthInt-=mySecondInt;
console.log(myForthInt);