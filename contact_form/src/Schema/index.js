import * as yup from 'yup';

export const validationSchema = yup.object({
    firstName: yup.string('Enter your First Name').required('First Name is required'),
    lastName: yup.string('Enter your Last Name').required('Last Name is required'),
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    queryType: yup.string('Select a query type').required('Query Type is required'),
    message: yup.string('Enter your Message').required('Message is required'),
  });