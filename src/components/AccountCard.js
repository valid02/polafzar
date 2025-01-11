import classes from './AccountCard.module.css';

const AccountCard = ({name, number, balance, currency}) => {
  return (
    <div className={classes.card}>
      <span className={classes.name}>{name}</span>
      <span className={classes.number}>{number}</span>
      <span className={classes.balance}>
        {currency === 'USD' ? '$' : ''} {balance}
        {currency === 'IRT' ? 'تومان' : ''}
      </span>
    </div>
  );
};

export default AccountCard;
