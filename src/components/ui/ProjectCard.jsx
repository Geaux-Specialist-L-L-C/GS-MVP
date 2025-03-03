// File: /src/components/ui/ProjectCard.jsx
// Description: ProjectCard component for the UI
// Author: GitHub Copilot
// Created: 2024-03-03

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = ({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  tags,
}) => {
  return (
    <div className={styles.card}>
      <Link href={link} passHref>
        <a>
          <div className={styles.imageWrapper}>
            <Image src={imageSrc} alt={imageAlt} layout='responsive' width={400} height={225} className={styles.image} />
          </div>
          <div className={styles.contentWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;