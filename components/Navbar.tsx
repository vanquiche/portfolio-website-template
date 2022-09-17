import React, { useContext } from 'react';
import styles from '../styles/styles.module.scss';
import ThemeContext, { ThemeOptions } from '../contexts/ThemeContext';
import NavDotTracker from './NavDotTracker';
import NavLocationContext from '../contexts/NavLocationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessages,
  faRobot,
  faCodeSimple,
  faNote,
} from '@fortawesome/sharp-solid-svg-icons';
import SwitchBtn from './SwitchBtn';

interface Props {
  links: { name: string; path: string }[];
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
    if (location === section) return;
    const el = document.getElementById(section);
    el?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  const getIcon = (path: string) => {
    const location = path.replace('#', '');
    switch (location) {
      case 'intro':
        return faRobot;
      case 'skills':
        return faCodeSimple;
      case 'projects':
        return faNote;
      case 'contact':
        return faMessages;
    }
  };

  return (
    <header>
      <nav className={styles.navbar} style={themeStyle}>
        {links.map((l, i) => {
          return (
            <span className={styles.linkContainer} key={i}>
              <NavDotTracker
                visible={l.path === `#${location}`}
                color={themeStyle.color}
              />
              <a href='' onClick={handleClick(l.path)}>
                <FontAwesomeIcon
                  icon={getIcon(l.path) as any}
                  className={styles.link}
                  title={`navigate to ${l.name}`}
                />
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
