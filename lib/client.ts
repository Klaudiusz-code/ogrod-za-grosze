import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://www.ogrodzagrosze.pl/graphql", 
  fetchOptions: {
    next: {
      revalidate: 1,
    },
  },
});

export const client = new ApolloClient({
  link,              
  cache: new InMemoryCache(),
});
