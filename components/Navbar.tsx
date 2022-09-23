import React, { useContext } from 'react';
import styles from '../styles/styles.module.scss';
import ThemeContext, { ThemeOptions } from '../contexts/ThemeContext';
import NavDotTracker from './NavDotTracker';
import NavLocationContext from '../contexts/NavLocationContext';
import SwitchBtn from './SwitchBtn';
import { NavLinkType } from './types';

interface Props {
  links: NavLinkType[];
}

const Navbar = ({ links }: Props) => {
  const { setTheme, themeStyle } = useContext(ThemeContext);
  const { location } = useContext(NavLocationContext);

  const handleChange = (checked: boolean) => {
    setTheme(checked ? ThemeOptions.Light : ThemeOptions.Dark);
  };

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const section = id.replace('#', '');
    const el = document.getElementById(section);
    el?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <nav
        className={styles.navbar}
        style={themeStyle}
        aria-labelledby='primary-navigation'
      >
        {links.map((l, i) => {
          return (
            <span className={styles.linkContainer} key={i}>
              <NavDotTracker
                visible={l.path === `#${location}`}
                color={themeStyle.color}
                aria-hidden={true}
              />
              <a href='' onClick={handleClick(l.path)} aria-label={l.name}>
                {l.icon}
              </a>
            </span>
          );
        })}
        <SwitchBtn onChange={handleChange} color={themeStyle.color} />
      </nav>
    </header>
  );
};

export default Navbar;
