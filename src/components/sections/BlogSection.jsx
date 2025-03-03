// eslint-disable
import React from 'react';

import { motion } from 'framer-motion';
import styles from '../../styles/BlogSection.module.css';

const BlogSection = ({ title = 'Latest News', posts = [] }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.blogSection} aria-labelledby='blog-title'>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <h2 id='blog-title' className={styles.sectionTitle}>
            {title}
          </h2>
        </div>
        
        <motion.div 
          className={styles.postsGrid}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {posts.map((post, index) => (
            <motion.div className={styles.postItem} key={index} variants={itemVariants}>
              <div className={styles.postImage}>
                <img src={post.image} alt={post.title} />
              </div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <a href={post.link} className={styles.readMore}>
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
