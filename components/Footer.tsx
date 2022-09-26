import React from 'react';
import styles from '@styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer} role='contentinfo'>
      <span>
        Created by <strong>Steve Vang</strong> &amp; coded in <b>Next.js</b>
      </span>
      <span>
        Interested in using this as a template for your own <b>portfolio</b>? Check out
        the <a href=''>repository</a> 👈
      </span>
    </footer>
  );
};

export default Footer;
