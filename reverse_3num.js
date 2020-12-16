var a=-1
var b=45
var c=5
if(a>=b && a>=c){
    if(b>c){
        console.log(a,b,c)
    }else if(c>b){
        console.log(a,c,b)
    }
}else if (b>=a && b>=c){
    if(a>c){
        console.log(b,a,c)
    }else if(c>a){
        console.log(b,c,a)
    }
}else if(c>=a && c>=b){
    if(a>=b){
        console.log(c,a,b)
    }else if( b>=a){
        console.log(c,b,a)
    }
}