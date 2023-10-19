class Account{
    Acc_Name;
    Acc_email;

}
class SA extends Account{
    min_bal=500;
    bal=0
    constructor(name,email,bal){
        super(name,email)
        this.bal=bal
    }

}
var a=new SA("mounika","mounika@gmail.com",5000)
console.log(a)
class CA extends Account{
    min_bal=500;
    bal=0
    constructor(name,email,bal){
        super(name,email)
        this.bal=bal
    }

}
var b=new CA("nandini","nandini@gmail.com",50000)
console.log(b)