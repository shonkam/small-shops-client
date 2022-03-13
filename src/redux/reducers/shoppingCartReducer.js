// eslint-disable-next-line default-param-last
const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'EMPTY_CART':
      return action.data
    case 'ADD_PRODUCT':
      return [...state, action.data]
    default:
      return state
  }
}

export const addProductToCart = (product) => ({
  type: 'ADD_PRODUCT',
  data: product,
})

export const emptyCart = () => ({
  type: 'EMPTY_CART',
  data: [],
})

export default shoppingCartReducer
