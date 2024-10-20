import classes from './auth.module.css';
import buttonClasses from '../styles/buttons.module.css';
import img from '../assets/images/money-management-financial.png';
import { Link } from 'react-router-dom';
import Checkbox from '../components/UI/Checkbox';

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
            <svg data-v-e0355c64="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" aria-labelledby="googleIcon" class="google-icon-style">
              <path
                d="M15.8299 8.17984C15.8299 7.65317 15.7833 7.15317 15.7033 6.6665H8.16992V9.67317H12.4833C12.2899 10.6598 11.7233 11.4932 10.8833 12.0598V14.0598H13.4566C14.9633 12.6665 15.8299 10.6132 15.8299 8.17984Z"
                fill="#4285F4"
              ></path>
              <path
                d="M8.17027 16.0002C10.3303 16.0002 12.1369 15.2802 13.4569 14.0602L10.8836 12.0602C10.1636 12.5402 9.25027 12.8335 8.17027 12.8335C6.08361 12.8335 4.31694 11.4269 3.68361 9.52686H1.03027V11.5869C2.34361 14.2002 5.04361 16.0002 8.17027 16.0002Z"
                fill="#34A853"
              ></path>
              <path
                d="M3.68326 9.52691C3.51659 9.04691 3.42992 8.53357 3.42992 8.00024C3.42992 7.46691 3.52326 6.95357 3.68326 6.47357V4.41357H1.02992C0.483255 5.49357 0.169922 6.70691 0.169922 8.00024C0.169922 9.29357 0.483255 10.5069 1.02992 11.5869L3.68326 9.52691Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M8.17027 3.16667C9.35027 3.16667 10.4036 3.57334 11.2369 4.36667L13.5169 2.08667C12.1369 0.793334 10.3303 0 8.17027 0C5.04361 0 2.34361 1.8 1.03027 4.41334L3.68361 6.47334C4.31694 4.57334 6.08361 3.16667 8.17027 3.16667Z"
                fill="#EA4335"
              ></path>
            </svg>
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
