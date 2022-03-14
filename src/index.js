import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { setContext } from '@apollo/client/link/context'
import App from './App'
import store from './redux/reduxStore'

const setAuthorizationLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('userToken')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    },
  }
})

const setHTTPLink = new HttpLink({
  uri: process.env.REACT_APP_URI,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: setAuthorizationLink.concat(setHTTPLink),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
)
