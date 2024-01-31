const a=[9,3,4,7,6,7,5,9,5,0]
a.sort()

duplicates=[]
for(i=0;i<a.length;i++){
    if(a[i]==a[i+1]){
        duplicates.push(a[i])
    }
}
console.log(duplicates)