/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaMicrophoneAlt, FaRegLaughBeam, FaAngular } from 'react-icons/fa';
import { FcMultipleDevices, FcInspection, FcGraduationCap } from 'react-icons/fc';

import styles from './profile.module.scss';
import Skill from './skill';
import JobActivity from './job-activity';
import Button from './UI/button';

const Profile = () => {
  const years = new Date().getFullYear() - 2014;
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/_logo/"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      resume: file(name: {eq: "CV_JorgeCastano"}) {
        publicURL
        name
      }
    }
  `);

  const companyImgs = data.allFile.edges.sort((a, b) => (a.node.name > b.node.name ? 1 : -1)).map(img => img.node);

  return (
    <div className={styles.Console}>
      <section className={styles.InfoBlock}>
        <h1>{'aboutMe(Jorge, Cáster) {'}</h1>
        <p>I'm a <b>Senior FrontEnd Engineer</b> — currently also a <b>Tech Lead</b>.</p>
        <p>I have worked in many different <b>JavaScript</b> projects such as fintech, banks, health care, automobile &amp; videogames, for start-ups and top tech companies.</p>
        <p>Now I'm a <b>ReactJS enthusiast</b>, but I have also professional development experience with <b>Angular (5↑), VueJS, React Native and Backbone</b>.</p>
        <h1>{'}'}</h1>
      </section>

      <section>
        <h1>{'my(top, skills) {'}</h1>
        <div className={styles.Skills}>
          <Skill label={[<FaJs />, ' JavaScript']} progress={90} />
          <Skill label={[<FaHtml5 />, ' HTML & CSS ', <FaCss3Alt />]} progress={90} />
          <Skill label={[<FaReact />, ' ReactJS']} progress={85} />
          <Skill label={[<FaAngular />, ' Angular']} progress={80} />
          <Skill label={[<FaMicrophoneAlt />, ' Public speaking']} progress={95} />
          <Skill label={[<FaRegLaughBeam />, ' Humor']} progress={100} />
        </div>
        <h1>{'}'}</h1>
      </section>

      <section>
        <h1>{'what(I, do) {'}</h1>
        <JobActivity
          title={[<FcMultipleDevices />, ' FrontEnd Development']}
          description={[
            'JavaScript & Frameworks coding',
            'Application architecture',
            'Application design from the scratch',
            'Tech Lead & Product Design roles',
            `${years}+ years Experience & Expertise`,
          ]}
        />
        <JobActivity
          title={[<FcInspection />, ' Code Quality Consultancy & Analysis']}
          description={[
            'Full detailed code reviews',
            'Legacy & modern code analysis',
            'Programming best practices',
            'Code performance',
          ]}
        />
        <JobActivity
          title={[<FcGraduationCap />, ' Development Teams Mentorship']}
          description={[
            'Programming best practices',
            'Applications Architecture',
            'JavaScript Pros & Cons',
            'Pair programming',
          ]}
        />
        <h1>{'}'}</h1>
      </section>

      <section>
        {/* <h1>{'companies(who, trust, me) {'}</h1> */}
        <h1>{'clients() {'}</h1>
        <div className={styles.Companies}>
          {companyImgs.map(img => (
            <img src={img.publicURL} alt={img.name} />
          ))}
        </div>
        <h1>{'}'}</h1>
      </section>

      <section className={styles.InfoBlock}>
        {/* <h1>What makes me a top JavaScript developer?</h1> */}
        <h1>{'whyIAm(a, top, Engineer) {'}</h1>
        <p>I am a technology lover with a strong logic mindset and a <b>problem-solving</b> attitude.</p>
        <p>I have always worked in small & medium teams — up to 20 people — following <b>agile methodologies</b>, trying to deliver small pieces instead of big parts, and knowing every person involved in the process; from scratch to deployment.</p>
        <p>I am used to create <b>Software Solutions</b> from a simple idea, and to lead FrontEnd teams as a mentor or tech lead. I like code reviews and <b>coding solutions debates</b>.</p>
        <p>As a hobby, I write and perform <b>stand-up comedy</b> and <b>improvisational theatre</b>, improving my verbal and written communication skills, as of beating stage fright. This translates into <span className={styles.MajorMono}>innovation</span> and <span className={styles.Marker}>creativity</span>.</p>
        <p>With <b>{years}+ years of FrontEnd development</b> work, I am confident that my curiosity, my design abilities, and my willingness to learn and improve my skills are worth a chance for us to meet.</p>
        <h1>{'}'}</h1>
      </section>

      <section className={styles.ButtonLine}>
        <Button text="Download CV" downloadLink={data.resume.publicURL} />
        <Button text="Get in touch" />
      </section>

      {/* <section className={styles.Me}>
        <h1>Jorge Cáster</h1>
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
    </div>
  );
};

export default Profile;
