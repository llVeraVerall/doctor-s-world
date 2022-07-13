import React from 'react';
import styles from '../styles/Style.module.scss';

export const Carousel: Function = () => {
  return (
    <div className={styles.centre}>
      <div className={styles.grownup}>Взрослый</div>
      <div className={styles.circle}></div>
      <div className={`${styles.icon} ${styles.icon1}`}>
        <div className={styles.plus}></div>
        <div className={styles.hoverTop}>Сколиоз</div>
      </div>
      <div className={`${styles.icon} ${styles.icon2}`}>
        <div className={styles.plus}></div>
        <div className={styles.hover}>
          Ограниченная способность поднимать руки и переносить предметы
        </div>
      </div>
      <div className={`${styles.icon} ${styles.icon3}`}>
        <div className={styles.plus}></div>
        <div className={styles.hover}>Нарушения жевания и глотания</div>
      </div>
      <div className={`${styles.icon} ${styles.icon4}`}>
        <div className={styles.plus}></div>
        <div className={styles.hover}>
          Дыхательная недостаточность/ респираторная дисфункция
        </div>
      </div>
      <div className={`${styles.icon} ${styles.icon5}`}>
        <div className={styles.plus}></div>
        <div className={styles.hoverBottom}>
          Неспособность бегать, изменение походки
        </div>
      </div>
      <div className={`${styles.icon} ${styles.icon6}`}>
        <div className={styles.plus}></div>
        <div className={styles.hoverLeft}>Контрактура суставов</div>
      </div>
      <div className={`${styles.icon} ${styles.icon7}`}>
        <div className={styles.plus}></div>
        <div className={styles.hoverLeft}>Вывих бедра</div>
      </div>
      <div className={`${styles.icon} ${styles.icon8}`}>
        <div className={styles.plus}></div>
        <div className={styles.hoverLeft}>Утомляемость</div>
      </div>
    </div>
  );
};
