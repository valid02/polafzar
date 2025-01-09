import ReactDOM from 'react-dom';
import classes from './ContentModal.module.css';
import { IoIosClose } from 'react-icons/io';

const ContentModal = ({ onClose, children, title, inset = '10rem auto auto 4rem', disableScroll = false  }) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={onClose}>
      <section className={classes.section} style={{ inset }} onClick={e => e.stopPropagation()}>
        <header className={classes.header}>
          <h2>{title}</h2>
          <button className={classes['close-btn']} onClick={onClose}>
            <IoIosClose />
          </button>
        </header>

        <div className={classes.content} style={{ overflowY: disableScroll ? 'hidden' : 'auto' }}>
          {children}
        </div>
      </section>
    </div>,
    document.getElementById('portal-root')
  );
};

export default ContentModal;
