class Users{
    constructor(a,b){
        this.id=a;
        this.name=b
        this.min_bal=500;
        this.acc_bal=0;
    }
}
var user=new Users(101,'Mounika')
console.log(user) //Users { id: 101, name: 'Mounika', min_bal: 500, acc_bal: 0 }