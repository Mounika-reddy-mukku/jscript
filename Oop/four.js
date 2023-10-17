const input=require('prompt-sync')();
class account{
    min_bal=500;
    account_open(){
        console.log("Acount opened")
    }
    withdraw(amount){
        if(amount>500){
            console.log(`${amount} withdraw successfully`)
        }
        else{
            console.log("insufficient money")
        }
    }
}
var a=new account()
console.log(a)
a.account_open()
amount=parseInt(input("Enter Amount to withdraw:"))
a.withdraw(amount)