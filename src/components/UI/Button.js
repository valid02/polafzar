import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = props => {
  const buttonClasses = `${classes.button} ${props.variant ? classes[props.variant] : ''}`;

  if (props.to) {
    return (
      <Link to={props.to} className={buttonClasses} style={{ width: props.width, height: props.height }}>
        {props.children}
      </Link>
    )
  }

  return (
    <button
      type={props.type || 'button'}
      className={`${buttonClasses} ${props.className || ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </button>
  );
}
 
export default Button;