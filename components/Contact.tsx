import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import SectionCard from './SectionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/sharp-solid-svg-icons';
import debounce from 'lodash.debounce';
import styles from '../styles/styles.module.scss';
import ThemeContext from '../contexts/ThemeContext';

const socialLinks: { icon: ReactElement; link: string }[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} title='github icon' size='2x' />,
    link: 'github',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} title='linkedIn icon' size='2x' />,
    link: 'linkedin',
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} title='twitter icon' size='2x' />,
    link: 'twitter',
  },
];

const Contact = () => {
  const [messageOpacity, setMessageOpacity] = useState(0);
  const { themeStyle } = useContext(ThemeContext);
  const emailRef = useRef<HTMLButtonElement>(null);

  const hideMessage = debounce(() => {
    setMessageOpacity(0);
  }, 4000);

  function copyEmail() {
    navigator.clipboard.writeText('stevevang425@gmail.com');
    if (messageOpacity === 0) {
      setMessageOpacity(1);
      hideMessage();
    }
  }

  const clipboardMessageStyle: React.CSSProperties = {
    fontWeight: 600,
    opacity: messageOpacity,
    height: messageOpacity * 40,
    transition: 'height 150ms ease-out, opacity 150ms ease-out',
  };

  function handleMouseEnter() {
    if (emailRef.current) {
      emailRef.current.style.backgroundColor = themeStyle.color;
      emailRef.current.style.color = themeStyle.backgroundColor;
      emailRef.current.style.outlineColor = themeStyle.color;
    }
  }

  function handleMouseLeave() {
    if (emailRef.current) {
      emailRef.current.style.backgroundColor = '';
      emailRef.current.style.color = '';
      emailRef.current.style.outlineColor = '';
    }
  }

  return (
    <SectionCard id='contact' title='CONTACT'>
      <div>
        <p>
          Consequat ullamco amet reprehenderit ad proident veniam sit minim.
          Consequat ullamco amet reprehenderit ad proident veniam sit minim.
        </p>
        <section className={styles.messageEmailWrapper}>
          <p className={styles.clipboardMessage} style={clipboardMessageStyle}>
            Copied to clipboard!
          </p>

          <button
            ref={emailRef}
            className={styles.emailContainer}
            onClick={copyEmail}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>stevevang425@gmail.com</span>
            <FontAwesomeIcon
              icon={faCopy}
              size='lg'
              className={styles.emailCopyIcon}
            />
          </button>
        </section>

        <p className={styles.socialLinksTitle}>Connect with me</p>
        <section className={styles.socialLinksContainer}>
          {socialLinks.map((s, i) => {
            return (
              <a
                key={i}
                href={s.link}
                aria-labelledby={`navigate to ${s.link}`}
              >
                {s.icon}
              </a>
            );
          })}
        </section>
      </div>
    </SectionCard>
  );
};

export default Contact;
