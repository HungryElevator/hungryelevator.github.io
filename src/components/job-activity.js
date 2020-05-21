import React from 'react';
import styles from './job-activity.module.scss';

const JobActivity = ({ title, description = [] }) => {
  return (
    <div className={styles.Activity}>
      <h3>{title}</h3>
      <h3 className={styles.Separator}>{'-'.repeat(title[1].length + 2)}</h3>
      <p />
      {description.map(elem => (
        <p>{elem}</p>
      ))}
    </div>
  );
};

export default JobActivity;
