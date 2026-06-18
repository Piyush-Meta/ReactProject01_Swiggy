import { useState , useEffect} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [LogginStatus, setLogginStatus] = useState("Login");
  //if no dependency array then useeffect is called on every render.
  // i fthe depen. array is empty then useeffect is called only once after the first render.
  // if we put something in the depend. then everytime the thing changes the useeffect is called.
  useEffect(() => {

  }, []); 
 // const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>Online: {onlineStatus ? "Yes" : "No"}</li> */}
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}<li>
  <Link to="/about">About</Link>
</li>
          <li> <Link to="/contact">Contact</Link> </li>
          <li>Cart</li>
          <li> <Link to="/grocery">Grocery</Link> </li>
         <li> <button className="login-btn" onClick ={()=> {
            LogginStatus === "Login" ? setLogginStatus("Logout") : setLogginStatus("Login");
          }}>{LogginStatus}</button> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;