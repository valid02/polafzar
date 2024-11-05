import classes from './MainHeader.module.css';
import buttonClasses from '../../../styles/buttons.module.css';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h2>پول‌افزار</h2>
      <div>
        <Link to="login" className={`${buttonClasses.button} ${buttonClasses.secondary}`}>ورود</Link>
        <Link to="signup" className={`${buttonClasses.button} ${buttonClasses.primary}`}>ثبت‌نام</Link>
      </div>
    </header>
  );
}
 
export default MainHeader;