import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { FiLayers, FiCode, FiSmartphone, FiPenTool, FiBarChart2, FiZap, FiChevronDown, FiArrowRight, FiMousePointer } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaPalette, FaBrush, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import { useRef } from 'react';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  position: relative;
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 242, 254, 0.3);
  transform-style: preserve-3d;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: #a0a0a0;
  transform-style: preserve-3d;
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  color: #e0e0e0;
  transform-style: preserve-3d;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  &:hover {
    color: #4facfe;
    transform: translateY(-5px) rotateX(10deg);
  }
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1));
  filter: blur(30px);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
  perspective: 1000px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ServiceIcon = styled(motion.div)`
  font-size: 3rem;
  color: #4facfe;
  margin-bottom: 1.5rem;
  transform-style: preserve-3d;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 5rem;
  perspective: 1000px;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const StatNumber = styled(motion.div)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff3366, #33ccff);
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  transform-style: preserve-3d;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const FeaturesSection = styled.div`
  margin-top: 6rem;
`;

const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 8rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  &:nth-child(even) {
    direction: rtl;
    
    @media (max-width: 768px) {
      direction: ltr;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureContent = styled(motion.div)`
  direction: ltr;
  
  h3 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const FeatureImage = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  direction: ltr;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 51, 102, 0.2), rgba(51, 204, 255, 0.2));
    mix-blend-mode: overlay;
    z-index: 1;
  }
`;

const CtaSection = styled.section`
  background: linear-gradient(to right, #000428, #004e92);
  padding: 6rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    z-index: 1;
  }
  
  &::before {
    top: -150px;
    left: -150px;
    animation: float 20s ease-in-out infinite;
  }
  
  &::after {
    bottom: -150px;
    right: -150px;
    animation: float 15s ease-in-out infinite reverse;
  }
`;

const CtaGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 51, 102, 0.4) 0%,
    rgba(255, 51, 102, 0) 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(100px);
  z-index: 0;
  opacity: 0.7;
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  padding: 3rem;
  border-radius: var(--border-radius);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
`;

const CtaTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #d0d0d0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CtaText = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
`;

// Scroll to section function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const services = [
    {
      icon: <FaPalette />,
      title: 'Custom Icons',
      description: 'Unique, scalable icons designed to perfectly represent your brand and enhance user experience.'
    },
    {
      icon: <FaBrush />,
      title: 'Logo Design',
      description: 'Professional logo creation that captures your brand essence and makes a lasting impression.'
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Brand Identity',
      description: 'Comprehensive branding solutions including color schemes, typography, and visual guidelines.'
    },
    {
      icon: <FaRocket />,
      title: 'Brand Strategy',
      description: 'Strategic branding services to help your business stand out and connect with your audience.'
    }
  ];

  return (
    <>
      <HeroSection ref={containerRef}>
        <AnimatedBackground style={{ y, opacity }}>
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
            style={{ 
              width: '300px',
              height: '300px',
              top: '10%',
              left: '10%'
            }}
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
            style={{ 
              width: '400px',
              height: '400px',
              top: '60%',
              right: '10%'
            }}
          />
        </AnimatedBackground>

        <ContentWrapper>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Makers
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Icon & Branding Studio
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft unique icons and build powerful brands that tell your story and connect with your audience.
            Our creative studio specializes in creating memorable visual identities that stand out in the digital world.
          </Description>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaTwitter />
            </SocialLink>
          </SocialLinks>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <ServiceIcon
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <StatsContainer>
            <StatItem
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <StatNumber
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <StatNumber
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                50+
              </StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <StatNumber
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                10+
              </StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <StatNumber
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                300+
              </StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatItem>
          </StatsContainer>
        </ContentWrapper>
      </HeroSection>

      <Section
        id="about"
        title="Why Choose Us"
        subtitle="We deliver exceptional results through our expertise and dedication"
        centered
        dark
      >
        <StatsContainer>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StatNumber>500+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <StatNumber>50+</StatNumber>
            <StatLabel>Team Members</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatNumber>10+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StatNumber>300+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </StatsContainer>
      </Section>

      <CtaSection>
        <CtaGlow />
        <CtaContent>
          <CtaTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </CtaTitle>
          <CtaText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's work together to create something amazing. Contact us today to discuss your ideas and transform your vision into reality!
          </CtaText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="gradient" 
              size="large"
              icon={<FiArrowRight />}
            >
              Contact Us
            </Button>
          </motion.div>
        </CtaContent>
      </CtaSection>
    </>
  );
};

export default Home; 