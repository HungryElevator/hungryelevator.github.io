import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaMicrophoneAlt, FaBookReader, FaRegLaughBeam, FaUsers, FaTrello } from 'react-icons/fa';
import { GiTechnoHeart, GiRetroController } from 'react-icons/gi';

import styles from './skills.module.scss';

const Skills = () => {
  const images = useStaticQuery(graphql`
    query {
      javascript: file(relativePath: {eq: "skills/javascript.png"}) {
        publicURL
      }
      html5: file(relativePath: {eq: "skills/html5.png"}) {
        publicURL
      }
      css3: file(relativePath: {eq: "skills/css3.png"}) {
        publicURL
      }
      sass: file(relativePath: {eq: "skills/sass.png"}) {
        publicURL
      }
      react: file(relativePath: {eq: "skills/react.png"}) {
        publicURL
      }
      angular: file(relativePath: {eq: "skills/angular.png"}) {
        publicURL
      }
      vue: file(relativePath: {eq: "skills/vue.png"}) {
        publicURL
      }
      backbonejs: file(relativePath: {eq: "skills/backbonejs.png"}) {
        publicURL
      }
      phaser: file(relativePath: {eq: "skills/phaser.png"}) {
        publicURL
      }
      unity: file(relativePath: {eq: "skills/unity.png"}) {
        publicURL
      }
      github: file(relativePath: {eq: "skills/github.png"}) {
        publicURL
      }
      bitbucket: file(relativePath: {eq: "skills/bitbucket.png"}) {
        publicURL
      }
      jira: file(relativePath: {eq: "skills/jira.png"}) {
        publicURL
      }
      azure: file(relativePath: {eq: "skills/azure.png"}) {
        publicURL
      }
      photoshop: file(relativePath: {eq: "skills/photoshop.png"}) {
        publicURL
      }
      googleplay: file(relativePath: {eq: "skills/googleplay.png"}) {
        publicURL
      }
      appstore: file(relativePath: {eq: "skills/appstore.png"}) {
        publicURL
      }
      api: file(relativePath: {eq: "skills/api.png"}) {
        publicURL
      }
      agile: file(relativePath: {eq: "skills/agile.png"}) {
        publicURL
      }
    }
  `);

  const ImageSkill = ({ label, image = label.toLowerCase() }) => (
    <li className={styles.VisualSkill}>
      <img src={images[image].publicURL} alt={label} />
      <span>{label}</span>
    </li>
  );

  const IconSkill = ({ label, children }) => (
    <li className={styles.VisualSkill}>
      {children}
      <span>{label}</span>
    </li>
  );

  return (
    <div className={styles.Skills}>
      <svg className={styles.GradientSVG}>
        <defs>
          <linearGradient id="grad1" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ffc107', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#fc0074', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <h1>SKILLS</h1>
      <section className={styles.Block}>
        <h3>Software Development</h3>
        <ul className={styles.List}>
          <ImageSkill label="JavaScript" />
          <ImageSkill label="HTML5" />
          <ImageSkill label="CSS3" />
          <ImageSkill label="Sass" />
          <ImageSkill label="React" />
          <ImageSkill label="Angular" />
          <ImageSkill label="Vue" />
          <ImageSkill label="React Native" image="react" />
          <ImageSkill label="BackboneJS" />
          <ImageSkill label="Phaser" />
          <ImageSkill label="Unity 3D" image="unity" />
        </ul>
      </section>
      <section className={styles.Block}>
        <h3>Additional Skills</h3>
        <ul className={styles.List}>
          <ImageSkill label="SCRUM" image="agile" />
          <ImageSkill label="GitHub" />
          <ImageSkill label="Bitbucket" />
          <ImageSkill label="JIRA" />
          <ImageSkill label="Azure" />
          <ImageSkill label="Photoshop" />
          <ImageSkill label="Google Play Deployment" image="googleplay" />
          <ImageSkill label="App Store Deployment" image="appstore" />
          <ImageSkill label="API Definition" image="api" />
        </ul>
      </section>
      <section className={styles.Block}>
        <h3>Soft Skills</h3>
        <ul className={styles.List}>
          <IconSkill label="Public Speaking"><FaMicrophoneAlt /></IconSkill>
          <IconSkill label="Leadership"><FaUsers /></IconSkill>
          <IconSkill label="Team Management"><FaTrello /></IconSkill>
          <IconSkill label="Gamification"><GiRetroController /></IconSkill>
          <IconSkill label="Passion for Technology"><GiTechnoHeart /></IconSkill>
          <IconSkill label="Storytelling"><FaBookReader /></IconSkill>
          <IconSkill label="Humor"><FaRegLaughBeam /></IconSkill>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
