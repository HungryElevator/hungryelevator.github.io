import React from 'react';
import { FcLike } from 'react-icons/fc';
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
        <section>
          <h4>Conferences</h4>
          <p>I can host your next corporate event / tech conference, or even talk about these topics:</p>
          <ul>
            <li>Digital transformation</li>
            <li>Day-to-day Software Development</li>
            <li>JavaScript Solutions</li>
            <li>Team engagement & Gamification</li>
          </ul>
        </section>
        <section>
          <h4>Mentorship</h4>
          <p>I can help your development team in their own road to be Senior Developers :</p>
          <ul>
            <li>Digital transformation</li>
            <li>Day-to-day Software Development</li>
            <li>JavaScript Solutions</li>
            <li>Team engagement & Gamification</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;
