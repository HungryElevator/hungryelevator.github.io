import React from 'react';
import { Link } from 'gatsby';

import SocialIcons from './social-icons';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.Social}>
        <p>Jorge Castaño</p>
        <SocialIcons />
      </section>
      <section className={styles.Navigation}>
        <Link to="/" activeClassName={styles.Selected}>ABOUT</Link>
        <Link to="/resume" activeClassName={styles.Selected}>RESUME</Link>
        <Link to="/blog" activeClassName={styles.Selected}>BLOG</Link>
      </section>
      <div className={styles.Last}>
        {new Date().getFullYear()} © <span>Jorge Castaño | Software Engineer</span>
      </div>
    </footer>
  );
};

export default Footer;
