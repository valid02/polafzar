import InputField from '../UI/InputField';
import classes from './AddCategory.module.css';
import CategoryActionButton from './CategoryActionButton';
import { useState } from 'react';
import { FaPlus, FaStar } from "react-icons/fa6";


const AddCategory = ({ onAddCategory, onCancel }) => {
  const [enteredCategory, setEnteredCategory] = useState('');

  const addCategoryHandler = (event) => {
    event.preventDefault();
    if (enteredCategory.trim() === '' || enteredCategory.length > 20) {
      return;
    }
    onAddCategory({ id: Date.now(), title: enteredCategory, icon: <FaStar/>, isEditable: true });
    setEnteredCategory('');
  }

  return (
    <>
      <form onSubmit={addCategoryHandler} className={classes.form}>
        <InputField
          className={classes.input}
          id={'addCategory'}
          label={'نام دسته بندی'}
          type={'text'}
          value={enteredCategory}
          onChange={(event) => setEnteredCategory(event.target.value)}
          maxLength={20}
        />
        <span className={classes['category-length']}>20 / {enteredCategory.length}</span>
        <CategoryActionButton type={'submit'} disabled={!enteredCategory}>
          <FaPlus />
          افزودن دسته بندی
        </CategoryActionButton>
      </form>
      <CategoryActionButton onClick={onCancel} className={classes['cancel-btn']}>
        انصراف
      </CategoryActionButton>
    </>
  );
};

export default AddCategory;
