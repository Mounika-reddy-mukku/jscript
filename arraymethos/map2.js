var ar=[1,2,3,4,5,6,7,8,9]

var b=function square(num){
    return num*num
}
var ar1=ar.map(b)
console.log(ar1)
/* [
   1,  4,  9, 16, 25,
  36, 49, 64, 81
*/