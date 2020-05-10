// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql } from 'gatsby';

import Profile from '../components/profile';
import WebLayout from '../components/web-layout';
import SEO from '../components/seo';
import Skills from '../components/skills';


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <WebLayout
      location={location}
      title={siteTitle}
      bannerTitle="Hello World."
      bannerSubtitle="I ❤ Software Development."
    >
      <SEO title="Jorge Castaño" />
      <Profile />
    </WebLayout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
