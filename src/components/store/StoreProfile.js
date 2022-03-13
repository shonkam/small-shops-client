import React from 'react'
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import useGetStores from '../../hooks/useGetStores'

const StoreProfile = () => {
  const singleStore = true
  const ownStore = useGetStores(singleStore)

  if (!ownStore) {
    return (
      <Container maxWidth='md'>
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
            Loading store information...
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
      }}
      >
        <Card>
          <CardMedia
            component='img'
            image={`${ownStore.backgroundPictureURL}`}
            alt='profile'
            sx={{ maxHeight: 500 }}
          />
          <CardContent>
            <Typography variant='h5' component='div'>
              {ownStore.name}
            </Typography>
            <Typography variant='h6' component='div'>
              {ownStore.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default StoreProfile
