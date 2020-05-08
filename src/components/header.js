import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <Link className={`${styles.Link} ${styles.Logo}`} to="/">Jorge Castaño</Link>
      <ul className={styles.Menu}>
        <Link className={styles.Link} to="/" activeClassName={styles.Selected}>Home</Link>
        <Link className={styles.Link} to="/blog" activeClassName={styles.Selected}>Blog</Link>
        <Link className={styles.Link} to="/resume" activeClassName={styles.Selected}>Resume</Link>
        <Link className={styles.Link} to="/contact" activeClassName={styles.Selected}>Contact</Link>
      </ul>
    </header>
  );
};

export default Header;
