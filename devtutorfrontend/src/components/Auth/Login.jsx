import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



const LoginPage = () => {
  const navigate = useNavigate()
  
  const handleSubmit = async (values, {setSubmitting}) => {
    
    try {
      const response = await axios.post("http://localhost:5000/api/users/login",values, {withCredentials:true});
      toast.success(response.data.message)
      setSubmitting(false);
      // Redirect to dashboard if response status is 200
      if(response.status === 200) {
        navigate("/dashboard")
      }
    } catch (error) {
      toast.error(error.response.data.message)
     setSubmitting(false);
    }
  };
  return (
    <PageContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <Form>
              <StyledField type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={StyledErrorMessage} />

              <StyledField type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component={StyledErrorMessage} />

              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
            <SignupLink onClick={() => window.location.href = '/signup'}>
              Don't have an account? Sign up
            </SignupLink>
          </FormContainer>
        )}
      </Formik>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff; /* Light blue background color */
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const StyledErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Yup validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default LoginPage