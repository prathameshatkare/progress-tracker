/*Primitive Data Types ==>Number Boolean Null undefined Symbol Bigint

✅ Copied by Value

That means a completely new copy is made — changing one does not affect the other

*/


/*
Non -Primitive Datatype==>Array Objects 

✅ Reference (Address) is Copied

You don’t get a new object — both variables point to the same memory reference.
So, changing one affects the other.


All non primitives areusually the objcts
*/


let id = Symbol(90);
let ap = Symbol(90);
let sk = Symbol("90");
console.log(id==ap)
console.log(ap==sk);
console.log(id==sk);

const number = 654755474444474
console.log(number)



let heros =["Ironman","Thor","Batman","Spiderman"];
let myObj={
    name:"Prathamesh",
    age:22
}
console.log(typeof number)
console.log(typeof heros);
console.log(typeof myObj);

const myfunction =function(){
    console.log("Hello world!")
}
myfunction()


 console.log(myfunction)


//Stack -->Primitive
//Heap -->non-primitive


let YTname = "Hiteshdotcom"

let newname = YTname
console.log(newname)

newname="Chaiaurcode"

console.log(YTname)
console.log(newname)

let UserOne={
    name:"Prathamesh",
    number:9604011485
}

let UserTwo = UserOne
UserTwo.name="Aditya"

console.log(UserTwo.name)
console.log(UserOne.name)