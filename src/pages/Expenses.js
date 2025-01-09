import { FiPlus } from 'react-icons/fi';
import Button from '../components/UI/Button';
import classes from './Expenses.module.css';
import AddExpenseForm from '../components/AddExpenseForm';
import { useState } from 'react';

const Dummy_Expenses = [
  { 
    id: 'e1',
    title: 'خرید نهار',
    amount: 50000, 
    currency: 'IRT',
    type: 'expense',
    category: 'غذا و نوشیدنی',
    description: 'خرید پیتزا از آکواریوم',
    date: '2024-11-20T14:30:00Z',
    accountId: 'a1',
  },
  { 
    id: 'e2',
    title: 'خرید از سوپرمارکت',
    amount: 20000, 
    currency: 'IRT',
    type: 'expense',
    category: 'سوپرمارکت',
    description: 'کیک معینی پور',
    date: '2024-10-26T18:42:00Z',
    accountId: 'a1',
  }
];

const Expenses = () => {
  const [showForm, setShowForm] = useState(false);

  const hendleAddExpenseClick = () => {
    setShowForm(true);
  };

  const hendleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className={classes.expenses}>
      <Button variant="primary" width="20rem" className={classes['add-expense-btn']} onClick={hendleAddExpenseClick}>
        افزودن هزینه 
        <FiPlus />
      </Button>

      {showForm && <AddExpenseForm onClose={hendleFormClose} />}
    </div>
  );
}
 
export default Expenses;