import classes from './InputField.module.css';

const InputField = ({ id, label, type, value, onChange, error, placeholder, letterSpacing }) => {
  return (
    <div className={classes['input-group']}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={(error ? classes['input-error'] : '') + (letterSpacing ? classes['letter-spacing'] : '')}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
}
 
export default InputField;