const arr = [10, 15, 25, -2, 14];
arr.sort((a, b) => {
   return a - b; 
});

console.log(arr)
 
const result = arr.filter((value) =>{
    if(value > 10){
        return value;
    }
});
console.log(result);

const result2 =  arr.forEach((element) => {
    if(element < 15 ) {
        console.log(element);
    }
});
console.log(arr.some((value) => {
    return value > 10
}));

console.log(arr.every((value) => {
    return value > 10
}));




