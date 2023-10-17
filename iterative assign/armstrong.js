const input=require('prompt-sync')();
var num=parseInt(input("Enter the number"));
var str=num.toString();
L=str.length;
var i=0;
sum=0
while(i<L){
    sum=sum+parseInt(str[i])**L
    i++
}
console.log(sum)
if(sum==num){
    console.log("Armstrong Number")
}
else{
    console.log("not an Armstrong number")
}