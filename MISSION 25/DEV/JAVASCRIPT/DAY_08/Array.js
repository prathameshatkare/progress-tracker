// const array_1 = [1,2,3,5,4]
// // console.log(array_1[0])


// //Array methods


// //1.Adding element in the array
// array_1.push(6)
// console.log(array_1);

// //2.Remove element in the array
// array_1.pop(6);
// console.log(array_1);


// //3.Inserting at start
// array_1.unshift(9);
// console.log(array_1);


// //4.Inserting at start
// array_1.unshift(9);
// //5.remove the first elementwhich isoccurs by unshift
// array_1.shift()
// console.log(array_1);



// console.log(array_1.includes(9))
// console.log(array_1.indexOf(9))

// const myArray = array_1.join()
// ///==>join()-->binds the arra o string
// console.log(myArray)

// //slioe ,splice

// console.log("A",myArray)

// const myn1=array_1.slice(1,3)
// console.log("hello")
// console.log(myn1);
// console.log(`Original arra =>${array_1}`);



// const myn2 = array_1.splice(1, 3);
// console.log("hello2");

// console.log(myn2);
// console.log(`Original arra =>${array_1}`);


// //Slice does not manipulate the original array but splice manipulates the originalarray

//*****************************************PART 2************************* */

const Marvel=["Ironman","Captain America","Thor","Hulk","Wanda","Hawkeye"]

const DC =["Superman","Batman","Cyborg","Wonder Women","Flash"]

// Marvel.push(DC)
// console.log(Marvel[6][2])
// const newheroes =Marvel.concat(DC);
// console.log(newheroes);

const mynewheroes =[...Marvel,...DC]//-->spread method
console.log(mynewheroes)

const Anotherarray =[1,2,3,[4,5,6],7,[11,25,1,4,4,[89,78]]]
const real_another_array = Anotherarray.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Prathamesh"));

console.log(Array.from("Prathamesh"))

console.log(Array.of(1,2,6,6));