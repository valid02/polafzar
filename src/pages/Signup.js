import classes from './auth.module.css';
import img from '../assets/images/money-management-financial.png';
import { Link } from 'react-router-dom';
import Checkbox from '../components/UI/Checkbox';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/UI/Button';
import { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'ایمیل معتبر نیست';
    }
    if (!formData.password) {
      errors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      errors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form data
      console.log('Form submitted', formData);
    }
  };

  return (
    <>
      <div className={classes['main-container']}>
        <div className={classes['form-container']}>
          <h1>ثبت‌نام در پول‌افزار</h1>
          <div className={classes['auth-container']}>
            <p>قبلا ثبت‌نام کرده‌اید؟</p>
            <Link to="/login">ورود</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes['input-group']}>
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={classes.error}>{errors.email}</p>}
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="password">ایجاد رمز عبور</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className={classes.error}>{errors.password}</p>}
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="remember-me" className={classes.checkbox}>
                <Checkbox
                  id="remember-me"
                  name="rememberMe"
                  size="25px"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                با ثبت نام در پول‌افزار، <Link to="/terms">قوانین و مقررات</Link> آن را می‌پذیرم.
              </label>
            </div>
            <Button variant="primary" type="submit">ثبت‌نام</Button>
          </form>
          <Button variant="secondary">
            <FcGoogle size="25px" />
            ثبت‌نام سریع با گوگل
          </Button>
        </div>
        <div className={classes['img-container']}>
          <img src={img} alt="مدیریت هزینه" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
