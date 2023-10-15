import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { Header, Main, Footer } from "@/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Linera Link</title>
			</Head>
			<div className={`${inter.className}`}>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
}
