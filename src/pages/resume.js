// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql } from 'gatsby';

import WebLayout from '../components/web-layout';
import SEO from '../components/seo';
import Experience from '../components/experience';


const Resume = ({ data, location }) => {
  return (
    <WebLayout>
      <SEO title="Resume | Jorge Castaño" />
      <Experience />
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
