// Experience.jsx
import React from 'react';

import history from '../../Data/history.json';
import skills from '../../Data/skills.json';

import htmlImage from '../../../assets/skills/html.png';
import cssImage from '../../../assets/skills/css.png';
import reactImage from '../../../assets/skills/react.png';
import pythonImage from '../../../assets/skills/python.png'
import aicteImage from '../../../assets/history/aicte.png';
import verzeoImage from '../../../assets/history/verzeo.png'
import styles from './Experience.module.css';
import machineImage from '../../../assets/skills/machine.png';
import javascriptImage from '../../../assets/skills/javascript.png';
import mysqlImage from '../../../assets/skills/mysql.png';
import awsImage from '../../../assets/skills/aws.png';

const getSkillImageByTitle = (title) => {
  switch (title) {
    case 'HTML':
      return htmlImage;
    case 'CSS':
      return cssImage;
    case 'JavaScript':
      return javascriptImage;  
    case 'AWS':
      return awsImage;
    case 'React':
      return reactImage;
    case 'MySql':
      return mysqlImage;
    case 'Python':
      return pythonImage;
    case 'Machine Learning':
      return machineImage;
    

    default:
      return null; // Return a default image or handle unknown titles
  }
};

const getHistoryImageByOrg = (organization) => {
  switch (organization) {
    case 'AICTE':
      return aicteImage;
    case 'VERZEO':
      return verzeoImage;
    default:
      return null; // Return a default image or handle unknown organizations
  }
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImageContainer}>
                <img src={getSkillImageByTitle(skill.title)} alt={skill.title} />
              </div>
              <p>{skill.title} </p>
            </div>
          ))}
        </div>

        <div className={styles.history}>
          {history.map((historyItem, id) => (
            <div key={id} className={styles.historyItemContainer}>
              <li>
                <div className={styles[`${historyItem.organisation.toLowerCase()}LogoContainer`]}>
                  <img src={getHistoryImageByOrg(historyItem.organisation)} alt={`${historyItem.organisation} Logo`} />
                </div>
                <div className={styles.historyItem}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
