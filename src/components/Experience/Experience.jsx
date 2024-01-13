// Experience.jsx
import React from 'react';
import history from '../../Data/history.json';
import skills from '../../Data/skills.json';
import htmlImage from '../../../assets/skills/html.png';
import cssImage from '../../../assets/skills/css.png';
import reactImage from '../../../assets/skills/react.png';
import nodeImage from '../../../assets/skills/node.png';
import graphqlImage from '../../../assets/skills/graphql.png';
import mongodbImage from '../../../assets/skills/mongodb.png';
import figmaImage from '../../../assets/skills/figma.png';
import googleImage from '../../../assets/history/google.png';
import netflixImage from '../../../assets/history/netflix.png';
import styles from './Experience.module.css';

const getSkillImageByTitle = (title) => {
  switch (title) {
    case 'HTML':
      return htmlImage;
    case 'CSS':
      return cssImage;
    case 'React':
      return reactImage;
    case 'Node':
      return nodeImage;
    case 'GraphQL':
      return graphqlImage;
    case 'MongoDB':
      return mongodbImage;
    case 'Figma':
      return figmaImage;
    default:
      return null; // Return a default image or handle unknown titles
  }
};

const getHistoryImageByOrg = (organization) => {
  switch (organization) {
    case 'Google':
      return googleImage;
    case 'Netflix':
      return netflixImage;
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
