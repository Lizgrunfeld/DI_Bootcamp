import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GanPage = () => {
    const [gans, setGans] = useState([]);
    const fetchGans = () => {
        axios
            .get(`http://localhost:4000/api/gans${gans.id}`)
            .then((res) => {
                setGans(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        /////////////send over selected gan from click. id = id displayed
            <div>
            <div>
                    <div key={gans.id}>
                    <img src={`http://${gans.pictures}`} alt='whoops' />
                    <h3>{gans.ganname}</h3>
                    <p>{gans.loccity}</p>
                    <p>Address{gans.locaddress}</p>
                    <p>Age Range {gans.agelowmonths} - {gans.agehighmonths}</p>
                    <p>Specialties{gans.special}</p>
                    <p>website: {gans.website}</p>
                    
                    <button>Request a tour</button>
               </div>
            </div>
        </div>
        );
};



    
export default GanPage;

