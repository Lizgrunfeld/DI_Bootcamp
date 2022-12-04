import { render } from '@testing-library/react';
import React from 'react';

class AppForm extends React.Component{
    constructor() {
        super();
        this.state ={
            firstName:'',
            lastName:'',
            age:'',
            maleGen:false,
            femaleGen:false,
            destination:0,
            dietRestrict:false
        }
        
    }
    
    componentDidMount(){ 
        this.getUsers()
      }
    
}

export default AppForm