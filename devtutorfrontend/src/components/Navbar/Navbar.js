import React from 'react';
import styled from 'styled-components';


const Navbar = ({ username }) => {
  return (
    <NavbarContainer>
      <UserSection>
        <Username>{username}</Username>
        <LogoutButton onClick={() => {/* handle logout logic */}}>
          Logout
        </LogoutButton>
      </UserSection>
      <Title>Devtutor</Title>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #333;
  color: white;
`;

const Title = styled.h1`
  margin-right: auto;
  padding: 10px 20px;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  padding: 5px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export default Navbar;
