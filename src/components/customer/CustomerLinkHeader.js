import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
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

const CustomerLinkHeader = () => {
  const productsInCart = useSelector((state) => state.shoppingCart)
  const count = productsInCart.length

  return (
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
          <Button startIcon={<StorefrontIcon />} style={styles.link}>
            <Link to='/' style={styles.link}>Stores</Link>
          </Button>
          <Button startIcon={<PersonIcon />} style={styles.link}>
            <Link to='/orders' style={styles.link}>Orders</Link>
          </Button>
          <Button startIcon={<ShoppingCartIcon />} style={styles.link}>
            <Link to='/cart' style={styles.link}>
              (
              {count}
              ) Cart
            </Link>
          </Button>
          <Button startIcon={<LogoutIcon />} style={styles.link}>
            <Link to='/logout' style={styles.link}>Logout</Link>
          </Button>
        </Box>
      </AppBar>
    </Container>
  )
}

export default CustomerLinkHeader
