import React from 'react';
import styles from '../styles/styles.module.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <small>Copyright &copy; {date} Steve Vang</small>
    </footer>
  )
}

export default Footer