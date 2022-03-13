import { useQuery } from '@apollo/client'
import { GET_STORES } from '../graphql/queries'

const useGetStores = (singleStore) => {
  const { data, error, loading } = useQuery(GET_STORES)

  if (loading) {
    return null
  }
  if (error) {
    console.log(error)
    // todo noti
  }

  if (singleStore) {
    return data.allStores[0]
  }

  return data.allStores
}

export default useGetStores
