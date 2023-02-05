import {
  faRobot,
  faWindowMaximize,
  faFileCode,
  faCodeBranch,
  faUpRightFromSquare,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
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
} from '@fortawesome/free-brands-svg-icons'; // types

import {
  NavLinkType,
  ProjectCardType,
  SkillItemType,
  SocialLinkType,
} from 'types'; // icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon'; //
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
}; //
// NAVIGATION
//
// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section

export const links: NavLinkType[] = [
  {
    name: 'intro',
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
        icon={faFileCode}
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
        icon={faWindowMaximize}
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
        icon={faComments}
        title='scroll to section: contact'
        size='lg'
      />
    ),
  },
]; //
// SOCIAL LINKS
//
// add your social buttons here

export const socialLinks: SocialLinkType[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} title='github' size='2x' />,
    link: 'https://github.com/vanquiche',
    title: 'github',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} title='linkedIn' size='2x' />,
    link: 'https://linkedin.com/in/stevevang',
    title: 'linkedIn',
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} title='twitter' size='2x' />,
    link: 'https://twitter.com/stevevangdev',
    title: 'twitter',
  },
]; //
// PROJECT CARDS
//
// add your project data object into this array

export const projectData: ProjectCardType[] = [
  {
    title: 'Server-side form validation',
    banner:
      'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1669098404/walkie-buddy/walkie-buddy-textlogo_eovttm.png',
    bannerAlt: 'walkie buddy banner',
    summary:
      "Walkie Buddy is a sign-up form with server-side sanitation and validation. This project leverages the power of NextJS' API Routes and styled with TailwindCSS.",
    media: [
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1668926577/walkie-buddy/chrome-capture-2022-10-20_xcxjba.gif',
        alt: 'walkie buddy demo',
        width: 475,
        height: 530,
      },
    ],
    tags: ['NextJS', 'Typescript', 'TailwindCSS'],
    links: [
      {
        name: 'site',
        path: 'https://walkie-buddy.vercel.app/',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/server-side-validation',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'Task-List App',
    banner:
      'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1672896943/today-task/today-logo_kxwvli.png',
    bannerAlt: 'Today task banner',
    summary:
      "Today is a simple task list app that is designed to help you quickly focus on today's tasks without the hindrance of overwhelming options. Created in Vue 3 with TypeScript and Pinia for state management.",
    media: [
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1672898156/today-task/today-demo-2_a6jmvs.gif',
        alt: 'today demo 2',
        width: 917,
        height: 921,
      },
    ],
    tags: ['vue', 'typescript', 'pinia'],
    links: [
      {
        name: 'site',
        path: 'https://todaytasklist.netlify.app/',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/today-task',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'Flashcard App',
    banner:
      'https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664945805/flip-app/flip-banner_msibq8.png',
    bannerAlt: 'flip app banner',
    summary:
      "Flip is an iOS app that recreates the digital experience of studying with flashcards. Flip has a simple interface so getting started is easy, tons of customization options, level progression, and statistics to track how you're doing over time. Anything from languages to vocabulary, Flip can help you study and memorize anything!",
    media: [
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_300,x_362,y_920/v1665219344/flip-app/IMG_4807_rdg1hf.png',
        alt: 'home examples',
        width: 300,
        height: 534,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_300/v1665219344/flip-app/IMG_4801_mtf29d.png',
        alt: 'categories examples',
        width: 300,
        height: 534,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_300/v1665219344/flip-app/IMG_4812_fir5gq.png',
        alt: 'flashcards example',
        width: 300,
        height: 534,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_300/v1665219344/flip-app/IMG_4810_crhunl.png',
        alt: 'quiz example',
        width: 300,
        height: 534,
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,w_300/v1665219344/flip-app/IMG_4809_xeeo5d.png',
        alt: 'shop example',
        width: 300,
        height: 534,
      },
    ],
    tags: ['react-native', 'typescript', 'expo', 'ios'],
    links: [
      {
        name: 'site',
        path: 'https://apps.apple.com/us/app/flip-flashcard/id1637560175?l=en',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
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
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881764/kutsu-eCommerce/kutsu-mobile-demo1_ruowh2.png',
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
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/kutsu-eCommerce',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
]; //
// SKILL CARDS
//
// change your skill cards here
// each item will be a column of cards
// create as many or as few as you like

export const skillcard_Styles: SkillItemType[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript-icon.png' size={45} />,
    skillLevel: '100%',
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'Next',
    icon: <CustomIcon path='/icons/next-js.256x256.png' size={46} />,
    skillLevel: '100%',
  },
];
export const skillcard_Languages: SkillItemType[] = [
  {
    text: 'HTML5',
    icon: <FontAwesomeIcon icon={faHtml5} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={faCss3} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'SASS',
    icon: <FontAwesomeIcon icon={faSass} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'Tailwind',
    icon: <CustomIcon path='/icons/tailwind-icon.png' size={45} />,
    skillLevel: '100%',
  },
];
export const skillcard_Frameworks: SkillItemType[] = [
  {
    text: 'Redux',
    icon: <CustomIcon path='/icons/icons8-redux-150.png' size={39} />,
    skillLevel: '100%',
  },
  {
    text: 'Node',
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'Cypress',
    icon: <CustomIcon path='/icons/cypress-icon.png' size={40} />,
    skillLevel: '100%',
  },
  {
    text: 'Jest',
    icon: <CustomIcon path='/icons/jest-icon.png' size={45} />,
    skillLevel: '100%',
  },
];
