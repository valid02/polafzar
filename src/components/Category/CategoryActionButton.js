import classes from './CategoryActionButton.module.css';

const CategoryActionButton = ({ children, onClick, type, disabled }) => {
  return (
    <div className={classes['category-action-btn']}>
      <button onClick={onClick} type={type || 'button'} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default CategoryActionButton;
