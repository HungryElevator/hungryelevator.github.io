import React from 'react';
import { GrTwitter, GrInstagram, GrGithub, GrLinkedinOption, GrMedium } from 'react-icons/gr';
import { Link } from 'gatsby';

import styles from './footer.module.scss';

const Footer = (props) => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.Social}>
        <p>Jorge Castaño</p>
        <div className={styles.Icons}>
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
      </section>
      <section className={styles.Navigation}>
        <Link to="/">ABOUT</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/blog">BLOG</Link>
      </section>
      <div className={styles.Last}>
        {new Date().getFullYear()} © <span>Jorge Castaño | Software Engineer</span>
      </div>
    </footer>
  );
};

export default Footer;
