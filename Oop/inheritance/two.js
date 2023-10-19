class parent{
    m1(){
        console.log("Method 1 from parent")
    }
    m2=()=>{
        console.log("Fat arrow method 2 from parent class")
    }
}
class child extends parent{
    m3(){
        console.log("method 3 from child class")
    }
}
c=new child()
c.m3()
c.m1()
c.m2()