// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql } from 'gatsby';
import { FcLike } from 'react-icons/fc';

import Profile from '../components/profile';
import WebLayout from '../components/web-layout';
import SEO from '../components/seo';


const Index = ({ data, location }) => {
  return (
    <WebLayout
      hasBanner
      bannerTitle="Hello World."
      bannerSubtitle={['I ', <FcLike />, ' Software Development.']}
    >
      <SEO title="Jorge Castaño | Software Engineer" />
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
