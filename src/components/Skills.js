import React from 'react';
import styled from 'styled-components';
import java from '../assets/JavaLogo.png';
import springboot from '../assets/springboot.png';
import python from '../assets/python.png';
import node from '../assets/nodejs.png';
import reactLogo from '../assets/react.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import javascript from '../assets/javascript.png';
import postman from '../assets/postman.png';
import vscode from '../assets/VS-code.png';
import github from '../assets/github.png';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 20px 80px;
  background: radial-gradient(circle at top left, ${(props) => props.theme.primary}10, transparent 60%);
`;

const Wrapper = styled.div`
  width: min(1200px, 100%);
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleBlock = styled.div`
  text-align: center;
  color: ${(props) => props.theme.primary};

  h2 {
    font-size: clamp(2.3rem, 5vw, 3.1rem);
    letter-spacing: 0.4rem;
  }

  p {
    margin-top: 12px;
    color: ${(props) => props.theme.textSecondary};
    font-size: 1rem;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const SkillCard = styled.article`
  border-radius: 28px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.primary}40;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.tertiary}F2,
    ${(props) => props.theme.tertiary}dd
  );
  box-shadow: 0 20px 40px ${(props) => props.theme.primary}10;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) => props.theme.primary};
  }
`;

const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.primary};
  }

  span {
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.textSecondary};
  }
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const SkillAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${(props) => props.theme.primary}15;
  border: 1px solid ${(props) => props.theme.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;

const SkillMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    color: ${(props) => props.theme.text};
    letter-spacing: 0.1em;
  }

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.textSecondary};
  }
`;

const SkillMeter = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: ${(props) => props.theme.primary}20;
  overflow: hidden;

  div {
    height: 100%;
    width: ${(props) => props.value}%;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.primary}55
    );
  }
`;

const Timeline = styled.div`
  margin-top: 12px;
  border-radius: 34px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.primary}30;
  background: ${(props) => props.theme.tertiary}f5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  small {
    letter-spacing: 0.3em;
    color: ${(props) => props.theme.primary}80;
  }

  strong {
    font-size: 1.1rem;
    color: ${(props) => props.theme.primary};
  }

  span {
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const skillGroups = [
  {
    title: 'Core Stack',
    label: 'Backend & APIs',
    skills: [
      { name: 'Java', level: 95, caption: 'OOP · Streams', icon: java },
      { name: 'Spring Boot', level: 90, caption: 'REST · Security', icon: springboot },
      { name: 'Node.js', level: 82, caption: 'Express · Auth', icon: node },
    ],
  },
  {
    title: 'Frontend Energy',
    label: 'Interfaces',
    skills: [
      { name: 'React', level: 92, caption: 'Hooks · SPA', icon: reactLogo },
      { name: 'JavaScript', level: 94, caption: 'ES6+ · Tooling', icon: javascript },
      { name: 'Responsive UI', level: 88, caption: 'Styled Components', icon: vscode },
    ],
  },
  {
    title: 'Data Layer',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', level: 84, caption: 'Aggregation · Atlas', icon: mongodb },
      { name: 'MySQL', level: 80, caption: 'Schema · Joins', icon: mysql },
      { name: 'Python', level: 70, caption: 'Automation', icon: python },
    ],
  },
  {
    title: 'QA & Delivery',
    label: 'Ship Fast',
    skills: [
      { name: 'Postman', level: 78, caption: 'API Suites', icon: postman },
      { name: 'Git/GitHub', level: 90, caption: 'PR Flow', icon: github },
      { name: 'VS Code', level: 85, caption: 'Debug · LiveShare', icon: vscode },
    ],
  },
];

const timelineData = [
  { label: 'STACK', value: 'MERN + Spring', detail: 'React · Node · Java' },
  { label: 'DELIVERY', value: '12+ Projects', detail: 'Web & API builds' },
  { label: 'WORKFLOW', value: 'Agile Pods', detail: '2-week sprints' },
  { label: 'TOOLS', value: 'CI automation', detail: 'GitHub Actions' },
];

function Skills() {
  return (
    <Section id="skills">
      <Wrapper>
        <TitleBlock>
          <h2>SKILLS ARCHITECTURE</h2>
          <p>Custom vertical layout showing live proficiency across the stack.</p>
        </TitleBlock>

        <SkillGrid>
          {skillGroups.map((group) => (
            <SkillCard key={group.title}>
              <CardHeading>
                <h3>{group.title}</h3>
                <span>{group.label}</span>
              </CardHeading>
              <SkillList>
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillAvatar>
                      <img src={skill.icon} alt={`${skill.name} icon`} />
                    </SkillAvatar>
                    <SkillMeta>
                      <strong>{skill.name}</strong>
                      <span>{skill.caption}</span>
                      <SkillMeter value={skill.level}>
                        <div />
                      </SkillMeter>
                    </SkillMeta>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillGrid>

        <Timeline>
          {timelineData.map((item) => (
            <TimelineItem key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
              <span>{item.detail}</span>
            </TimelineItem>
          ))}
        </Timeline>
      </Wrapper>
    </Section>
  );
}

export default Skills;
