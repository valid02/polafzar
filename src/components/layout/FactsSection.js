import React from 'react';
import styles from './FactsSection.module.css'; // استایل مرتبط با این بخش

const FactsSection = () => {
  const facts = [
    { id: 1, text: 'پیگیری تمامی تراکنش‌ها' },
    { id: 2, text: 'بودجه‌بندی هوشمند' },
    { id: 3, text: 'مدیریت چند حساب' },
    { id: 4, text: 'گزارشات و نمودارهای جامع' },
  ];

  return (
    <div className={styles.factsContainer}>
      {facts.map(fact => (
        <div key={fact.id} className={styles.factItem}>
          <p className={styles.factDescription}>{fact.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FactsSection;
