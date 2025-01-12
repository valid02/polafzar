import classes from './CategoryActionButton.module.css';

const CategoryActionButton = ({ children, onClick, type, disabled, className }) => {
  const style = `${classes['category-action-btn']} ${className || ''}`;

  return (
    <div className={style}>
      <button onClick={onClick} type={type || 'button'} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default CategoryActionButton;
