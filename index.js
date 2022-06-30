// Add your code here
let user = "Steve"
let contact = "steve@steve.com"
function submitData(user, contact) {
    return fetch(`http://localhost:3000/users`, config)
    .then(res => res.json())
    .then(obj => document.body.innerHTML = `<p> ${obj.id} </p>`)
    .catch(function(message){
        return document.body.innerHTML = message})
}

const config = { 
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
},
body: JSON.stringify({
    name: user,
    email: contact,
})};

