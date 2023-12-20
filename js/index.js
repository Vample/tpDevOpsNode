function submitName(){
    let name = document.getElementById("name").value;
    console.log(name)
    let message = 'Bonjour ' + name + ', ... Vous êtes bien matinal ...';
    document.getElementById('message').innerText = message;
    console.log(message)
}

function test(){
    document.getElementById('message').innerText = 'la function test';
}