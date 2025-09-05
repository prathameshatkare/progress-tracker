// // //singleton :made by constructor(unique)

// // //object literals
// // const mysym = Symbol("mysymbol");//Creat s the symbol
// // const JSUSER={
// //     name:"Hitesh",
// //     age:22,
// //     [mysym]:"mysymbol",//syntax for the symbol
// //     location:"Jaipur",
// //     email:"hitesh@google.com",
// //     isloggin :false,
// //     logindaays:["monday","tuesday"]

// // };
// // // console.log(JSUSER.name)
// // // console.log(JSUSER["email"])
// // // console.log(JSUSER[mysym]);


// // JSUSER.email="hitesh@chai.com";//change the email

// // // Object.freeze(JSUSER);//Nochnage can i apply further

// // // console.log(JSUSER)

// // JSUSER.greeting = function(){
// //     console.log("hello bhai");
// // }



// // JSUSER.greeting2 = function () {
// //   console.log(`hello js User ${this.name}`);
// // };
// // console.log(JSUSER.greeting());
// // console.log(JSUSER.greeting2());

// //***********************************Part 2******************************* */

// //Singlwton or with constructor


// // const Tinderuser = new Object()
// const Tinderuser ={}
// Tinderuser.id = "123abc"
// Tinderuser.name ="Sammy"
// Tinderuser.islogin = true


// // console.log(Tinderuser.id)

// const regulewruser ={
//     email :"Some@gmail.com",
//     fullname:{
//         firstname:"Prathamessh",
//         middlename:"Suresh",
//         Surname:"atkare"
//     }

// }
// console.log(regulewruser.fullname.firstname);


// const Obj1 ={

//     1:"a",
//     2:"b"
// }
// const Obj2={
//     3:"P",
//     4:"Q"

// }
// const Obj4 = {
//   8: "P",
//   9: "Q",
// };

// // const Obj3=Object.assign({},Obj1,Obj2,Obj4);//combine the arrays
// // const Obj3={...Obj1,...Obj2,...Obj4}
// // console.log(Obj3);


// const Users = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
//   {
//     id: 3,
//     name: "c",
//   },
//   {
//     id: 4,
//     name: "d",
//   },
// ];


// console.log(Users[1].id);


// console.log(Object.keys(Users));
// console.log(Object.values(Users));
// console.log(Object.entries(Users));
//****************************JSON************************ */




//deconstructing
const regulewruser ={
    email :"Some@gmail.com",
    Username:"Prathamesh",
}

const {Username:Uname}=regulewruser;
console.log(Uname);


{
  "Coursename":"Cohort 3",
  "instrustor":"Harkirat",
  "Price":"5000",
}
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
