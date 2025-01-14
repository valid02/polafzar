import { useState } from 'react';
import classes from './CategorySelect.module.css';
import { FaCog } from 'react-icons/fa';
import CategoryList from './CategoryList';
import CategorySearch from './CategorySearch';
import CategoryActionButton from './CategoryActionButton';

const CategorySelect = ({ categories, onManageCategories  }) => {
  const [searchedCategories, setSearchedCategories] = useState(categories);

  return (
    <>
      <CategoryActionButton onClick={onManageCategories}>
        <FaCog />
        مدیریت دسته بندی‌ها
      </CategoryActionButton>
      <CategorySearch categories={categories} onSearchResult={setSearchedCategories} />
      <p className={classes['category-label']}>انتخاب دسته بندی</p>
      {searchedCategories.length > 0 ? (
        <CategoryList categories={searchedCategories} />
      ) : (
        <p className={classes['no-results-message']}>نتیجه‌ای یافت نشد</p>
      )}
    </>
  );
};

export default CategorySelect;
