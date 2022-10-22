import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { LoginProvider } from "./context/Authentication";

const client = new ApolloClient({
  uri: 'https://exam-9.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
)
