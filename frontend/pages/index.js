import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header, Main, Footer } from "@/components";

export default function Home() {
	return (
		<div className={`${inter.className}`}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
