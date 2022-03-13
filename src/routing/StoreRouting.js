import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Typography,
  Container,
  Box,
} from '@mui/material'
import StoreLinkHeader from '../components/store/StoreLinkHeader'
import Logout from '../components/Logout'
import Products from '../components/store/Products'
import AddProduct from '../components/store/AddProduct'
import CustomizeProduct from '../components/store/CustomizeProduct'
import StoreProfile from '../components/store/StoreProfile'
import StoreOrders from '../components/store/StoreOrders'

const StoreRouting = () => (
  <BrowserRouter>
    <StoreLinkHeader />
    <Routes>
      <Route exact path='/' element={<StoreProfile />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<CustomizeProduct />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/orders' element={<StoreOrders />} />
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

export default StoreRouting
