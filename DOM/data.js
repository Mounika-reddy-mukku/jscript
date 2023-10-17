var users=[{"id":1,"name":"Utley","email":"mutley0@studiopress.com","gender":"Male"},
{"id":2,"name":"Satterly","email":"rsatterly1@huffingtonpost.com","gender":"Male"},
{"id":3,"name":"Measham","email":"emeasham2@time.com","gender":"Male"},
{"id":4,"name":"Tures","email":"rtures3@mayoclinic.com","gender":"Male"},
{"id":5,"name":"Dahlberg","email":"mdahlberg4@scientificamerican.com","gender":"Female"},
{"id":6,"name":"Gleder","email":"kgleder5@cbsnews.com","gender":"Female"},
{"id":7,"name":"Killen","email":"mkillen6@nydailynews.com","gender":"Male"},
{"id":8,"name":"Hoys","email":"dhoys7@blogtalkradio.com","gender":"Male"},
{"id":9,"name":"Cratchley","email":"bcratchley8@wix.com","gender":"Female"},
{"id":10,"name":"Domerc","email":"ddomerc9@com.com","gender":"Male"}]

function read_data(){
    rows=""
    for(user of users){
        
        rows += `<tr> 
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                 </tr>`
    }
    document.getElementById("data").innerHTML=rows
    
}