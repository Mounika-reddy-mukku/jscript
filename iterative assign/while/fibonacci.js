const input=require('prompt-sync')();
var num=parseInt(input("Enter the Number:"));
var n=num;
if(num==0){
    console.log("invalid")
}
else{
    if(num==1){
        console.log(0)
    }
    else if(num==2){
        console.log(0);
        console.log(1)
    }
    else{
        var a=0;
        var b=1;
        console.log(a);
        console.log(b)
        var c=a+b;
        while(n-2){
            console.log(c);
            a=b;
            b=c;
            c=a+b
            n-=1;
        }
    }

}
