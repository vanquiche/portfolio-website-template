import React from 'react';
import Image from 'next/image';
import SectionCard from '../SectionCard';
import styles from '../../styles/styles.module.scss';

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
          src='https://picsum.photos/250/250'
          height={250}
          width={250}
          alt='placeholder'
        />
        <div>
          <p>
            {/* add your text here */}
            👋 <b>Hello!</b> I&apos;m<strong> Steve, </strong>a
            <strong> Frontend Developer </strong>
            and I like to build cool things for the web. <b>Javascript</b>,{' '}
            <b>React</b>, and eating <b>cheeseburgers</b> are kinda my thing and
            I think I do them pretty well. In my work, I strive toward stunning
            designs with an emphasis on aesthetics and user-experience.
            <br />
            Did I just pique your interest? Let&apos;s{' '}
            <a onClick={scrollToContact}>
              <b>chat</b>
            </a>{' '}
            💬.
          </p>
        </div>
      </section>
    </SectionCard>
  );
};

export default Intro;
