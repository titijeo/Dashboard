import "./sidebar.scss"
import {
    MdDashboard,
    MdPersonOutline, MdStore,
    MdCreditCard,
    MdOutlineLocalShipping,
    MdInsertChartOutlined,
    MdNotificationsNone,
    MdOutlineSettingsSystemDaydream,
    MdOutlinePsychology,
    MdOutlineSettingsApplications,
    MdOutlineAccountCircle,
    MdOutlineExitToApp
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">jeromeadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <MdDashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <MdPersonOutline className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <MdStore className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <MdCreditCard className="icon" />
                        <span>Orders</span>
                    </li>

                    <li>
                        <MdOutlineLocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <MdInsertChartOutlined className="icon" />
                        <span>Stats</span>
                    </li>

                    <li>
                        <MdNotificationsNone className="icon" />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <MdOutlineSettingsSystemDaydream className="icon" />
                        <span>System Heatth</span>
                    </li>

                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>

                    <li>
                        <MdOutlineSettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <MdOutlineAccountCircle className="icon" />
                        <span>Profile</span>
                    </li>

                    <li>
                        <MdOutlineExitToApp className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>

            </div>
        </div>
    )
}

export default Sidebar