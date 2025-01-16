import classes from './ConfirmDeleteCategory.module.css';

const ConfirmDeleteCategory = ({ onConfirm, onCancel }) => {
  return (
    <div className={classes.confirmDeleteContainer}>
      <p>از حذف دسته بندی مطمئن هستید؟</p>
      <div className={classes.confirmDeleteButtons}>
        <button className={`${classes.confirmDeleteButton} ${classes.confirm}`} onClick={onConfirm}>
          تایید
        </button>
        <button className={`${classes.confirmDeleteButton} ${classes.cancel}`} onClick={onCancel}>
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteCategory;