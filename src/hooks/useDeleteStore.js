import { useMutation } from '@apollo/client'
import { DELETE_STORE } from '../graphql/queries'

const useDeleteStore = () => {
  const [deteleStoreMutation] = useMutation(DELETE_STORE)

  const deleteStore = async () => {
    const { data, error } = await deteleStoreMutation()

    if (error) {
      console.log(error)
      // todo noti
    }
    return data.deleteStore.successful
  }
  return [deleteStore]
}

export default useDeleteStore
