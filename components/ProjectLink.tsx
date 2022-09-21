import React, { useRef, useContext, ReactElement } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import styles from '../styles/styles.module.scss'

const ProjectLink = ({ children, path }: { children: ReactElement, path: string }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { themeStyle } = useContext(ThemeContext);

  function hoverStyle() {
    if (linkRef.current) {
      linkRef.current.style.backgroundColor = themeStyle.color;
      linkRef.current.style.color = themeStyle.backgroundColor;
    }
  }

  function resetStyle() {
    if (linkRef.current) {
      linkRef.current.style.backgroundColor = '';
      linkRef.current.style.color = '';
    }
  }
  return (
    <a
      href={path}
      ref={linkRef}
      className={styles.projectCardLink}
      onMouseEnter={hoverStyle}
      onMouseLeave={resetStyle}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
