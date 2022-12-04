import React from 'react'

class Counter extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

addOne = () =>{
    this.setState({count: this.state.count + 1})
}
render(){
    if(this.state.count > 5){
        throw Error('Crashed....')
    }
    return(
        <div>
        {this.state.count}
        <button onClick={this.addOne}>add</button>
        </div>
        )
    }
}

export default Counter