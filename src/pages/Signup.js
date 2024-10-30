import classes from './auth.module.css';
import buttonClasses from '../styles/buttons.module.css';
import img from '../assets/images/money-management-financial.png';
import { Link } from 'react-router-dom';
import Checkbox from '../components/UI/Checkbox';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
  return (
    <>
      <div className={classes['main-container']}>
        <div className={classes['form-container']}>
          <h1>ثبت‌نام در پول‌افزار</h1>
          <div className={classes['auth-container']}>
            <p>قبلا ثبت‌نام کرده‌اید؟</p>
            <Link to="/login">ورود</Link>
          </div>
          <form>
            <div className={classes['input-group']}>
              <label htmlFor="email">ایمیل</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="password">ایجاد رمز عبور</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="remember-me" className={classes.checkbox}>
                <Checkbox id="remember-me" size="25px" />
                با ثبت نام در پول‌افزار، <Link to="/terms">قوانین و مقررات</Link> آن را می‌پذیرم.
              </label>
            </div>
            <button className={`${buttonClasses.button} ${buttonClasses.primary}`} type="submit">
              ثبت‌نام
            </button>
          </form>
          <button className={`${buttonClasses.button} ${buttonClasses.secondary}`} type="button">
            <FcGoogle size="25px" />
            ثبت‌نام سریع با گوگل
          </button>
        </div>
        <div className={classes['img-container']}>
          <img src={img} alt="مدیریت هزینه" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
