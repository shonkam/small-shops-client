import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LoginIcon from '@mui/icons-material/Login'
import AddBoxIcon from '@mui/icons-material/AddBox'
import {
  AppBar,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material'

const LinkHeader = () => {
  const productsInCart = useSelector((state) => state.shoppingCart)
  const count = productsInCart.length

  const styles = {
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  }

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
          <Button startIcon={<LoginIcon />} style={styles.link}>
            <Link to='/login' style={styles.link}>Login</Link>
          </Button>
          <Button startIcon={<ShoppingCartIcon />} style={styles.link}>
            <Link to='/cart' style={styles.link}>
              (
              {count}
              ) Cart
            </Link>
          </Button>
          <Button startIcon={<AddBoxIcon />} style={styles.link}>
            <Link to='/signup' style={styles.link}>Sign up</Link>
          </Button>
          <Button startIcon={<LoginIcon />} style={styles.link}>
            <Link to='/storelogin' style={styles.link}>Store login</Link>
          </Button>
        </Box>
      </AppBar>
    </Container>
  )
}

export default LinkHeader
