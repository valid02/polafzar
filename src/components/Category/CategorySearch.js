import {useState} from 'react';
import classes from './CategorySearch.module.css';
import {FaSearch} from 'react-icons/fa';

const CategorySearch = ({categories, onSearchResult}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      onSearchResult(categories);
      return;
    }

    const filteredCategories = categories.filter((category) =>
      category.title.toLowerCase().includes(term.toLowerCase().trim())
    );
    onSearchResult(filteredCategories);
  };

  return (
    <div className={classes.container}>
      <div className={classes['search-wrapper']}>
        <FaSearch className={classes['search-icon']} />
        <input
          className={classes['category-search']}
          type='text'
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder='جستجوی دسته بندی'
        />
      </div>
    </div>
  );
};

export default CategorySearch;
