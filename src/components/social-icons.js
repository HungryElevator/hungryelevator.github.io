import React from 'react';
import { GrTwitter, GrInstagram, GrGithub, GrLinkedinOption, GrMedium } from 'react-icons/gr';
import styles from './social-icons.module.scss';

const SocialIcons = ({ theme = 'Light', position = 'Right' }) => {
  return (
    <div className={`${styles.Icons} ${styles[theme]} ${styles[position]}`}>
      <a
        className={styles.SocialIcon}
        href="https://twitter.com/jorgeCasteR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrTwitter />
      </a>
      <a
        className={styles.SocialIcon}
        href="https://www.instagram.com/jorgecaster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrInstagram />
      </a>
      {/* <a
        className={styles.SocialIcon}
        href="https://github.com/jorgcast"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrGithub />
      </a> */}
      <a
        className={styles.SocialIcon}
        href="https://www.linkedin.com/in/jorge-casta%C3%B1o"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrLinkedinOption />
      </a>
      <a
        className={styles.SocialIcon}
        href="https://medium.com/@jorgecaster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrMedium />
      </a>
    </div>
  );
};

export default SocialIcons;
