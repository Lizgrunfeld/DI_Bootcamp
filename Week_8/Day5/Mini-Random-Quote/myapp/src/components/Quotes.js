import React from 'react';



class Quotes extends React.Component {
  constructor(){
    super()
    this.state = {
      quote: '',
      author: ''
    }
  }

  render(){
    const {quote,author} = this.props
    return (
      <div>
        <h2>{this.state.quote}</h2>
        <h4>{author}</h4>
      </div>
    )
  }
}
export default Quotes









// import quotes from '../data';

// class QuotesTest extends React.Component{
//     constructor(props) {
//         super();
//         this.state ={
//             quotes:[],
//             quote:'',
//             author:''
//         }
//     }


// const getQuotes = () => {
//     const allQuotes = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
//     fetch(allQuotes)
//     .then((res => res.json))
//     .then(data =>{
//         console.log(data)
//     })
// }

// return(
//     <div>

//     </div>
// );

// }


// export default QuotesTest;


// class Quotes extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state ={
//             quoteData:[],
//             quote:'',
//             author: ''
        
//     }
// }

// componentDidMount(){
//     fetch('https://type.fit/api/quotes')
//     .then(res => res.json())
//     .then(data => {
//         this.setState({quotes:data})
//     })
//     .catch(e => {
//         console.log(e);
//     })
// }

// randomQuote(){
//     const randomNumber = Math.floor(Math.random() * this.state.quoteData.length);
//     return this.state.quoteData[randomNumber];
// }

// handleClick(){
//     const oneRandomQuote = this.randomQuote();
//     this.setState({
//         quote: oneRandomQuote.quote,
//         author: oneRandomQuote.author
//     })
// }


// render(){
//     return(
//         <div id="quote-box">
//             <h2 id="text">
//                 {this.state.quote}
//             </h2>
//             <h4 id="author">
//                 {this.state.author}
//             </h4>
//             <button onClick={this.handleClick}/>
//         </div>
      
//         )
//     }
// }



// export default Quotes




// {
//     this.state.quote.map(item =>{
//         return(
//             <div>
//                 <h2>{item.quote}</h2>
//                 <p>{item.author}</p>
//                 <button onClick={this.handleClick}> New Quote</button>
//             </div>
//         )
//     })
// }
// </div>