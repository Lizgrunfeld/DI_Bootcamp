import React from "react";
import './App.css';
// import Gan from "./components/Gan";
// import Search from "./components/Search";
import Navigationbar from "./components/Navigationbar";
import 'tachyons';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Availability from './pages/availability';
import SearchClient from "./pages/search";
import SignUpGan from "./pages/signupgan";



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
        <Router>
        <Navigationbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/search' element={<SearchClient />} />
          <Route path='/availability' element={<Availability/>} />
          <Route path='/signupgan' element={<SignUpGan />} />
        </Routes>
        </Router>
        {/* <Gan /> */}
        
        
      </div>
  );
  }
}
export default App;