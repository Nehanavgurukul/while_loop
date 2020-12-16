// var a=98
// var b=78

// while(a!=b){
//     if(a>b){
//         a=a-b
//         console.log(a)
//     }else if(b>a){
//         b=b-a
//         console.log(b)
//     }
//     a=b
// }

var a = 14; //First number
var b = 49;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);
