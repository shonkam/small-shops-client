import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

const useGetOrders = () => {
  const { data, loading, error } = useQuery(GET_ORDERS)

  if (loading) {
    return null
  }
  if (error) {
    console.log(error)
    // todo noti
  }
  return data.allOrders
}

export default useGetOrders
