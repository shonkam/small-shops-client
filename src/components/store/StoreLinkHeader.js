import React from 'react'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import StorefrontIcon from '@mui/icons-material/Storefront'
import Add from '@mui/icons-material/Add'
import {
  AppBar,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material'

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

const StoreLinkHeader = () => (
  <Container maxWidth='md'>
    <Box>
      <Typography
        variant='h2'
        sx={{
          display: 'flex',
          marginBottom: 1,
          justifyContent: 'center',
          fontFamily: 'Roboto',
        }}
      >
        Small Shops
      </Typography>
    </Box>
    <AppBar position='static'>
      <Box sx={{
        display: 'flex',
        backgroundColor: '#b2afaf',
        justifyContent: 'space-evenly',
      }}
      >
        <Button style={styles.link} startIcon={<PersonIcon />}>
          <Link to='/' style={styles.link}>Profile</Link>
        </Button>

        <Button style={styles.link} startIcon={<StorefrontIcon />}>
          <Link to='/products' style={styles.link}>Products</Link>
        </Button>

        <Button style={styles.link} startIcon={<Add />}>
          <Link to='/addproduct' style={styles.link}>Add product</Link>
        </Button>

        <Button style={styles.link}>
          <Link to='/orders' style={styles.link}>Orders</Link>
        </Button>

        <Button startIcon={<LogoutIcon />} style={styles.link}>
          <Link to='/logout' style={styles.link}>Logout</Link>
        </Button>
      </Box>
    </AppBar>
  </Container>
)

export default StoreLinkHeader
