import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './GanCard.css';
import { useNavigate } from "react-router-dom";

// import CardGroup from 'react-bootstrap/CardGroup';



const GanCard = (props) => {
    const [gans, setGans] = useState([]);
    useEffect(() => {
        fetchGans();
    },[]);
    const fetchGans = () => {
        axios
            .get('http://localhost:4000/api/gans')
            .then((res) => {
                setGans(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    ////use handleClick to try and grab ID -> Send over to GANPAGE api
    const handleClick = event => {
        console.log(event.currentTarget.id);
      };

  
      let navigate = useNavigate(); 
        const routeChange = () => { 
        let path = '/ganpage'; 
        navigate(path);

        }
  return (
    <div className='container'>
    {gans.slice(0, 8).map((gan) =>(
    
    <Card onClick={routeChange} className='card' value={gan.id}>
      <Card.Img className='cardimg' variant="top" src={`http://${gan.pictures}`} alt='whoops' />
      <Card.Body>
        <Card.Subtitle className="mb-2 ">{gan.ganname}</Card.Subtitle>
        <Card.Subtitle className="mb-1 text-muted">{gan.loccity}</Card.Subtitle>
        <Card.Text> {gan.locaddress}</Card.Text>
        <Button onClick={handleClick} variant="success">Book a tour</Button>
      </Card.Body>
    </Card>

    ))}
    </div>
  );
}

export default GanCard;