import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { LinksContext } from "../contexts/LinksContext";


function Navbar() {

  const {userInfo}= useContext(UserInfoContext);
  const{getLinkDetails} = useContext(LinksContext);

  const NavLink = getLinkDetails(userInfo.userrole);

  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>
      <ul className="nav-links">

        {
          NavLink.map((link,id)=>{
            return(
              <div key={id}>
                <li><Link to={link.linkurl}>{link.linkname}</Link></li>
              </div>
            )
          })
        }
        
        {/* <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
         <li>
          {/* <button type="button" onClick={()=>optionClick("Login")}>Login</button>
          <Link to="login">Login</Link>
        </li> */}
         <li>
          <span>
            {userInfo.userfname + userInfo.userlname}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 