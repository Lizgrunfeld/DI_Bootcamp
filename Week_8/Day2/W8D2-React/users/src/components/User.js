import './User.css';
import * as React from 'react';

const User = (props) => {
    const {name,username,email,id} = props;
   
    return(

        <div className='dib b1sb m20 tac pd'>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <h4>{username}</h4>
            <h4>{email}</h4>
        </div>

     
    )
}

export default User








// different ways to style 
//inline below

// //<div style={{
//     display:'inline-block',
//     margin:'20px',
//     border:'1px solid black',
//     padding: '20px',
//     textAlign:'center'
//     }}>