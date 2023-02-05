import React from 'react';
import SectionCard from '@components/SectionCard';
import SkillCard from '@components/SkillCard';
import styles from '@styles/Skills.module.sass';
import {
  skillcard_Languages,
  skillcard_Styles,
  skillcard_Frameworks,
} from '@sections/me';
import BgTitle from '@components/BgTitle';

const Skills = () => {
  return (
    // change your title and section id
    <SectionCard id='skills' title='TOOLS' page='02'>
      <>
        <BgTitle title='TOOLS' />

        <div className={styles.skillCardWrapper}>
          {/* add your skillcards here with their respective item. itemHeight represents the height of the container, required for proper position  */}
          <SkillCard items={skillcard_Languages} itemHeight={85} />
          <SkillCard items={skillcard_Styles} itemHeight={85} />
          <SkillCard items={skillcard_Frameworks} itemHeight={85} />
        </div>
      </>
    </SectionCard>
  );
};

export default Skills;
