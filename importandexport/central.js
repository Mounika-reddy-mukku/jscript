let tax=20
function get_Discount(){
    return 5
}
//module.exports=tax //es5 export single value
//module.exports=get_Discount // es5 exporting a function

module.exports={ tax,get_Discount} // es5 exporting multiple values
