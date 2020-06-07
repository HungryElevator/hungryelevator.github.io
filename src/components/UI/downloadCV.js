import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from './button';
import styles from './downloadCV.module.scss';

const DownloadCV = ({ position }) => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(name: {eq: "CV_JorgeCastano"}) {
        publicURL
        name
      }
    }
  `);

  return (
    <div className={`${styles.Block} ${styles[position]}`}>
      <Button text="Download CV" downloadLink={data.resume.publicURL} />
    </div>
  );
};

export default DownloadCV;
