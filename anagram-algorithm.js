function isAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }
    ;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of text1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    ;
    for (let val of text2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    ;
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
};


//Second Solution
function validAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }
    ;
    let lookup = {};
    for (let letter of text1) {
        lookup[letter] = (lookup[letter] || 0) + 1;
    }
    for (let letter in lookup) {
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }

    }
}

function isValidAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }
    ;

    for (let letter of text1) {
        let matchingLetter = text2.indexOf(text1[letter]);
        if (matchingLetter === -1) {
            return false;
        }
        console.log(text2);
        text2.replace(letter, '');
    }
    return true;
}


console.log(isAnagram('zygfryd', 'dyrfgyz'));
console.log(validAnagram('zygfryd', 'dyrfgyz'));
console.log(isValidAnagram('zygfryd', 'dyrfgyz'));