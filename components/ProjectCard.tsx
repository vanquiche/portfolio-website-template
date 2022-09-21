import Image from 'next/image';
import React from 'react';
import styles from '../styles/styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Tags from './Tags';
import { ProjectCardType } from './types';
import ProjectLink from './ProjectLink';

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {
  return (
    // container
    <article>
        <h2 className={styles.projectCardTitle}>
          {project.title.toUpperCase()}
        </h2>
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
            <summary/>
            <div
              className={styles.projectCardSummaryContainer}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </details>

          <div className={styles.projectCardLinkContainer}>
            {project.links.map((l, i) => {
              return (
                <ProjectLink path={l.path} key={i}>
                  <>
                    <FontAwesomeIcon
                      icon={l.name === 'demo' ? faDesktop : faCodeBranch}
                      className={styles.projectCardLinkIcon}
                    />
                    {l.name}
                  </>
                </ProjectLink>
              );
            })}
          </div>
          {/* link container */}
          <div className={styles.projectCardLinkContainer}>
            {project.tags.map((p) => (
              <Tags tag={p} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
