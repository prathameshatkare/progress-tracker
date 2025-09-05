// console.log();
// function Sayhello(){
//     console.log("hello")
// }
// // Sayhello()
// // Sayhello()


// function addTwonumbers(a,b){
//     return a+b;
// }

// const answer =addTwonumbers(9,6);
// console.log(answer);


// function Loginuser(Username="Sam"){
//     if(!Username){
//         return`Please enter the name`
//     }
//     return`${Username} is just login`
// }

// console.log(Loginuser());


//*****************************Part 2************** */


// function CalculatecartPrice(...num1){

//     return num1;
// }


// console.log(CalculatecartPrice(2,5,8,6,7,45))

const user={
    Username:"Hitesh",
    Price:199
}

function HandleObjec(anyobject){
    console.log(`Username is ${anyobject.Username} and price is  ${anyobject.Price}`);
    

}

console.log(HandleObjec(user));
