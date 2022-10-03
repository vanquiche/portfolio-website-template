import React, { ReactElement, useRef } from 'react';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import styles from '@styles/SkillCard.module.sass';
import ProgressBarContainer from '@components/ProgressBarContainer';

type Item = {
  icon?: ReactElement;
  text: string;
  skillLevel: string;
};

interface Props {
  itemHeight: number;
  items: Item[];
}

const SkillCard = ({ items, itemHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, hasRender } = useIntersectionObserver(ref, 0.25);

  const containerHeight = {
    height: itemHeight * items.length,
  };

  const progressBarStyle: React.CSSProperties = {
    border: '1px solid',
    paddingLeft: '10px',
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
                <ProgressBarContainer
                  animateTo={x.skillLevel}
                  containerStyle={progressBarStyle}
                  fixed={isVisible || hasRender.current}
                  delay='800ms'
                >
                  <span className={styles.skillItemText}>{x.text}</span>
                </ProgressBarContainer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(SkillCard);
