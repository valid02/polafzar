import {useState} from 'react';
import classes from './EditCategory.module.css';
import InputField from '../UI/InputField';

const EditCategory = ({category, onSave, onCancel}) => {
  const [title, setTitle] = useState(category.title);

  const handleSave = () => {
    onSave({...category, title});
  };

  return (
    <div className={classes.editCategoryContainer}>
      <form onSubmit={handleSave}>
        <InputField
          id='categoryTitle'
          label='نام دسته بندی'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.editCategoryInput}
        />
        <div className={classes.editCategoryActions}>
          <button type='submit'>ذخیره</button>
          <button onClick={onCancel}>لغو</button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
