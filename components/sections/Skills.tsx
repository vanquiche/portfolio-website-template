import React from 'react';
import SectionCard from '../SectionCard';
import SkillCard from '../SkillCard';
import styles from '../../styles/styles.module.scss';
import { languages, styling, frameworks } from '../../data/skillcards';

const Skills = () => {
  return (
    // change your title and section id
    <SectionCard id='skills' title='$OFTWARE'>
      <article className={styles.skillContainer}>
        <p>
          {/* add your description */}
          I&apos;m always learning new tools and skills, but here are some of
          the technologies that I enjoy and currently use.
        </p>
        <div className={styles.skillCardWrapper}>
          <SkillCard items={languages} itemHeight={85} />
          <SkillCard items={styling} itemHeight={85} />
          <SkillCard items={frameworks} itemHeight={85} />
        </div>
      </article>
    </SectionCard>
  );
};

export default Skills;
