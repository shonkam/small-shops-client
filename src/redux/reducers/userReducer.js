// eslint-disable-next-line default-param-last
const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_TYPE':
      return action.data.userType
    case 'REMOVE_USER_TYPE':
      return state === null
    default:
      return state
  }
}

export const setUserType = (userType) => ({
  type: 'SET_USER_TYPE',
  data: {
    userType,
  },
})

export const removeUserType = () => ({
  type: 'REMOVE_USER_TYPE',
})

export default userReducer
