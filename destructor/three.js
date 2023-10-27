let state={
    product:{
        p_Id:'P101',
        p_Name:"Iphone 5s",
        p_price:4500,
        p_Color:['Red','Blue','Yellow']
    },
    users:[{name:"rahul",loc:'wayand'}],
    flag:true
}
let {flag, product:{p_Name,p_Color:[a,b,c]},users:[{name,loc}]}  = state
console.log(p_Name)
console.log(flag)
console.log(name)
console.log(loc)
console.log(b)
/* outputs
Iphone 5s
true
rahul
wayand
Blue
*/