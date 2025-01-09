import ContentModal from "./ContentModal";
import InputField from "./UI/InputField";
import classes from "./AddExpenseForm.module.css";
import CurrencySelector from "./UI/CurrencySelector";
import { useState } from "react";
import RadioOptionSelector from "./UI/RadioOptionSelector";
import Button from "./UI/Button";
import Category from "./Category/Category";

const AddExpenseForm = (props) => {
  const [currency, setCurrency] = useState('IRT');
  const [transactionType, setTransactionType] = useState('expense');
  const [Opencategory, setOpenCategory] = useState(false);

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
  };
  
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const handleCategoryClick = () => {
    setOpenCategory(!Opencategory);
  };

  return (
    <ContentModal onClose={props.onClose} title="افزودن هزینه">
      <form>
        <div className={classes.form}>
          <InputField
            id="title"
            label="عنوان"
            type="text"
            // value=""
            // onChange={() => {}}
            error=""
            placeholder="عنوان هزینه را وارد کنید"
          />

          <InputField
            id="amount"
            label="مقدار"
            type="text"
            // value=""
            // onChange={() => {}}
            error=""
            placeholder="مقدار هزینه را وارد کنید"
          />
          

          <CurrencySelector selectedCurrency={currency} onCurrencyChange={handleCurrencyChange} />
          
          <RadioOptionSelector
            title="نوع تراکنش"
            options={[
              { value: 'expense', label: 'هزینه' },
              { value: 'income', label: 'درآمد' },
            ]}
            selectedOption={transactionType}
            onOptionChange={handleTransactionTypeChange}
          />

          <Button variant="primary" onClick={handleCategoryClick}>دسته بندی ها</Button>

          {Opencategory && <Category onClose={handleCategoryClick}/>}
        </div>
      </form>
    </ContentModal>
  );
}
 
export default AddExpenseForm;