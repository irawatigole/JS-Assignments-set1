// Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Dct Academy" would return 3).

function vowelCount(str){
    var vowelList ='aeiouAEIOU' ;
    var count= 0;
    if (str.length> 0){
    for (var i=0; i< str.length; i ++){
        if (vowelList.includes(str[i]))
        {
            count += 1;
        }
    }
        return count;
}

    else {
        return 'empty string';
    }
}
    console.log(vowelCount("Good job"));
    console.log(vowelCount("Yankees"));
    console.log(vowelCount("symphysy"));
    console.log(vowelCount(""));