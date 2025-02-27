import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/ProjectCard.module.css';

const ProjectCard = ({ 
  title, 
  description, 
  link, 
  imageSrc = '/images/project-placeholder.jpg',
  imageAlt = 'Project thumbnail',
  tags = []
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          width={400}
          height={225}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        
        <p className={styles.description}>{description}</p>
        
        <Link href={link} className={styles.link}>
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={styles.arrow}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;