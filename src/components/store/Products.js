import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import useGetAllProducts from '../../hooks/useGetAllProducts'

const Products = () => {
  const navigate = useNavigate()
  const ownProducts = useGetAllProducts()

  if (!ownProducts) {
    return (
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
            Loading results...
          </Typography>
        </Box>
      </Container>
    )
  }

  const customizeProduct = (item) => {
    navigate(`/products/${item.id}`)
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 3,
      }}
      >
        <ImageList
          variant='quilted'
          cols={2}
          gap={10}
          sx={{ overflow: 'hidden' }}
        >
          {ownProducts.map((product) => (
            <ImageListItem key={product.id}>
              <img
                src={`${product.productPictureURL}`}
                alt={product.productName}
                loading='lazy'
              />
              <ImageListItemBar
                title={product.productName}
                subtitle={product.productDescription}
                actionIcon={(
                  <IconButton onClick={() => customizeProduct(product)}>
                    <SettingsIcon sx={{ color: 'white' }} />
                  </IconButton>
                )}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  )
}

export default Products
