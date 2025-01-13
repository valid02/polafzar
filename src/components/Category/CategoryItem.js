import classes from './CategoryItem.module.css';
import {FaPen, FaTrash} from 'react-icons/fa6';

const CategoryItem = ({icon, title, isEditable, manage = false, onEdit, onDelete}) => {
  return (
    <li className={classes['category-item']} style={{cursor: manage ? 'default' : 'pointer'}}>
      <span>
        {icon} {title}
      </span>
      {isEditable && manage && (
        <div className={classes['actions']}>
          <button className={classes['edit-btn']} title='ویرایش' onClick={onEdit}>
            <FaPen />
          </button>
          <button className={classes['delete-btn']} title='حذف' onClick={onDelete}>
            <FaTrash />
          </button>
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
