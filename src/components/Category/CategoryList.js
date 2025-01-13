import CategoryItem from './CategoryItem';
import classes from './CategoryList.module.css';

const CategoryList = ({ categories, onEditCategory, onDeleteCategory, manage }) => {

  return (
    <ul className={classes['category-list']}>
      {categories.map((category) => (
        <CategoryItem 
          key={category.id} 
          {...category}
          manage={manage}
          onEdit={() => onEditCategory(category.id)} 
          onDelete={() => onDeleteCategory(category.id)} 
        />
      ))}
    </ul>
  );
};

export default CategoryList;