// Gatsby supports TypeScript natively!
import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import BlogLayout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <BlogLayout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Bio />
      {posts.map(({ node }) => {
        debugger;
        const title = node.frontmatter.title || node.frontmatter.path;

        return (
          <article key={node.frontmatter.path}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </BlogLayout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            path
          }
        }
      }
    }
  }
`;
