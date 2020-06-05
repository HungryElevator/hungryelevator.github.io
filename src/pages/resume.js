// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql } from 'gatsby';

import WebLayout from '../components/web-layout';
import SEO from '../components/seo';
import Experience from '../components/experience';
import Skills from '../components/skills';


const Resume = ({ data, location }) => {
  return (
    <WebLayout>
      <SEO title="Resume | Jorge Castaño" />
      <Experience />
      <Skills />
    </WebLayout>
  );
};

export default Resume;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
