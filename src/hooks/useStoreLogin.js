import { useMutation } from '@apollo/client'
import { LOGIN_STORE } from '../graphql/queries'

const useStoreLogin = () => {
  const [mutate] = useMutation(LOGIN_STORE)

  const loginStore = async (email, password) => {
    // mutation returns a jwt
    // token if params are correct
    const { data } = await mutate({
      variables: {
        email,
        password,
      },
    })

    // forward token if received
    // else return false
    if (data.loginStore.token) {
      return data.loginStore.token
    }

    return false
  }
  return [loginStore]
}

export default useStoreLogin
