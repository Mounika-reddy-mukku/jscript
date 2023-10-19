class Account{
    Acc_Name;
    Acc_email;
    constructor(name,email){
        this.Acc_Name=name;
        this.Acc_email=email;
    }

}
class SA extends Account{
    min_bal=500;
    bal=0
    constructor(name,email,bal){
        super(name,email)
        this.bal=bal
    }
    get_bal(){
        this.bal=this.bal-this.min_bal
        
    }

}
var a=new SA("mounika","mounika@gmail.com",5000)
a.get_bal()
console.log(a)


class CA extends Account{
    min_bal=500;
    bal=0
    constructor(name,email,bal){
        super(name,email)
        this.bal=bal
    }
    get_bal(){
        this.bal=this.bal-this.min_bal
        
    }

}
var b=new CA("nandini","nandini@gmail.com",50000)
b.get_bal()
console.log(b)