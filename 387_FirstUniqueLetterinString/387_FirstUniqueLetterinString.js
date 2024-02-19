/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let cache = {}
    for (let i = 0; i < s.length; i++){
        cache[s[i]] = cache[s[i]] ? cache[s[i]] + 1 : 1
    }
    for (let i = 0; i < s.length; i++){
        if (cache[s[i]] == 1) return i 
    }
    return -1
};

//First thought process was hashmap then go back to check 

for (let idx = 0; idx < s.length; idx++){
    if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
        return idx
    }
}
return -1  
}; 

//This method utilizes the prototype methods in strings to check if the first and last index is teh same