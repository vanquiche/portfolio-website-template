import React from 'react';
import styles from '../styles/styles.module.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <small>&copy; STEVE VANG {date}</small>
    </footer>
  )
}

export default Footer