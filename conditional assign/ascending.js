num1=65
num2=0
num3=9
if(num1<=num2 && num1<=num3){
    if(num2<=num3){
        console.log(num1,num2,num3)
    }
    else{
        console.log(num1,num3,num2)
    }
}
else if(num2<=num3){
    if(num1<=num3){
        console.log(num2,num1,num3)
    }
    else{
        console.log(num2,num3,num1)
    }
}
else{
    if(num2<=num1){
        console.log(num3,num2,num1)
    }
    else{
        console.log(num3,num1,num2)
    }
}
//46 65 95
//0 9 65