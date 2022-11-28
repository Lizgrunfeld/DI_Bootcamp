import Notjsx from './components/Notjsx';
import Jsx from './components/Jsx';
import User from './components/User';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise4 from './components/Exercise4';
import './App.css';

function App() {

let userData = [
  {first_name: 'Bob'},
  {last_name: 'Dylan'},
  {fav_animals : ['Horse','Turtle','Elephant','Monkey']}
]
console.log(userData)
  return(
      <div>
        <Exercise4 />
        <Notjsx />
        <Jsx />
        {
          userData.map(item =>{
            return(
              <User first_name={item.first_name} last_name={item.last_name}/>              
              )
          })
        }
                {
          userData.map(item =>{
            return(
              <UserFavoriteAnimals fav_animals={item.fav_animals + ""}/>
               )
          })
        }

        
      </div>
  );
}


export default App;
