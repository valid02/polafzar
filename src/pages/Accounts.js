import { CiCreditCard2 } from 'react-icons/ci';
import classes from './Accounts.module.css';

const Accounts = () => {
  return (
    <div className={classes.accounts}>
      <div className={classes['add-account']}>
        <span className={classes['add-account-icon']}>
          <CiCreditCard2 />
          <span>+</span>
        </span>
        <h2>افزودن حساب</h2>
      </div>
    </div>
  );
};

export default Accounts;
