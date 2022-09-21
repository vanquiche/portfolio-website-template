import React from 'react';
import ProjectCard from './ProjectCard';
import SectionCard from './SectionCard';
import projectData from '../data/projects';

const Projects = () => {
  return (
    <SectionCard id='projects' title='{ PROJECTS }'>
      <div>
        <p>
          Consequat adipisicing ad do aute veniam. Pariatur est nostrud ipsum
          ipsum culpa ex velit magna magna. Ad adipisicing duis cillum dolor.
          Aliquip do minim eiusmod do sit excepteur adipisicing eiusmod aute
          velit. Consequat commodo non adipisicing laboris.
        </p>
        {/* <p>project card 1</p>
        <p>project card 2</p>
        <p>project card 3</p> */}
        {/* <Suspense fallback={'..Loading'}>
          <DynamicCard />
        </Suspense>

        <Suspense fallback={'..Loading'}>
          <DynamicCard />
        </Suspense>

        <Suspense fallback={'..Loading'}>
          <DynamicCard />
        </Suspense> */}
        {/* <ProjectCard /> */}

        {/* <ProjectCard />
        */}
        {
          projectData.map(p => <ProjectCard project={p}/>)
        }
        {/* <ProjectCard/> */}
      </div>
    </SectionCard>
  );
};

export default Projects;
