import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import LoadingScreen from './LoadingScreen'
import { emptyCart } from '../redux/reducers/shoppingCartReducer'
import { removeStore } from '../redux/reducers/currentStoreReducer'
import useCreateOrder from '../hooks/useCreateOrder'

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const [createOrder] = useCreateOrder()
  const productsInCart = useSelector((state) => state.shoppingCart)
  const currentStoreID = useSelector((state) => state.currentStore)
  const currentUser = useSelector((state) => state.user)
  let totalSum = 0

  if (productsInCart) {
    productsInCart.forEach((product) => {
      totalSum += parseFloat(product.productPrice)
    })
    totalSum = totalSum.toFixed(2)
  }

  const removeItems = () => {
    dispatch(emptyCart())
    dispatch(removeStore())
  }

  const submitCreateOrder = async () => {
    try {
      if (productsInCart.length === 0) {
        // eslint-disable-next-line no-alert
        (window.alert('No items in cart'))
      } else if (!currentUser) {
        // eslint-disable-next-line no-alert
        (window.alert('Please login or sign up in order to make order'))
      } else {
        await createOrder(productsInCart, totalSum, currentStoreID)
        dispatch(emptyCart())
        dispatch(removeStore())
      }
    } catch (e) {
      // todo noti
      console.log('Something went wrong when creating a new order')
    }
  }

  if (!productsInCart) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Container maxWidth='md'>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Preview</TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsInCart.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.productName}</TableCell>
                <TableCell align='center'>
                  <img alt='productPreview' style={{ maxHeight: 100, maxWidth: 80 }} src={product.productPictureURL} />
                </TableCell>
                <TableCell align='right'>
                  {product.productPrice}
                  €
                </TableCell>
              </TableRow>
            ))}
            <TableRow key='bottomline'>
              <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
              <TableCell align='center' />
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                {totalSum}
                {' '}
                €
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          variant='contained'
          color='error'
          onClick={removeItems}
          sx={{
            marginTop: 2,
            float: 'left',
            alignSelf: 'end',
          }}
        >
          Empty cart
        </Button>
        <Button
          variant='contained'
          onClick={submitCreateOrder}
          sx={{
            marginTop: 2,
            float: 'right',
            alignSelf: 'end',
            backgroundColor: '#b2afaf',
            ':hover': {
              bgcolor: '#7f7d7d',
            },
          }}
        >
          Purchase
        </Button>
      </Box>
    </Container>
  )
}

export default ShoppingCart
