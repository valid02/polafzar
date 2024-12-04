import ReactDOM from 'react-dom';
import classes from './FormModal.module.css';
import { IoIosClose } from 'react-icons/io';

const FormModal = ({ onClose, children, title }) => {
  return ReactDOM.createPortal (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <section className={classes.content}>
        <header className={classes.header}>
          <h2>{title}</h2>
          <button className={classes['close-btn']} onClick={onClose}>
            <IoIosClose />
          </button>
        </header>

        {children}
      </section>

    </>, document.getElementById('portal-root')
  );
}
 
export default FormModal;