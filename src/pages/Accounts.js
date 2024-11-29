import { CiCreditCard2 } from 'react-icons/ci';
import classes from './Accounts.module.css';
import AccountSlider from '../components/AccountSlider';
import { useState } from 'react';
import AddAccountForm from '../components/AddAccountForm';


const Dummy_Accounts = [
  { name: 'حساب 1', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a1' },
  { name: 'حساب 2', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a2' },
  { name: 'نوبیتکس', number: 'LqYrg', balance: '100', currency: 'USD', key: 'a3' },
  { name: 'حساب 4', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a4' },
  { name: 'حساب 5', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a5' },
  { name: 'حساب 6', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a6' },
  { name: 'حساب 7', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a7' },
  { name: 'حساب 8', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a8' },
  { name: 'حساب 9', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a9' },
  { name: 'حساب 10', number: '1234567890', balance: '100,000', currency: 'IRT', key: 'a10' },
];

const Accounts = () => {
  const [showForm, setShowForm] = useState(false);
  const [accounts, setAccounts] = useState(Dummy_Accounts);

  const handleAddAccountClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const addAcountHandler = (account) => {
    setAccounts((prevAccounts) => [account, ...prevAccounts]);
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

        <AccountSlider accounts={accounts} />

        {showForm && <AddAccountForm onClose={handleFormClose} onAddAccount={addAcountHandler} />}
      </div>
    </div>
  );
};

export default Accounts;
