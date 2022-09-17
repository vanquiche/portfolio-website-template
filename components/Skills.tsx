import React from 'react';
import SectionCard from './SectionCard';
import SkillCard from './SkillCard';
import styles from '../styles/styles.module.scss';

const styling = [
  {
    text: 'JavaScript',
  },
  {
    text: 'TypeScript',
  },
  {
    text: 'React',
  },
  {
    text: 'Next',
  },
];

const languages = [
  {
    text: 'HTML',
  },
  {
    text: 'CSS',
  },

  {
    text: 'SASS',
  },
  {
    text: 'Bootstrap',
  },
];

const frameworks = [
  {
    text: 'React Native',
  },
  {
    text: 'Expo',
  },
  {
    text: 'Redux',
  },
  {
    text: 'Node',
  },
];

const Skills = () => {
  return (
    <SectionCard id='skills' title='SOFTWARE'>
      <div>
        <p>
          Enim esse do eiusmod consectetur laborum aute deserunt consectetur. Ea
          do incididunt reprehenderit cupidatat culpa occaecat ut ullamco
          exercitation aute consectetur consequat cillum. Sit reprehenderit
          consequat adipisicing ex et veniam. Esse pariatur id magna dolor amet
          fugiat est anim id.
        </p>
        <div className={styles.skillCardWrapper}>
          <SkillCard items={languages} itemHeight={85} key={1} />
          <SkillCard items={styling} itemHeight={85} key={2} />
          <SkillCard items={frameworks} itemHeight={85} key={3} />
        </div>
      </div>
    </SectionCard>
  );
};

export default Skills;
