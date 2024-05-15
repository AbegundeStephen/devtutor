import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



// Yup validation schema
const SignupSchema = Yup.object().shape({
   username: Yup.string()
    .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

const Register = () => {
  const navigate= useNavigate()

  const handleSubmit = async (values, {setSubmitting}) => {
    
    try {
      const response = await axios.post("http://localhost:5000/api/users/register",values);
      toast.success(response.data.message)
      setSubmitting(false);

      // Redirect to dashboard or perform other actions
      if (response.status=== 200) {
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
        initialValues={{username:'', email: '', password: '', confirmPassword: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <Form>
            <StyledField type="username" name="username" placeholder="username" />
              <ErrorMessage name="username" component={StyledErrorMessage} />


              <StyledField type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={StyledErrorMessage} />

              <StyledField type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component={StyledErrorMessage} />

              <StyledField type="password" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component={StyledErrorMessage} />

              <Button type="submit" disabled={isSubmitting}>
                Sign Up
              </Button>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </PageContainer>
  );
};

// Styled components
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

export default Register;
