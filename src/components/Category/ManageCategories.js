import CategoryList from "./CategoryList";
import CategorySearch from "./CategorySearch";
import { useState } from "react";
import classes from './ManageCategories.module.css';
import CategoryActionButton from "./CategoryActionButton";
import { FaPlus } from "react-icons/fa6";

const ManageCategories = ({ categories, onAddCategory, onEditCategory, onDeleteCategory }) => {
  const [searchedCategories, setSearchedCategories] = useState(categories);

  return (
    <>
      <CategoryActionButton onClick={onAddCategory}>
        <FaPlus />
        افزودن دسته بندی جدید
      </CategoryActionButton>
      <CategorySearch categories={categories} onSearchResult={setSearchedCategories} />
      <p className={classes['category-label']}>دسته بندی‌ها</p>
      {searchedCategories.length > 0 ? (
        <CategoryList 
          categories={searchedCategories}
          manage = {true}
          onEditCategory={onEditCategory} 
          onDeleteCategory={onDeleteCategory}
        />
      ) : (
        <p className={classes['no-results-massage']}>نتیجه‌ای یافت نشد</p>
      )}
    </>
  );
}
 
export default ManageCategories;