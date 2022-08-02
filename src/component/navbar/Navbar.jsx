import "./navbar.scss"
import {
  MdOutlineSearch,
  MdOutlineLanguage,
  MdOutlineDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdOutlineList
} from "react-icons/md";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <MdOutlineSearch/>
        </div>
        <div className="items">
          <div className="item">
            <MdOutlineLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdOutlineDarkMode
              className="icon"
              onClick={()=>dispatch({type:"TOGGLE"})}
            />
          </div>
          <div className="item">
            <MdFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MdOutlineList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar