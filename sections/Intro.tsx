import React from 'react';
import Image from 'next/image';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';

const Intro = () => {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT'>
      <article
        className={styles.introContainer}
        style={{ position: 'relative' }}
      >
        <BgTitle title='ABOUT' />
        <div>
          <p>
            {/* add your text here */}
            <span className={styles.hello}>Hello! My name is</span>
            <span className={styles.myName}>Steve Vang</span>
            {/* <br /> */}
            I&apos;m a<b> Frontend Developer </b>
            and I build cool things for the web. <b>Javascript</b>, <b>React</b>
            , and eating <b>cheeseburgers</b> are kinda my thing and I think I
            do them pretty well.
          </p>
          Did I just pique your interest? Let&apos;s{' '}
          <a onClick={scrollToContact}>
            <b style={{ textDecoration: 'underline' }}>chat </b>💬
          </a>{' '}
        </div>
      </article>
    </SectionCard>
  );
};

export default Intro;
