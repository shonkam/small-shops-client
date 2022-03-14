import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import LoadingScreen from '../LoadingScreen'
import useDeleteStore from '../../hooks/useDeleteStore'
import useGetStores from '../../hooks/useGetStores'
import { removeUserType } from '../../redux/reducers/userReducer'

const StoreProfile = () => {
  const [deleteStore] = useDeleteStore()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const client = useApolloClient()
  const singleStore = true
  const ownStore = useGetStores(singleStore)

  if (!ownStore) {
    return (
      <LoadingScreen />
    )
  }

  const submitDeleteStore = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete the store profile?')) {
      const response = await deleteStore()
      if (response) {
        // todo noti
        localStorage.clear()
        client.resetStore()
        navigate('/')
        dispatch(removeUserType())
      }
    } else {
      // todo noti
      console.log('could not delete store')
    }
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
        <Button
          color='error'
          variant='contained'
          fullWidth
          onClick={submitDeleteStore}
          sx={{
            marginTop: 2,
          }}
        >
          Delete store
        </Button>
      </Box>
    </Container>
  )
}

export default StoreProfile
