import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { FaPalette, FaVectorSquare, FaUsers, FaLightbulb } from 'react-icons/fa';
import { useRef } from 'react';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.1) 0%, transparent 50%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #1a1a1a;
  position: relative;
  font-weight: 800;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  perspective: 1000px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
    mix-blend-mode: overlay;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
    mix-blend-mode: overlay;
  }
`;

const ProjectContent = styled.div`
  text-align: left;
  transform: translateZ(20px);
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-weight: 700;
  background: linear-gradient(45deg, #1a1a1a, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(motion.span)`
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #4facfe;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateY(-2px) rotateX(5deg);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FloatingElements = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
  filter: blur(30px);
`;

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const projects = [
    {
      title: 'Tech Startup Branding',
      description: 'Created a complete brand identity for a tech startup, including logo, icons, and brand guidelines. The project focused on creating a modern, innovative visual language that resonates with tech-savvy audiences.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['Logo Design', 'Brand Identity', 'Icon Set', 'Visual Strategy'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Icon Set',
      description: 'Designed a comprehensive icon set for an e-commerce platform, focusing on clarity and user experience. The icons were created with scalability and consistency in mind, ensuring perfect display across all devices.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['Icon Design', 'Vector Graphics', 'UI/UX', 'Design Systems'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Corporate Rebranding',
      description: 'Led a complete rebranding project for a corporate client, including new logo and visual identity. The project involved extensive research and strategy development to create a fresh, modern brand presence.',
      image: 'https://via.placeholder.com/300x200',
      tech: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <ProjectsSection ref={containerRef}>
      <FloatingElements style={{ y, opacity }}>
        <FloatingElement
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <FloatingElement
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '60%', right: '10%' }}
        />
      </FloatingElements>

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Work
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage className="project-image">
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 