var n=3
while(n>0){
    var c=n%10
    n=n//10
    var pow=c**3
    var new_n=new_n+pow
}
if(n==new_n){
    console.log("yes, this is armstrong")
}else{
    console.log("no, this is not armstrong")
}