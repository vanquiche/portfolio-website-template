import React from 'react';
import styles from '@styles/Tags.module.sass';

interface Props {
  tag: string;
}

const Tags = ({ tag }: Props) => {
  return <span className={styles.tag}>{'#' + tag}</span>;
};

export default React.memo(Tags);
