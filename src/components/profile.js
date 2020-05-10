import React from 'react';

import styles from './profile.module.scss';
import CodeBlock from './code-block';
import Skills from './skills';
import Skill from './skill';
import JobActivity from './job-activity';

const Profile = () => {
  const years = new Date().getFullYear() - 2014;

  return (
    <div className={styles.Console}>
      <section className={styles.Intro}>
        <h1>My name is Jorge Castaño.</h1>
        <p>I'm a <b>Senior FrontEnd Engineer</b> - currently also a <b>Tech Lead</b>.</p>
        <p>I have worked in many different <b>JavaScript</b> projects such as fintech, banks, health care, automobile &amp; videogames, for start-ups and top tech companies.</p>
        <p>Now I'm a <b>ReactJS enthusiast</b>, but I have also professional development experience with <b>Angular (5↑), VueJS, React Native and Backbone</b>.</p>
      </section>

      <section>
        <h1>My Skills</h1>
        <div className={styles.Skills}>
          <Skill label="JavaScript" progress={90} />
          <Skill label="HTML & CSS" progress={90} />
          <Skill label="ReactJS" progress={85} />
          <Skill label="Angular" progress={80} />
          <Skill label="Public speaking" progress={95} />
          <Skill label="Humor" progress={100} />
        </div>
      </section>

      <section>
        <h1>What I do</h1>
        <JobActivity
          title="FrontEnd Development"
          description={[
            'JavaScript & Frameworks coding',
            'Application design from the scratch',
            'Tech Lead & Product Design roles',
            `${years}+ years Experience & Expertise`
          ]}
        />
        <JobActivity
          title="Code Quality Consultancy & Analysis"
          description={[
            'Full detailed code reviews',
            'Legacy & modern code analysis',
            'Programming best practices',
            'Code performance',
          ]}
        />
        <JobActivity
          title="Development Teams Mentorship"
          description={[
            'Programming standards definitions',
            'Applications Architecture',
            'JavaScript Pros & Cons',
            'Programming best practices',
            'Pair programming',
          ]}
        />
      </section>

      <section>
        <h1>Companies I've worked with</h1>
        <p>BBVA, Bankinter, Santalucía, Pull&Bear, Daimler Group (Mercedes-Benz), PSA Peugeot Citroen, Capgemini, Indra (Minsait)</p>
      </section>

      {/* <section className={styles.Me}>
        <h1>Jorge Castaño</h1>
        <p className={styles.Job}>FrontEnd Engineer & Creative Developer</p>
        <p className={styles.Job}>hola@jorge-castano.com</p>
      </section>
      <CodeBlock
        fnName="who"
        fnParams={['I', 'am']}
      >
        <p>I'm a <b>Senior FrontEnd Engineer</b> - currently also <b>Tech Lead</b> - who has worked in many different <b>JavaScript</b> projects such as fintech, banks, health care, automobile &amp; videogames, for start-ups and top tech companies.</p>
        <p>Now I'm a <b>ReactJS enthusiast</b>, but I have also professional development experience with <b>Angular (5↑), VueJS, React Native and Backbone</b>.</p>
      </CodeBlock> */}

      {/* <section>
        <h1>What makes me a top JavaScript developer?</h1>
        <p>I am a technology lover with a strong logic mindset and a <b>problem-solving</b> attitude.</p>
        <p>I have always work in small & medium teams (up to 20 people) following an <b>agile methodology (SCRUM)</b>, trying to deliver small pieces instead of big parts, and knowing every person involved in the process; from scratch to deployment.</p>
        <p>I am used to create <b>Software Solutions</b> from a simple idea, and to lead FrontEnd teams as a mentor or tech lead. I like code reviews and <b>coding solutions debates</b>.</p>
        <p>As a hobby, I write and perform <b>stand-up comedy</b> and <b>improvisational theatre</b>, improving my verbal and written communication skills, as of beating stage fright. This translates into <span className={styles.MajorMono}>innovation</span> and <span className={styles.Marker}>creativity</span>.</p>
        <p>With <b>{years}+ years of FrontEnd development</b> work, I am confident that my curiosity, my design abilities, and my willingness to learn and improve my skills are worth a chance for us to meet.</p>
      </section> */}
    </div>
  );
};

export default Profile;
