import React, { ChangeEvent, useContext } from 'react';
import styles from '../styles/styles.module.scss';
import ThemeContext, { ThemeOptions } from '../contexts/ThemeContext';

const Navbar = () => {
  const { setTheme, themeStyle } = useContext(ThemeContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const state = e.target.checked;
    setTheme(state ? ThemeOptions.Light : ThemeOptions.Dark);
  }

  return (
    <header>
      <nav className={styles.navbar} style={themeStyle}>
        <input type='checkbox' onChange={handleChange} />
      </nav>
    </header>
  );
};

export default Navbar;
