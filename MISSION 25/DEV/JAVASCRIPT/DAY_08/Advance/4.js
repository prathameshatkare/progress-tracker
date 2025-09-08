const mynum =[1,2,3,4,5,6,7,8,9,10]

// const newnum = mynum.map((num)=>num+10)

const newnum=mynum.map((num)=>num*10).map((num)=>num*90).map((num)=>num+"hello")
console.log(newnum);
