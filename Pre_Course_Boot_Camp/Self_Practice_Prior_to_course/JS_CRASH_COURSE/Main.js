const todos = [
    {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
    },
    {
    id:2,
    text: 'Meeting with boss',
    isCompleted: true
    },  
    {
    id:3,
    text: 'Dentist appt',
    isCompleted: false
    }
];

// For Loops

for(let i = 0; i <10; i++){
console.log(`For Loop NUmber: ${i}`);

}

//While Loop

let i= 0;
while(i<10){
console.log(`While Loop Number: ${i}`);
i++;
}



for(let i = 0; i <todos.length; i++){
    console.log(todos[i].text);
    
    }

for(let todo of todos){
    console.log(todo.text);
}