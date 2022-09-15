import React, { ReactElement } from 'react';
import styles from '../styles/styles.module.scss';

interface Props {
  id: string;
  title?: string;
  children?: ReactElement;
}

const SectionCard = ({ id, title, children }: Props) => {
  return (
    <section id={id} className={styles.layoutContainer}>
      <h1 className={styles.layoutTitle}>{title}</h1>
      <span className={styles.titleUnderscore} />
      <div className={styles.layoutContent}>{children}</div>
    </section>
  );
};

export default SectionCard;
