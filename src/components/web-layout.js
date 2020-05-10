import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import Header from './header';
import styles from './web-layout.module.scss';
import Banner from './banner';


const WebLayout = ({ location, title, bannerTitle, bannerSubtitle, children }) => {
  const header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          color: 'inherit',
        }}
        to="/blog"
      >
        {title}
      </Link>
    </h1>
  );

  return (
    <div className={styles.Layout}>
      <Header />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} pic="jorge-calle.jpg" />
      <main className={styles.Content}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default WebLayout;
