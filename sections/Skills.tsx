import React from 'react';
import SectionCard from '@components/SectionCard';
import SkillCard from '@components/SkillCard';
import styles from '@styles/Skills.module.sass';
import { skillcard_Languages, skillcard_Styles, skillcard_Frameworks } from '@sections/projectData'

const Skills = () => {
  return (
    // change your title and section id
    <SectionCard id='skills' title='$OFTWARE'>
      <article className={styles.skillContainer}>
        <p className={styles.articleDescription}>
          {/* add your description */}
          I&apos;m always learning new tools and skills to add to my <strong>Frontend</strong> repertoire, but here are some of
          the technologies that I&apos;m currently using.
        </p>
        <div className={styles.skillCardWrapper}>
          {/* add your skillcards here with their respective item. itemHeight represents the height of the container, required for proper position  */}
          <SkillCard items={skillcard_Languages} itemHeight={85} />
          <SkillCard items={skillcard_Styles} itemHeight={85} />
          <SkillCard items={skillcard_Frameworks} itemHeight={85} />
        </div>
      </article>
    </SectionCard>
  );
};

export default Skills;
