const input=require('prompt-sync')();
let a=parseInt(input("enter number:"))
let b=a.toString()
rev=""
for(i=0;i<b.length;i++){
    c=b[i]
    rev=c+rev
}
console.log(rev)
console.log(typeof rev)
d=parseInt(rev)
console.log(typeof d)