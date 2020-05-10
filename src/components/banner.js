import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './banner.module.scss';

const Banner = ({ height, title = '', subtitle = '', pic }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "jorge-calle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(filter: {ext: {eq: ".jpg"}}) {
        edges {
          node {
            name
            ext
            publicURL
            relativePath
          }
        }
      }
    }
  `);

  const src = data.allFile.edges.find(img => img.node.relativePath === pic);
  const inlineStyle = {
    backgroundImage: `url(${src.node.publicURL})`,
  };

  return (
    <section
      className={styles.Banner}
      style={inlineStyle}
    >
      <div className={styles.Mask} />
      <div className={styles.TitleBlock}>
        <div className={styles.Title}>
          <span className={styles.TitleBig}>
            {title}
          </span>
          <span className={styles.TitleSmall}>
            {subtitle}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
