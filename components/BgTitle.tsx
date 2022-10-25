import React, { useRef } from 'react';
import styles from '@styles/BgTitle.module.sass';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import '@fontsource/archivo-black';

interface Props {
  title: string;
}

const BgTitle = ({ title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(ref);
  const animateStyle: React.CSSProperties = {
    opacity: isVisible ? 0.3 : 0,
    transition: 'opacity 700ms ease-out',
  };

  return (
    <header className={styles.container} ref={ref} style={animateStyle}>
      <h1 className={styles.title} style={{fontFamily: 'Archivo Black, sans-serif'}}>{title}</h1>
    </header>
  );
};

export default BgTitle;
