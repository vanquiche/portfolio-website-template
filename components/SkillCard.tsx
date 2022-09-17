import Image from 'next/image';
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/styles.module.scss';

type Item = {
  icon?: string;
  text: string;
};

interface Props {
  title?: string;
  itemHeight: number;
  items: Item[];
}

const SkillCard = ({ items, title, itemHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(ref);

  const imageSize = itemHeight - 20;

  const containerHeight = {
    height: itemHeight * items.length,
  };

  const itemPosition = (i: number) => {
    return {
      top: isVisible ? itemHeight * i : -itemHeight,
      height: itemHeight,
    };
  };

  return (
    <div>
      <p className={styles.skillTitle}>{title}</p>
      <div
        ref={ref}
        className={styles.skillItemContainer}
        style={containerHeight}
      >
        {items.map((x, i) => {
          return (
            <div key={i} style={itemPosition(i)} className={styles.skillItem}>
              {/* <Image src='https://via.placeholder.com/50' height={imageSize} width={imageSize}/> */}
              <img
                src={`https://via.placeholder.com/${imageSize}`}
                alt='placeholder'
              />
              <span className={styles.skillItemText}>{x.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SkillCard);
