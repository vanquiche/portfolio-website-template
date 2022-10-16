import React, { ReactElement, useRef, useContext } from 'react';
import styles from '@styles/ProgressBar.module.sass';
import ThemeContext from '@contexts/ThemeContext';

interface Props {
  children: ReactElement;
  animateTo?: string;
  onClick?: () => void;
  containerStyle?: React.CSSProperties;
  delay?: string;
  fixed?: boolean;
}

const ProgressBarContainer = ({
  children,
  animateTo,
  containerStyle,
  fixed,
  delay,
  onClick,
}: Props) => {
  const contentContainer = useRef<HTMLDivElement>(null);
  const { themeStyle } = useContext(ThemeContext);
  const barRef = useRef<HTMLSpanElement>(null);
  const barStyle = {
    backgroundColor: themeStyle.color,
    color: themeStyle.backgroundColor,
    width: fixed ? animateTo : '0',
    transitionDelay: delay
  };
  const contentStyle = {
    zIndex: 200,
    fontSize: 'inherit',
    color: fixed ? themeStyle.backgroundColor : 'inherit',
  };

  function invertColor() {
    if (contentContainer.current) {
      contentContainer.current.style.color = themeStyle.backgroundColor;
    }

    // animate width
    if (barRef.current && animateTo && !fixed) {
      barRef.current.style.width = animateTo;
    }
  }

  function resetColor() {
    if (contentContainer.current) {
      contentContainer.current.style.color = '';
    }

    // animate and reset width if not fixed
    if (barRef.current && animateTo && !fixed) {
      barRef.current.style.width = '0';
    }
  }

  function handleClick() {
    onClick && onClick();
  }

  return (
    <div
      style={containerStyle}
      className={styles.fillboxContainer}
      onClick={handleClick}
      // onMouseEnter={fixed ? undefined : invertColor}
      // onMouseLeave={fixed ? undefined : resetColor}
    >
      <div style={contentStyle} ref={contentContainer}>
        {children}
      </div>

      <span style={barStyle} className={styles.fillboxBar} ref={barRef} />
    </div>
  );
};

export default ProgressBarContainer;
