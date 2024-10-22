import classes from './auth.module.css';
import buttonClasses from '../styles/buttons.module.css';
import img from '../assets/images/money-management-financial.png';
import { Link } from 'react-router-dom';
import Checkbox from '../components/UI/Checkbox';
import GoogleLogo from '../components/UI/GoogleLogo';

const LoginPage = () => {
  return (
    <>
      <div className={classes['main-container']}>
        <div className={classes['form-container']}>
          <h1>ورود به حساب کاربری</h1>
          <div className={classes['auth-container']}>
            <p>حساب کاربری ندارید؟</p>
            <Link to="/signup">ثبت‌نام</Link>
          </div>
          <form>
            <div className={classes['input-group']}>
              <label htmlFor="email">ایمیل</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={classes['input-group']}>
              <div className={classes['forgot-password-container']}>
                <label htmlFor="password">رمز عبور</label>
                <Link to="/forgot-password">رمز عبور را فراموش کرده‌اید؟</Link>
              </div>
              <input type="password" id="password" name="password" />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="remember-me" className={classes.checkbox}>
                <Checkbox id="remember-me" size="25px" />
                من را به خاطر بسپار
              </label>
            </div>
            <button className={`${buttonClasses.button} ${buttonClasses.primary}`} type="submit">
              ورود
            </button>
          </form>
          <button className={`${buttonClasses.button} ${buttonClasses.secondary}`} type="button">
            <GoogleLogo />
            ورود سریع با گوگل
          </button>
        </div>
        <div className={classes['img-container']}>
          <img src={img} alt="مدیریت هزینه" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
