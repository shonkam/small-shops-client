import { useMutation } from '@apollo/client'
import { CREATE_ORDER } from '../graphql/queries'

const useCreateOrder = () => {
  const [mutate] = useMutation(CREATE_ORDER)

  const createOrder = async (productsInCart, totalSum, currentStoreID) => {
    const productIDArray = productsInCart.map((entry) => entry.id)

    // mutation returns a boolean
    // about the success of the operation
    const { data } = await mutate({
      variables: {
        products: productIDArray,
        orderSum: totalSum,
        store: currentStoreID,
      },
    })

    // received boolean is passed
    // into component, where the success
    // status is checked
    return data.createOrder.successful
  }
  return [createOrder]
}

export default useCreateOrder
