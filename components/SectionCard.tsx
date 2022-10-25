import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import styles from '@styles/SectionCard.module.sass';

interface Props {
  id: string;
  title?: string;
  children?: ReactElement;
}

const SectionCard = ({ id, title, children }: Props) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id={id} title={id} className={styles.layoutContainer} ref={ref}>
      <div className={styles.layoutContent}>{children}</div>
    </section>
  );
};

export default SectionCard;
