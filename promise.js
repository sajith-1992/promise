const promise=require('promise')


function firstName()
{
   return new Promise ((resolve,resject)=>{
    setTimeout(()=>{
        resolve('sajith')},3000)
    

    })
   
}
function mobileNum(){
    return new promise ((resolve,reject)=>{
    setTimeout(() => {
 resolve('87895723')},2000       
    
    )}
    )}


    //to call this we need to use promise 
    promise.all([firstName(),mobileNum()]).then ((result)=>{
        console.log(result)
    })