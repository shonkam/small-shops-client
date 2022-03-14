import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  Typography,
  Container,
  Box,
} from '@mui/material'
import Stores from './components/Stores'
import Login from './components/customer/Login'
import LinkHeader from './components/LinkHeader'
import SignUp from './components/SignUp'
import StoreLogin from './components/store/StoreLogin'
import { setUserType } from './redux/reducers/userReducer'
import CustomerRouting from './routing/CustomerRouting'
import StoreRouting from './routing/StoreRouting'
import CustomerAllProducts from './components/customer/CustomerAllProducts'
import ShoppingCart from './components/ShoppingCart'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) {
      const userType = localStorage.getItem('userType')
      dispatch(setUserType(userType))
    }
  }, [dispatch])

  const userType = useSelector((state) => state.user)

  if (userType === 'store') {
    return (
      <StoreRouting />
    )
  }

  if (userType === 'customer') {
    return (
      <CustomerRouting />
    )
  }

  return (
    <div style={{ flex: 1 }}>
      <BrowserRouter>
        <LinkHeader />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='store/:storeID' element={<CustomerAllProducts />} />
          <Route exact path='/' element={<Stores />} />
          <Route exact path='/storelogin' element={<StoreLogin />} />
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
    </div>
  )
}

export default App
