var i=1
while(i<=100){
    if(i%3==0){
        console.log(i,"Fizz")
    }else if (i%7==0){
        console.log(i,"buzz")
    }else if (i%3==0 && i%7==0){
        console.log(i,"Fizz-Buzz")
    }else{
        console.log(i,"Buzz-Fizz")
    }i++
}