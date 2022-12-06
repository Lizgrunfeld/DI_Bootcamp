
const Gan = (props)  => {
    const {gan} = props;
   
    
    return (
        <div className="tc grow bg-light-tan br3 pa3 ma2 dib">
            <h2>{gan.ganname}</h2>
            <h4>{gan.loccity}</h4>
            <p>{gan.website}</p>
        </div>
        )
    }
    
    export default Gan