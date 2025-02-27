import Layout from '../components/layout/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Alex brings over 15 years of experience in technology and education innovation. With a background in both software development and educational psychology, Alex founded Geaux Specialist to bridge the gap between technology and impactful learning.',
      image: '/images/team/alex-johnson.jpg'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Maria leads our technical development with her expertise in AI, machine learning, and system architecture. She previously worked at leading tech companies before joining Geaux Specialist to develop scalable solutions for education and healthcare.',
      image: '/images/team/maria-rodriguez.jpg'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Head of Education',
      bio: 'David oversees our education-focused initiatives, bringing his 10+ years of experience as a curriculum developer and instructional designer. He ensures our products meet the highest standards of educational effectiveness.',
      image: '/images/team/david-chen.jpg'
    },
    {
      id: 4,
      name: 'Samantha White',
      role: 'Director of Healthcare Solutions',
      bio: 'Samantha combines her clinical background as a registered nurse with her passion for healthcare technology. She guides the development of our healthcare products to ensure they meet real-world clinical needs.',
      image: '/images/team/samantha-white.jpg'
    }
  ];

  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace creative thinking and continuously explore new technologies to solve complex problems.',
      icon: '💡'
    },
    {
      title: 'Impact',
      description: 'Every project we undertake is measured by its positive impact on communities and individuals.',
      icon: '🌟'
    },
    {
      title: 'Inclusivity',
      description: 'We design solutions that are accessible and beneficial to diverse populations and needs.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our endeavors.',
      icon: '🛡️'
    }
  ];

  // Timeline events
  const timeline = [
    {
      year: '2018',
      title: 'Founding of Geaux Specialist',
      description: 'Established with a mission to create innovative solutions in education and technology.'
    },
    {
      year: '2019',
      title: 'Launch of Geaux Academy',
      description: 'Our first major project introduced personalized learning experiences through AI technology.'
    },
    {
      year: '2020',
      title: 'Development of Geaux HelpED',
      description: 'Expanded into healthcare solutions with our comprehensive patient management system.'
    },
    {
      year: '2021',
      title: 'ReanimatED Echos Released',
      description: 'Advanced voice processing technology developed to enhance audio communication.'
    },
    {
      year: '2022',
      title: 'Introduction of Geaux Emporium',
      description: 'Launched our e-commerce platform for educational resources and tools.'
    },
    {
      year: '2023',
      title: 'Company Expansion',
      description: 'Grew our team and capabilities, reaching more customers across diverse sectors.'
    }
  ];

  return (
    <Layout
      title="About Us"
      description="Learn about Geaux Specialist LLC, our mission, values, and the team behind our innovative solutions."
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Geaux Specialist</h1>
            <p className={styles.heroSubtitle}>
              Our story, mission, and the dedicated team behind our innovative solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionStatement}>
                To empower communities through technology and education by creating innovative 
                solutions that address real-world challenges and enhance people's lives.
              </p>
              <p className={styles.missionDescription}>
                At Geaux Specialist, we believe in the transformative power of technology when 
                applied with purpose and understanding. We develop solutions that bridge gaps 
                in education, healthcare, and professional development, focusing on creating 
                meaningful experiences that drive positive change.
              </p>
              <p className={styles.missionDescription}>
                We're committed to continuous innovation, ethical practices, and inclusive design 
                principles that ensure our products are accessible and beneficial to diverse communities.
              </p>
            </div>
            <div className={styles.missionImageContainer}>
              <img 
                src="/images/mission-image.jpg" 
                alt="Geaux Specialist mission visualization" 
                className={styles.missionImage}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Our Core Values</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            The principles that guide our work and company culture
          </p>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Meet Our Team</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            The dedicated specialists behind our innovative solutions
          </p>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMember}>
                <div className={styles.memberImageContainer}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Our Journey</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Key milestones in the Geaux Specialist story
          </p>
          
          <div className={styles.timeline}>
            {timeline.map((event, index) => (
              <div key={index} className={`${styles.timelineEvent} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{event.year}</div>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Join Us on Our Mission</h2>
            <p className={styles.ctaText}>
              Whether you're interested in our products, want to collaborate, or are curious about 
              career opportunities, we'd love to connect with you.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className="button button-primary button-large">
                Contact Us
              </a>
              <a href="/projects" className="button button-secondary button-large">
                Explore Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}