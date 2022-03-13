import { useQuery } from '@apollo/client'
import { GET_SINGLE_PRODUCT } from '../graphql/queries'

const useGetSingleProduct = (productID) => {
  const { data, loading, error } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { productID },
  })

  if (loading) {
    return null
  }
  if (error) {
    console.log(error)
    // todo noti
  }
  return data.singleProduct
}

export default useGetSingleProduct
