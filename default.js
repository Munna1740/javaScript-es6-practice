// Normal function
function add(number1,number2){

    return number1+number2;

}
const total = add(12,12);
console.log(total);

// if we don't give number 2 then old solution:

function add2(num1,num2){
    if(num2==undefined){
        num2= 0;
    }
    return num1+num2;
}
const total2 = add2(12);
console.log(total2);

// another way to solve this undefined number:

function add3(num1,num2){
    num2 = num2 || 0;
    return num1+num2;
}
const total3 = add2(2);
console.log(total3);

//ES6 undefined number problem solve:

function add4(num1,num2=0){
    return num1+num2;
}
const total4 = add4(5);
console.log(total4);