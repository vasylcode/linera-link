import { useState } from "react";
import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { useForm } from "@mantine/form";
import { TextInput, Loader } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { IconIndentIncrease, IconWallet } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";

export default function ConnectWallet() {
	const form = useForm({
		initialValues: { username: "", chain_id: "" },
		validateInputOnChange: true,

		validate: {
			username: (value) => {
				if (value.length < 3) {
					return "Name must have at least 3 letters";
				}
				if (!/^[a-zA-Z0-9]*$/.test(value)) {
					return "Username must contain only letters and numbers";
				}
				return null;
			},
			chain_id: (value) => (value && value.length !== 64 ? "Insert valid chain ID" : null),
		},
	});

	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();
	const searchParams = useSearchParams();
	const existingPort = searchParams.get("port");

	const GET_USER = gql`
		query GetUser($username: String) {
			users(string: $username) {
				username
				chainId
				owner
				timestamp
			}
		}
	`;

	const SET_USER = gql`
		mutation SetUser($username: String!) {
			setuser(username: $username)
		}
	`;

	const [setUser, { loading: setUserLoading }] = useMutation(SET_USER, {
		onError: (error) => setError("Error: " + error.message),
		onCompleted: () => {
			notifications.show({
				title: "Wallet Connection Successful",
				message: "Your wallet has been successfully connected 🎉",
				color: "green",
				radius: "md",
			});
		},
	});

	const REQUEST_APPLICATION = gql`
		mutation RequestApplication($chainId: String!, $applicationId: String!) {
			requestApplication(chainId: $chainId, applicationId: $applicationId)
		}
	`;

	const [requestApplication, { loading: setRequestLoading }] = useMutation(REQUEST_APPLICATION, {
		context: { clientName: "clear" },
		onError: (error) => setError("Error: " + error.message),
		// onCompleted: () => {},
	});

	const handleSubmit = async (form) => {
		let username = form.username;
		let chainId = form.chain_id;
		let applicationId = process.env.NEXT_PUBLIC_LINK_APP_ID;
		setUsername(username);
		try {
			if (chainId && chainId !== process.env.NEXT_PUBLIC_LINK_CHAIN_ID) {
				const newSearchParams = new URLSearchParams();
				newSearchParams.append("port", existingPort);
				newSearchParams.append("chain", chainId);
				router.push({ pathname: router.pathname, search: newSearchParams.toString() });
				const resultRequestApplication = await requestApplication({ variables: { chainId, applicationId } });
				if (resultRequestApplication) {
					const result = await setUser({ variables: { username } });
					localStorage.setItem("login", false);
					router.push(`/${username}?port=${existingPort}&chain=${chainId}`);
					HSOverlay.close(document.getElementById("hs-modal-wallet-connect"));
				}
			} else if (!chainId) {
				const result = await setUser({ variables: { username } });
				localStorage.setItem("login", false);
				router.push(`/${username}`);
				HSOverlay.close(document.getElementById("hs-modal-wallet-connect"));
			}
		} catch (error) {
			console.log(error);
			setError("Error: " + error.message);
		}
	};

	return (
		<>
			<a
				className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 md:pr-4 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
				href="#">
				<button
					type="button"
					className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
					data-hs-overlay="#hs-modal-wallet-connect">
					<IconWallet />
					Connect Wallet
				</button>
			</a>

			<div
				id="hs-modal-wallet-connect"
				className="hs-overlay hidden flex items-center justify-center w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
				<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
					<div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
						<div className="p-4 sm:p-7">
							<div className="text-center">
								<h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Let's start!</h2>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 w-10/12 mx-auto">
									Enter your username, which will be used in your profile. Provide a Chain ID if default chain
									is not using.
								</p>
							</div>

							<div className="mt-5">
								<form onSubmit={form.onSubmit(handleSubmit)}>
									<div className="grid gap-y-4">
										<div>
											<div className="relative">
												{username ? (
													<Loader className="mx-auto" color="green" size="xl" type="dots" />
												) : (
													<>
														<TextInput
															mt="sm"
															label="Username"
															placeholder="Username"
															leftSection="/"
															withAsterisk
															{...form.getInputProps("username")}
														/>
														<TextInput
															mt="sm"
															label="Chain ID"
															placeholder="Chain ID"
															leftSection={<IconIndentIncrease />}
															{...form.getInputProps("chain_id")}
														/>
													</>
												)}

												<div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
													<svg
														className="h-5 w-5 text-red-500"
														width="16"
														height="16"
														fill="currentColor"
														viewBox="0 0 16 16"
														aria-hidden="true">
														<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
													</svg>
												</div>
											</div>
										</div>

										<button
											type="submit"
											className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
											Connect
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
