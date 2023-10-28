var users=[{id:1,name:"Utley",gender:"Male"},
{id:2,name:"Satterly",gender:"Male"},
{id:3,name:"Measham",gender:"Male"}]

let create_User=(a)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            users.push(a)
            let flag="HI"
            flag? resolve("data inserted successfully") : reject("Failed")
         },4000 )
         
    })
    
}
let read_users=()=>{
    setTimeout(()=>{
        rows=""
        for(user of users){
            rows=rows+`<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.gender}</td>
                    </tr>`
        }
        document.getElementById("table_data").innerHTML=rows
    },1000)
    
}
let  execute=async()=>{
    await create_User({id:4,name:"Mouni",gender:"Female"})
    read_users()
}
execute()

