import React from 'react';
import styles from '@styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Code &amp; design by <strong>Steve Vang</strong>
      </span>
      <span>
        Interested in using this as a template for your own <b>portfolio</b>?
        Check out the{' '}
        <a href='https://github.com/vanquiche/portfolio-website-template'>
          repository
        </a>{' '}
        👈
      </span>
    </footer>
  );
};

export default Footer;
