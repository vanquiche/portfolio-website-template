import Image from 'next/image';
import React, { ReactElement, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styles from '../styles/styles.module.scss';

type Item = {
  icon?: ReactElement;
  text: string;
};

interface Props {
  title?: string;
  itemHeight: number;
  items: Item[];
}

const SkillCard = ({ items, title, itemHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, hasRender } = useIntersectionObserver(ref, 0.25);

  const containerHeight = {
    height: itemHeight * items.length,
  };

  const itemPosition = (i: number) => {
    return {
      top: isVisible
        ? itemHeight * i
        : hasRender.current
        ? itemHeight * i
        : -itemHeight,
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
              {x.icon ? x.icon : null}
              <div className={styles.skillItemTextWrapper}>
                <span className={styles.skillItemText}>{x.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SkillCard);
