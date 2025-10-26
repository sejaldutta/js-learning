// const Arr= [1,2,3,4,5]
// for (const mem of Arr) {
//     console.log(mem)
// }

// const country = new Map()
// country.set('IN','INDIA')
// country.set('IN','INDIA')
// country.set('JA','JAPAN')
// country.set('CH','CHINA')
// country.set('IR','IRAN')
// console.log(country)

// for (const [key, value] of country){
//     console.log(key, "=>", value)
// }

// const myObj = {
//     js:"javascript",
//     cpp:"c++",
//     rbb:"ruby"
// }
// for(const car in myObj){
// console.log(car, "=>", myObj[car]);
// }

// const arr1=["som", "om", "banti", "megha"]
// for(const key in arr1){
//     console.log(key, "=",arr1[key])
// }

// ***forEach loop***//
// const arr =['js','java','c','c++','python','ruby']
// lang.forEach(function(item){
//     console.log(item)
// })

// function item(val){
//     console.log(val)
// }
// lang.forEach(item)
// arr.forEach(function(item,index,arr){
//     console.log(item[0],index,arr)
// })

const arr1=[
{name:'java',
    shortcut:'java'
},
{name:'javascript',
    shortcut:'js'
},
{name:'Python',
    shortcut:'py'
}
]
arr1.forEach(function(item){
    console.log(item.shortcut)
})