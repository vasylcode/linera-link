import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import("preline");
	}, []);

	return (
		<ApolloProvider client={client}>
			<MantineProvider>
				<Notifications />
				<Component {...pageProps} />
			</MantineProvider>
		</ApolloProvider>
	);
}
