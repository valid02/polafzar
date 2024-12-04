import classes from './AddAccountForm.module.css';
import AccountCard from './AccountCard';
import { useReducer } from 'react';
import { formatNumber } from '../utils/format';
import Button from './UI/Button';
import FormModal from './FormModal';
import InputField from './UI/InputField';

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

  return (
    <FormModal onClose={props.onClose} title="افزودن حساب جدید">
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
          <InputField
            id="name"
            label="نام حساب"
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
            error={state.errors.name}
          />
          <InputField
            id="number"
            label="شماره حساب"
            type="text"
            value={state.number}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'number', value: e.target.value })}
            letterSpacing={true}
          />
          <InputField
            id="balance"
            label="موجودی"
            type="text"
            value={state.balance}
            onChange={handleBalanceChange}
            error={state.errors.balance}
            letterSpacing={true}
          />
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
    </FormModal>
  );
};

export default AddAccountForm;
