import classes from './InputField.module.css';

const InputField = ({ id, label, type, value, onChange, error, placeholder, letterSpacing, className, maxLength }) => {
  const style = `${classes['input-group']} ${className || ''}`;
  return (
    <div className={style}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={(error ? classes['input-error'] : '') + (letterSpacing ? classes['letter-spacing'] : '')}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
}
 
export default InputField;