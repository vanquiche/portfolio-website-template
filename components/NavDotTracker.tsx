import React from 'react';
import styles from '../styles/styles.module.scss';

interface Props {
  visible: boolean;
  color: string;
}

const NavDotTracker = ({ visible, color }: Props) => {
  const bgColor = {
    backgroundColor: color,
  };

  const visibility = {
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
