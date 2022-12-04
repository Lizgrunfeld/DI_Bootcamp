import { render } from '@testing-library/react';
import React from 'react';

class AppForm extends React.Component{
    constructor() {
        super();
        this.state ={
            username:'',
            email:'',
            colorId:0,
            isGo:false
        }
        
    }

    handleInput=(e) => {
        // console.log(e.target.value);
        const value = (e.target.type == 'checkbox') ? e.target.checked: e.target.value;

        this.setState({[e.target.name]:value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        // alert(this.state.username + this.state.email + this.state.colorId + this.state.isGo)
        }
    
    handleCheck = (e) =>{
            this.setState({isGo:e.target.checked})
    }
    // handleSelect= (e) =>{
    //     e.preventDefault();
    //     // console.log(e.target.value);
    //     this.setState({colorId:e.target.value})
    

    render(){
        return(
        <>
            <form onSubmit={this.handleSubmit}>
                Username: <input type='text' name="username" onChange={this.handleInput} placeholder="Enter username" />
                Email: <input type='text' name="email" onChange={this.handleInput} placeholder="Enter email" />
                <select name='colorId' onChange={this.handleInput}>
                <option value='1'> Red</option>
                <option  value='2'> Blue</option>
                <option  value='3'> Green</option>
                </select>

                Is Going:<input type="checkbox" name="isGo" onChange={this.handleCheck}></input>
                <input type='submit' value ='submit' />
            </form>

{/* ///to display it */}
            <div>
            
            {this.state.username}
            {this.state.email}
            {this.state.colorId}
            {this.state.isGo}

            </div>
        </>
        )
    }
}

export default AppForm