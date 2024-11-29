import { IoIosClose } from 'react-icons/io';
import classes from './AddAccountForm.module.css';
import ReactDOM from 'react-dom';
import AccountCard from './AccountCard';
import { useReducer } from 'react';
import { formatNumber } from '../utils/format';

const initialState = {
  name: '',
  number: '',
  balance: '',
  currency: 'IRT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_NUMBER':
      return { ...state, number: action.payload };
    case 'SET_BALANCE':
      return { ...state, balance: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload, balance: '' }; // Reset balance when currency changes
    default:
      return state;
  }
};

const AddAccountForm = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeBalance = e => {
    let formattedValue = formatNumber(e.target.value);

    if (state.currency === 'IRT') {
      formattedValue = formattedValue.split('.')[0];
    }

    dispatch({ type: 'SET_BALANCE', payload: formattedValue });
  };

  const handleChangeName = e => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleChangeNumber = e => {
    dispatch({ type: 'SET_NUMBER', payload: e.target.value });
  };

  const handleChangeCurrency = e => {
    dispatch({ type: 'SET_CURRENCY', payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newAccount = { ...state, key: Math.random().toString() };
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
          <AccountCard
            name={state.name || '******'}
            number={state.number || '-------------'}
            balance={state.balance || '000,000'}
            currency={state.currency}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={classes.form}>
            <div className={classes['input-group']}>
              <label htmlFor="name">نام حساب</label>
              <input type="text" id="name" name="name" onChange={handleChangeName} value={state.name} />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="number">شماره حساب</label>
              <input type="text" id="number" name="number" onChange={handleChangeNumber} value={state.number} />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="balance">موجودی</label>
              <input type="text" id="balance" name="balance" onChange={handleChangeBalance} value={state.balance} />
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
