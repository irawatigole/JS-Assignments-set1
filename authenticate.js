// Create a function, authenticate, which takes an array and a string as it's input.

// The array will be an array of strings representing a list of passwords! The string is a password. If the password input matches one of the passwords in the array, return the string 'authenticated', otherwise return 'not authenticated'

// Note: You should not use the Array method .indexOf() or .includes()


var password=['Password123','dct@academy','querty','secret123','gopro123','harryp@tter'];
var c
function authenticate(password,b){
    
    for (var i=0; i<password.length; i++){
        if (password[i] == b){
            return 'authenticated';
   }
    }
    return 'unauthenticated'
}
  
console.log(authenticate(password,'Password123'));
console.log(authenticate(password,'Balrog'));
console.log(authenticate(password,'secret123'));
console.log(authenticate(password,'harryp@tter'));











