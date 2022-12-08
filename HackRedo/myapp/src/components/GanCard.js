import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './GanCard.css';
// import CardGroup from 'react-bootstrap/CardGroup';



const GanCard = () => {
    const [gans, setGans] = useState([]);
    useEffect(() => {
        fetchGans();
    },[]);
    const fetchGans = () => {
        axios
            .get('http://localhost:4000/api/gans')
            .then((res) => {
                setGans(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

  return (
    <div className='container'>
    {gans.slice(0, 6).map((gan) =>(
    
    <Card className='card'>
      <Card.Img className='cardimg' variant="top" src={`http://${gan.pictures}`} alt='whoops' />
      <Card.Body>
        <Card.Subtitle className="mb-2 ">{gan.ganname}</Card.Subtitle>
        <Card.Subtitle className="mb-1 text-muted">{gan.loccity}</Card.Subtitle>
        <Card.Text> {gan.locaddress}</Card.Text>
        <Button variant="primary">Book a tour</Button>
      </Card.Body>
    </Card>

    ))}
    </div>
  );
}

export default GanCard;