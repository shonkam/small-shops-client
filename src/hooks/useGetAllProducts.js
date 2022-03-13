import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '../graphql/queries'

const useGetAllProducts = (storeID) => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: { storeID },
  })

  if (loading) {
    return null
  }
  if (error) {
    console.log(error)
    // todo noti
  }
  return data.allProducts
}

export default useGetAllProducts
