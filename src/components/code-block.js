import React from 'react';
import styles from './code-block.module.scss';


const CodeBlock = ({ fnName, fnParams = [], content }) => {
  return (
    <div className={styles.Block}>
      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
      <h3><span>{fnName}</span>{`(${fnParams.join(', ')}) {`}</h3>
      <section className={styles.Content}>
        {content}
      </section>
      <h3>{'}'}</h3>
    </div>
  );
};

export default CodeBlock;
