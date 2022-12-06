import React from "react";
import './App.css';
import Gan from "./components/Gan";
import Search from "./components/Search";
import 'tachyons';


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

    const {gans, text} = this.state;

    const filterGans = gans.filter((item) =>{
      return item.ganname.toLowerCase().includes(text.toLowerCase());
    });
    return (
      <div className='tc'>
        <Search handleSearch={this.handleSearch}/>
        {filterGans.map((item) => {
            return <Gan gan={item} key={item.id} />
          })}
      </div>
  );
  }
}
export default App;


