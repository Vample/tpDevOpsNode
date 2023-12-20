function submitName(){
    let name = document.getElementById("name").value;
    console.log(name)
    postName(name);
    //let message = 'Bonjour ' + name + ', ... Vous êtes bien matinal ...';
    //document.getElementById('message').innerText = message;
    //console.log(message)
}

function postName(name){
	fetch("http://localhost:8282/", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        "name" : name,
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
}
