import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@components/sections/projectData';
import styles from '@styles/Project.module.sass';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='{ PROJECTS }'>
      <div>
        {/* change your project description here */}
        <p className={styles.articleDescription}>
          Here are some of my current greatest hits. Check it out and I hope you
          enjoy them as much as I did creating them. 🥳
        </p>
        {projectData.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
