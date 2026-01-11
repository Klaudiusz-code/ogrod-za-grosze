import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://vps-e1257184.vps.ovh.net/graphql", 
});

export const client = new ApolloClient({
  link,              
  cache: new InMemoryCache(),
});
