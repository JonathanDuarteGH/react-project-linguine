import React from 'react';
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import './index.css';
import Planets from "./components/Planets";
import reportWebVitals from './reportWebVitals';

const url = "https://liberal-alien-90.hasura.app/v1/graphql"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: url,
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Planets />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
