class Users{
    min_bal=500;
    acc_bal=0;
    constructor(a,b){
        this.id=a;
        this.name=b
    }
}
var user=new Users(101,'Mounika')
console.log(user) //Users { min_bal: 500, acc_bal: 0, id: 101, name: 'Mounika' }