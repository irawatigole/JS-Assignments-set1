// Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

function countUpThenDown(n) {
    var a=[];

    for (var i=0; i <= n; i ++) { 
        a.push(i);
    }
   for (var i=n-1; i>= 0; i--) {
       a.push(i);
   }
return a;
   } 
    console.log(countUpThenDown(2));
    console.log(countUpThenDown(0));

