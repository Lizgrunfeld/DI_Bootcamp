import User from "./User";


const Search = (props) =>{

    return (
        <>
<input type='text' searchUsers={props.searchUsers}/>
<button buttonClick={props.buttonClick}>Search</button>

        </>
    )
}

export default Search