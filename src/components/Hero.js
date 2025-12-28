import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactTyped } from 'react-typed';

// --- Animations ---
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const HeroContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background: ${props => props.theme.secondary};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  
  /* Spotlight Effect Variables */
  --x: 50%;
  --y: 50%;
  
  /* The dramatic spotlight background */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(
      circle 800px at var(--x) var(--y), 
      ${props => props.theme.primary}15, 
      transparent 40%
    );
    z-index: 1;
    pointer-events: none;
    transition: background 0.1s ease;
  }

  /* Grid Texture */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(${props => props.theme.primary}05 1px, transparent 1px),
      linear-gradient(90deg, ${props => props.theme.primary}05 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 80px; 
    gap: 3rem;
  }
`;

// --- Left Content (Text) ---
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

const Overline = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1rem);
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: ${props => props.theme.primary};
    
    @media (max-width: 968px) {
      display: none;
    }
  }
`;

const MainHeading = styled.h1`
  font-family: 'Playfair Display', serif; /* Or any luxury serif you assume/have */
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.1;
  color: ${props => props.theme.text};
  margin: 0;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const RoleScroll = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${props => props.theme.textSecondary};
  height: 2em;
  
  .typed-cursor {
    color: ${props => props.theme.primary};
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  color: ${props => props.theme.textSecondary};
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: 2rem;
  
  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  padding: 1rem 2.5rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${props => props.theme.primary}33;
  }
`;

const SecondaryButton = styled.a`
  padding: 1rem 2.5rem;
  background: transparent;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.textSecondary}66;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

// --- Right Content (Visuals) ---
const VisualWrapper = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 968px) {
    height: 400px;
  }
`;

// Geometric Composition
const GeometricRing = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border: 1px solid ${props => props.theme.primary}33;
  border-radius: 50%;
  animation: ${spin} 20s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: -5px; left: 50%;
    width: 10px; height: 10px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    box-shadow: 0 0 15px ${props => props.theme.primary};
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid ${props => props.theme.textSecondary}1a;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const ProfileCard = styled.div`
  width: 280px;
  height: 380px;
  background: linear-gradient(135deg, ${props => props.theme.tertiary}CC, ${props => props.theme.secondary}CC);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.primary}33;
  position: relative;
  z-index: 2;
  animation: ${float} 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Corner Accents */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: ${props => props.theme.primary};
    border-style: solid;
    transition: all 0.3s ease;
  }
  &::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
  &::after { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
  
  &:hover::before, &:hover::after {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 300px;
  }
`;

const StatGlass = styled.div`
  position: absolute;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.primary}1a;
  border-left: 3px solid ${props => props.theme.primary};
  z-index: 5;
  
  h4 {
    color: ${props => props.theme.primary};
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
  }
  
  span {
    color: ${props => props.theme.textSecondary};
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Positioning floaters */
  &.stat-1 { top: 20%; right: -20px; animation: ${float} 7s ease-in-out infinite 1s; }
  &.stat-2 { bottom: 20%; left: -40px; animation: ${float} 8s ease-in-out infinite 0.5s; }

  @media (max-width: 968px) {
     &.stat-1 { right: -10px; }
     &.stat-2 { left: -20px; }
  }
`;

const Hero = () => {
  const containerRef = useRef(null);

  // Mouse Move Effect for Spotlight
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      containerRef.current.style.setProperty('--x', `${x}%`);
      containerRef.current.style.setProperty('--y', `${y}%`);
    }
  };

  return (
    <HeroContainer id="home" ref={containerRef} onMouseMove={handleMouseMove}>
      <ContentWrapper>
        {/* LEFT SIDE */}
        <TextContent>
          <Overline>Portfolio 2024</Overline>

          <MainHeading>
            VIGNESH <span>S</span>
          </MainHeading>

          <RoleScroll>
            I am a <ReactTyped
              strings={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </RoleScroll>

          <Description>
            Crafting immersive digital experiences with precision and passion.
            I build scalable, high-performance web applications that fuse
            clean code with luxury aesthetics.
          </Description>

          <ButtonGroup>
            <PrimaryButton href="#projects">View My Work</PrimaryButton>
            <SecondaryButton href="#contact">Contact Me</SecondaryButton>
          </ButtonGroup>
        </TextContent>

        {/* RIGHT SIDE */}
        <VisualWrapper>
          <GeometricRing />
          <InnerCircle />

          <ProfileCard>
            {/* If user has a photo, we can put it here, otherwise keep it abstract/stylized */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#FFD700', fontSize: '4rem', margin: 0 }}>VS</h2>
              <span style={{ color: '#A0A0A0', letterSpacing: '2px', fontSize: '0.8rem' }}>EST. 2024</span>
            </div>
          </ProfileCard>

          <StatGlass className="stat-1">
            <h4>12+</h4>
            <span>Projects</span>
          </StatGlass>

          <StatGlass className="stat-2">
            <h4>5+</h4>
            <span>Stacks</span>
          </StatGlass>

        </VisualWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;