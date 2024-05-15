import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const CourseListing = ({ courses}) => {


  return (
    <CourseListContainer>
      {courses.map((course, index) => (
        <CourseCard to={`/course/${index}`} key={index}>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription>{course.description}</CourseDescription>
        </CourseCard>
      ))}
    </CourseListContainer>
  );
};

const CourseListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //flex-direction: row;
  //align-items: center;
  padding: 20px;
`;

const CourseCard = styled(Link)`
flex: 0 1 calc(25% - 1em); /* For 4 cards in a row */
  margin: 0.5em;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none; 
  color: inherit; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
/* Media query for smaller screens */
@media (max-width: 768px) {

      flex: 0 1 calc(33.333% - 1em); /* For 3 cards in a row */
  
  }
  
  /* Media query for even smaller screens */
  @media (max-width: 480px) {
   
      flex: 0 1 calc(50% - 1em); /* For 2 cards in a row */
    
  }
  `;
const CourseTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;


const CourseDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;


export default CourseListing;
