import ContentModal from '../ContentModal';
import {useState} from 'react';
import {
  FaBowlFood,
  FaCouch,
  FaDisplay,
  FaFileInvoiceDollar,
  FaGift,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHouseChimney,
  FaLeaf,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPersonSwimming,
  FaPlaneUp,
  FaReceipt,
  FaScrewdriverWrench,
  FaShapes,
  FaShirt,
  FaStethoscope,
  FaTaxi,
  FaUmbrellaBeach,
  FaWifi
} from 'react-icons/fa6';
import classes from './Category.module.css';
import CategorySelect from './CategorySelect';
import ManageCategories from './ManageCategories';
import AddCategory from './AddCategory';
import ConfirmDeleteCategory from './ConfirmDeleteCategory';
import EditCategory from './EditCategory';

const Categories = [
  {id: 1, title: 'خوراکی و مواد غذایی', icon: <FaBowlFood />, isEditable: false},
  {id: 2, title: 'قسط و بدهی', icon: <FaFileInvoiceDollar />, isEditable: false},
  {id: 3, title: 'اینترنت و شارژ', icon: <FaWifi />, isEditable: false},
  {id: 4, title: 'حمل و نقل', icon: <FaTaxi />, isEditable: false},
  {id: 5, title: 'هزینه های خودرو', icon: <FaScrewdriverWrench />, isEditable: false},
  {id: 6, title: 'قبض', icon: <FaReceipt />, isEditable: false},
  {id: 7, title: 'سلامت و درمان', icon: <FaStethoscope />, isEditable: false},
  {id: 8, title: 'پوشاک و لوازم شخصی', icon: <FaShirt />, isEditable: false},
  {id: 9, title: 'آرایش و بهداشت', icon: <FaLeaf />, isEditable: false},
  {id: 10, title: 'لوازم منزل', icon: <FaCouch />, isEditable: false},
  {id: 11, title: 'کالای دیجیتال', icon: <FaDisplay />, isEditable: false},
  {id: 12, title: 'قرض به دیگران', icon: <FaMoneyBillTransfer />, isEditable: false},
  {id: 13, title: 'خیریه', icon: <FaHandHoldingHeart />, isEditable: false},
  {id: 14, title: 'تفریح و سرگرمی', icon: <FaUmbrellaBeach />, isEditable: false},
  {id: 15, title: 'هزینه مسکن و اجاره', icon: <FaHouseChimney />, isEditable: false},
  {id: 16, title: 'سرمایه گذاری', icon: <FaMoneyBillTrendUp />, isEditable: false},
  {id: 17, title: 'آموزش', icon: <FaGraduationCap />, isEditable: false},
  {id: 18, title: 'مسافرت', icon: <FaPlaneUp />, isEditable: false},
  {id: 19, title: 'ورزش', icon: <FaPersonSwimming />, isEditable: false},
  {id: 20, title: 'هدیه و عیدی', icon: <FaGift />, isEditable: false},
  {id: 21, title: 'متفرقه', icon: <FaShapes />, isEditable: false}
];

const Category = ({onClose}) => {
  const [modalContent, setModalContent] = useState('select');
  const [categories, setCategories] = useState(Categories);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  const handleBack = () => {
    if (modalContent === 'add') {
      setModalContent('manage');
    } else if (modalContent === 'manage') {
      setModalContent('select');
    } else if (modalContent === 'delete') {
      setModalContent('manage');
    } else if (modalContent === 'edit') {
      setModalContent('manage');
    }
  };

  const getTitle = () => {
    switch (modalContent) {
      case 'select':
        return 'انتخاب دسته بندی';
      case 'manage':
        return 'مدیریت دسته بندی‌ها';
      case 'add':
        return 'افزودن دسته بندی';
      case 'delete':
        return 'حذف دسته بندی';
      case 'edit':
        return 'ویرایش دسته بندی';
      default:
        return 'دسته بندی‌ها';
    }
  };

  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
    setModalContent('manage');
  };

  const onCloseAddCategory = () => {
    setModalContent('manage');
  };

  const handleEditCategory = (id) => {
    const category = categories.find(category => category.id === id);
    setCategoryToEdit(category);
    setModalContent('edit');
  };

  const saveEditedCategory = (editedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === editedCategory.id ? editedCategory : category
      )
    );
    setCategoryToEdit(null);
    setModalContent('manage');
  };

  const cancelEditCategory = () => {
    setCategoryToEdit(null);
    setModalContent('manage');
  };

  const handleDeleteCategory = (id) => {
    setCategoryToDelete(id);
    setModalContent('delete');    
  };

  const confirmDeleteCategory = () => {
    setCategories((prevCategories) => prevCategories.filter(category => category.id !== categoryToDelete));
    setCategoryToDelete(null);
    setModalContent('manage');
  };

  const cancelDeleteCategory = () => {
    setCategoryToDelete(null);
    setModalContent('manage');
  };

  return (
    <>
      <ContentModal
        onClose={onClose}
        title={getTitle()}
        inset='16rem auto auto 8rem'
        disableScroll
        showBackButton={modalContent !== 'select'}
        onBackClick={handleBack}
      >
        {modalContent === 'select' && (
          <CategorySelect
            categories={categories}
            onManageCategories={() => setModalContent('manage')}
          />
        )}
        {modalContent === 'manage' && (
          <ManageCategories
            categories={categories}
            onAddCategory={() => setModalContent('add')}
            onEditCategory={handleEditCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        )}
        {modalContent === 'add' && <AddCategory onAddCategory={addCategory} onCancel={onCloseAddCategory} />}
        {modalContent === 'delete' && (
          <ConfirmDeleteCategory
            onConfirm={confirmDeleteCategory}
            onCancel={cancelDeleteCategory}
          />
        )}
        {modalContent === 'edit' && (
          <EditCategory
            category={categoryToEdit}
            onSave={saveEditedCategory}
            onCancel={cancelEditCategory}
          />
        )}
      </ContentModal>
    </>
  );
};

export default Category;
