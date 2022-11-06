// Exercise1
// Part I
// What does the following code return/print?

const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
const {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Part II
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // 1846, 1659


// Exercise3
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)


getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent);
}


// Exercise4
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : name, house, friendName and age)
function getMoreDetails({name, house, name.friend: friendName, name.friend.age : age}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
			})

// Exercise5
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first:firstname, last: lastname, housesLocation:[locationOne, locationTwo] houses: {valueHouses}){
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

// Exercise 6 : NOT MANDATORY
// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]