import React,{useState, useEffect,} from 'react'
import CourseListing from '../components/CourseList/CourseList'
import {Dots} from 'react-activity'
import 'react-activity/dist/library.css'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import {toast} from 'react-toastify'

const Dashboard = () => {
const [courses,setCourses] = useState([])
const [loading, setLoading] = useState(false)
  const fetchCourses = async () => {
    try {
      //Get all courses from the databgase
      const response = await axios.get('http://localhost:5000/api/courses/getall',{withCredentials:true});
      if (response.status === 200) {
        return response.data
      } 
     }
     
    catch (error) {
    toast.error(error.response.data.message)
    }
  };


  useEffect(() => {
    setLoading(true);
    fetchCourses().then(data => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  return (
    <DashboardContainer>
      <Navbar/>
        <WelcomeMessage>Welcome to Devtutor!</WelcomeMessage>
      <p style={{fontSize: '1.2rem', lineHeight: 1, color: '#222226'}}>
        Explore a world of learning and advancement with our curated selection of courses.
        Whether you're looking to enhance your skills or start a new journey, we're here
        to support your growth every step of the way. Let's embark on this educational adventure together.
        Below are some of our top rated courses.
      </p>

      <span style={{fontStyle:"italic", color:"green"}}>~Click on each card to view course details~</span>
      {loading? <Dots/> :(
        <CourseListing courses={courses}/>
      )}
        
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  text-align: center;
  padding: 5px;
`;

const WelcomeMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;
export default Dashboard