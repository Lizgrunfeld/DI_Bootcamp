import React from "react";
import './App.css';
import Gan from "./components/Gan";
// import Search from "./components/Search";
import 'tachyons';
import InputGanForm from "./components/InputGanForm";
import Navbar from "./components/Navbar";




class App extends React.Component {
  constructor() {
    super();
    this.state ={
      gans:[],
      text:"",
    }
  }

  componentDidMount(){
    fetch("http://localhost:4000/api/gans")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ gans: data });
      console.log(data)
    })
    .catch((e) =>{
      console.log(e);
    });
  }

  handleSearch = (e) => {
    this.setState({ text: e.target.value });
  }
  

  render() {
    return (
      <div className=''>
        <Navbar handleSearch={this.handleSearch} />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Gan />
        <br/>
        <hr/>
        <InputGanForm />
        
      </div>
  );
  }
}
export default App;