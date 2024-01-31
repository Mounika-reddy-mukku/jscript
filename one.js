let arr=[4,5,13,12,11,14,10]
arr.sort()
console.log("Highest Number",arr[arr.length-1])
console.log("Lowest Number ",arr[0]);

let b = arr.sort((c,d)=> d-c);
console.log(b)
console.log(b[0])
console.log(b[arr.length-1])


/*let arr1=[]
for (let i=0;i<arr.length-1;i=i+1){
    if(arr1.length>0){
        if (arr1[i-1]<=arr[i]){
            arr1.splice(0,0,arr[i])
        }
    }
    else{
        arr1.push(arr[i])
    }
}
console.log(arr1)
*/