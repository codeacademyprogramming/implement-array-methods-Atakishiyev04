/*
    Array methods which work with callback function
    map -> returns a brand new array // 
        you should always return a value from map's callback function
        otherwise the array will have undefined values
    sort + 
    filter +
    reduce +
    reduceRight +
    forEach +
    some + - at least one elmement should meet 
    every + checks every element for the condition that given 
    find
    findIndex
*/

// const arr = [1,3,2,0,12];

// const resultArray = arr.map(function (value, index) {
//     if(index > 2) {
//         return value *2;
//     }
//     return value;
// });

// const arr = ["Aqil", "Elnur", "Tural",  "Ilahe", "Surac", "Seymur", "Murad", "Turan"];
// const arr = [-3, 1, 10, -20, 3, 15, -10];
// chaining
// arr.sort((a, b) => {
//     // a - b  -> from lowest to highest
//     // b - a -> from highest to lowest
//     return b - a;
// });
// .map((value) => {
//     return value *2;
// }).filter(( ) => {

// })

// const result = arr.filter(value => value % 2 === 0);

// const result = arr.reduce(function (prevValue, currentValue, index, array) {
//     if(currentValue % 2 === 0) {
//         return prevValue + currentValue;
//     }
//     return prevValue;
// }, 0);

// const result2 = arr.reduceRight(function (prevValue, currentValue, index, array) {
//     if(index > 2 && index < 5) {
//         return prevValue + currentValue;
//     }

//     return prevValue;
// }, 0);


// const result = arr.forEach((element, index, array) => {
//     if(element > 2) {
//         console.log(element);
//     }
// });

// const people = [
//     {
//         name: "Tural",
//         surname: "Suleymanli",
//         age: 18
//     },
//     {
//         name: "Elnur",
//         surname: "Abbaszade",
//         age: 15
//     },
//     {
//         name: "Agil",
//         surname: "Atakishiyev",
//         age: 23
//     }
// ];

// const numbers = [1,23,45,32,314,12];
// const result = numbers.reverse();
// console.log(numbers);
// console.log(result);

// console.log(people.some((person, index, array) => {
//     return person.age > 18
// }));

// console.log(people.every((person, index, array) => {
//     return person.age > 18
// }));

// const result = people.findIndex(function (person) {
//     return person.name === 'Elnur';
// });

// const result2 = numbers.findIndex(value => value === 333);

// console.log(result, result2);

