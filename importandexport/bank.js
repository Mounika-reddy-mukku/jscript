/*const tax=require('./central') //es5 import
 const get_Discount= require('./central') */ //importing single values called default import

 const {tax,get_Discount} =require('./central') 
 

console.log(tax) 

console.log(get_Discount())