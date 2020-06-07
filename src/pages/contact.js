// Gatsby supports TypeScript natively!
import React from 'react';
import { Link, graphql } from 'gatsby';

import WebLayout from '../components/web-layout';
import SEO from '../components/seo';


const Contact = ({ data, location }) => {
  const { title, jorge } = data.site.siteMetadata;

  return (
    <WebLayout location={location} title={title}>
      <SEO title={`Contact | ${jorge}`} />
      {' Contact'}
    </WebLayout>
  );
};

export default Contact;

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
