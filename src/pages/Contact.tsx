import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: #4facfe;
    font-size: 1.5rem;
  }
`;

const InfoText = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: #1a1a1a;
  }
  
  p {
    color: #666;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #4facfe;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InfoItem>
              <FaEnvelope />
              <InfoText>
                <h3>Email</h3>
                <p>contact@makers.studio</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <FaPhone />
              <InfoText>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
              </InfoText>
            </InfoItem>
            
            <InfoItem>
              <FaMapMarkerAlt />
              <InfoText>
                <h3>Location</h3>
                <p>New York, NY, USA</p>
              </InfoText>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message"></textarea>
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 