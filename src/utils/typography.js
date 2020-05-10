import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

delete Wordpress2016.googleFonts;
Wordpress2016.overrideThemeStyles = ({ rhythm }) => ({
  'h1,h2,h3,h4,h5,h6': {
    fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
  },
  // h1: {
  //   marginBottom: rhythm(2),
  // },
});

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
