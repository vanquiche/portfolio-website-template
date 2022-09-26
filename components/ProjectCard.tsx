import Image from 'next/image';
import React from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
// components
import Tags from '@components/Tags';
import ProgressBarContainer from '@components/ProgressBarContainer';
// types
import { ProjectCardType } from '@components/types';
import { useMediaQuery } from 'react-responsive';
// styles
import styles from '@styles/ProjectCard.module.sass';

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
            <div className={styles.projectCardSummaryContainer}>
            {project.description}
            </div>
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
          <div className={styles.tagsContainer}>
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
