// const mysym= Symbol()
// const details={
//     "Full name": "Sejal",
//     age : 18,
//     college:"NIT",
//     isloggedIn: false,
//     last_login:["Monday", "Wednessday"],
//     [mysym]: "MYkey1"
// }
// // console.log(details.age)
// // console.log(details['age'])
// // console.log(details[mysym])
// // Object.freeze(details)
// // details.age = 19
// // console.log(details)
// details.bank = function(){
//     console.log(this.college)
// }
// console.log(details.bank())

//*****singleton*****
// const tinderUser = new Object()
// tinderUser.name="Mia"
// tinderUser.place="Dubai"
// tinderUser.religion="Hindu"
// console.log(tinderUser)

//***non singleton ***/
// const User ={
//     email: "gian@gmail.com",
//  details:{
//     Name:"popat",
//     Country: "India"
// }
// }
// console.log(User.details.Name)

// const obj1={a:1, b:2}
// const obj2={c:3, d:4}
// // console.log(Object.assign(obj1, obj2))
// const obj3={...obj1, ...obj2}
// console.log(obj3)

// const Users=[
//     {
//         id:1234,
//         email:"s@gmail.com"
//     },
//     {
//         id:1234,
//         email:"d@gmail.com"
//     },
//     {
//         id:1234,
//         email:"g@gmail.com"
//     }
// ]
// console.log(Users[2].email)
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isloggedIn'))

//***de-construct***/
const course={
    course_name:"js learning",
    mode:"online",
    fees:999,
    courseInstructor:"Hitesh"
}
const {course_name} = course
const{courseInstructor : coach} = course
console.log(course_name)
console.log(coach)
