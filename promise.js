
function add (num1,num2,callback){
    var err=false;
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}
    
add(6,10,(sum,err)=>{
if(err)
{
    console.log("firstnumber is zero")
}
else{
    console.log(sum)
}
})



