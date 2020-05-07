import React from 'react';

import { rhythm } from '../utils/typography';
import styles from './profile.module.scss';
import CodeBlock from './code-block';

const Profile = () => {
  const years = new Date().getFullYear() - 2014;

  return (
    <div>
      <CodeBlock
        fnName="who"
        fnParams={['I', 'am']}
        content={[
          <>
            <p>I'm a <b>Senior Frontend Engineer</b> - currently also <b>Tech Lead</b> - who has worked in many different <b>JavaScript</b> projects such as fintech, banks, health care &amp; automobile, even videogames, for start-ups and top tech companies.</p>
            <p>Now I'm a <b>React enthusiast</b>, but I have also professional development experience with <b>Angular (5↑), Vue.js, React Native and Backbone</b>.</p>
          </>,
        ]}
      />

      <div>
        <h3 className="title">What makes me a top JavaScript developer?</h3>
        {/* <p>I've written <b>End-to-end test</b> with Selenium &amp; Cucumber in a Java Back-End environment, and also used Orchard.js in a JavaScript environment. The Front-End JavaScript <b>unit tests</b> were made with Tape.js. </p> */}
        <p>I'm a technology lover with a strong problem-solving mindset.</p>
        <p>I've always work in small teams following an <b>agile methodology (SCRUM)</b>, trying to deliver small pieces instead of big parts, and knowing every person involved in the process; from scratch to deployment.</p>
        <p>As a hobby, I write and perform <b>stand-up comedy</b> and <b>improvisational theatre</b>, improving my verbal and written communication skills, as of beating stage fright. Besides, I design my own shows' posters.</p>
        <p>This translates into <span className={styles.MajorMono}>innovation</span> and <span className={styles.Marker}>creativity</span>.</p>
        <p>With <b>{years}+ years of Front-end development</b> work, I am confident that my curiosity, my design abilities, and my willingness to learn and improve my skills are worth a chance for us to meet.</p>
      </div>
    </div>
  );
};

export default Profile;
