"use client"
import { NextPage } from 'next';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
interface Props {
    children:React.ReactNode
}

const Graphqlprovider: NextPage<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Graphqlprovider;