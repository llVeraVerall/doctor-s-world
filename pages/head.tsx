import React from 'react';
import styles from '../styles/Style.module.scss';

export const Title: Function = () => {
  return (
    <div className={styles.heder}>
      <h1 className={styles.title}>А вдруг СМА?</h1>
      <p className={styles.p}>Выберите, кто Ваш пациент:</p>
    </div>
  );
};
