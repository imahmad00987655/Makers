import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #000428, #004e92);
  color: #fff;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--primary-color));
    background-size: 300% 100%;
    animation: gradient 8s ease infinite;
    z-index: 2;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const FooterBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    opacity: 0.15;
  }
  
  &::before {
    background: radial-gradient(circle, var(--primary-color) 0%, rgba(255,51,102,0) 70%);
    height: 500px;
    width: 500px;
    top: -100px;
    left: -100px;
    animation: float 15s ease-in-out infinite;
  }
  
  &::after {
    background: radial-gradient(circle, var(--secondary-color) 0%, rgba(51,204,255,0) 70%);
    height: 400px;
    width: 400px;
    bottom: -50px;
    right: -50px;
    animation: float 15s ease-in-out infinite reverse;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    border-radius: 3px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 0;
  width: fit-content;
  
  &:hover {
    color: white;
    transform: translateX(8px);
  }
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    transform: translateX(-20px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
  }
  
  svg {
    font-size: 1.2rem;
    flex-shrink: 0;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    padding: 8px;
    border-radius: 50%;
    color: white;
    box-shadow: 0 5px 15px rgba(255, 51, 102, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: #fff;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &::before {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 1.5rem;
  position: relative;
`;

const NewsletterInput = styled.input`
  padding: 1rem 1.2rem;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 8px;
  flex-grow: 1;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const NewsletterButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    opacity: 0.9;
    
    svg {
      transform: translateX(3px);
    }
  }
`;

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterBg />
      <FooterContent>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          <FooterSection variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h2 style={{ marginBottom: '1.2rem' }}>
                <span style={{ 
                  background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  fontSize: '2rem'
                }}>Ion</span>Site
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Creating beautiful and functional websites with stunning animations and intuitive interfaces that transform your digital presence.
              </p>
            </motion.div>
            
            <SocialLinks>
              <SocialIcon 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <FiFacebook />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <FiTwitter />
              </SocialIcon>
              <SocialIcon 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <FiInstagram />
              </SocialIcon>
              <SocialIcon 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <FiGithub />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
        </motion.div>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FooterHeading>Quick Links</FooterHeading>
          <FooterNav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FooterHeading>Contact Info</FooterHeading>
          <ContactItem>
            <FiMapPin />
            <p>123 Animation Street, React City, 10001</p>
          </ContactItem>
          <ContactItem>
            <FiPhone />
            <p>+1 (555) 123-4567</p>
          </ContactItem>
          <ContactItem>
            <FiMail />
            <p>info@ionsite.com</p>
          </ContactItem>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FooterHeading>Subscribe</FooterHeading>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem', lineHeight: '1.6' }}>
            Stay updated with our latest news, updates, and exclusive offers.
          </p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <NewsletterButton>
              <span>Subscribe</span>
              <FiArrowRight />
            </NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {currentYear} IonSite. All rights reserved. | <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link> | <Link to="/terms" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms of Service</Link></p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 