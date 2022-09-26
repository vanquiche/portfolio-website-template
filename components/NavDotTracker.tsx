import React from 'react';
import styles from '@styles/NavDot.module.sass';

interface Props {
  visible: boolean;
  color: string;
}

const NavDotTracker = ({ visible, color }: Props) => {
  const bgColor: React.CSSProperties = {
    backgroundColor: color,
  };

  const visibility: React.CSSProperties = {
    opacity: visible ? 1 : 0,
  };

  return (
    <span
      className={styles.navDotTracker}
      style={{ ...bgColor, ...visibility }}
    />
  );
};

export default NavDotTracker;
