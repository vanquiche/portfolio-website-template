import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// components
import Tags from '@components/Tags';
import ProgressBarContainer from '@components/ProgressBarContainer';
// types
import { ProjectCardType } from 'types';
import { useMediaQuery } from 'react-responsive';
// styles
import styles from '@styles/ProjectCard.module.sass';
import ImageGallery from './ImageGallery';

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 675px)' });
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

  const navigateToLink = (path: string) => () => {
    if (typeof window !== 'undefined') {
      window.location.href = path
    }
  }

  return (
    // container
    <article>
      <h2 className={styles.projectCardTitle}>{project.title.toUpperCase()}</h2>
      <div className={styles.projectCardContainer}>
        {/* card */}

        <div className={styles.projectCard}>
          {/* banner */}
          <span className={styles.bannerImage}>
            <Image
              src={project.banner}
              layout='fill'
              objectFit='cover'
              alt={project.bannerAlt}
            />
          </span>
          {/* description */}

          <h3>{project.summary}</h3>

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
                      fixed={isMobile}
                      onClick={navigateToLink(l.path)}
                    >
                      <span>
                        {l.icon && l.icon}
                        {l.name}
                      </span>
                    </ProgressBarContainer>
                  );
                })}
                <ProgressBarContainer
                  containerStyle={progressBarStyle}
                  animateTo='100%'
                  fixed={isMobile}
                  onClick={toggleDetails}
                >
                  <span>
                    <FontAwesomeIcon
                      icon={detailsVisible ? faCaretDown : faCaretRight}
                      className={styles.projectCardLinkIcon}
                    />
                    {detailsVisible ? 'close' : 'details'}
                  </span>
                </ProgressBarContainer>
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
                  <p>{project.description}</p>
                  <ImageGallery images={project.media} />
                  {/* tags container */}
                  <div className={styles.tagsContainer}>
                    {project.tags.map((p, i) => (
                      <Tags tag={p} key={i} />
                    ))}
                  </div>
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
