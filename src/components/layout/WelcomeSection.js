import classes from './WelcomeSection.module.css';
import buttonClasses from '../../styles/buttons.module.css';
import banner from '../../assets/images/logo_large.png';

const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <div>
        <h1>با حساب و کتاب خرج کن</h1>
        <p>پول های خود را به راحتی مدیریت کنید</p>
        <div>
          <input type='email' placeholder="ایمیل خود را وارد کنید" />
          <button className={`${buttonClasses.button} ${buttonClasses.primary}`}>ثبت‌نام</button>
        </div>
      </div>
      <img src={banner} alt="پول افزار" />
    </section>
  );
}
 
export default WelcomeSection;