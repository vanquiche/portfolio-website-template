import Image from 'next/image';
import React from 'react';
import styles from '../styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Tags from './Tags';
import { ProjectCardType } from './types';
import ProgressBarContainer from './ProgressBarContainer';
import { useMediaQuery } from 'react-responsive';

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 675px)' });
  const progressBarStyle = {
    width: '125px',
    justifyContent: 'center',
    border: '1px solid',
  };

  return (
    // container
    <article>
      <h2 className={styles.projectCardTitle}>{project.title.toUpperCase()}</h2>
      <div className={styles.projectCardContainer}>
        {/* card */}
        <div className={styles.projectCard}>
          {/* banner */}
          <Image
            src={project.banner}
            width={450}
            height={450}
            className={styles.projectCardImage}
            alt={project.bannerAlt}
          />
          {/* description */}
          <h3>{project.summary}</h3>
          <details className={styles.projectCardDetails}>
            <summary />
            <div
              className={styles.projectCardSummaryContainer}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </details>

          <div className={styles.projectCardLinkContainer}>
            {project.links.map((l, i) => {
              return (
                <ProgressBarContainer
                  key={i}
                  containerStyle={progressBarStyle}
                  animateTo='100%'
                  fixed={isMobile}
                >
                  <a href={l.path}>
                    <FontAwesomeIcon
                      icon={l.name === 'demo' ? faDesktop : faCodeBranch}
                      className={styles.projectCardLinkIcon}
                    />
                    {l.name}
                  </a>
                </ProgressBarContainer>
              );
            })}
          </div>
          {/* link container */}
          <div className={styles.projectCardLinkContainer}>
            {project.tags.map((p, i) => (
              <Tags tag={p} key={i} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
