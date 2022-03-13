import React from 'react'
import {
  Container,
  Box,
  Typography,
} from '@mui/material'

const LoadingScreen = () => (
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

export default LoadingScreen
