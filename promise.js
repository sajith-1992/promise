function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err==true
    }
callback(num1+num2,err)
}

function multiply(num1,num2,callback){
    callback(num1*num2)
}
function div(num1,num2,callback){
    callback(num1/num2)
}



add(0,5,(sum,err)=>{ 
     if(err){
    console.log ("number is zero")
}else{
    console.log(sum)
    multiply(sum,sum,(product)=>{

        console.log(product)
        div(product,5,(result)=>{console.log(result)})
    
    })}
       
    })

    
