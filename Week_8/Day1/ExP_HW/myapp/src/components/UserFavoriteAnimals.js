
const UserFavoriteAnimals = (props) => {
    const {fav_animals} = props;
    
    return(
        <div>
            <li>{fav_animals}</li>
        </div>
    )
}



export default UserFavoriteAnimals


// const animalLists = this.state.animalLists.map(function(list, index) {
//     var list_data = fav_animals.data;
//     list_data.map(function(data, index) {
//         return (
//             <li key={index}>{data}</li>
//         )
//     });
//     return(
//         <div key={index}>
//             <h2>{list.name}</h2>
//             <ul>
//                 {list_data}
//             </ul>
//         </div>
//     )
// });