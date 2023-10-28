function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=8;
    return y;
}
var z=x();
console.log(z);
z();