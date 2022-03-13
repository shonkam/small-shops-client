import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Box,
  Typography,
  CardMedia,
  Button,
} from '@mui/material'
import { setStore } from '../../redux/reducers/currentStoreReducer'
import { addProductToCart, emptyCart } from '../../redux/reducers/shoppingCartReducer'
import useGetAllProducts from '../../hooks/useGetAllProducts'
import LoadingScreen from '../LoadingScreen'

const CustomerAllProducts = () => {
  const dispatch = useDispatch()
  const { storeID } = useParams()
  const currentStore = useSelector((state) => state.currentStore)
  const storeProducts = useGetAllProducts(storeID)

  const addToCart = (product) => {
    // if no current store, then cart is empty
    if (currentStore) {
      // confirm to remove existing products from the cart
      if (currentStore !== storeID) {
        // eslint-disable-next-line no-alert
        if (window.confirm('You have already added products from other store into your cart. Do you wish to remove those products and add this one instead?')) {
          dispatch(emptyCart())
          dispatch(setStore(storeID))
          dispatch(addProductToCart(product))
        }
        // products are from the same store
      } else {
        dispatch(addProductToCart(product))
      }
    } else {
      dispatch(setStore(storeID))
      dispatch(addProductToCart(product))
    }
  }

  if (!storeProducts) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Container maxWidth='md'>
      {storeProducts.map((product) => (
        <Box
          key={product.id}
          sx={{
            display: 'flex',
            marginTop: 3,
            marginBottom: 3,
            borderRadius: 1,
            borderColor: '#e5e1e1',
            border: 'solid',
          }}
        >
          <Box>
            <CardMedia
              component='img'
              image={`${product.productPictureURL}`}
              alt='product'
              sx={{ height: 600, width: 450 }}
            />
          </Box>
          <Box sx={{
            marginLeft: 2,
            marginRight: 2,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignSelf: 'center',
          }}
          >
            <Typography variant='h4' component='div' sx={{ fontWeight: 'bold' }}>
              {product.productName}
            </Typography>
            <Typography variant='h5' component='div' sx={{ marginTop: 3 }}>
              {product.productDescription}
            </Typography>
            {product.productStock > 0
              ? (
                <Typography variant='h5' component='div' sx={{ marginTop: 1 }}>
                  In stock
                </Typography>
              )
              : (
                <Typography variant='h5' component='div' sx={{ marginTop: 1 }}>
                  Out of stock
                </Typography>
              )}
            <Typography variant='h5' component='div' sx={{ marginTop: 1 }}>
              {product.productPrice}
              {' '}
              €
            </Typography>

            {product.productStock > 0
              ? (
                <Button
                  variant='contained'
                  fullWidth
                  onClick={() => addToCart(product, storeID)}
                  sx={{
                    marginTop: 2,
                    backgroundColor: '#b2afaf',
                    ':hover': {
                      bgcolor: '#7f7d7d',
                    },
                  }}
                >
                  Add to cart
                </Button>
              )
              : (
                <Button
                  variant='contained'
                  fullWidth
                  disabled
                  onClick={() => addToCart(product, storeID)}
                  sx={{
                    marginTop: 2,
                    backgroundColor: '#b2afaf',
                    ':hover': {
                      bgcolor: '#7f7d7d',
                    },
                  }}
                >
                  Add to cart
                </Button>
              )}
          </Box>
        </Box>
      ))}
      <Box sx={{ display: 'flex', flex: 1, marginBottom: 39 }} />
    </Container>
  )
}

export default CustomerAllProducts
