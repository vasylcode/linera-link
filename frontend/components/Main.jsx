import { IconWallet } from "@tabler/icons-react";

export default function Main() {
	return (
		<main className="container mx-auto mt-16">
			<div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
					<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 h-[50vh]">
						<div className="flex justify-center">
							<a
								className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
								href="#">
								Explore the Linera Link
								<span className="flex items-center gap-x-1">
									<span className="border-l border-gray-200 text-blue-600 pl-2 dark:text-blue-500">
										Explore
									</span>
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
								Linera Link connects creators and supporters, empowering the community to thrive through mutual
								support and collaboration in a social giving ecosystem.
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
				<div className="max-w-2xl mx-auto text-center mt-24 mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet People</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">Explore other creators</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">David Forren</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Founder / CEO</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Amil Evara</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Designer</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Ebele Egbuna</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Support Consultant</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Maria Powers</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Director of sales</p>
						</div>
					</div>
					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Delia Pawelke</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Front-end Developer</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Tom Lowry</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Designer</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Louise Donadieu</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Support Consultant</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Jeff Fisher</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Project Manager</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Sophia Harrington</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Project Manager</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Christina Kray</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Support Consultant</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Amy Forren</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Product Designer</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Philip Williams</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Support Consultant</p>
						</div>
					</div>
					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Brian Lofoten</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Designer</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Jessica Dorsey</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">Director of sales</p>
						</div>
					</div>

					<div className="text-center">
						<img
							className="rounded-full w-24 h-24 mx-auto"
							src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
							alt="Image Description"
						/>
						<div className="mt-2 sm:mt-4">
							<h3 className="font-medium text-gray-800 dark:text-gray-200">Nick Jackson</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Designer</p>
						</div>
					</div>
				</div>
				<div className="mt-12 flex justify-center">123</div>
			</div>
		</main>
	);
}
