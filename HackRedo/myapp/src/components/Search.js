// import React from 'react';
// import Gan from './Gan';

// class Search extends React.Component{
//   constructor(){
//     super();
//    this.state = {
//       gansData: [],
//       text:'',
//       text2:''
//     }
//   }

   
//   getGans = () =>{
//         fetch('http://localhost:4000/api/gans')
//         .then(res => res.json())
//         .then(data =>{
//           console.log(data);
//           this.setState({ganssData:data})
//         })
//         .catch(e => {
//           console.log(e);
//         })
//       }

//       searchUser = (e) => {
//         // console.log(e.target.value)
//         this.setState({text:e.target.value})
        
//       }

//       buttonSearch = () =>{
//         this.setState({text2:this.state.text})
//       }
    

//   render(){
//     const {gansData,text,text2} = this.state;

//     const filterData = gansData.filter(gan => {
//       return gan.ganname.toLowerCase().includes(text2.toLowerCase())
//     });

//     return (
//         <div>
//           <div className='tc '>
//           <input onChange={this.searchUser} type='text' />
//           <button onClick={this.buttonSearch}>Search</button>
//           </div>
//             {
//              filterData.map((gan, index)=> {
//                return(
//                  <Gan id={gan.id} name={gan.ganname} loccity={gan.loccity} locaddress={gan.locaddress} agelowmonths={gan.agelowmonths}
//                  agehighmonths={gan.agehighmonths}  ratio={gan.ratio} website={gan.website} pictures={gan.pictures}  owner={gan.owner}
//                  contactphone={gan.contactphone} special={gan.special} key={index} />
//              )
//           })
//        }
//       </div>
//    );
//   }
// }
  


// export default Search;
