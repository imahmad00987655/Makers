import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPalette, FaVectorSquare, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #4facfe;
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const About = () => {
  const skills = [
    {
      icon: <FaPalette />,
      title: 'Icon Design',
      description: 'Creating unique, scalable icons that perfectly represent your brand and enhance user experience across all platforms.'
    },
    {
      icon: <FaVectorSquare />,
      title: 'Vector Graphics',
      description: 'Expert in creating clean, scalable vector graphics that maintain quality at any size, perfect for logos and icons.'
    },
    {
      icon: <FaUsers />,
      description: 'Understanding your brand and audience to create visual identities that resonate and create lasting connections.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Creative Strategy',
      description: 'Developing comprehensive branding strategies that align with your business goals and market positioning.'
    }
  ];

  return (
    <AboutSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Makers
        </SectionTitle>
        
        <AboutContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            At Makers, we're passionate about creating visual identities that make brands stand out.
            Our team of experienced designers specializes in crafting unique icons and comprehensive
            branding solutions that tell your story and connect with your audience.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We believe that great design is more than just aesthetics - it's about creating meaningful
            connections and memorable experiences. Our approach combines creative excellence with
            strategic thinking to deliver results that drive business growth.
          </p>
        </AboutContent>

        <Grid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <Icon>{skill.icon}</Icon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 