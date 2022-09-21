import React from 'react';
import styles from '../styles/styles.module.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footer} role='contentinfo'>
   Copyright &copy; {date} Steve Vang
    </footer>
  )
}

export default Footer