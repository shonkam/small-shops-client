import { useMutation } from '@apollo/client'
import { LOGIN_CUSTOMER } from '../graphql/queries'

const useLogin = () => {
  const [mutate] = useMutation(LOGIN_CUSTOMER)

  const loginCustomer = async (email, password) => {
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
    if (data.loginCustomer.token) {
      return data.loginCustomer.token
    }

    return false
  }
  return [loginCustomer]
}

export default useLogin
