// function addNum(num1, num2){
//     console.log(num1+num2)
// }
// const result = addNum(3,4)
// console.log("Result: ",result)
// function addNum(num1,num2){
//     let result = num1 + num2
//     return result
// }
// const result = addNum(3,4)
// console.log(result) 

// function isPresent(name){
//     if(name===undefined){
//         console.log("please enter valid username")
//         return
//     }
//     else
//         return `${name} is present`
// }
// console.log(isPresent("sejal"))

// function cartvalue(num2,...num1){
//     return (num2, num1);
// }
// console.log(cartvalue(200, 250, 360, 550))

// ***function in object***
// const Details={
//     username: "sejal",
//     password: 1234,
//     place:"jamshedpur"
// }
// function Accesspoint(object1){
//     console.log(`password of ${object1.username} is ${object1.password} lives in ${object1.place}`)
// }
// Accesspoint(Details)

// *func in array *
const arr1=[100, 200, 300, 400]
function myarr(anyarray){
    console.log(anyarray[2])
}
myarr(arr1)