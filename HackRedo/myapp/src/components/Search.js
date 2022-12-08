import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import {useState} from "react";




//For Home site - simple
const SearchBar = (props) => {

    return (
      <>
      <div style={{width:'26rem', marginLeft:"auto", marginRight:10}}>
        <InputGroup type='search' className='search'>
          <Form.Control
            placeholder={props.placeholder}
            onChange={props.handleChange}
            aria-label="Enter City or Gan Name"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-success" id="button-addon2">
            Search
          </Button>
        </InputGroup>
        </div>
      </>
    );
  }
  
  export default SearchBar;


      // const [query, setQuery] = useState({
    //     query: '',
    //     list: []
    // })

    // const handleChange = (e) =>{
    //     const results = gans.filter(gan => {
    //         if(e.target.value === "") return gans
    //         return gan.ganname.toLowerCase().includes(e.target.value.toLowerCase())
    //     })
    //     setState({
    //         query: e.target.value,
    //         list: results
    //     })
        
    // }
