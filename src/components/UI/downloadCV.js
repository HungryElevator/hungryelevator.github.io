import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from './button';

const DownloadCV = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(name: {eq: "CV_JorgeCastano"}) {
        publicURL
        name
      }
    }
  `);

  return (
    <Button text="Download CV" downloadLink={data.resume.publicURL} />
  );
};

export default DownloadCV;
