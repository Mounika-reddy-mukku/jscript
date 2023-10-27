/*let a=[10,20,30]
let b=a.map((x)=>{
    return x
})
b[0]=100
console.log(a)
console.log(b) */

//using spread operator

let a=[10,20,30]
let b=[...a]
b.shift()
console.log(a)
console.log(b)

/*[ 10, 20, 30 ]
[ 20, 30 ] */