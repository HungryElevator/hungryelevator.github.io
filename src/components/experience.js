import React from 'react';
import { FcBullish, FcMoneyTransfer, FcCamcorderPro, FcMultipleDevices,
  FcAutomotive, FcCurrencyExchange, FcShop, FcLike } from 'react-icons/fc';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './experience.module.scss';

const Experience = () => {
  const images = useStaticQuery(graphql`
    query {
      daimler: file(relativePath: {eq: "resume/daimler.jpg"}) {
        publicURL
      }
      minsait: file(relativePath: {eq: "resume/minsait.jpg"}) {
        publicURL
      }
      aslam: file(relativePath: {eq: "resume/aslam.png"}) {
        publicURL
      }
      krama: file(relativePath: {eq: "resume/krama.png"}) {
        publicURL
      }
      resume: file(name: {eq: "CV_JorgeCastano"}) {
        publicURL
        name
      }
    }
  `);

  return (
    <div className={styles.Experience}>
      <h1>EXPERIENCE</h1>
      <article className={styles.Job}>
        <div className={styles.Role}>
          <span className={styles.Title}>Tech Lead - Senior Front End Developer</span>
          <p className={styles.Date}>2019 - present</p>
        </div>
        <div className={styles.Company}>
          <div className={styles.CompanyName}>
            <span>DAIMLER</span>
            <img src={images.daimler.publicURL} alt="daimler" />
          </div>
          <p className={styles.JobTag}>RESPONSIBILITIES</p>
          <ul>
            <li>Front End Architecture & Development with ReactJS.</li>
            <li>Front End Tech Lead in many projects.</li>
            <li>Mentorship for junior developers.</li>
            <li>Code reviews & pair programming.</li>
            <li>Team tech sessions, Front end up to date.</li>
          </ul>
          <p className={styles.JobTag}>CLIENTS</p>
          <div className={styles.ClientList}>
            <span><FcAutomotive /> Daimler AG</span>
            <span><FcAutomotive /> Mercedes-Benz</span>
          </div>
        </div>
      </article>
      <article className={styles.Job}>
        <div className={styles.Role}>
          <span className={styles.Title}>Front End Developer</span>
          <p className={styles.Date}>2017 - 2019</p>
        </div>
        <div className={styles.Company}>
          <div className={styles.CompanyName}>
            <span>MINSAIT, by indra</span>
            <img src={images.minsait.publicURL} alt="minsait" />
          </div>
          <p className={styles.JobTag}>RESPONSIBILITIES</p>
          <ul>
            <li>Front End Architecture & Development with Angular, Backbone & Vue.</li>
            <li>Code reviews and development design.</li>
            <li>Unit Testing with TapeJS.</li>
            <li>E2E Testing with Selenium.</li>
          </ul>
          <p className={styles.JobTag}>CLIENTS</p>
          <div className={styles.ClientList}>
            <span><FcMoneyTransfer /> BBVA</span>
            <span><FcCurrencyExchange /> Bankinter</span>
            <span><FcLike /> Santalucía</span>
            <span><FcShop /> Pull & Bear</span>
          </div>
        </div>
      </article>
      <article className={styles.Job}>
        <div className={styles.Role}>
          <span className={styles.Title}>Mobile & Front End Developer</span>
          <p className={styles.Date}>2015 - 2017</p>
        </div>
        <div className={styles.Company}>
          <div className={styles.CompanyName}>
            <span>ASLAM, New IT</span>
            <img src={images.aslam.publicURL} alt="aslam" />
          </div>
          <p className={styles.JobTag}>RESPONSIBILITIES</p>
          <ul>
            <li><b>Hybrid mobile apps:</b> Cordova, Backbone & Marionette</li>
            <li><b>Front End:</b> HTML, CSS & JavaScript. Ajax + REST Services</li>
          </ul>
          <p className={styles.JobTag}>CLIENTS</p>
          <div className={styles.ClientList}>
            <span><FcAutomotive /> PSA Peugeot Citroën</span>
            <span><FcMultipleDevices /> Capgemini</span>
          </div>
        </div>
      </article>
      <article className={styles.Job}>
        <div className={styles.Role}>
          <span className={styles.Title}>Fullstack Developer</span>
          <p className={styles.Date}>2014 - 2015</p>
        </div>
        <div className={styles.Company}>
          <div className={styles.CompanyName}>
            <span>Krama e-soft</span>
            <img src={images.krama.publicURL} alt="krama" />
          </div>
          <p className={styles.JobTag}>RESPONSIBILITIES</p>
          <ul>
            <li><b>Front End:</b> HTML, CSS & JavaScript + Underscore.</li>
            <li><b>Back End:</b> Java, JSP & Struts.</li>
            <li><b>Hybrid & mobile apps:</b> Cordova, IBM MobileFirst, Android.</li>
          </ul>
          <p className={styles.JobTag}>CLIENTS</p>
          <div className={styles.ClientList}>
            <span><FcCamcorderPro /> Canal Plus</span>
            <span><FcMoneyTransfer /> Banco Popular</span>
            <span><FcBullish /> atlCapital</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Experience;
