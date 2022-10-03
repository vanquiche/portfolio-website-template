// icons
import {
  faMessages,
  faRobot,
  faCodeSimple,
  faNote,
  faDesktop,
  faCodeBranch,
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
} from 'types';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon';

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
    title: 'To-Do App',
    banner: 'https://picsum.photos/900/900?random=9',
    bannerAlt: 'a random landscape picture',
    summary:
      'Veniam esse veniam excepteur id cillum duis excepteur nisi et do consectetur. Cillum eu consequat anim aliquip voluptate excepteur nisi culpa duis id pariatur irure.',
    description:
      'Excepteur dolore amet officia consequat aliqua non. In in id tempor aute sint aliqua. Amet duis laboris ex sunt. Labore minim occaecat id aliqua duis ad in consectetur duis amet culpa. Magna nulla qui incididunt aute velit nisi dolore laboris ea occaecat. Velit anim consequat non id occaecat reprehenderit veniam amet nisi.',
    media: [
      {
        src: 'https://picsum.photos/500/500?random=8',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=9',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=12',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
    ],
    tags: ['node', 'typescript', 'expo', 'css'],
    links: [
      { name: 'site', path: 'https://google.com', icon: <FontAwesomeIcon icon={faDesktop} /> },
      { name: 'code', path: 'https://youtube.com', icon: <FontAwesomeIcon icon={faCodeBranch} /> },
    ],
  },
  {
    title: 'eCommerce Website',
    banner: 'https://picsum.photos/900/900?random=3',
    bannerAlt: 'a random landscape picture',
    summary:
      'Et ipsum excepteur reprehenderit qui ut fugiat magna. Ipsum eu ex commodo Lorem cillum labore eiusmod ipsum. Cillum esse officia voluptate exercitation nulla.',
    description:
      'Excepteur dolore amet officia consequat aliqua non. In in id tempor aute sint aliqua. Amet duis laboris ex sunt. Labore minim occaecat id aliqua duis ad in consectetur duis amet culpa. Magna nulla qui incididunt aute velit nisi dolore laboris ea occaecat. Velit anim consequat non id occaecat reprehenderit veniam amet nisi.',
    media: [
      {
        src: 'https://picsum.photos/500/500?random=4',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=5',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=6',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
    ],
    tags: ['react', 'redux', 'html', 'sass'],
    links: [
      { name: 'site', path: '', icon: <FontAwesomeIcon icon={faDesktop} /> },
      { name: 'code', path: '', icon: <FontAwesomeIcon icon={faCodeBranch} /> },
    ],
  },
  {
    title: 'Tic-Tac-Toe Game',
    banner: 'https://picsum.photos/900/900?random=1',
    bannerAlt: 'a random landscape picture',
    summary:
      'Esse dolore dolore anim esse ipsum elit tempor tempor eiusmod sint. Officia enim ut mollit non non esse mollit incididunt cupidatat laborum. Eiusmod laborum laboris esse nostrud duis laborum pariatur ut esse aliquip. Eu velit exercitation aute ex cillum ea in ipsum eiusmod minim fugiat.',
    description:
      'Excepteur dolore amet officia consequat aliqua non. In in id tempor aute sint aliqua. Amet duis laboris ex sunt. Labore minim occaecat id aliqua duis ad in consectetur duis amet culpa. Magna nulla qui incididunt aute velit nisi dolore laboris ea occaecat. Velit anim consequat non id occaecat reprehenderit veniam amet nisi.',
    media: [
      {
        src: 'https://picsum.photos/500/500?random=1',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=2',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
      {
        src: 'https://picsum.photos/500/500?random=3',
        alt: 'placeholder',
        width: 500,
        height: 500,
      },
    ],
    tags: ['react-native', 'javascript', 'html', 'bootstrap', 'sass'],
    links: [
      { name: 'site', path: '', icon: <FontAwesomeIcon icon={faDesktop} /> },
      { name: 'code', path: '', icon: <FontAwesomeIcon icon={faCodeBranch} /> },
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
