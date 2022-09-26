import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { RandomReveal } from 'react-random-reveal';
import styles from '@styles/styles.module.scss';

interface Props {
  title: string;
}
const ShuffleTitle = ({ title }: Props) => {
  const [hyrdrated, setHydrated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { isVisible } = useIntersectionObserver(ref);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hyrdrated) return null;

  return (
    <div className={styles.titleContainer} ref={ref}>
      <RandomReveal
        duration={0.85}
        characters={title}
        isPlaying={isVisible}
        aria-hidden={true}
      />

      <span className={styles.titleUnderscore} />
    </div>
  );
};

export default ShuffleTitle;
