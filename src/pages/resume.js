// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql } from 'gatsby';

import WebLayout from '../components/web-layout';
import SEO from '../components/seo';
import Experience from '../components/experience';
import Skills from '../components/skills';
import DownloadCV from '../components/UI/downloadCV';


const Resume = ({ data, location }) => {
  const { jorge } = data.site.siteMetadata;

  return (
    <WebLayout>
      <SEO title={`Resume | ${jorge}`} />
      <DownloadCV position="Right" />
      <Experience />
      <Skills />
      <DownloadCV />
    </WebLayout>
  );
};

export default Resume;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        jorge
      }
    }
  }
`;
