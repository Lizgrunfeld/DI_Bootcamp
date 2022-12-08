
// const Navbar = (props) => {

    
//     return(
//         <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
//             <nav class="f6 fw6 ttu tracked">
//                 <a class="link dim white dib mr3" href="#" title="Home">Home</a>
//                 <a class="link dim white dib mr3" href="#" title="Search">Search</a>
//                 <a class="link dim white dib mr3" href="#" title="ByAvailability">Availability</a>
//                 <a class="link dim white dib" href="#" title="AddGan">Add a Gan</a><br/>
//             </nav>
//         </header>
//     )
// }

// export default Navbar

import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
          <NavLink to="/availability" activeStyle>
            Availability
          </NavLink>
          <NavLink to="/signupgan" activeStyle>
            Add a Gan
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

