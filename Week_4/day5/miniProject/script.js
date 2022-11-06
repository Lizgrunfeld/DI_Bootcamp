const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


const robotDiv = document.getElementsByTagName("section")[0];

console.log(robotDiv);
let allRobots =[];

class Robot{
    constructor (id, name, username, email, image){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;

    }


    createRobotCard() {
        this.robotCard = document.createElement("div");
        this.robotCard.classList.add("robot-card");
        this.robotImg = document.createElement("img");
        this.robotImg.classList.add("robot-img");
        this.robotImg.src = this.image;
        this.robotCard.appendChild(this.robotImg); /////////
        this.robotName = document.createElement("h4");
        this.robotName.classList.add("robot-name")
        this.robotName.textContent = (this.name)
        this.robotCard.appendChild(this.robotName);
        this.robotEmail = document.createElement("h2");
        this.robotEmail.classList.add("robot-email");
        this.robotEmail.textContent = (this.email);
        robotDiv.append(this.robotCard);
        allRobots.push(this);
    }
}

robots.forEach((element) => {
    let currentRobot = new Robot(element.id, element.name, element.username, element.email, element.image);
    currentRobot.createRobotCard();
})






// eventlistener
let searchInput = document.querySelector("input");
searchInput.addEventListener("keyup", e => {
  const searchString = e.robots[1].name;
  const filteredRobots = robots.filter(robot => {
    return (
      robot.name.toLowerCase.includes(searchString)    );
  });
  displayCharacters(filteredRobots);
});

// const checkRobotName = robots[i].name =>(
//           ,toLowerCase()
//           .indexOf(this.StaticRange.filter.toLoweCase()) !== -1
// )

searchInput.addEventListener("keyup", e => {
  const searchString = e.target.value;
  const filteredCharacters = hpCharacters.filter(character => {
    return (
      character.name.includes(searchString) ||
      character.house.includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});