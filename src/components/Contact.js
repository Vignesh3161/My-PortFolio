import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Google Sheets API endpoint (you'll need to set this up)
      const response = await fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactSubtitle>Let's work together on your next project</ContactSubtitle>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              rows="5"
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {submitStatus === 'success' && (
            <SuccessMessage>Message sent successfully!</SuccessMessage>
          )}
          {submitStatus === 'error' && (
            <ErrorMessage>Failed to send message. Please try again.</ErrorMessage>
          )}
        </ContactForm>

        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <ContactText>vignesh@example.com</ContactText>
          </ContactItem>

          <ContactItem>
            <ContactIcon>
              <i className="fas fa-phone"></i>
            </ContactIcon>
            <ContactText>+91 98765 43210</ContactText>
          </ContactItem>

          <ContactItem>
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            <ContactText>Chennai, Tamil Nadu, India</ContactText>
          </ContactItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, ${props => props.theme.secondary} 0%, ${props => props.theme.secondary} 100%);
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  
  @media (max-width: 992px) {
    max-width: 720px;
  }
  
  @media (max-width: 768px) {
    max-width: 540px;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: ${props => props.theme.textSecondary};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto 50px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${props => props.theme.text};
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid ${props => props.theme.primary}30;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}20;
  }
  
  &::placeholder {
    color: ${props => props.theme.primary}80;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid ${props => props.theme.primary}30;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: ${props => props.theme.tertiary};
  color: ${props => props.theme.text};
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}20;
  }
  
  &::placeholder {
    color: ${props => props.theme.primary}80;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => props.theme.primary}40;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #4CAF50;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f44336;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: ${props => props.theme.tertiary};
  border-radius: 12px;
  box-shadow: 0 4px 15px ${props => props.theme.primary}15;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin-right: 15px;
  }
`;

const ContactText = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.primary};
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default Contact;
