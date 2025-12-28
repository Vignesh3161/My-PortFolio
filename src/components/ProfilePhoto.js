import React from 'react';
import styled from 'styled-components';


const PhotoWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${props => props.theme.primary};
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfilePhoto = () => (
  <PhotoWrapper>
    <Img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" />
  </PhotoWrapper>
);

export default ProfilePhoto;
