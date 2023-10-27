
let emp={
    eid:101,
    ename:"Rahul",
    esal:45000
}
console.log(emp.esal)
let {esal, ...eid}=emp
console.log(eid)
console.log(esal) //reading object property as variable