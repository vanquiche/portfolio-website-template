// icons
import {
  faMessages,
  faRobot,
  faCodeSimple,
  faNote,
} from '@fortawesome/sharp-solid-svg-icons';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faBootstrap,
  faNodeJs,
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// types
import {
  NavLinkType,
  ProjectCardType,
  SkillItemType,
  SocialLinkType,
} from '../types';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon';
import Image from 'next/image';
// styles
import styles from '@styles/styles.module.scss';

//
// THEMES
//
// change your theme colors here
export const lightTheme = {
  // font-color
  color: '#293241',
  // background-color
  backgroundColor: '#f0efeb',
};

export const darkTheme = {
  color: '#6EDB93',
  backgroundColor: '#0b132b',
};

//
// NAVIGATION
//
// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section
export const links: NavLinkType[] = [
  {
    name: 'me',
    path: '#intro',
    icon: (
      <FontAwesomeIcon
        icon={faRobot}
        className={styles.link}
        title='scroll to section: intro'
        size='lg'
      />
    ),
  },
  {
    name: 'software',
    path: '#skills',
    icon: (
      <FontAwesomeIcon
        icon={faCodeSimple}
        className={styles.link}
        title='scroll to section: software'
        size='lg'
      />
    ),
  },
  {
    name: 'projects',
    path: '#projects',
    icon: (
      <FontAwesomeIcon
        icon={faNote}
        className={styles.link}
        title='scroll to section: projects'
        size='lg'
      />
    ),
  },
  {
    name: 'contact',
    path: '#contact',
    icon: (
      <FontAwesomeIcon
        icon={faMessages}
        className={styles.link}
        title='scroll to section: contact'
        size='lg'
      />
    ),
  },
];

//
// SOCIAL LINKS
//
// add your social buttons here
export const socialLinks: SocialLinkType[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} title='github icon' size='2x' />,
    link: 'github',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} title='linkedIn icon' size='2x' />,
    link: 'linkedin',
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} title='twitter icon' size='2x' />,
    link: 'twitter',
  },
];

//
// PROJECT CARDS
//
// add your project data object into this array
export const projectData: ProjectCardType[] = [
  {
    title: 'Flip Flashcard',
    banner: 'https://picsum.photos/700/700',
    bannerAlt: 'a random landscape picture',
    summary:
      'Veniam esse veniam excepteur id cillum duis excepteur nisi et do consectetur.',
    description: (
      <>
        <h4>Introduction</h4>
        <p>
          Ullamco anim exercitation ipsum exercitation do esse minim aliquip
          tempor. Id reprehenderit velit quis esse esse incididunt anim. Non
          quis qui ad tempor magna. Pariatur elit nulla laboris aute occaecat
          laborum deserunt deserunt sit ex incididunt excepteur. Exercitation ad
          aute reprehenderit voluptate nullaNon do ea aute consectetur ex quis
          commodo ipsum incididunt Lorem ea in.
        </p>
        <Image
          height={300}
          width={500}
          layout='responsive'
          src='https://picsum.photos/700/500'
          loading='lazy'
        />
        <h4>Second Title</h4>
        <p>
          Ea deserunt minim sit adipisicing duis enim tempor deserunt excepteur
          aliqua in ex. Excepteur ex do enim duis eiusmod ut dolor duis do non
          ex. Labore excepteur aute consequat esse duis consectetur mollit
          officia ullamco Lorem laboris incididunt nulla esse.Et anim incididunt
          voluptate nostrud laborum velit do culpa occaecat ea. Consectetur
          fugiat excepteur laborum laborum. Ullamco do enim dolor cupidatat
          minim commodo esse aliquip consequat. Dolore voluptate incididunt
          aliqua reprehenderit ut pariatur ad cupidatat in est excepteur et
          ullamco. Adipisicing ad ut non sit cupidatat do ut voluptate quis aute
          excepteur ut sunt. Ex fugiat deserunt sit sit qui ad commodo nulla ad
          esse eiusmod excepteur fugiat. Aliquip magna consectetur dolore fugiat
          id laboris.
        </p>
      </>
    ),
    tags: ['react', 'typescript', 'expo', 'html', 'css', 'bootstrap', 'redux'],
    links: [
      { name: 'demo', path: '' },
      { name: 'code', path: '' },
    ],
  },
];

//
// SKILL CARDS
//
// change your skill cards here
// each item will be a column of cards
// create as many or as few as you like
export const skillcard_Styles: SkillItemType[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size='2x' />,
    skillLevel: '90%',
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript.png' size={43} />,
    skillLevel: '80%',
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    skillLevel: '85%',
  },
  {
    text: 'Next',
    icon: <CustomIcon path='/icons/next-js.256x256.png' size={46} />,
    skillLevel: '65%',
  },
];

export const skillcard_Languages: SkillItemType[] = [
  {
    text: 'HTML',
    icon: <FontAwesomeIcon icon={faHtml5} size='2x' />,
    skillLevel: '95%',
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={faCss3} size='2x' />,
    skillLevel: '95%',
  },

  {
    text: 'SASS',
    icon: <FontAwesomeIcon icon={faSass} size='2x' />,
    skillLevel: '90%',
  },
  {
    text: 'Bootstrap',
    icon: <FontAwesomeIcon icon={faBootstrap} size='2x' />,
    skillLevel: '80%',
  },
];

export const skillcard_Frameworks: SkillItemType[] = [
  {
    text: 'React Native',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    skillLevel: '85%',
  },
  {
    text: 'Expo',
    icon: <CustomIcon path='/icons/expo.png' size={45} />,
    skillLevel: '80%',
  },
  {
    text: 'Redux',
    icon: <CustomIcon path='/icons/icons8-redux-150.png' size={39} />,
    skillLevel: '75%',
  },
  {
    text: 'Node',
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    skillLevel: '60%',
  },
];
