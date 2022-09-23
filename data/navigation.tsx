import {
  faMessages,
  faRobot,
  faCodeSimple,
  faNote,
} from '@fortawesome/sharp-solid-svg-icons';
import { NavLinkType } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/styles.module.scss';

// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section
const links: NavLinkType[] = [
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

export default links;
