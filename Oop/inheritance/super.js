//super is keyword to call the parent class constructor in child constructer
class Account{
    constructor(){
        console.log("Account constructor")
    }
    }
    class SA extends Account{
    constructor(){
        super()
        console.log("SA constructor")
    }
    }
    new SA()