import React from 'react'
import SectionCard from './SectionCard'
import styles from '../styles/styles.module.scss'

const Intro = () => {

  return (
    <SectionCard id='intro' title='HELLO!'>
      <div className={styles.introContainer}>
        <h5>
          Steve Vang <span> - Front End Developer</span>
        </h5>
        <p>
          Pariatur culpa pariatur non duis fugiat aute duis mollit cupidatat
          incididunt est. Sit eu enim duis in nulla adipisicing voluptate ex
          culpa. Veniam laborum veniam amet incididunt irure nulla deserunt sunt
          nisi sint proident ea. Pariatur culpa esse est ad ea ad esse nisi
          nulla nostrud id nulla reprehenderit eu.
        </p>
      </div>
    </SectionCard>
  );
}

export default Intro