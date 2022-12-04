import React from 'react';
import User from './components/User.js';
import './App.css';
import Search from './components/Search.js';
import AppForm from './AppForm.js';

// let userData =[
//   {id:1, name:'Tim', username:'timtim',email:'tim@gmail.com'},
//   {id:2, name:'Queen', username:'queenqueen',email:'queen@gmail.com'},
//   {id:3, name:'Mary', username:'marymary',email:'mary@gmail.com'},
//   {id:4, name:'Sue', username:'suesue', email:'sue@gmail.com'}
// ];

class App extends React.Component{
  constructor(){
    super();
   this.state = {
      title: 'Users App',
      subTitle: 'My Robots Users',
      usersData: [],
      text:'',
      text2:''
    }
    console.log('1 constructor');
  }

  componentDidMount(){ 
        this.getUsers()
      }

  changeTitles = () =>{
        this.setState({title:'Wow Robots App'})
      }
      
  getUsers = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          this.setState({usersData:data})
        })
        .catch(e => {
          console.log(e);
        })
      }

      searchUser = (e) => {
        // console.log(e.target.value)
        this.setState({text:e.target.value})
        
      }

      buttonSearch = () =>{
        this.setState({text2:this.state.text})
      }
    

      render(){
        console.log('2 render');
        const {title,subTitle,usersData,text,text2} = this.state;
    
        const filterData = usersData.filter(item => {
          return item.name.toLowerCase().includes(text2.toLowerCase())
        });
    
        return (
          <>
            <div>
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
              <div>
              <button onClick={this.changeTitles}>Change Title</button>
              <button onClick={this.getUsers}>Get Users</button>
              <Search searchUser={this.searchUser} buttonSearch={this.buttonSearch} />
              </div>
                {
                 filterData.map((item, index)=> {
                   return(
                     <User id={item.id} name={item.name} username={item.username} email={item.email} key={index} />
                 )
              })
           }
          </div>
          </>
       );
      } 
  
    }
    

export default App;
