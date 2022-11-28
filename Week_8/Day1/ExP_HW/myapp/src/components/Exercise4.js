import './Exercise4.css';



const Exercise4 = () => {
    // const style_header = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };
    return (
<div className={'para'}>
    <h1>A Red Heading</h1>

    <p> This is a paragraph</p>

    <a href="https://www.w3schools.com/">This is a link</a><br></br>

    <form action="/my-handling-form-page" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" /><br></br>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </form>

    <img src="logo192.png" alt="error"></img>

    <ul>
    <li>Coffee</li>
    <li>Milk</li>
    <li>Tea</li>
    </ul>
    </div>
        )
}

export default Exercise4