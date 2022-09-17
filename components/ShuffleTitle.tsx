import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { RandomReveal } from 'react-random-reveal';
import styles from '../styles/styles.module.scss';

interface Props {
  title: string;
}
const ShuffleTitle = ({ title }: Props) => {
  const [hyrdrated, setHydrated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const { isVisible } = useIntersectionObserver(ref);
  const revealKey = useRef(Math.random().toString());

  // function resetKey() {
  //   revealKey.current = Math.random().toString();
  // }

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hyrdrated) return null;

  return (
    <span ref={ref} className={styles.shuffleTitle}>
      <RandomReveal
        key={revealKey.current}
        duration={0.85}
        characters={title}
        isPlaying={isVisible}
        // onComplete={resetKey}
      />
    </span>
  );
};

export default ShuffleTitle;
