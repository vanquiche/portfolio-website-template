import React from 'react';
import Image from 'next/image';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';

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
    <SectionCard id='intro' title='WhoAmI?'>
      <section className={styles.introContainer}>
        <Image
          // link your profile image here
          src='https://res.cloudinary.com/dvrs8gsj3/image/upload/v1665114283/profile-image-low_prwdkz.jpg'
          height={250}
          width={250}
          alt='profile image'
        />
        <div>
          <p>
            {/* add your text here */}
            <b>Hello!</b> My name is
            <span className={styles.myName}> Steve Vang</span>{' '}
            {/* <br /> */}
            I&apos;m a<b> Frontend Developer </b>
            and I build cool things for the web. <b>Javascript</b>, <b>React</b>
            , and eating <b>cheeseburgers</b> are kinda my thing and I think I
            do them pretty well.
          </p>
          Did I just pique your interest? Let&apos;s{' '}
          <a onClick={scrollToContact}>
            <b>chat 💬</b>
          </a>{' '}
        </div>
      </section>
    </SectionCard>
  );
};

export default Intro;
