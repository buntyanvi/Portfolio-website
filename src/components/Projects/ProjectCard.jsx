// ProjectCard.js
import React from 'react';
import styles from './ProjectCard.module.css';



const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  console.log('Image Path:', imageSrc);
  return (
    <div className={styles.container}>
      
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
