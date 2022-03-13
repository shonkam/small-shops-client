import { useMutation } from '@apollo/client'
import { UPDATE_PRODUCT, GET_ALL_PRODUCTS } from '../graphql/queries'

const useUpdateProduct = () => {
  const [mutateProduct] = useMutation(UPDATE_PRODUCT)

  const updateProduct = async (updatedProduct) => {
    const tempPrice = parseFloat(updatedProduct.productPrice)
    const productPrice = tempPrice.toFixed(2)

    const productStock = parseInt(updatedProduct.productStock, 10)

    const { data, error } = await mutateProduct({
      variables: {
        productID: updatedProduct.id,
        productName: updatedProduct.productName,
        productPrice,
        productStock,
        productPictureURL: updatedProduct.productPictureURL,
        productDescription: updatedProduct.productDescription,
      },
      refetchQueries: [{ query: GET_ALL_PRODUCTS }],
    })

    if (error) {
      console.log(error)
      // todo noti
    }
    return data.updateProduct.successful
  }
  return [updateProduct]
}

export default useUpdateProduct
