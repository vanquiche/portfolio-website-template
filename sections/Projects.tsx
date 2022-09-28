import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@sections/projectData';
import styles from '@styles/Project.module.sass';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='{ PROJECTS }'>
      <div>
        {/* change your project description here */}
        <p className={styles.articleDescription}>
          Ex eiusmod pariatur Lorem sit veniam ut do eiusmod reprehenderit ex mollit sunt. Tempor eiusmod consectetur consequat voluptate consectetur proident ex mollit sit in et magna. Pariatur cillum non minim excepteur laboris aute adipisicing minim enim reprehenderit labore. Qui commodo reprehenderit anim ipsum ipsum pariatur non. Nostrud pariatur duis quis anim aliquip.
        </p>
        {projectData.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
