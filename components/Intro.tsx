import React from 'react';
import SectionCard from './SectionCard';
import styles from '../styles/styles.module.scss';

const Intro = () => {
  return (
    <SectionCard id='intro' title='WhoAmI?'>
      <div className={styles.introContainer}>
        {/* <div> */}
        {/* <h5>
            Steve Vang
          </h5> */}
        <img src={`https://via.placeholder.com/150`} alt='placeholder' />
        {/* </div> */}
          <div>

        <p>STEVE VANG</p>
        <p>Frontend Developer</p>
        <p>
          incididunt est. Sit eu enim duis in nulla adipisicing voluptate ex
          culpa. Veniam laborum veniam amet incididunt irure nulla deserunt sunt
          nisi sint proident ea. Pariatur culpa esse est ad ea ad esse nisi
          nulla nostrud id nulla reprehenderit eu.
        </p>
          </div>
      </div>
    </SectionCard>
  );
};

export default Intro;
