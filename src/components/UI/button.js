import React from 'react';
import styles from './button.module.scss';

const Button = ({ text, downloadLink }) => {
  let button = (<button type="button" className={styles.Button}>{text}</button>);

  if (downloadLink) {
    button = (
      <a href={downloadLink} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  }

  return button;
};

export default Button;
