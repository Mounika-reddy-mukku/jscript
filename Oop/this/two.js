class Account{
    min_bal=500;
    acc_bal=0;
    deposit(amount){
        this.acc_bal=this.acc_bal+amount
        console.log("Deposited amount",amount)
    }
    withdraw(amount){
        this.acc_bal=this.acc_bal-amount
        console.log("Withdraw amount",amount)
    }
    actual_bal(){
        this.acc_bal=this.acc_bal-this.min_bal
    }
}
var a=new Account()
console.log(a) //Account { min_bal: 500, acc_bal: 0 }

a.deposit(10000)
console.log(a) //Account { min_bal: 500, acc_bal: 10000 }

a.withdraw(1000)
console.log(a) //Account { min_bal: 500, acc_bal: 9000 }

a.actual_bal()
console.log(a) //Account { min_bal: 500, acc_bal: 8500 }
