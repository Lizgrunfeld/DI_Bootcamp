// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, 
// and append it on the DOM as a JSON string.
// The output should be:





const fromjson = document.querySelector("form");
fromjson.addEventListener('submit', (event)) => {


event.preventDefault();

const data ={};
data["firstName"] = formElement.fname.value;
data["lastname"] = formElement.lname.value;


}

const json = JSON.stringify(data);
console.log(json);
document.getElementById('words').textContent = json;

