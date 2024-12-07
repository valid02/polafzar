import classes from './CurrencySelector.module.css';

const CurrencySelector = ({ value, onChange }) => {
  return (
    <div className={classes['input-group']}>
      <label htmlFor="currency">واحد پول</label>
      <select id="currency" value={value} onChange={onChange}>
        <option value="IRT">تومان</option>
        <option value="USD">دلار</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
