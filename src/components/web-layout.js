import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import Header from './header';
import styles from './web-layout.module.scss';
import Banner from './banner';
import Footer from './footer';


const WebLayout = ({ hasBanner = false, bannerTitle, bannerSubtitle, children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {hasBanner && <Banner title={bannerTitle} subtitle={bannerSubtitle} pic="jorge-calle.jpg" />}
      <main className={styles.Content}>{children}</main>
      <Footer />
    </div>
  );
};

export default WebLayout;
