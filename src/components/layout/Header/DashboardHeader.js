import { FaUserCircle } from "react-icons/fa";
import classes from "./DashboardHeader.module.css";
import { Link } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes['site-name-link']}><h2>پول‌افزار</h2></Link>
      <div>
        <button className={classes['icon-btn']}><MdNotificationsActive /></button>
        <button className={classes['icon-btn']}><FaUserCircle /></button>
      </div>
    </header>
  );
}
 
export default DashboardHeader;