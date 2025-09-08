// // for of
// const Array=[1,2,3,5,6,8,4,6,41,87,21,58,41]

// // for (const element of Array) {
// //     console.log(element);
    
// // }

// for (const i in Array) {
//     console.log(Array[i]);
    
    
// }
// const str="Greeting";
// for (const i of str) {
//     console.log(i);
    
    
// }




// const map = new Map;

// map.set("IN","India")
// map.set("Fr","France")
// map.set("Jp","Japan")
// map.set("RS","Russia")
// map.set("RN","Russia")


// for (const [key,value] of map) {
//     console.log(key,`:-`,value);
    
    
// }

// const myObject={
//     "Cpp":"C plus plus",
//     "py":"Python",
//     "Sw":"Swift",
//     "go":"Golang",
//     "Js":"Javascript"
// }


// for (const key in myObject) {
//     console.log(`${key} for ${myObject[key]}`);
    
    
// }


// const coding =["CPP","JAVA","JAVASCRIPT","PYTHON","GO","RUST"]

// coding.forEach( (item,index,arr)=> {console.log(index,item,arr)})



// const mycoding = [
//   {
//     lang: "cpp",
//     id: "1",
//   },
//   {
//     lang: "C",
//     id: "2",
//   },
//   {
//     lang: "Java",
//     id: "3",
//   },
//   {
//     lang: "Python",
//     id: "4",
//   },
//   {
//     lang: "Ruby",
//     id: "5",
//   },
// ];


// mycoding.forEach((item)=>{

//     console.log(item.id,item.lang)

// })


// const Number =[11,5,2,4,51,58,18,45,1,8,1]

// // const newnum=Number.filter((item)=>{
// //   if(item>4){
// //     return item;
// //   }

// // })

// const newnum=[]

// Number.forEach((item)=>{
//   if(item>4){
//     newnum.push(item);
//   }
// })
// console.log(newnum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


const userbooks1 =books.filter((bk)=>{
  if(bk.genre=="History")
    return bk
})

console.log(userbooks1)

const userbooks = books.filter((bk) => {
  if (bk.publish >=1995 && bk.genre ==='History') {
    return bk
  };
});

console.log(userbooks);