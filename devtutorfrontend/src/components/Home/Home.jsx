import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Container>
      <Title>Devtutor<span style={{color:"red"}}>.</span></Title>
      <GetStartedButton onClick={() => window.location.href = '/login'}>
        Get Started
      </GetStartedButton>
    </Container>
  );

  
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #dfe9f3;;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

const GetStartedButton = styled.button`
  font-size: 1.5rem;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HomePage


  