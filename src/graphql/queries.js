import { gql } from '@apollo/client'

export const GET_ORDERS = gql`
  query AllOrders {
    allOrders {
      _id
      store {
        name
      }
      products {
        productName
        productPrice
      }
      customer {
        email
      }
      date
      orderSum
    }
  }
`

export const CREATE_ORDER = gql`
  mutation CreateOrder($store: ID!, $products: [ID!]!, $orderSum: String!) {
    createOrder(store: $store, products: $products, orderSum: $orderSum) {
      successful
    }
  }
`

export const ADD_CUSTOMER = gql`
  mutation AddCustomer($email: String!, $password: String!) {
    addCustomer(email: $email, password: $password) {
      successful
    }
  }
`

export const LOGIN_CUSTOMER = gql`
  mutation LoginCustomer($email: String!, $password: String!) {
    loginCustomer(email: $email, password: $password) {
      token
    }
  }
`

export const ADD_STORE = gql`
  mutation AddStore($email: String!, $password: String!, $name: String!, $description: String!, $backgroundPictureURL: String!, $address: String!, $city: String!, $postalNumber: Int!, $country: String!) {
    addStore(email: $email, password: $password, name: $name, description: $description, backgroundPictureURL: $backgroundPictureURL, address: $address, city: $city, postalNumber: $postalNumber, country: $country) {
      successful
    }
  }
`

export const DELETE_STORE = gql`
  mutation DeleteStore {
    deleteStore {
      successful
    }
  }
`
export const GET_STORES = gql`
  query allStores {
    allStores {
      id
      name
      description
      backgroundPictureURL
      location {
        address
        city
        postalNumber
        country
      }
    }
  }
`

export const LOGIN_STORE = gql`
  mutation LoginStore($email: String!, $password: String!) {
    loginStore(email: $email, password: $password) {
      token
    }
  }
`

export const ADD_PRODUCT = gql`
  mutation AddProduct($productName: String!, $productPrice: String!, $productStock: Int!, $productPictureURL: String!, $productDescription: String!) {
    addProduct(productName: $productName, productPrice: $productPrice, productStock: $productStock, productPictureURL: $productPictureURL, productDescription: $productDescription) {
      successful
    }
  }
`

export const GET_ALL_PRODUCTS = gql`
  query allProducts($storeID: ID) {
    allProducts(storeID: $storeID) {
      id
      productName
      productPrice
      productStock
      productPictureURL
      productDescription
    }
  }
`

export const GET_SINGLE_PRODUCT = gql`
  query singleProduct ($productID: ID!) {
    singleProduct (productID: $productID) {
      id
      productName
      productPrice
      productStock
      productPictureURL
      productDescription
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation updateProduct ($productID: ID!, $productName: String!, $productPrice: String!, $productStock: Int!, $productPictureURL: String!, $productDescription: String!) {
    updateProduct (productID: $productID, productName: $productName, productPrice: $productPrice, productStock: $productStock, productPictureURL: $productPictureURL, productDescription: $productDescription) {
      successful
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation deleteProduct ($productID: ID!) {
    deleteProduct (productID: $productID) {
      successful
    }
  }
`
