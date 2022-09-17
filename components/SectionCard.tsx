import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import NavLocationContext from '../contexts/NavLocationContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/styles.module.scss';
import ShuffleTitle from './ShuffleTitle';

interface Props {
  id: string;
  title?: string;
  children?: ReactElement;
}

const SectionCard = ({ id, title, children }: Props) => {
  const { setLocation } = useContext(NavLocationContext);
  const ref = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(ref);

  useEffect(() => {
    if (isVisible) {
      setLocation(id);
    }
  }, [isVisible]);

  return (
    <section id={id} className={styles.layoutContainer} ref={ref}>
      {title && <ShuffleTitle title={title} />}
      <span className={styles.titleUnderscore} />
      <div className={styles.layoutContent}>{children}</div>
    </section>
  );
};

export default SectionCard;
