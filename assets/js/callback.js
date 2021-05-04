function multiplyElementsInArrayByTwo (array) {
    const result = [];
    // array.length = 0 - 0 = false - !false -> true
    if(typeof array === 'undefined' || !array.length) {
        return 'please provide correct arguments'
    }

    for (let i = 0; i < array.length; i++) {
        // i = 0 , 1 , 2;
        const element = array[i];
        result.push(element * 2);
    }
    return result;
}

function sumElementsInArrayWithFive (array) {
    const result = [];

    // array.length = 0 - 0 = false - !false -> true
    if(typeof array === 'undefined' || !array.length) {
        return 'please provide correct arguments'
    }

    for (let i =0; i< array.length; i++) {
        const element = array[i];
        result.push(element + 5);
    }

    return result;
}

// const arr = [1,2,3,4,5];

// functions are first class citizens;


function modifyElementsInArray (array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result.push(callback(element));
    }
    return result;
}

function sumByTwo (value) {
    return value + 2;
}

const multiplyByFive = value => value * 5

const modified = modifyElementsInArray(arr, sumByTwo);
const modified2 = modifyElementsInArray(arr, multiplyByFive);
// console.log(modified);
// console.log(modified2);
// console.log(arr);

