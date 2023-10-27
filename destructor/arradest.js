let num=[1,2,3,4,5];
/*let [a,b,c,d,e]=num
console.log(e)
[a,,,,e]=num;
console.log(e); */
let [a,...b]=num;
console.log(a)
console.log(b) //[ 2, 3, 4, 5 ]
