import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';



import ProfilePhoto from './components/ProfilePhoto';
import Resume from './components/Resume';

const themes = {
  midnight: {
    name: 'Midnight Luxury',
    primary: '#FFD700',      // Gold
    secondary: '#050505',    // Deep Black (Main BG)
    tertiary: '#111111',     // Surface/Card BG
    text: '#FFFFFF',         // Primary Text
    textSecondary: '#A0A0A0', // Secondary Text
    accent: '#C6A87C'        // Muted Gold
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    width: 100%;
    font-family: "Baskervville SC", serif;
    font-weight: 400;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.secondary};
    min-height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.primary};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.theme.secondary};
`;

const TopLine = styled.div`
  background: ${props => props.theme.secondary};
  width: 100%;
  height: 30px;
  border-bottom: 8px solid ${props => props.theme.primary};
  z-index: 99;
  position: fixed;
  top: 0;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'midnight';
    }
    const stored = window.localStorage.getItem('portfolio-theme');
    return stored && themes[stored] ? stored : 'midnight';
  });








  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <AppContainer>
        <TopLine />

        <Header />
        {/* <ProfilePhoto /> */}

        <Hero />
        <Projects />
        <Resume />
        <About />
        <Skills />
        <Contact />
        <Footer />

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;