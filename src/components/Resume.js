import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.section`
  max-width: 900px;
  margin: 80px auto;
  padding: 40px;
  background: ${props => props.theme.tertiary};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  color: ${props => props.theme.text};
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 15px;
  border-bottom: 2px solid ${props => props.theme.accent};
  padding-bottom: 5px;
`;

const Item = styled.div`
  margin-bottom: 12px;
`;

const ItemTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
`;

const ItemSubtitle = styled.p`
  font-size: 1rem;
  margin: 2px 0;
  color: ${props => props.theme.textSecondary};
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: ${props => props.theme.accent};
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Resume = () => (
  <ResumeContainer id="resume">
    <Title>Resume</Title>
    <Section>
      <h3>Experience</h3>
      <Item>
        <ItemTitle>Full‑Stack Developer – XYZ Corp</ItemTitle>
        <ItemSubtitle>Jan 2022 – Present</ItemSubtitle>
        <p>Developed scalable web applications using React, Node.js, and AWS services. Implemented CI/CD pipelines and optimized performance.</p>
      </Item>
      <Item>
        <ItemTitle>Software Engineer – ABC Ltd</ItemTitle>
        <ItemSubtitle>Jun 2020 – Dec 2021</ItemSubtitle>
        <p>Built RESTful APIs with Java Spring Boot and integrated front‑end interfaces with React.</p>
      </Item>
    </Section>
    <Section>
      <h3>Education</h3>
      <Item>
        <ItemTitle>MCA – University of Example</ItemTitle>
        <ItemSubtitle>2018 – 2020</ItemSubtitle>
      </Item>
    </Section>
    <Section>
      <h3>Skills</h3>
      <p>React, Node.js, Java, Spring Boot, AWS, Docker, CI/CD, SQL, NoSQL, Git.</p>
    </Section>
    <DownloadButton href={process.env.PUBLIC_URL + '/resume.pdf'} download>
      Download PDF
    </DownloadButton>
  </ResumeContainer>
);

export default Resume;
