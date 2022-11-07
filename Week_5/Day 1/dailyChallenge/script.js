// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, 
// and append it on the DOM as a JSON string.
// The output should be:

// // const firstName = document.getElementById("fname");
// // const lastName = document.getElementById("lname");
// const nameArray = firstName+lastName;
// const formData = JSON.stringify("#myform");
// console.log(formData)




const fromjson = '{"fname": "Liz", "lname": "Dog"}';

const nameJSONstring = JSON.parse(fromjson);
console.log(nameJSONstring);
const nameString = JSON.stringify(nameJSONstring);
console.log(nameString);

