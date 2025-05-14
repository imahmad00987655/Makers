import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface CardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  delay?: number;
  featured?: boolean;
}

interface StyledCardProps {
  hover: boolean;
  featured?: boolean;
}

const CardContainer = styled(motion.div)<StyledCardProps>`
  background: ${props => props.featured ? 
    'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(240, 240, 240, 1))' : 
    'white'};
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: ${props => props.featured ? 
    '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 51, 102, 0.1)' : 
    'var(--shadow-md)'};
  transition: var(--transition);
  height: 100%;
  cursor: ${(props) => (props.hover ? 'pointer' : 'default')};
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props => props.featured ? 
      'linear-gradient(45deg, var(--primary-color), var(--accent-color))' : 
      'linear-gradient(45deg, var(--primary-color), var(--secondary-color))'};
    z-index: 2;
    transform: scaleX(${props => props.featured ? '1' : '0'});
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.featured ? 
      'linear-gradient(135deg, rgba(255, 51, 102, 0.05), rgba(157, 78, 221, 0.05))' : 
      'transparent'};
    z-index: -1;
    opacity: ${props => props.featured ? '1' : '0'};
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: ${(props) => (props.hover ? 'translateY(-12px)' : 'none')};
    box-shadow: ${(props) => (props.hover ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
`;

const CardIconWrapper = styled.div<{ featured?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
`;

const CardIcon = styled.div<{ featured?: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: ${props => props.featured ? 
    'linear-gradient(135deg, rgba(255, 51, 102, 0.12), rgba(157, 78, 221, 0.12))' : 
    'linear-gradient(135deg, rgba(255, 51, 102, 0.08), rgba(51, 204, 255, 0.08))'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  color: ${props => props.featured ? 'var(--accent-color)' : 'var(--primary-color)'};
  font-size: 2rem;
  box-shadow: ${props => props.featured ? 
    '0 8px 20px rgba(157, 78, 221, 0.15)' : 
    '0 6px 15px rgba(255, 51, 102, 0.1)'};
  
  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3<{ featured?: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
  color: ${props => props.featured ? 'var(--accent-color)' : '#333'};
  transition: var(--transition);
`;

const CardContent = styled.div`
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;

  p:last-child {
    margin-bottom: 0;
  }
`;

const Card = ({ 
  children, 
  title, 
  icon, 
  hover = true, 
  className, 
  onClick,
  delay = 0,
  featured = false 
}: CardProps) => {
  return (
    <CardContainer
      hover={hover}
      featured={featured}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      viewport={{ once: true }}
      whileHover={hover ? { 
        scale: 1.03,
        transition: { duration: 0.3 } 
      } : {}}
    >
      {icon && (
        <CardIconWrapper featured={featured}>
          <CardIcon featured={featured}>{icon}</CardIcon>
        </CardIconWrapper>
      )}
      
      {title && (
        <CardHeader>
          <CardTitle featured={featured}>{title}</CardTitle>
        </CardHeader>
      )}
      
      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card; 