import classes from './WelcomeSection.module.css';
import banner from '../../assets/images/logo_large.png';
import Button from '../UI/Button';

const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <div>
        <h1>با حساب و کتاب خرج کن</h1>
        <p>پول های خود را به راحتی مدیریت کنید</p>
        <div>
          <input type='email' placeholder="ایمیل خود را وارد کنید" />
          <Button variant="primary">ثبت‌نام</Button>
        </div>
      </div>
      <img src={banner} alt="پول افزار" />
    </section>
  );
}
 
export default WelcomeSection;