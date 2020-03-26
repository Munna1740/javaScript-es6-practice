//array normal rules:
const ages = [20,21,22,23,24];
const ages2 = [25,26,27,28,29];
const ages3 = [40,41,42,43];

const allArry = ages.concat(ages2).concat([30]).concat(ages3);
const allArry2 = [...ages,...ages2,30,...ages3];
console.log(allArry2);

// find maximum value in the array
const number = [500,600,700];
const maximum = Math.max(...number);
console.log(maximum);