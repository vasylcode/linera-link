import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./lib/apollo";
import { useSearchParams } from "next/navigation";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);

	const searchParams = useSearchParams();
	let port = searchParams.get("port") ?? 8080;

	const client = createApolloClient(port);

	return (
		<ApolloProvider client={client}>
			<MantineProvider>
				<Notifications />
				<Component {...pageProps} />
			</MantineProvider>
		</ApolloProvider>
	);
}
