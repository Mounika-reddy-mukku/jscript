class account{
    min_bal=500;
    account_open(){
        console.log("Acount opened")
    }
    withdraw(){
        console.log("insufficient money")
    }
}
var a=new account()
console.log(a)
a.account_open()
a.withdraw()