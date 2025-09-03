let name= "hitesh"

let name2 = new String("Hi-tes-hHc")
// console.log(name2.toUpperCase())
// console.log(name2.toLowerCase());
// console.log(name2.charAt(0));
// console.log(name2.indexOf("h"));


// const newsring = name2.substring(0,5)
// console.log(newsring)
console.log(name2.length)
const anotherstring = name2.slice(-7,5)//==>8-7=1 and at the index 1 i is present so i[1],t[2],e[3],s[4] 5is not included
console.log(anotherstring)

const mystring ="                   hitesh"
console.log(mystring.trim())
 

const url = "htps://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-"));
console.log(url.includes("hitesh"));

console.log(name2.split("-"))



const myname="praathamesh"
const myage =21

console.log(`Hi, My name is ${myname} and my age is ${myage}`);