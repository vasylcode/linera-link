import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";

const LINK_APP_ID = process.env.NEXT_PUBLIC_LINK_APP_ID;
const FUNGIBLE_APP_ID = process.env.NEXT_PUBLIC_FUNGIBLE_APP_ID;

const createApolloClient = (port, chainId) => {
	// linera-link app
	const httpLink = new HttpLink({
		uri: `http://localhost:${port}/chains/${chainId}/applications/${LINK_APP_ID}`,
	});

	// fungible app
	const fungibleLink = new HttpLink({
		uri: `http://localhost:${port}/chains/${chainId}/applications/${FUNGIBLE_APP_ID}`,
	});

	// clear link query
	const clearLink = new HttpLink({
		uri: `http://localhost:${port}`,
	});

	return new ApolloClient({
		// link: split((operation) => operation.getContext().clientName === "fungible", fungibleLink, httpLink),
		link: split(
			(operation) => operation.getContext().clientName === "clear",
			clearLink,
			split((operation) => operation.getContext().clientName === "fungible", fungibleLink, httpLink)
		),
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;
