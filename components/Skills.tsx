import React, { ReactElement } from 'react';
import SectionCard from './SectionCard';
import SkillCard from './SkillCard';
import styles from '../styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faBootstrap,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import CustomIcon from './CustomIcon';

type Item = {
  icon?: ReactElement;
  text: string;
};

const styling: Item[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size='2x' />,
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript.png' size={43} />,
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
  },
  {
    text: 'Next',
    icon: <CustomIcon path='/icons/next-js.256x256.png' size={46} />,
  },
];

const languages = [
  {
    text: 'HTML',
    icon: <FontAwesomeIcon icon={faHtml5} size='2x' />,
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={faCss3} size='2x' />,
  },

  {
    text: 'SASS',
    icon: <FontAwesomeIcon icon={faSass} size='2x' />,
  },
  {
    text: 'Bootstrap',
    icon: <FontAwesomeIcon icon={faBootstrap} size='2x' />,
  },
];

const frameworks = [
  {
    text: 'React Native',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
  },
  {
    text: 'Expo',
    icon: <CustomIcon path='/icons/expo.png' size={45} />,
  },
  {
    text: 'Redux',
    icon: <CustomIcon path='/icons/icons8-redux-150.png' size={39} />,
  },
  {
    text: 'Node',
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
  },
];

const Skills = () => {
  return (
    <SectionCard id='skills' title='$OFTWARE'>
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
