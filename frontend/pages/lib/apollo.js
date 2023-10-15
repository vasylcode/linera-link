import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";

const LINK_CHAIN_ID = process.env.NEXT_PUBLIC_LINK_CHAIN_ID;
const LINK_APP_ID = process.env.NEXT_PUBLIC_LINK_APP_ID;
const LINK_PORT = process.env.NEXT_PUBLIC_LINK_PORT;

const FUNGIBLE_CHAIN_ID = process.env.NEXT_PUBLIC_FUNGIBLE_CHAIN_ID;
const FUNGIBLE_APP_ID = process.env.NEXT_PUBLIC_FUNGIBLE_APP_ID;
const FUNGIBLE_PORT = process.env.NEXT_PUBLIC_FUNGIBLE_PORT;

// linera-link app
const httpLink = new HttpLink({
	uri: `http://localhost:${LINK_PORT}/chains/${LINK_CHAIN_ID}/applications/${LINK_APP_ID}`,
});

// fungible app
const fungibleLink = new HttpLink({
	uri: `http://localhost:${FUNGIBLE_PORT}/chains/${FUNGIBLE_CHAIN_ID}/applications/${FUNGIBLE_APP_ID}`,
});

const client = new ApolloClient({
	link: split((operation) => operation.getContext().clientName === "fungible", fungibleLink, httpLink),
	cache: new InMemoryCache(),
});

export default client;
