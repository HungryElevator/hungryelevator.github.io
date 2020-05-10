import React from 'react';

import styles from './skills.module.scss';

const Skills = () => {

  return (
    <div>
      <h1>My Skills</h1>
      <div>
        <div className={styles.ProgressBarBlock}>
          <span className={styles.Label}>JavaScript</span>
          <div className={styles.ProgressBar}></div>
        </div>
        Javascript, React, HTML & CSS, Angular, React Native, VueJS
      </div>
    </div>
  );
};

export default Skills;
