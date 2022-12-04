import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import './InputGanData.css'

function InputGanForm() {
  const [data,setData] = useState({
        ganName:'',
        locationCity:'',
        locationAddress:'',
        ageLowMonth:0,
        ageHighMonth:0,
        ratio:0,
        website:'',
        pictures:'',
        owner:'',
        contactPhone:0,
        specialties:'',
        fridayClass:(false)
  })

function submit(e) {
    e.preventDefault();
    Axios.post('http://localhost:3001/creategan',{
        ganName: data.ganName,
        locationCity: data.locationCity,
        locationAddress: data.locationAddress,
        ageLowMonth: data.ageLowMonth,
        ageHighMonth: data.ageHighMonth,
        ratio: data.ratio,
        website: data.website,
        pictures: data.pictures,
        owner: data.owner,
        contactPhone: data.contactPhone,
        specialties: data.specialties,
        fridayClass: data.fridayClass
    })
    .then(res =>{
        console.log("success")
        console.log(res.data)
    })
}

function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}
  return (
    <div className="inputGanform">
      <div>
        <form onSubmit={(e)=>submit(e)} action="/" method="POST" className="information">
      <label htmlFor="ganName">Gan Name:</label>
      <input
          type="text"
          id="ganName"
          name="ganName"
          value={data.ganName}
          onChange={(e)=>{
          handle(e);
          }}
          />
      <label htmlFor="locationCity">City:</label>
      <select
          id="locationCity"
          name="locationCity"
          value={data.locationCity}
          onChange={(e)=>{
          handle(e);
          }}
          >
        <option value="telaviv">Tel Aviv</option>
        <option value="ramatgan">Ramat Gan</option>
        <option value="givatayim">Givatayim</option>
        </select>
      <label htmlFor="locationAddress">Address:</label>
        <input 
            type="text"
            id="locationAddress"
            name="locationAddress"
            value={data.locationAddress}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="ageLowMonth">Youngest age accepted in months:</label>
        <input 
            type="number"
            id="ageLowMonth"
            name="ageLowMonth"
            value={data.ageLowMonth}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="ageHighMonth">Highest age accepted in months:</label>
        <input
            type="number"
            id="ageHighMonth"
            name="ageHighMonth"
            value={data.ageHighMonth}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="ratio">Student to Teacher Ratio:</label>
        <input
            type="number"
            id="ratio"
            name="ratio"
            value={data.ratio}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="website">Website:</label>
        <input
            type="text"
            id="website"
            name="website"
            value={data.website}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="pictures">pictures(upload url):</label>
        <input
            type="text"
            id="pictures"
            name="pictures"
            value={data.pictures}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="owner">Owner Name:</label>
        <input
            type="text"
            id="owner"
            name="owner"
            value={data.owner}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="contactPhone">Contact Phone Number:</label>
        <input
            type="number"
            id="contactPhone"
            name="contactPhone"
            value={data.contactPhone}
            onChange={(e)=>{
            handle(e);
            }}
            />
       <label htmlFor="specialties">School Specialties:</label>
      <select
          id="specialties"
          name="specialties"
          value={data.specialties}
          onChange={(e)=>{
          handle(e);
          }}
          >
        <option value="montesorri">Montesorri</option>
        <option value="reggioemilia">Reggio Emilia</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="oudoor">Outdoor School</option>
        </select>
      <label htmlFor="fridayClass">Class on Friday</label>
        <select
            id ="fridayClass"
            name="fridayClass"
            value={data.fridayClass}
            onChange={(e)=>{
            handle(e);
            }}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
                </select>
      <button onClick={InputGanForm}>Add Gan</button>
      </form>
        </div>
      </div>
  );
}

export default InputGanForm;
