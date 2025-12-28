import React from 'react';
import styled from 'styled-components';

// ==== DESKTOP NAV (Laptop View) ====
const DesktopNav = styled.nav`
  height: 200px;
  width: 350px;
  position: fixed;
  top: 25px;
  right: 20px;
  background: transparent;
  z-index: 1000;
  overflow: hidden;
  @media (max-width: 850px) {
    display: none;
  }
`;

const DesktopLink = styled.a`
  background: ${props => props.theme.secondary};
  position: absolute;
  top: -200px;
  width: 55px;
  height: 260px;
  transition: 0.5s;
  border: 3px solid ${props => props.theme.primary};
  border-radius: 0px 0px 30px 30px;
  color: ${props => props.theme.primary};
  padding: 0px 9px 5px 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-weight: bold;
  text-decoration: none;

  &.nav1 { right: 0px; }
&.nav2 { right: 70px;  }
&.nav3 { right: 140px; }
&.nav4 { right: 210px; }
&.nav5 { right: 280px; }


  i {
    border: 3px solid ${props => props.theme.primary};
    margin-top: 25px;
    padding: 8px;
    transition: 0.5s;
    font-size: 22px;
    border-radius: 50%;
    color: ${props => props.theme.primary};
  }

  span {
    background: ${props => props.theme.primary};
    transition: 0.5s;
  }

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    top: -20px;
    height: 200px;
    margin-top: 10px;
    justify-content: center;
  }

  &:hover i {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    display: none;
  }

  &:hover span {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }
`;

// ==== MOBILE NAV (unchanged) ====
const MobileNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.secondary};
    border-top: 3px solid ${props => props.theme.primary};
    padding: 10px 0;
    z-index: 1000;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  }
`;

const MobileNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const MobileNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  min-width: 60px;

  &:hover, &.active {
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.primary}40;
  }

  .icon {
    font-size: 1.5rem;
  }

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
  }
`;

// ==== MAIN COMPONENT ====
function Header({ theme }) {
  const handleMobileNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar (upperMenu style) */}
      <DesktopNav theme={theme}>
        <DesktopLink href="#contact" className="nav1" theme={theme}>
          <span>CONTACT</span><i className="fa-solid fa-paper-plane"></i>
        </DesktopLink>
        <DesktopLink href="#skills" className="nav2" theme={theme}>
          <span>SKILLS</span><i className="fa-solid fa-screwdriver-wrench"></i>
        </DesktopLink>
        <DesktopLink href="#about" className="nav3" theme={theme}>
          <span>ABOUT</span><i className="fa-solid fa-user"></i>
        </DesktopLink>
        <DesktopLink href="#projects" className="nav4" theme={theme}>
          <span>PROJECTS</span><i className="fa-solid fa-book-open"></i>
        </DesktopLink>
        <DesktopLink href="#hero" className="nav5" theme={theme}>
          <span>HOME</span><i className="fa-solid fa-house"></i>
        </DesktopLink>
      </DesktopNav>


      {/* Mobile Navbar (kept exactly as-is) */}
      <MobileNav theme={theme}>
        <MobileNavContainer>
          <MobileNavItem theme={theme} onClick={() => handleMobileNavClick('hero')}>
            <span className="icon">🏠</span>
            <span className="label">HOME</span>
          </MobileNavItem>
          <MobileNavItem theme={theme} onClick={() => handleMobileNavClick('projects')}>
            <span className="icon">🚀</span>
            <span className="label">PROJECTS</span>
          </MobileNavItem>
          <MobileNavItem theme={theme} onClick={() => handleMobileNavClick('about')}>
            <span className="icon">👤</span>
            <span className="label">ABOUT</span>
          </MobileNavItem>
          <MobileNavItem theme={theme} onClick={() => handleMobileNavClick('skills')}>
            <span className="icon">⚡</span>
            <span className="label">SKILLS</span>
          </MobileNavItem>
          <MobileNavItem theme={theme} onClick={() => handleMobileNavClick('contact')}>
            <span className="icon">📞</span>
            <span className="label">CONTACT</span>
          </MobileNavItem>
        </MobileNavContainer>
      </MobileNav>
    </>
  );
}

export default Header;
