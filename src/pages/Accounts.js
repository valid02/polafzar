import { CiCreditCard2 } from 'react-icons/ci';
import classes from './Accounts.module.css';
import AccountSlider from '../components/AccountSlider';
import { useState } from 'react';
import AddAccountForm from '../components/AddAccountForm';

const Accounts = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddAccountClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.accounts}>
        <div className={classes['add-account']} onClick={handleAddAccountClick}>
          <span className={classes['add-account-icon']}>
            <CiCreditCard2 />
            <span>+</span>
          </span>
          <h2>افزودن حساب</h2>
        </div>

        <AccountSlider />

        {showForm && <AddAccountForm onClose={handleFormClose} />}
      </div>
    </div>
  );
};

export default Accounts;
