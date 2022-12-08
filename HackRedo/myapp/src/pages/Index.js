
import React from "react";
import GanCard from "../components/GanCard";
import SearchBar from "../components/Search";

const Home = () => {
    return (
      <div>
        <br/>
        <SearchBar placeholder="Enter Gan Name..." handleChange={(e) => console.log(e)}/>
        <br/>
        <GanCard />
          
      </div>
    );
  };
    
  export default Home;