import React from 'react';
import styles from '@styles/styles.module.scss';
import FontColorContrast from 'font-color-contrast'

interface Props {
  tag: string;
}

const Tags = ({ tag }: Props) => {

  function getColor(name: string) {
    switch (name) {
      case 'javascript':
        return '#F0DB4F';
      case 'css':
        return '#264de4';
      case 'html':
        return '#e34c26';
      case 'typescript':
        return '#007acc';
      case 'react':
        return '#61dbfb';
      case 'nextjs':
        return '#2b2d42';
      case 'sass':
        return '#CC6699';
      case 'bootstrap':
        return '#563d7c';
      case 'react-native':
        return '#e63946';
      case 'expo':
        return 'white';
      case 'ios':
        return '#555555';
      case 'redux':
        return '#764abc';
      case 'nodejs':
        return '#6cc24a';
      default:
        return 'lightcoral'
    }
  }

  const style = {
    backgroundColor: getColor(tag),
    color: FontColorContrast(getColor(tag), 0.5)
  };

  return <span className={styles.tag} style={style}>{'#' + tag}</span>;
};

export default React.memo(Tags);
