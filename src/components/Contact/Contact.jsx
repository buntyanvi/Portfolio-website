import React from 'react';
import styles from './Contact.module.css';
import emailIcon from '../../../assets/contact/emailIcon.png';
import githubIcon from '../../../assets/contact/githubIcon.png';
import linkedinIcon from '../../../assets/contact/linkedinIcon.png';
import whatsapp from '../../../assets/contact/whatsapp.png';

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel Free to Contact</p>
      </div >
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt='Email icon' />
          <a href="mailto:lvigneshbunty789@gmail.com">lvigneshbunty789@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt='Github icon' />
          <a href="https://github.com/buntyanvi">github.com/buntyanvi</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt='Linkedin icon' />
          <a href="https://www.linkedin.com/in/vignesh-lagishetti-69a102219/">linkedin.com/vignesh-lagishetti</a>
        </li>
        <li className={styles.link} name='whatsapp' id='whatsapp'>
          <img src={whatsapp} alt='Whatsapp' />
          <a href="https://wa.me/+917997238424">Whatsapp Me</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
