import { IconWallet } from "@tabler/icons-react";

export default function Main() {
	return (
		<main className="container mx-auto h-[50vh] mt-20">
			<div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
					<div className="flex justify-center">
						<a
							className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
							href="#">
							Explore the Linera Link
							<span className="flex items-center gap-x-1">
								<span className="border-l border-gray-200 text-blue-600 pl-2 dark:text-blue-500">Explore</span>
								<svg
									className="w-2.5 h-2.5 text-blue-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none">
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</a>
					</div>
					<div className="mt-5 max-w-xl text-center mx-auto">
						<h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
							Linera Link Supercharged
						</h1>
					</div>

					<div className="mt-5 max-w-3xl text-center mx-auto">
						<p className="text-lg text-gray-600 dark:text-gray-400">
							Where giving meets purpose, fostering positive change worldwide.
						</p>
					</div>

					<div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
						<a
							className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
							href="#"
							data-hs-overlay="#hs-modal-wallet-connect">
							<IconWallet />
							Continue with Wallet
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
