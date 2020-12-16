i=1
while(i<=100){
    if(i>1){
        var j=2
       while(j<i){
           if(i%j==0){
               console.log("not prime ")
               break  
           }j=j+1
        }console.log("yes prime")
    }else{
        console.log("not prime number")
    }
}


// n=int(input("enter the number"))
// if(n>1):
//     i=2
//     while(i<n):
//         if(n%i==0):
//             print("not  prime")
//             break
//         i=i+1
//     else:
//         print("yes prime")
// else:
//     print("not prime")
       
