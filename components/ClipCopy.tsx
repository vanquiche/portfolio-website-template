import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';
import styles from '@styles/ClipCopy.module.sass';

interface Props {
  copy: string;
  theme: {
    backgroundColor: string;
    color: string;
  };
}

const ClipCopy = ({ copy, theme }: Props) => {
  const [messageOpacity, setMessageOpacity] = useState(0);
  const fillbarRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  // debounce to limit user from spamming copy button
  const hideMessage = debounce(() => {
    setMessageOpacity(0);
  }, 4000);

  const copyEmail = (str: string) => () => {
    navigator.clipboard.writeText(str);
    if (messageOpacity === 0) {
      setMessageOpacity(1);
      hideMessage();
    }
  };

  const emailContainerStyle: React.CSSProperties = {
    backgroundColor: theme.color,
    color: theme.backgroundColor,
  };

  const clipboardMessageStyle: React.CSSProperties = {
    fontWeight: 500,
    opacity: messageOpacity,
    height: messageOpacity * 40,
    transition: 'height 150ms ease-out, opacity 150ms ease-out',
  };

  const contentStyle: React.CSSProperties = {
    zIndex: 200,
  };

  const fillbarStyle: React.CSSProperties = {
    zIndex: 100,
    backgroundColor: theme.color,
  };

  function handleMouseEnter() {
    if (contentRef.current) {
      contentRef.current.style.color = theme.backgroundColor;
    }
  }

  function handleMouseLeave() {
    if (contentRef.current) {
      contentRef.current.style.color = '';
    }
  }
  return (
    <section
      className={styles.messageEmailWrapper}
      aria-label='copy to clipboard'
    >
      <p className={styles.clipboardMessage} style={clipboardMessageStyle}>
        Copied to clipboard!
      </p>
      <button
        className={styles.emailContainer}
        onClick={copyEmail(copy)}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        style={emailContainerStyle}
      >
        <span ref={contentRef} style={contentStyle}>
          <span className={styles.email}>{copy}</span>
          <FontAwesomeIcon
            icon={faCopy}
            size='lg'
            className={styles.emailCopyIcon}
          />
        </span>
        <span
          ref={fillbarRef}
          className={styles.fillbar}
          style={fillbarStyle}
        />
      </button>
    </section>
  );
};

export default ClipCopy;
