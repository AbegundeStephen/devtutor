import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Navbar = ({ username }) => {
const navigate = useNavigate()
const handleLogout = async () => {
  try {
    const response = axios.post("http://localhost:5000/api/users/logout") 
    console.log(response.data)
    if(response.status === 200) {
      navigate("/login")
    }

  }catch(error) {

  }
}
  return (
    <NavbarContainer>
      <Title>Devtutor.</Title>
      <UserSection>
        <Username>{username}</Username>
        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </UserSection>
      
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
  border-radius:2px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export default Navbar;
