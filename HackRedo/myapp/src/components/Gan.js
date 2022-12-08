import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tachyons';


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
            <></>
            <hr/>
            <div className='item-container'>
                {gans.slice(0, 6).map((gan) =>(
                    <div className='card' key={gan.id}>
                    <img src={`http://${gan.pictures}`} alt='whoops' />
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



    
export default Gan

