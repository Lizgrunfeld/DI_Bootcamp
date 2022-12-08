import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchBarMore() {
    return (
        <div style={{width:'45rem'}}>
        <Form>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gan Name">
            <Form.Label>Gan Name</Form.Label>
            <Form.Control type="text" placeholder="Gan Name" />
          </Form.Group>
          <h6>Specialities:</h6>
          {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Vegetarian"
            name="Vegetarian"
            type={type}
            id={`inline-${type}-Vegetarian`}
          />
          <Form.Check
            inline
            label="Montisori"
            name="Montisori"
            type={type}
            id={`inline-${type}-Montisori`}
          />
          <Form.Check
            inline
            label="Reggio Emilia"
            name="Reggio Emilia"
            type={type}
            id={`inline-${type}-Reggio Emilia`}
          />
          <Form.Check
            inline
            label="Outdoors"
            name="Outdoors"
            type={type}
            id={`inline-${type}-Outdoors`}
          />
          <Button variant="outline-success" id="button-addon2">Search</Button>
        </div>

      ))}
        </Form>
        </div>
      );
    }
  
  export default SearchBarMore;