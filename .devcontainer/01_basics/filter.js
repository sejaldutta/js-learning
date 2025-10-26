 const mynum=[1,2,3,4,5,6]
// const num1= mynum.filter((num2) => num2 < 4)
// // or
// // const num1= mynums.filter((num2) => {return(num2<4)}) 
// console.log(num1)

// mynum.push(8)
// console.log(mynum)
// const newnum=[]
// mynum.forEach((num)=>{
//     if(num<4){
// newnum.push(num)
//     }
// })
// console.log(newnum)

//  const num1 =[]
// // mynum.forEach((num)=> num1.push(num+10))
// // console.log(num1)
// or use map
const newnum = mynum.map((num)=>(num+10))
console.log(newnum)