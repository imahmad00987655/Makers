import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  fullHeight?: boolean;
  id?: string;
  className?: string;
  backgroundImage?: string;
  overflow?: string;
  titleGradient?: 'primary' | 'secondary' | 'accent' | 'none';
}

interface SectionContainerProps {
  dark: boolean;
  fullHeight: boolean;
  backgroundImage?: string;
  overflow: string;
}

interface SubtitleProps {
  dark?: boolean;
}

const SectionContainer = styled.section<SectionContainerProps>`
  padding: 7rem 2rem;
  background-color: ${(props) => (props.dark ? '#111' : '#fff')};
  color: ${(props) => (props.dark ? '#fff' : '#333')};
  min-height: ${(props) => (props.fullHeight ? '100vh' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: ${props => props.overflow};
  
  ${props => props.backgroundImage && `
    background-image: url(${props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props.dark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
      z-index: 1;
    }
  `}
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(0, 0, 0, 0), 
      ${props => props.dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}, 
      rgba(0, 0, 0, 0)
    );
    width: 80%;
    margin: 0 auto;
  }
`;

const SectionInner = styled.div<{ centered: boolean }>`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const getGradient = (gradient: string) => {
  switch(gradient) {
    case 'primary':
      return 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
    case 'secondary':
      return 'linear-gradient(45deg, var(--secondary-color), var(--accent-color))';
    case 'accent':
      return 'linear-gradient(45deg, var(--accent-color), var(--primary-color))';
    default:
      return 'none';
  }
};

const Title = styled(motion.h2)<{ textAlign: string; gradient: string }>`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  background: ${props => props.gradient !== 'none' ? props.gradient : 'none'};
  background-clip: ${props => props.gradient !== 'none' ? 'text' : 'none'};
  -webkit-background-clip: ${props => props.gradient !== 'none' ? 'text' : 'none'};
  -webkit-text-fill-color: ${props => props.gradient !== 'none' ? 'transparent' : 'inherit'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: ${props => props.textAlign === 'center' ? '50%' : '0'};
    transform: ${props => props.textAlign === 'center' ? 'translateX(-50%)' : 'none'};
    width: ${props => props.textAlign === 'center' ? '80px' : '60px'};
    height: 4px;
    background: ${props => props.gradient !== 'none' ? props.gradient : 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))'};
    border-radius: 4px;
  }
`;

const Subtitle = styled(motion.p)<SubtitleProps>`
  font-size: 1.3rem;
  color: ${(props) => (props.dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)')};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Section = ({
  children,
  title,
  subtitle,
  centered = false,
  dark = false,
  fullHeight = false,
  id,
  className,
  backgroundImage,
  overflow = 'visible',
  titleGradient = 'primary',
}: SectionProps) => {
  const gradientStyle = getGradient(titleGradient);
  
  return (
    <SectionContainer 
      id={id}
      className={className}
      dark={dark}
      fullHeight={fullHeight}
      backgroundImage={backgroundImage}
      overflow={overflow}
    >
      <SectionInner centered={centered}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {(title || subtitle) && (
            <TitleWrapper>
              {title && (
                <Title
                  variants={itemVariants}
                  textAlign={centered ? 'center' : 'left'}
                  gradient={gradientStyle}
                >
                  {title}
                </Title>
              )}
              {subtitle && (
                <Subtitle
                  variants={itemVariants}
                  dark={dark}
                >
                  {subtitle}
                </Subtitle>
              )}
            </TitleWrapper>
          )}
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </motion.div>
      </SectionInner>
    </SectionContainer>
  );
};

export default Section; 