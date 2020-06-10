import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './header.module.scss';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  // const html = document.getElementsByTagName('html');
  // html[0].style.overflow = isMenuOpen ? 'hidden' : 'unset';

  const menuIcon = isMenuOpen ? <FaTimes /> : <FaBars />;
  const menuOptions = (
    <>
      <Link className={styles.Link} to="/" activeClassName={styles.Selected}>About</Link>
      <Link className={styles.Link} to="/resume" activeClassName={styles.Selected}>Resume</Link>
      {/* <Link className={styles.Link} to="/blog" activeClassName={styles.Selected}>Blog</Link> */}
      <Link className={styles.Link} to="/contact" activeClassName={styles.Selected}>Contact</Link>
    </>
  );

  return (
    <>
      <header className={styles.Header}>
        <Link className={`${styles.Link} ${styles.Logo}`} to="/">Jorge Castaño</Link>
        <nav className={styles.Menu}>
          {menuOptions}
          <span className={`${styles.Link} ${styles.MenuOpener}`} onClick={() => toggleMenu(!isMenuOpen)}>
            {menuIcon}
          </span>
        </nav>
      </header>
      {isMenuOpen && (
        <div className={styles.FullMenu}>
          {menuOptions}
        </div>
      )}
    </>
  );
};

export default Header;
