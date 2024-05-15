import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import courses from '../../courses';
import{ useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const CourseDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const course = courses[id];

  return (
    <>
    <Navbar/>
   
    <DetailsContainer>
       <CourseImage src={course.imageUrl} alt={course.title} />
      <CourseInfo>
        <CourseTitle>{course.title}</CourseTitle>
        <CourseDescription>{course.description}</CourseDescription>
        <CoursePrice>${course.price}</CoursePrice>
        <EnrollButton onClick={() => navigate("/enroll")}>
          Enroll
        </EnrollButton>
      </CourseInfo>
      <VideoLink href={course.videoUrl} target="_blank" rel="noopener noreferrer">
        Watch Course Preview
      </VideoLink>
    </DetailsContainer>
    </>
  );
};



const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const CourseImage = styled.img`
  max-width: 40%;
  height: 100%;
  margin-right: 20px;
  border-radius: 8px;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const CourseTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const CoursePrice = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
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
