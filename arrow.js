// Normal Function declear:
function doubleIt(num){
    return num*2;
}
const result = doubleIt(6);
console.log(result);

//Another way to declear function:

const doubleIt2 = function(num){
    return num*2;
}
const result2 = doubleIt(5);
console.log(result2);

// Another way to define function Arrow function:
const doubleIt3 = num => num*2;
const result3 = doubleIt3(60);
console.log(result3);

const doubleIt4 = (num1,num2) => num1+num2;
const result5 = doubleIt4(3,4);
console.log(result5);

// multiple work in function:

const doMath = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const result = sum*sub;
    return result;
}
const result4 = doMath(5,2);
console.log(result4);
