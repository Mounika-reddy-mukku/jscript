class test{
    id;
    name;
    func(id,name){
        this.id=id;
        this.name=name;
    }
}
var a=new test()
console.log(a) //test { id: undefined, name: undefined }
a.func(101,'name')
console.log(a) //test { id: 101, name: 'name' }