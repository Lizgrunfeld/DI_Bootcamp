import React from 'react'

class Products extends React.Component{
    constructor() {
        super();
        this.state ={
            products:[],
            search:'',
            name:'',
            price:''
        }
    }

    compondentDidMount(){
        fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({products:data})
        })
        .catch(e => {
            console.log(e);
        })
    }

    typingStart = (e) =>{
        console.log("typing start activates")
        this.setState({ [e.target.name]:e.target.value});

    }

    clickSubmit = () => {
        console.log("Submit activates")
        fetch(`http://localhost:5000/api/search?q=${this.state.search}`)
        .then(res => res.json())
        .then(data => {
            this.setState({products:data})
        })
        .catch(e=>{console.log(e);
        })
    }

    clickAddButton = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/products', {
            method:'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify({name:this.state.name,price:this.state.price})
        })
        .then(res=>res.json())
        .then(data =>{
            this.setState({products:data})
        })
        .cach(e=>{
            console.log(e);
        })
    }

    render(){
        return (
        <div>
            <div>
                Search <input type="text" onChange={this.typingStart} name="search"/>
                <button onClick={this.clickSubmit}>Search</button>
            </div>
            <div>
                <h2>Add product</h2>
                <form onSubmit={this.clickAddButton}>
                    Name: <input type='text' name='name' onChange={this.typingStart} />
                    Price <input type='text' name='price' onChange={this.typingStart}/>
                    <input type='submit' value='Add Product'/>
                </form>
            </div>
            {
                this.state.products.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )}
}

export default Products