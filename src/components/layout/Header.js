import classes from './Header.module.css';
import buttonClasses from '../../styles/buttons.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>پول افزار</h2>
      <div>
        <a href="#" className={`${buttonClasses.button} ${buttonClasses.secondary}`}>ورود</a>
        <a href="#" className={`${buttonClasses.button} ${buttonClasses.primary}`}>ثبت نام</a>
      </div>
    </header>
  );
}
 
export default Header;