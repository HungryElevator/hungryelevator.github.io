import React from 'react';
import styles from './skill.module.scss';

const Skill = ({ label, progress }) => {
  const progressLabel = progress / 5;
  const noProgressLabel = (100 - progress) / 5;
  const perfectClass = progress === 100 ? styles.Perfect : '';

  return (
    <div className={styles.Skill}>
      <span>{label}</span>
      <p className={perfectClass}>
        <span className={styles.Progress}>{'+'.repeat(progressLabel)}</span>
        <span className={styles.NoProgress}>{'-'.repeat(noProgressLabel)}| </span>
        {progress}%
      </p>
    </div>
  );
};

export default Skill;
