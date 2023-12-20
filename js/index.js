function submitName(){
    let name = document.getElementById("name").innerText;
    console.log(name)
    message = 'Bonjour ' + name + ', ... Vous êtes bien matinal ...';
    document.getElementById('message').innerText = message;
    console.log(message)
}