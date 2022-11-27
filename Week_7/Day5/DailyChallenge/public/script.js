
const login = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch('/login',{
        method:"POST",
        body: JSON.stringify({email,password}),
        headers:{
            'content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        const root =document.getElementById("root")
        root.innerText = data.msg
        console.log(data);
    })
    .catch(e => {
        console.log(e)
    })
}

const register = (event) =>{
    event.preventDefault();

    const firstname = event.target.fname.value;
    const lastname = event.target.lname.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;

    fetch('/register',{
        method:"POST",
        body: JSON.stringify({firstname,lastname,email,username,password}),
        headers:{
            'content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e)
    })
}