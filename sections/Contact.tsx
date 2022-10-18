import React, { useContext } from 'react';
import SectionCard from '@components/SectionCard';
import ThemeContext from '@contexts/ThemeContext';
import { socialLinks } from '@sections/projectData';
import ClipCopy from '@components/ClipCopy';
// styles
import styles from '@styles/Contact.module.sass';

const Contact = () => {
  const { themeStyle } = useContext(ThemeContext);

  return (
    // change your title and section id
    <SectionCard id='contact' title='CONTACT'>
      <article>
        <p className={styles.articleDescription}>
          {/* change your contact description */}
          Looking for an awesome <b>Frontend Developer</b>? I&apos;m{' '}
          <b>available</b> and looking to mingle! Hit me up and let&apos;s see
          if we&apos;re a match. 💕
        </p>
        <ClipCopy copy='stevevang425@gmail.com' theme={themeStyle} />
        <h2 className={styles.socialLinksTitle}>Connect with me 🤖</h2>
        <section className={styles.socialLinksContainer}>
          {/* add your social information in the projectData.tsx file */}
          {socialLinks.map((s, i) => {
            return (
              <a
                key={i}
                href={s.link}
                aria-label={`navigate to ${s.link}`}
                className={styles.link}
              >
                {s.icon}
              </a>
            );
          })}
        </section>
      </article>
    </SectionCard>
  );
};

export default Contact;
