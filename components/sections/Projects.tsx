import React from 'react';
import ProjectCard from '../ProjectCard';
import SectionCard from '../SectionCard';
import projectData from '../../data/projects';

const Projects = () => {
  return (
    // change your title and section id
    <SectionCard id='projects' title='{ PROJECTS }'>
      <div>
        {/* change your project description here */}
        <p>
          Consequat adipisicing ad do aute veniam. Pariatur est nostrud ipsum
          ipsum culpa ex velit magna magna. Ad adipisicing duis cillum dolor.
          Aliquip do minim eiusmod do sit excepteur adipisicing eiusmod aute
          velit. Consequat commodo non adipisicing laboris.
        </p>
        {projectData.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
