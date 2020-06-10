import React from 'react';
import { FcLike, FcAbout, FcCommandLine, FcGraduationCap, FcIdea } from 'react-icons/fc';
import styles from './contact-info.module.scss';
import SocialIcons from './social-icons';

const ContactInfo = () => {
  return (
    <div className={styles.Contact}>
      <h1>CONTACT</h1>
      <div className={styles.Block}>
        <section>
          <p>Say hello on social media!</p>
          <SocialIcons theme="Dark" position="Left" />
        </section>
        <section className={styles.Mail}>
          <p>Send me an email:</p>
          <a href="mailto:hola@jorge-castano.com">hola@jorge-castano.com</a>
        </section>
      </div>
      <h3>Let's work together</h3>
      <section className={styles.ShortInfo}>
        <p>{['I ', <FcLike />, ' Software Development in many ways.']}</p>
        <p>I like to speak about JavaScript and modern web development in conferences and events, but I am also a doer with hands-on experience in famous frameworks and libraries.</p>
        <p>I believe that it is better to train developers instead of looking for your best fit. Code quality lasts over quick development. Practice makes perfection.</p>
        <p>All that said, this is how we can collaborate:</p>
      </section>
      <div className={styles.Block}>
        <section className={styles.Work}>
          <h4><FcAbout /> <span>Conferences</span></h4>
          <p>I can host or speak on your next corporate event / tech conference. Technology, development skills, and practicity with high doses of humor. Invite me to speak about:</p>
          <ul>
            <li>Digital Transformation</li>
            <li>Future & Technology</li>
            <li>Day-to-day Software Development</li>
            <li>Team engagement & Gamification</li>
            <li>Motivation & Happiness at Work</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcCommandLine /> <span>Coding</span></h4>
          <p>I can build your next MVP, design your next app architecture, work as a Senior Developer onsite / freelance, find the reasons of bad performance in your code, or be the next Tech Lead in your Front End Team.</p>
          <ul>
            <li>Front End Development</li>
            <li>Software Engineering Consultancy</li>
            <li>Lead & Principal Engineer Roles</li>
            <li>JavaScript Solutions</li>
            <li>Code Quality Analysis</li>
            <li>Bug Fixing</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcGraduationCap /> <span>Mentorship</span></h4>
          <p>I can help your development team in their own road to be Senior Developers. I strongly believe that training your team is preferable than looking for a new perfect match.</p>
          <ul>
            <li>Career Development & Personal Path</li>
            <li>Programming Best Practices</li>
            <li>Applications Architecture</li>
            <li>Data Structures & Algorithms</li>
            <li>JavaScript Pros & Cons</li>
            <li>Pair Programming</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcIdea /> <span>Volunteering</span></h4>
          <p>I am of the idea that it is through</p>
          <ul>
            <li>Career development</li>
            <li>Programming best practices</li>
            <li>Applications Architecture</li>
            <li>Data Structures & Algorithms</li>
            <li>JavaScript Pros & Cons</li>
            <li>Pair programming</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;
