var users=[{"id":1,"name":"Utley","gender":"Male"},
{"id":2,"name":"Satterly","gender":"Male"},
{"id":3,"name":"Measham","gender":"Male"},
]
let create_Emp=(emp,callback)=>{
    setTimeout(()=>{
        users.push(emp)
        return callback(read_data)
    },4000)
    
}

function read_data(){
    setTimeout(()=>
    {
    rows=""
    for(user of users){
        
        rows += `<tr> 
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                 </tr>`
    }
    document.getElementById("table_data").innerHTML=rows
    },1000)
}
create_Emp({id:4,name:"Mounikia",gender:"Female"},read_data)
