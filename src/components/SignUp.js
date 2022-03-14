import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import useSignUp from '../hooks/useSignUp'

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be at least 7 characters long')
    .required('Password is required'),
  passwordConfirmation: yup
    .string('Re-enter your password')
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Password confirmation is required'),
  storeName: yup
    .string('Enter the name of the store')
    .min(2, 'The name of the store should be at least 2 characters long'),
  storeDescription: yup
    .string('Enter a short description of you store')
    .max(60, 'The description must be under 60 characters long'),
  storePostalNumber: yup
    .number('Enter the postal number of your store')
    .positive('Postal number can not be negative')
    .integer('Postal number must be an integer')
    .typeError('Postal number can only contain numbers'),
})

const SignUp = () => {
  const [signUp] = useSignUp()
  const navigate = useNavigate()

  const submitSignUp = async (values) => {
    try {
      const { userType } = values

      // mutation returns a boolean
      // informing about the status
      // of request success
      const response = await signUp(values)

      // returning true means that
      // the request was successfully
      // handled
      if (response) {
        // todo noti
        if (userType === 'customer') {
          navigate('/login')
        } else {
          navigate('/storelogin')
        }
      } else {
        console.log('Something went wrong when signing up, please try again')
      }
      // todo noti
    } catch (error) {
      console.log(error)
      // todo noti
    }
  }

  const signUpForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      userType: 'customer',
      storeName: '',
      storeDescription: '',
      storeBackgroundPictureURL: '',
      storeCountry: '',
      storePostalNumber: '',
      storeAddress: '',
      storeCity: '',
    },
    validationSchema,
    onSubmit: (values) => {
      submitSignUp(values)
    },
  })

  return (
    <Container maxWidth='xs'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 3,
        paddingBottom: 5,
      }}
      >
        <Typography
          component='h1'
          variant='h5'
          alignSelf='center'
        >
          Sign up
        </Typography>
        <Box
          component='form'
          onSubmit={signUpForm.handleSubmit}
        >
          <TextField
            margin='normal'
            fullWidth
            id='email'
            name='email'
            label='Email'
            onSubmit={signUpForm.handleSubmit}
            value={signUpForm.values.email}
            onChange={signUpForm.handleChange}
            error={signUpForm.touched.email && Boolean(signUpForm.errors.email)}
            helperText={signUpForm.touched.email && signUpForm.errors.email}
          />
          <TextField
            margin='normal'
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            onSubmit={signUpForm.handleSubmit}
            value={signUpForm.values.password}
            onChange={signUpForm.handleChange}
            error={
              signUpForm.touched.password
              && Boolean(signUpForm.errors.password)
            }
            helperText={
              signUpForm.touched.password
              && signUpForm.errors.password
            }
          />
          <TextField
            margin='normal'
            fullWidth
            id='passwordConfirmation'
            name='passwordConfirmation'
            label='Confirm password'
            type='password'
            onSubmit={signUpForm.handleSubmit}
            value={signUpForm.values.passwordConfirmation}
            onChange={signUpForm.handleChange}
            error={
              signUpForm.touched.passwordConfirmation
              && Boolean(signUpForm.errors.passwordConfirmation)
            }
            helperText={signUpForm.touched.passwordConfirmation
              && signUpForm.errors.passwordConfirmation}
          />
          <Typography
            sx={{ paddingTop: 3 }}
            variant='subtitle1'
            align='left'
          >
            Register as a
          </Typography>
          <RadioGroup
            name='userType'
            value={signUpForm.values.userType}
            onChange={signUpForm.handleChange}
            sx={{ flexDirection: 'row' }}
          >
            <FormControlLabel
              value='customer'
              control={<Radio />}
              label='Customer'
              sx={{ flex: 1 }}
            />
            <FormControlLabel
              value='store'
              control={<Radio />}
              label='Store'
              sx={{ flex: 1 }}
            />
          </RadioGroup>
          {signUpForm.values.userType === 'store'
            ? (
              <Box>
                <Typography
                  sx={{ paddingTop: 3 }}
                  variant='subtitle1'
                  align='left'
                >
                  Please fill in the information about your store
                </Typography>
                <TextField
                  margin='normal'
                  fullWidth
                  id='storeName'
                  name='storeName'
                  label='Name'
                  required
                  value={signUpForm.values.storeName}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeName
                    && Boolean(signUpForm.errors.storeName)
                  }
                  helperText={
                    signUpForm.touched.storeName
                    && signUpForm.errors.storeName
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='storeDescription'
                  name='storeDescription'
                  label='Short description of the store (max 60 characters)'
                  required
                  value={signUpForm.values.storeDescription}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeDescription
                    && Boolean(signUpForm.errors.storeDescription)
                  }
                  helperText={
                    signUpForm.touched.storeDescription
                    && signUpForm.errors.storeDescription
                  }
                />

                <TextField
                  margin='normal'
                  fullWidth
                  id='storeBackgroundPictureURL'
                  name='storeBackgroundPictureURL'
                  label='Background picture URL'
                  required
                  value={signUpForm.values.storeBackgroundPictureURL}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeBackgroundPictureURL
                    && Boolean(signUpForm.errors.storeBackgroundPictureURL)
                  }
                  helperText={
                    signUpForm.touched.storeBackgroundPictureURL
                    && signUpForm.errors.storeBackgroundPictureURL
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='storeAddress'
                  name='storeAddress'
                  label='Address'
                  required
                  value={signUpForm.values.storeAddress}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeAddress
                    && Boolean(signUpForm.errors.storeAddress)
                  }
                  helperText={
                    signUpForm.touched.storeAddress
                    && signUpForm.errors.storeAddress
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='storeCity'
                  name='storeCity'
                  label='City'
                  required
                  value={signUpForm.values.storeCity}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeCity
                    && Boolean(signUpForm.errors.storeCity)
                  }
                  helperText={
                    signUpForm.touched.storeCity
                    && signUpForm.errors.storeCity
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='storePostalNumber'
                  name='storePostalNumber'
                  label='Postal number'
                  required
                  value={signUpForm.values.storePostalNumber}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storePostalNumber
                    && Boolean(signUpForm.errors.storePostalNumber)
                  }
                  helperText={
                    signUpForm.touched.storePostalNumber
                    && signUpForm.errors.storePostalNumber
                  }
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='storeCountry'
                  name='storeCountry'
                  label='Country'
                  required
                  value={signUpForm.values.storeCountry}
                  onChange={signUpForm.handleChange}
                  error={
                    signUpForm.touched.storeCountry
                    && Boolean(signUpForm.errors.storeCountry)
                  }
                  helperText={
                    signUpForm.touched.storeCountry
                    && signUpForm.errors.storeCountry
                  }
                />
              </Box>
            )
            : null}
          <Button
            color='primary'
            variant='contained'
            fullWidth
            type='submit'
            sx={{
              marginTop: 2,
              backgroundColor: '#b2afaf',
              ':hover': {
                bgcolor: '#7f7d7d',
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp
