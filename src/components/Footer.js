import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Vignesh S</FooterTitle>
          <FooterSubtitle>Web Developer & Designer</FooterSubtitle>
          <FooterDescription>
            Passionate about creating beautiful, functional, and user-friendly web experiences.
          </FooterDescription>
        </FooterSection>

        <FooterSection>
          <FooterSectionTitle>Quick Links</FooterSectionTitle>
          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterSectionTitle>Connect</FooterSectionTitle>
          <SocialLinks>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <i className="fab fa-github"></i>
              </SocialIcon>
              <span>GitHub</span>
            </SocialLink>

            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <i className="fab fa-linkedin"></i>
              </SocialIcon>
              <span>LinkedIn</span>
            </SocialLink>

            <SocialLink href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <span>Instagram</span>
            </SocialLink>

            <SocialLink href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <i className="fab fa-facebook"></i>
              </SocialIcon>
              <span>Facebook</span>
            </SocialLink>

            <SocialLink href="https://youtube.com/@yourusername" target="_blank" rel="noopener noreferrer">
              <SocialIcon>
                <i className="fab fa-youtube"></i>
              </SocialIcon>
              <span>YouTube</span>
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterSectionTitle>Contact Info</FooterSectionTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <span>vignesh@example.com</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-phone"></i>
              </ContactIcon>
              <span>+91 98765 43210</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-map-marker-alt"></i>
              </ContactIcon>
              <span>Chennai, Tamil Nadu</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterBottomContent>
          <Copyright>
            © {currentYear} Vignesh S. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <FooterBottomLink href="#privacy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink href="#terms">Terms of Service</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${props => props.theme.tertiary};
  color: ${props => props.theme.text};
  padding-top: 60px;
  
  @media (max-width: 768px) {
    padding-top: 40px;
  }
  
  @media (max-width: 480px) {
    padding-top: 30px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  
  @media (max-width: 992px) {
    max-width: 720px;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    max-width: 540px;
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 15px;
    gap: 20px;
  }
`;

const FooterSection = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const FooterSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterSectionTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactIcon = styled.div`
  width: 25px;
  height: 25px;
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.primary}30;
  margin-top: 50px;
  padding: 25px 0;
  
  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 20px 0;
  }
  
  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 15px 0;
  }
`;

const FooterBottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const FooterBottomLink = styled.a`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export default Footer;
