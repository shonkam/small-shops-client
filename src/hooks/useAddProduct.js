import { useMutation } from '@apollo/client'
import { ADD_PRODUCT } from '../graphql/queries'

const useAddProduct = () => {
  const [mutate] = useMutation(ADD_PRODUCT)

  const addProduct = async (values) => {
    const tempPrice = parseFloat(values.productPrice)
    const productPrice = tempPrice.toFixed(2)

    const productStock = parseInt(values.productStock, 10)

    // mutation returns a boolean
    // about the success of the operation
    const { data } = await mutate({
      variables: {
        productName: values.productName,
        productPrice,
        productStock,
        productPictureURL: values.productPictureURL,
        productDescription: values.productDescription,
      },
    })

    // received boolean is passed
    // into component, where the success
    // status is checked
    return data.addProduct.successful
  }
  return [addProduct]
}

export default useAddProduct
