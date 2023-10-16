import { useEffect, useState } from "react";
import { ConnectWallet } from "@/components/features";
import { useLazyQuery, useSubscription, gql } from "@apollo/client";
import { IconCoin, IconLogout, IconWallet } from "@tabler/icons-react";
import Link from "next/link";

export default function Header() {
	const [balance, setBalance] = useState(0);
	const [login, setLogin] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedLogin = localStorage.getItem("login");
			setLogin(storedLogin === "true");
			setUser(JSON.parse(localStorage.getItem("user")));
		}
	}, []);

	const userLogout = async (username) => {
		setLogin(false);
		setUser({});
		localStorage.removeItem("user");
		localStorage.removeItem("login");
	};

	const GET_BALANCE = gql`
		query Accounts($owner: AccountOwner) {
			accounts(accountOwner: $owner)
		}
	`;
	// const NOTIFICATION_SUBSCRIPTION = gql`
	// 	subscription Notifications($chainId: ID!) {
	// 		notifications(chainId: $chainId)
	// 	}
	// `;

	let [balanceQuery, { data: balanceData, called: balanceCalled, error: balanceError }] = useLazyQuery(GET_BALANCE, {
		fetchPolicy: "network-only",
		variables: { owner: `User:${user && user.owner}` },
		context: { clientName: "fungible" },
		onCompleted: () => {
			setBalance(balanceData.accounts);
		},
	});

	if (!balanceCalled) {
		void balanceQuery();
	}
	// useSubscription(NOTIFICATION_SUBSCRIPTION, {
	// 	variables: { chainId: `${user && user.chainId}` },
	// 	context: { clientName: "fungible" },
	// 	onData: () => balanceQuery(),
	// });

	// const { loading, error, data } = useQuery(GET_BALANCE, {
	// 	variables: { owner: `User:${user && user.owner}` },
	// 	context: { clientName: "fungible" },
	// 	onCompleted: () => {
	// 		setBalance(data.accounts);
	// 	},
	// });

	return (
		<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
			<nav
				className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
				aria-label="Global">
				<div className="flex items-center justify-between">
					<Link className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
						<img className="w-12" src="logo.svg" />
					</Link>
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
						{login ? (
							<>
								<div className="hs-dropdown inline-flex [--trigger:hover]">
									<Link
										className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 md:pr-4 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
										href={`/${user.username}`}>
										<button
											id="hs-dropdown-login"
											type="button"
											className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
											data-hs-overlay="#hs-modal-wallet-connect">
											<IconWallet />
											{`${user.owner.slice(0, 6)}...${user.owner.slice(-4)}`}
										</button>
									</Link>

									<div
										className="mt-6 flex justify-center hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-48 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
										aria-labelledby="hs-dropdown-login">
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-md text-gray-800 dark:text-gray-400"
											href="#"
											onClick={userLogout}>
											Log out <IconLogout />
										</a>
									</div>
								</div>
								<div className="flex flex-col items-center cursor-pointer" onClick={() => void balanceQuery()}>
									<span className="text-blue-600 text-lg">{balance ? balance : "000."}</span>
									<IconCoin className="text-blue-500" />
								</div>
							</>
						) : (
							<ConnectWallet />
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}
