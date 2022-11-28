

const User = (props) => {
        const {first_name,last_name} = props;

        return(
            <div>
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
            </div>
        )
}

export default User