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
  const { isVisible } = useIntersectionObserver(ref, 0.25);

  useEffect(() => {
    if (isVisible) {
      setLocation(id);
    }
  }, [isVisible, id, setLocation]);

  return (
    <section
      id={id}
      aria-labelledby={title}
      className={styles.layoutContainer}
      ref={ref}
    >
      <header>
        <h1 id={title} className={styles.shuffleTitle} aria-label={title}>
          {title && <ShuffleTitle title={title} />}
        </h1>
      </header>
      <div className={styles.layoutContent}>{children}</div>
    </section>
  );
};

export default SectionCard;
