import { IoIosClose } from 'react-icons/io';
import classes from './AddAccountForm.module.css';
import ReactDOM from 'react-dom';
import AccountCard from './AccountCard';
import { useReducer } from 'react';
import { formatNumber } from '../utils/format';
import Button from './UI/Button';

const initialState = {
  name: '',
  number: '',
  balance: '',
  currency: 'IRT',
  errors: {
    name: '',
    balance: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    case 'RESET_BALANCE':
      return {
        ...state,
        balance: action.balance,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const AddAccountForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateForm = () => {
    let isValid = true;

    if (!state.name.trim()) {
      dispatch({ type: 'SET_ERROR', field: 'name', error: 'نام حساب نمی‌تواند خالی باشد.' });
      isValid = false;
    }

    if (state.balance === '') {
      dispatch({ type: 'SET_ERROR', field: 'balance', error: 'موجودی نمی‌تواند خالی باشد.' });
      isValid = false;
    }

    return isValid;
  };

  const handleBalanceChange = (e) => {
    let formattedValue = formatNumber(e.target.value);

    if (state.currency === 'IRT') {
      formattedValue = formattedValue.split('.')[0];
    }

    dispatch({ type: 'SET_FIELD', field: 'balance', value: formattedValue });
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    dispatch({ type: 'SET_FIELD', field: 'currency', value: newCurrency });

    dispatch({ type: 'RESET_BALANCE', balance: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newAccount = {
      name: state.name,
      number: state.number || '-------------',
      balance: state.balance,
      currency: state.currency,
      key: Math.random().toString(),
    };
    props.onAddAccount(newAccount);
    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClose}>
      <section className={classes['form-section']} onClick={(e) => e.stopPropagation()}>
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
              <input
                type="text"
                id="name"
                value={state.name}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                className={state.errors.name ? classes['input-error'] : ''}
              />
              {state.errors.name && <p className={classes.error}>{state.errors.name}</p>}
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="number">شماره حساب (اختیاری)</label>
              <input
                type="text"
                id="number"
                value={state.number}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'number', value: e.target.value })}
              />
            </div>
            <div className={classes['input-group']}>
              <label htmlFor="balance">موجودی</label>
              <input
                type="text"
                id="balance"
                value={state.balance}
                onChange={handleBalanceChange}
                className={state.errors.balance ? classes['input-error'] : ''}
              />
              {state.errors.balance && <p className={classes.error}>{state.errors.balance}</p>}
            </div>
            <div className={classes['input-group']}>
              <label>واحد پول</label>
              <select value={state.currency} onChange={handleCurrencyChange}>
                <option value="IRT">تومان</option>
                <option value="USD">دلار</option>
              </select>
            </div>
            <Button variant="primary" type="submit" className={classes['submit-btn']}>
              افزودن
            </Button>
          </div>
        </form>
      </section>
    </div>,
    document.getElementById('portal-root')
  );
};

export default AddAccountForm;
