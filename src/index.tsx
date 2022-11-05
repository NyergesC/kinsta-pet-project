import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {setContext} from '@apollo/client/link/context';
import { AUTH_TOKEN } from "./constants";
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


