import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 120px 0;
  min-height: 100vh;
  background: linear-gradient(135deg, ${(props) => props.theme.secondary} 0%, 
  ${(props) => props.theme.secondary} 100%);
  position: relative;
  border-bottom: 3px solid ${(props) => props.theme.primary};
  
  @media (max-width: 1024px) {
    padding: 100px 0;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 30px;
  }
  
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  
  h2 {
    font-size: 4rem;
    color: ${props => props.theme.primary};
    margin-bottom: 20px;
    font-weight: bold;
    position: relative;
    
    @media (max-width: 1024px) {
      font-size: 3.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 2.5rem;
      margin-bottom: 12px;
    }
    
    &::after {
      content: '';
  position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, ${props => props.theme.secondary}, ${props => props.theme.secondary});
      border-radius: 2px;
      
      @media (max-width: 768px) {
        width: 80px;
        height: 3px;
        bottom: -12px;
      }
      
      @media (max-width: 480px) {
        width: 60px;
        height: 2px;
        bottom: -10px;
      }
    }
  }
  
  p {
    font-size: 1.3rem;
    color:${props => props.theme.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 1024px) {
      font-size: 1.2rem;
      max-width: 550px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      max-width: 500px;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      max-width: 100%;
      padding: 0 10px;
    }
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 1024px) {
    gap: 60px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    gap: 40px;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 2.5rem;
    color: ${props => props.theme.primary};
    margin-bottom: 25px;
    font-weight: 700;
    line-height: 1.2;
    
    @media (max-width: 1024px) {
      font-size: 2.2rem;
      margin-bottom: 22px;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 18px;
    }
  }
  
  p {
    font-size: 1.15rem;
    color: ${props => props.theme.primary};
    line-height: 1.5;
    margin-bottom: 20px;
    
    @media (max-width: 1024px) {
      font-size: 1.05rem;
      margin-bottom: 18px;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 16px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 15px;
    }
  }
`;

const SkillsList = styled.div`
  margin-top: 30px;
  
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  
  @media (max-width: 480px) {
    margin-top: 20px;
  }
  
  h4 {
    font-size: 1.3rem;
    color: ${props => props.theme.primary};
    margin-bottom: 15px;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const SkillItem = styled.div`
  background: ${props => props.theme.tertiary};
  padding: 15px;
  border-radius: 12px;
  border-left: 4px solid ${props => props.theme.primary};
  box-shadow: 0 4px 15px ${props => props.theme.primary};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  h5 {
    font-size: 1rem;
    color: ${props => props.theme.primary};
    margin: 0 0 5px 0;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: ${props => props.theme.primary};
    margin: 0;
    line-height: 1.4;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const AboutImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  
  @media (max-width: 1024px) {
    width: 350px;
    height: 440px;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 375px;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 310px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-radius: 20px;
    z-index: -1;
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: ${props => props.theme.primary};
    
    border-radius: 15px;
    z-index: -1;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${props => props.theme.tertiary}, ${props => props.theme.secondary});
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 4rem;
  font-weight: bold;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const StatsSection = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    margin-top: 60px;
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
    gap: 15px;
  }
`;

const StatCard = styled.div`
  background: ${props => props.theme.primary};
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 15px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  .number {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.secondary};
    display: block;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 8px;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
      margin-bottom: 6px;
    }
  }
  
  .label {
    font-size: 1rem;
    color: ${props => props.theme.secondary};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

function About() {
  const skills = [
    {
      title: "Frontend :",
      description: "React, HTML, CSS, JavaScript,  Responsive Design"
    },
    {
      title: "Backend :",
      description: "Java, Node.js, Python, Express, SpringBoot"
    },
    {
      title: "Tools",
      description: "GitHub, Post Man, Strapi, VS Code  "
    },
    {
      title: "Problem Solving",
      description: "Analytical Thinking, Creative Solutions"
    }
  ];

  return (
    <section id="about">
      <AboutSection>
        <Container>
          <SectionHeader>
            <h2>About Me</h2>
            <p>
              Get to know me better and explore my journey, skills, and the passion that drives me
              to build impactful & secured software solutions.
            </p>
          </SectionHeader>

          <AboutContent>
            <AboutText>
              <h3>Java Backend & MERN Stack Developer</h3>
              <p>
                I'm <strong>Vignesh S</strong>, a passionate developer currently pursuing my Master’s in Computer Applications (MCA).
                I specialize in backend development with <strong>Java and Spring Boot</strong>, and I’m also skilled in the
                <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> to build scalable, modern web applications.
                I have completed internships at <strong>Cognify Technology</strong> and <strong>Altalya Solutions</strong>,
                where I worked on Java-based projects. My recent work includes a <strong>MERN Complaint Management System</strong>
                with features like user authentication and payment gateway integration.My journey started with curiosity and self-learning, which has grown into hands-on experience through
                internships, projects, and certifications in <strong>Java, JavaScript, and Python</strong>. I’m a dedicated
                problem solver, always eager to explore new technologies and create meaningful digital experiences through
                clean, efficient, and high-quality code.
              </p>


              <SkillsList>
                <h4>Key Skills & Expertise</h4>
                <SkillsGrid>
                  {skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <h5>{skill.title}</h5>
                      <p>{skill.description}</p>
                    </SkillItem>
                  ))}
                </SkillsGrid>
              </SkillsList>
            </AboutText>

            <AboutImage>
              <ImageContainer>
                <Image>👨‍💻</Image>
              </ImageContainer>
            </AboutImage>
          </AboutContent>

          <StatsSection>
            <StatCard>
              <span className="number">Python certifications</span>
              <span className="label">KTNEST </span>
            </StatCard>
            <StatCard>
              <span className="number">3+</span>
              <span className="label">Years Experience</span>
            </StatCard>
            <StatCard>
              <span className="number">100%</span>
              <span className="label">Client Satisfaction</span>
            </StatCard>
            <StatCard>
              <span className="number">24/7</span>
              <span className="label">Support Available</span>
            </StatCard>
          </StatsSection>
        </Container>
      </AboutSection>
    </section>
  );
}

export default About;
