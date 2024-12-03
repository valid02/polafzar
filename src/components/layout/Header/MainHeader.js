import classes from './MainHeader.module.css';
import Button from '../../UI/Button';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h2>پول‌افزار</h2>
      <div>
        <Button to="/login" variant="secondary"> ورود </Button>
        <Button to="/signup" variant="primary"> ثبت‌نام </Button> 
      </div>
    </header>
  );
}
 
export default MainHeader;