const score =400

const balance = new Number(45.6985)
console.log(balance);
console.log(score);
const hundread =1000000
console.log(balance.toString())
console.log(typeof balance.toString() );//String mai convert hoga
console.log(balance.toFixed(2));//Point ke baad utne numbrs ayenge
console.log(balance.toPrecision(5));//round of for first 3 digit
console.log(hundread.toLocaleString());//-->convert to usa,ind formate(10,00,000)

//****************************************MATHS************************************ */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)