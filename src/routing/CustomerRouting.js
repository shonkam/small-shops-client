import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Typography,
  Container,
  Box,
} from '@mui/material'
import CustomerLinkHeader from '../components/customer/CustomerLinkHeader'
import Logout from '../components/Logout'
import Stores from '../components/Stores'
import Orders from '../components/customer/Orders'
import CustomerAllProducts from '../components/customer/CustomerAllProducts'
import ShoppingCart from '../components/ShoppingCart'

const CustomerRouting = () => (
  <BrowserRouter>
    <CustomerLinkHeader />
    <Routes>
      <Route exact path='/' element={<Stores />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/cart' element={<ShoppingCart />} />
      <Route path='store/:storeID' element={<CustomerAllProducts />} />
      <Route path='/logout' element={<Logout />} />
      <Route
        path='*'
        element={(
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
                Nothing to see here...
              </Typography>
            </Box>
          </Container>
        )}
      />
    </Routes>
  </BrowserRouter>
)

export default CustomerRouting
