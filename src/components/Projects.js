import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 120px 0;
  min-height: 100vh;
  background: linear-gradient(135deg, ${props => props.theme.secondary} 0%, ${props => props.theme.primary}05 100%);
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid ${props => props.theme.primary};
  
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

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, ${props => props.theme.primary}15 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${props => props.theme.primary}10 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${props => props.theme.primary}8 0%, transparent 50%);
  pointer-events: none;
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
    text-shadow: 4px 4px 0px ${props => props.theme.primary}30;
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
      width: 120px;
      height: 6px;
      background: linear-gradient(90deg, transparent, ${props => props.theme.primary}, transparent);
      border-radius: 3px;
      
      @media (max-width: 768px) {
        width: 100px;
        height: 5px;
        bottom: -12px;
      }
      
      @media (max-width: 480px) {
        width: 80px;
        height: 4px;
        bottom: -10px;
      }
    }
  }
  
  p {
    font-size: 1.4rem;
    color: ${props => props.theme.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 1024px) {
      font-size: 1.3rem;
      max-width: 550px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
      max-width: 500px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      max-width: 100%;
      padding: 0 10px;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    gap: 50px;
    margin-bottom: 70px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.tertiary};
  border: 4px solid ${props => props.theme.primary};
  border-radius: 25px;
  padding: 40px;
  position: relative;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    padding: 35px;
    border-radius: 22px;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 20px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    padding: 25px;
    border-radius: 18px;
    border-width: 2px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.primary}80);
    border-radius: 30px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    
    @media (max-width: 768px) {
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 25px;
    }
    
    @media (max-width: 480px) {
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 22px;
    }
  }
  
  &:hover {
    transform: translateY(-15px) rotateY(5deg);
    @media (max-width: 768px) {
      transform: translateY(-10px) rotateY(3deg);
    }
    
    @media (max-width: 480px) {
      transform: translateY(-8px) rotateY(2deg);
    }
  }
  
  &.featured {
    grid-column: span 2;
    background: linear-gradient(135deg, ${props => props.theme.tertiary}, ${props => props.theme.primary}15);
    
    @media (max-width: 768px) {
      grid-column: span 1;
    }
    
    &::after {
      content: '⭐ FEATURED';
      position: absolute;
      top: -15px;
      right: 30px;
      background: ${props => props.theme.primary};
      color: ${props => props.theme.secondary};
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9rem;
      letter-spacing: 1px;
      
      @media (max-width: 768px) {
        top: -12px;
        right: 25px;
        padding: 6px 16px;
        font-size: 0.8rem;
        border-radius: 16px;
      }
      
      @media (max-width: 480px) {
        top: -10px;
        right: 20px;
        padding: 5px 12px;
        font-size: 0.7rem;
        border-radius: 14px;
      }
    }
  }
`;

const HoverBackdrop = styled.div`
  position: absolute;
  inset: 18px;
  border-radius: 18px;
  background: radial-gradient(circle at top, ${props => props.theme.primary}50, transparent 65%);
  opacity: 0;
  transform: scale(0.8) rotate(-6deg);
  transition: opacity 0.35s ease, transform 0.35s ease;
  z-index: -1;

  ${ProjectCard}:hover & {
    opacity: 0.9;
    transform: scale(1) rotate(0deg);
  }
`;

const CornerAccent = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.primary}55;
  top: -35px;
  right: -35px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 25px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 1024px) {
    height: 220px;
    margin-bottom: 22px;
    border-radius: 18px;
  }
  
  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
    margin-bottom: 18px;
    border-radius: 14px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.1);
    
    @media (max-width: 768px) {
      transform: scale(1.05);
    }
  }
`;

const ProjectContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.text};
    margin-bottom: 15px;
    font-weight: bold;
    
    @media (max-width: 1024px) {
      font-size: 1.7rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
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
      margin-bottom: 14px;
      line-height: 1.5;
    }
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 18px;
  }
