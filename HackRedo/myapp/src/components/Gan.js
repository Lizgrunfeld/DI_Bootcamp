import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import CardGroup from 'react-bootstrap/CardGroup';


const Gan = () => {
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
        <div>
            <h1>Featured Gans</h1>
            <hr/>
            <div className='item-container'>
                {gans.slice(0, 6).map((gan) =>(
                    <div className='card' key={gan.id}>
                    <img src='https://i.picsum.photos/id/23/200/200.jpg?hmac=IMR2f77CBqpauCb5W6kGzhwbKatX_r9IvgWj6n7FQ7c' alt='whoops' />
                    <h3>{gan.ganname}</h3>
                    <p>{gan.loccity}</p>
                    <p>{gan.locaddress}</p>
                    <button>Book a tour</button>
               </div>
                ))}
            </div>
        </div>
        );
};


// return (
//     <div>
//         <h1>Featured Gans</h1<div>
//             <div>
//                 {gans.slice(0, 4).map((gan) =>(
//                  <div key={gan.id}>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src="holder.js/100px180" />
//                         <Card.Body>
//                             <Card.Title>{gan.ganname}</Card.Title>
//                             <Card.Text>
//                             {gan.loccity}
//                             {gan.locaddress}
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                          </Card.Body>
//                     </Card>
//                  </div>
//                 ))}
//             </div>
//     </div>
//         );
//     );

    
export default Gan


// return (
//     <div>
//         <h1>Featured Gans</h1>
//         <div className='item-container'>
//             {gans.slice(0, 4).map((gan) =>(
//                 <div className='card' key={gan.id}>
//                 <img src='https://i.picsum.photos/id/23/200/200.jpg?hmac=IMR2f77CBqpauCb5W6kGzhwbKatX_r9IvgWj6n7FQ7c' alt='whoops' />
//                 <h3>{gan.ganname}</h3>
//                 <p>{gan.loccity}</p>
//                 <p>{gan.locaddress}</p>
//            </div>
//             ))}
//         </div>
//     </div>
//     );