import React from "react";
import {useState} from 'react';
import './InputGanForm.css'
import axios from "axios";

const InputGanForm = (e) => {
  const [data,setData] = useState({
        ganname:'',
        loccity:'',
        locaddress:'',
        agelowmonths:0,
        agehighmonths:0,
        ratio:0,
        website:'',
        pictures:'',
        owner:'',
        contactphone:0,
        special:''
  })


const url = 'http://localhost:4000/api/gans/creategan'
    const submitForm = async (e) =>{
        e.preventDefault();
        const formData ={
            ganname: data.ganname,
            loccity: data.loccity,
            locaddress: data.locaddress,
            agelowmonths: data.agelowmonths,
            agehighmonths: data.agehighmonths,
            ratio: data.ratio,
            website: data.website,
            pictures: data.pictures,
            owner: data.owner,
            contactphone: data.contactphone,
            special: data.special
        }

        console.log(JSON.stringify(formData));

        axios.post(url, formData)
        .then(res =>{
                    console.log("success")
                    console.log(res.data)})
        .catch(err => {console.log(err)
        return console.log(err)})
    };


function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}
  return (
    <div className="inputGanform">
      <h1>Add your Gan</h1>
      <div>
        <form onSubmit={(e)=>submitForm(e)} action="/" method="POST" className="information">
      <label htmlFor="ganname">Gan Name:</label>
      <input
          type="text"
          id="ganname"
          name="ganname"
          value={data.ganname}
          onChange={(e)=>{
          handle(e);
          }}
          />
      <label htmlFor="loccity">City:</label>
      <select
          id="loccity"
          name="loccity"
          value={data.loccity}
          onChange={(e)=>{
          handle(e);
          }}
          >
        <option value="telaviv">Tel Aviv</option>
        <option value="ramatgan">Ramat Gan</option>
        <option value="givatayim">Givatayim</option>
        </select>
      <label htmlFor="locaddress">Address:</label>
        <input 
            type="text"
            id="locaddress"
            name="locaddress"
            value={data.locaddress}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="agelowmonths">Youngest age accepted in months:</label>
        <input 
            type="number"
            id="agelowmonths"
            name="agelowmonths"
            value={data.agelowmonths}
            onChange={(e)=>{
            handle(e);
            }}
            />
      <label htmlFor="agehighmonths">Highest age accepted in months:</label>
        <input
            type="number"
            id="agehighmonths"
            name="agehighmonths"
            value={data.agehighmonths}
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
      <label htmlFor="contactphone">Contact Phone Number:</label>
        <input
            type="number"
            id="contactphone"
            name="contactphone"
            value={data.contactphone}
            onChange={(e)=>{
            handle(e);
            }}
            />
       <label htmlFor="special">School Specialties:</label>
      <select
          id="special"
          name="special"
          value={data.special}
          onChange={(e)=>{
          handle(e);
          }}
          >
        <option value="montesorri">Montesorri</option>
        <option value="reggioemilia">Reggio Emilia</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="oudoor">Outdoor School</option>
        </select>
      <button onClick={InputGanForm}>Add Gan</button>
      </form>
        </div>
      </div>
  );
}

export default InputGanForm;

