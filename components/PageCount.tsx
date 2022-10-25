import React, { useRef } from 'react';
import styles from '@styles/PageCount.module.sass';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

interface Props {
  count: string;
}

const PageCount = ({ count }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(ref);
  const animateStyle: React.CSSProperties = {
    opacity: isVisible ? 0.3 : 0,
    transition: 'opacity 700ms ease-out',
  };
  return (
    <div ref={ref} className={styles.container} style={animateStyle}>
      <span style={{fontFamily: 'Archivo Black, sans-serif'}}>{count}</span>
    </div>
  );
};

export default PageCount;
