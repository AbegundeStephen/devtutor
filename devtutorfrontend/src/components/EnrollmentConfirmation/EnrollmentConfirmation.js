import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styled from 'styled-components';

// Styled components for the page
const EnrollmentContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const CourseTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const CourseDetails = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

// Dummy course data
const courseData = {
  title: "Introduction to Web Development",
  description: "Learn the basics of HTML, CSS, and JavaScript.",
  price: "49.99"
};

const EnrollmentPage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetch the user's name from the cookie
    const name = Cookies.get('userName');
    setUserName(name);
  }, []);

  return (
    <EnrollmentContainer>
      <UserName>User: {userName}</UserName>
      <CourseTitle>{courseData.title}</CourseTitle>
      <CourseDetails>{courseData.description}</CourseDetails>
      <CourseDetails>Price: ${courseData.price}</CourseDetails>
      {/* Include other course details here */}
    </EnrollmentContainer>
  );
};

export default EnrollmentPage;
