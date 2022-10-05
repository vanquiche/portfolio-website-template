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
// COPY THIS FILE AND RENAME IT TO 'projectData' and add your own data
//
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
    title: 'Flashcard App',
    banner:
      'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664945805/flip-app/flip-banner_msibq8.png',
    bannerAlt: 'flip app banner',
    summary:
      "Flip is an iOS app that recreates the digital experience of studying with flashcards. Flip has a simple interface so getting started is easy, tons of customization options, level progression, and statistics to track how you're doing over time. Anything from languages to vocabulary, Flip can help you study and memorize anything!",
    media: [
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_400/v1664941674/flip-app/walkthrough-slide_003_xwej5s.png',
        alt: 'themes examples',
        width: 400,
        height: 400,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_400/v1664941674/flip-app/walkthrough-slide_008_bbnax0.png',
        alt: 'home screen examples',
        width: 400,
        height: 400,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_400/v1664941674/flip-app/walkthrough-slide_004_ilhgof.png',
        alt: 'favorite set example',
        width: 400,
        height: 400,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_400/v1664941674/flip-app/walkthrough-slide_002_lgyois.png',
        alt: 'stats example',
        width: 400,
        height: 400,
      },
    ],
    tags: ['react-native', 'typescript', 'expo', 'ios'],
    links: [
      {
        name: 'site',
        path: 'https://apps.apple.com/us/app/flip-flashcard/id1637560175?l=en',
        icon: <FontAwesomeIcon icon={faDesktop} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/flip-flashcard-app',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'e-Commerce Shopping Cart',
    banner:
      'https://res.cloudinary.com/dvrs8gsj3/image/upload/q_auto:best/v1664944751/kutsu-eCommerce/kutsu-banner-high_mnrm4r.png',
    bannerAlt: 'banner image',
    summary:
      "This project began as an experiment in exploring React's Context API to manage the global state. The objective was to create a pattern that seamlessly facilitates adding, editing, and removing items from a shopping cart (CRUD operations). Additionally, I designed and built a mock e-commerce site that allowed me to test the shopping cart component.",
    media: [
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362559/kutsu-eCommerce/demo-1_vpjpxm.jpg',
        alt: 'product page example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881765/kutsu-eCommerce/kutsu-mobile-demo2_cf3tcv.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362559/kutsu-eCommerce/demo-2_iqoqsr.jpg',
        alt: 'all products example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881765/kutsu-eCommerce/kutsu-mobile-demo2_cf3tcv.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362558/kutsu-eCommerce/demo-3_fhykgr.jpg',
        alt: 'shopping cart example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881765/kutsu-eCommerce/kutsu-mobile-demo3_frxk7h.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362558/kutsu-eCommerce/demo-4_uy1dlv.jpg',

        //c_scale,e_blur:100,h_16,q_auto:low,w_16
        alt: 'checkout page example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881766/kutsu-eCommerce/kutsu-mobile-demo4_hbjaqc.png',
          width: 365,
          height: 650,
        },
      },
    ],
    tags: ['react', 'typescript', 'dinero', 'react-router'],
    links: [
      {
        name: 'site',
        path: 'https://kutsu-shop.netlify.app/',
        icon: <FontAwesomeIcon icon={faDesktop} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/kutsu-eCommerce',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
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
