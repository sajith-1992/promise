const  promise = require('promise')


function add(num1,num2){
    return new promise((resolve,reject)=>{
        
        if(num1==0){
        reject("first number is zero")    
        }
        resolve(num1+num2)
    })
}

add(0,20).then((sum)=>{
  console.log(sum)  
}).catch((err)=>{
        console.log(err)})
