import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import courses from '../../courses';


const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[id];

  return (
    <DetailsContainer>
      <CourseHeader>
        <CourseTitle>{course.title}</CourseTitle>
        <CourseImage src={course.imageUrl} alt={course.title} />
      </CourseHeader>
      <CourseDescription>{course.description}</CourseDescription>
      <CoursePrice>${course.price}</CoursePrice>
      <EnrollButton onClick={() => {/* logic to handle enrollment */}}>
        Enroll
      </EnrollButton>
      <VideoLink href={course.videoUrl} target="_blank" rel="noopener noreferrer">
        Watch Course Preview
      </VideoLink>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const CourseHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const CourseTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const CourseImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CourseDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CoursePrice = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const EnrollButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #218838;
  }
`;

const VideoLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export default CourseDetails;
