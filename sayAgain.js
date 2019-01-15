// Create a function sayAgain that repeats a string a certain number of times.

// sayAgain accepts two arguments:

// The string to repeat, str
// The number of times to repeat that string, num
// sayAgain should return a string that is the concatenation of the str argument n times.

// NOTE: Do not use the repeat method built into JavaScript

function sayAgain(str, num){
if (num <= 0)
return "" ;
if (num === 1)
return str ;
else 
return str + sayAgain(str, num-1) ;
}
console.log(sayAgain('hi',4));
console.log(sayAgain('hi',0));
console.log(sayAgain('ok',6));


