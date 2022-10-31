
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


newArr =[];

gameInfo.forEach((obj) =>  {
 const user = obj.username +"!";
  newArr.push(user)
})

const bestUsers =[];

gameInfo.forEach((obj) =>{
  if (obj.score > 5) {
    bestUsers.push(obj.username)
  }
})


let total =

gameInfo.forEach