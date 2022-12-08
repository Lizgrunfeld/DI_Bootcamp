import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import {useState} from "react";




//For Home site - simple
function SearchBar() {
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

    return (
      <>
      <div style={{width:'26rem', marginLeft:"auto", marginRight:10}}>
        <InputGroup className="mb-3">
          <Form.Control value={query} onChange={handleChange}
            placeholder="Enter City or Gan Name"
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
