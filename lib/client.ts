import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://www.ogrodzagrosze.pl/graphql", 
});

export const client = new ApolloClient({
  link,              
  cache: new InMemoryCache(),
});
