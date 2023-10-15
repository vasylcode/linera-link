import { ConnectWallet } from "@/components/features";

export default function Header() {
	return (
		<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
			<nav
				className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
				aria-label="Global">
				<div className="flex items-center justify-between">
					<a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
						Linera Link
					</a>
					<div className="md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation">
							<svg
								className="hs-collapse-open:hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							<svg
								className="hs-collapse-open:block hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>
				<div
					id="navbar-collapse-with-animation"
					className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
					<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
						<a className="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">
							Landing
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
							href="#">
							About
						</a>

						<ConnectWallet />
					</div>
				</div>
			</nav>
		</header>
	);
}
