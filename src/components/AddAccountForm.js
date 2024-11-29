import { IoIosClose } from 'react-icons/io';
import classes from './AddAccountForm.module.css';
import ReactDOM from 'react-dom';
import AccountCard from './AccountCard';
import { useState } from 'react';
import { formatNumber } from '../utils/format';

const AddAccountForm = (props) => {
  const [balance, setBalance] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [currency, setCurrency] = useState('IRT');

  const handleChangeBalance = (e) => {
    const formattedValue = formatNumber(e.target.value);
    setBalance(formattedValue);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = { name, number, balance, currency, key: Math.random().toString() };
    props.onAddAccount(newAccount);

    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClose}>
      <section className={classes['form-section']} onClick={e => e.stopPropagation()}>
        <header className={classes.header}>
          <h2>افزودن حساب</h2>
          <button className={classes['close-btn']} onClick={props.onClose}>
            <IoIosClose />
          </button>
        </header>

        <div className={classes['account-card']}>
          <AccountCard name={name || "******"} number={number || "-------------"} balance={balance || "000,000"} currency={currency} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={classes.form}>
            <div className={classes['input-group']}>
              <label htmlFor="name">نام حساب</label>
              <input type="text" id="name" name="name" onChange={handleChangeName} value={name} />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="number">شماره حساب</label>
              <input type="text" id="number" name="number" onChange={handleChangeNumber} value={number} />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="balance">موجودی</label>
              <input type="text" id="balance" name="balance" onChange={handleChangeBalance} value={balance} />
            </div>
            <div className={classes['input-group']}>
              <select name="currency" onChange={handleChangeCurrency}>
                <option value="IRT">تومان</option>
                <option value="USD">دلار</option>
              </select>
            </div>
            <button className={`${classes.button} ${classes.primary}`} type="submit">
              افزودن
            </button>
          </div>
        </form>
      </section>
    </div>,
    document.getElementById('portal-root')
  );
};

export default AddAccountForm;
