console.log(Math.floor(Date.now()))
console.log((new Date).getMonth())
var create = new Date
console.log(create)
console.log(typeof create)
console.log(`Today's date is ${(new Date).getDate()} and time is ${(new Date).getTime()}`)
console.log(create.toLocaleString())
console.log(create.toLocaleString('default',{
    weekday : "long",
    hourCycle:'h12'
}))