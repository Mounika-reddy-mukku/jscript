var emp={id:101,name:"Mounikia"}
var details={email:"mo@gmail.com",loc:"Bng"}

let emp_details={...emp,...details, mob:9347575950}
console.log(emp_details)
/* output:
{
  id: 101,
  name: 'Mounikia',
  email: 'mo@gmail.com',
  loc: 'Bng',
  mob: 9347575950
}*/