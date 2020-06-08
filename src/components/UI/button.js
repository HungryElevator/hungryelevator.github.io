import React from 'react';
import { Link } from 'gatsby';
import styles from './button.module.scss';

const Button = ({ text, downloadLink, navigate }) => {
  let button = (<button type="button" className={styles.Button}>{text}</button>);

  if (downloadLink) {
    button = (
      <a href={downloadLink} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  } else if (navigate) {
    button = (
      <Link to={navigate}>
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;
