import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@sections/projectData';
import styles from '@styles/Project.module.sass';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='PROJECTS'>
      <div>
        {/* change your project description here */}
        {/* <p className={styles.articleDescription}>
          Ex eiusmod pariatur Lorem sit veniam ut do eiusmod reprehenderit ex mollit sunt. Tempor eiusmod consectetur consequat voluptate consectetur proident ex mollit sit in et magna.
        </p> */}
        {projectData.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