`;

const TechTag = styled.span`
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid ${props => props.theme.primary}40;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 0.85rem;
    border-width: 1.5px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 0.8rem;
    border-width: 1px;
  }
  
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    transform: translateY(-2px);
    
    @media (max-width: 768px) {
      transform: translateY(-1px);
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ProjectButton = styled.a`
  padding: 12px 25px;
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.type === 'primary' ? props.theme.primary : 'transparent'};
  color: ${props => props.type === 'primary' ? props.theme.secondary : props.theme.primary};
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  @media (max-width: 1024px) {
    padding: 11px 22px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-width: 1.5px;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 9px 18px;
    font-size: 0.85rem;
    border-width: 1px;
  }
  
  &:hover {
    background: ${props => props.type === 'primary' ? 'transparent' : props.theme.primary};
    color: ${props => props.type === 'primary' ? props.theme.primary : props.theme.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px ${props => props.theme.primary}40;
    
    @media (max-width: 768px) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px ${props => props.theme.primary}40;
    }
    
    @media (max-width: 480px) {
      transform: translateY(-1px);
      box-shadow: 0 6px 15px ${props => props.theme.primary}40;
    }
  }
`;

const CTA = styled.div`
  text-align: center;
  padding: 60px;
  background: ${props => props.theme.primary}10;
  border-radius: 30px;
  border: 3px dashed ${props => props.theme.primary}40;
  
  @media (max-width: 1024px) {
    padding: 50px;
    border-radius: 25px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 22px;
    border-width: 2px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
    border-radius: 20px;
    border-width: 1.5px;
  }
  
  p {
    font-size: 1.3rem;
    color: ${props => props.theme.primary};
    margin-bottom: 25px;
    
    @media (max-width: 1024px) {
      font-size: 1.2rem;
      margin-bottom: 22px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 18px;
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js featuring smooth animations and a clean design. This project showcases my frontend skills and attention to detail.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5", "Styled-Components"],
      image: "https://via.placeholder.com/600x250/4a90e2/ffffff?text=Portfolio+Website",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration using modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://via.placeholder.com/600x250/50c878/ffffff?text=E-commerce+Platform",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourecommerce.com",
      featured: false
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features built with modern web technologies.",
      technologies: ["React", "Firebase", "Material-UI", "JavaScript", "Real-time DB"],
      image: "https://via.placeholder.com/600x250/ff6b6b/ffffff?text=Task+Management+App",
      github: "https://github.com/yourusername/taskapp",
      live: "https://yourtaskapp.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using external APIs with beautiful data visualization.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      image: "https://via.placeholder.com/600x250/ffd93d/000000?text=Weather+Dashboard",
      github: "https://github.com/yourusername/weather",
      live: "https://yourweather.com",
      featured: false
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by machine learning that provides personalized assistance and natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      image: "https://via.placeholder.com/600x250/9c27b0/ffffff?text=AI+Chat+Assistant",
      github: "https://github.com/yourusername/ai-chat",
      live: "https://your-aichat.com",
      featured: false
    }
  ];

  return (
    <section id="projects">
      <ProjectsSection>
        <BackgroundPattern />
        <Container>
          <SectionHeader>
            <h2>My Projects</h2>
            <p>Here are some of the projects I've worked on. Each one represents a learning experience and showcases different skills and technologies.</p>
          </SectionHeader>

          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id} className={project.featured ? 'featured' : ''}>
                <HoverBackdrop />
                <CornerAccent />
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>

                <ProjectContent>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <TechTags>
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechTags>

                  <ProjectLinks>
                    <ProjectButton href={project.github} target="_blank" rel="noopener noreferrer" type="secondary">
                      <i className="fab fa-github"></i> GitHub
                    </ProjectButton>
                    <ProjectButton href={project.live} target="_blank" rel="noopener noreferrer" type="primary">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </ProjectButton>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <CTA>
            <p>Interested in seeing more of my work?</p>
            <ProjectButton href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" type="primary">
              <i className="fab fa-github"></i> View More on GitHub
            </ProjectButton>
          </CTA>
        </Container>
      </ProjectsSection>
    </section>
  );
};

export default Projects;
