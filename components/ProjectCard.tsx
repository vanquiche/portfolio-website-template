import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// components
import ProgressBarContainer from '@components/ProgressBarContainer';
// types
import { ProjectCardType } from 'types';
// styles
import styles from '@styles/ProjectCard.module.sass';
import ImageGallery from './ImageGallery';

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const nodeRef = useRef(null);
  const duration = 175;

  const progressBarStyle = {
    width: '125px',
    justifyContent: 'center',
    border: '1px solid',
  };

  const defaultStyles: React.CSSProperties = {
    transition: `transform ${duration}ms ease-out`,
    transform: 'scaleY(0)',
    transformOrigin: 'top',
  };

  const transitionStyles: any = {
    entering: { transform: 'scaleY(1)' },
    entered: { transform: 'scaleY(1)' },
    exiting: { transform: 'scaleY(0)' },
    exited: { transform: 'scaleY(0)' },
  };

  function toggleDetails() {
    setDetailsVisible((prev) => !prev);
  }

  return (
    // container
    <article>
      <h2
        className={styles.projectCardTitle}
        style={{ fontFamily: 'Archivo Black, sans-serif' }}
      >
        {project.title.toUpperCase()}
      </h2>
      <div className={styles.projectCardContainer}>
        {/* card */}

        <div className={styles.projectCard}>
          {/* banner */}
          {project.banner && (
            <span className={styles.bannerImage}>
              <Image
                src={project.banner}
                layout='fill'
                objectFit='contain'
                alt={project.bannerAlt}
              />
            </span>
          )}
          {/* description */}

          <h3>{project.summary}</h3>

          {/* <div className={styles.tagsContainer}>
            {project.tags &&
              project.tags.map((p, i) => <Tags tag={p} key={i} />)}
          </div> */}

          <div className={styles.projectCardDetails}>
            <div>
              <div
                className={styles.projectCardLinkContainer}
                style={{ justifyContent: 'center' }}
              >
                {project.links.map((l, i) => {
                  return (
                    <ProgressBarContainer
                      key={i}
                      containerStyle={progressBarStyle}
                      animateTo='100%'
                      fixed={true}
                      // onClick={navigateToLink(l.path)}
                    >
                      <a href={l.path}>
                        {l.icon && l.icon}
                        {l.name}
                      </a>
                    </ProgressBarContainer>
                  );
                })}
                {(project.description || project.media) && (
                  <ProgressBarContainer
                    containerStyle={progressBarStyle}
                    animateTo='100%'
                    fixed={true}
                    onClick={toggleDetails}
                  >
                    <span className={styles.detailsButton}>
                      <FontAwesomeIcon
                        icon={detailsVisible ? faCaretDown : faCaretRight}
                        className={styles.projectCardLinkIcon}
                      />
                      {detailsVisible ? 'close' : 'media'}
                    </span>
                  </ProgressBarContainer>
                )}
              </div>
            </div>

            <Transition
              nodeRef={nodeRef}
              timeout={duration}
              in={detailsVisible}
              unmountOnExit
              mountOnEnter
            >
              {(state) => (
                <div
                  className={styles.projectCardSummaryContainer}
                  ref={nodeRef}
                  style={{
                    ...defaultStyles,
                    ...transitionStyles[state],
                  }}
                >
                  {project.description && <p>{project.description}</p>}
                  {project.media && <ImageGallery images={project.media} />}
                  {/* tags container */}
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
