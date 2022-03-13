import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Container,
  Box,
  Typography,
} from '@mui/material'
import { removeUserType } from '../redux/reducers/userReducer'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const client = useApolloClient()

  useEffect(() => {
    localStorage.clear()
    client.resetStore()
    navigate('/')
    dispatch(removeUserType())
  })

  return (
    <Container maxWidth='lg'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
      }}
      >
        <Typography
          component='h1'
          variant='h6'
          alignSelf='center'
        >
          Loading results...
        </Typography>
      </Box>
    </Container>
  )
}

export default Logout
