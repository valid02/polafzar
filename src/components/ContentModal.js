import ReactDOM from 'react-dom';
import classes from './ContentModal.module.css';
import { IoIosClose } from 'react-icons/io';

const ContentModal = ({ onClose, children, title, inset }) => {
  return ReactDOM.createPortal (
    <div className={classes.backdrop} onClick={onClose}>
      <section className={classes.content} style={{ inset: inset }} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h2>{title}</h2>
          <button className={classes['close-btn']} onClick={onClose}>
            <IoIosClose />
          </button>
        </header>

        {children}
      </section>
    </div>, document.getElementById('portal-root')
  );
}
 
export default ContentModal;