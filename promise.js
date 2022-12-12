const { resolve } = require('promise')
const  promise = require('promise')


function add(num1,num2){
    return new promise((resolve,reject)=>{
        
        if(num1==0){
        reject("first number is zero")    
        }
        resolve(num1+num2)
    })
}
function multiply(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("first number is zero")}
            resolve(num1*num2)
        })
    }
function divide(num1,num2){
    return new promise((resolve,reject)=>{
        resolve(num1/num2)
    })
}

add(10,20).then((sum)=>{
  console.log(sum)
  return multiply(sum,sum)  
}).then((product)=>{
    console.log(product)
    return divide(product,10)
}).then((div)=>{
    console.log(div)
})
.catch((err)=>{
        console.log(err)})
