import React from 'react';
import styles from '../styles/Style.module.scss';

export const Option: Function = () => {
  return (
    <>
      <div className={styles.option}>
        <div>
          <div className={styles.hcard}>Взрослый</div>
          <div className={styles.perent}></div>
          <div className={styles.section}>
            Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом
            возрасте. 
          </div>
          <div className={styles.section}>
            По сравнению с СМА у детей, СМА у взрослых может иметь более легкие
            симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа
            неуклонно теряют двигательные навыки. 
          </div>
          <div className={styles.section}>
            По сравнению с СМА в детстве, течение СМА у взрослых может быть
            более коварным и трудным для распознавания. 
          </div>
        </div>
        <div>
          <div className={styles.hcard}>Ребенок</div>
          <div className={styles.child}></div>
          <div className={styles.section}>
            Ребенок, плохо удерживающий голову, когда ему придают сидячее
            положение, с вялыми движениями нижних конечностей или с трудом
            тянущийся к предметам, но при этом с осмысленным и ярким взглядом,
            улыбающийся и социально активный, вызывает настороженность в
            отношении наличия СМА.
          </div>
          <div className={styles.section}>
            Младенцам со СМА необходимо экстренное направление к специалисту,
            ранняя диагностика и обеспечение терапией, спасающей жизнь,
            поскольку эти мотонейроны очень быстро подвергаются дегенерации при
            прогрессировании заболевания
          </div>
        </div>
      </div>
      <div>
        <p className={styles.massage}>
          Сообщает ли один из ваших пациентов о следующих симптомах?
          <span className={styles.more}>
            (нажмите на любую иконку и узнайте больше)
          </span>
        </p>
      </div>
    </>
  );
};
