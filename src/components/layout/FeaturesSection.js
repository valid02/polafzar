import React from 'react';
import styles from './FeaturesSection.module.css';
import pieChart from '../../assets/images/pie-chart.png';
import money from '../../assets/images/money.png';
import barChart from '../../assets/images/bar-chart.png';

const FeaturesSection = () => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.feature}>
        <img src={pieChart} alt="مدیریت هزینه‌ها" className={styles.featureIcon} />
        <h3>مدیریت هزینه‌ها</h3>
        <p>به راحتی تمام هزینه‌های خود را در یک مکان ثبت کنید و به صورت روزانه، هفتگی و ماهانه آنها را پیگیری کنید.</p>
      </div>

      <div className={styles.feature}>
        <img src={money} alt="تنطیم بودجه" className={styles.featureIcon} />
        <h3>قابلیت تنظیم بودجه</h3>
        <p>بودجه‌های مشخصی برای دسته‌بندی‌های مختلف هزینه‌ها تعیین کنید و از تجاوز از بودجه خود جلوگیری کنید.</p>
      </div>

      <div className={styles.feature}>
        <img src={barChart} alt="گزارش‌گیری و تحلیل مالی" className={styles.featureIcon} />
        <h3>گزارش‌گیری و تحلیل مالی</h3>
        <p>با گزارش‌گیری جامع و تحلیل‌های مالی، دیدگاه بهتری نسبت به الگوهای هزینه‌ای خود پیدا کنید و تصمیمات بهتری بگیرید.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
