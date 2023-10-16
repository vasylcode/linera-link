import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Loader, Card, Avatar, Text, Group, Button, CopyButton, ActionIcon, Tooltip, Tabs, rem } from "@mantine/core";
import {
	IconCurrencyEthereum,
	IconLink,
	IconCopy,
	IconCheck,
	IconPhoto,
	IconMessageCircle,
	IconHome,
} from "@tabler/icons-react";
import { Supporters, Donate } from "@/components/profile";
import { Header, Footer } from "@/components/";
import Head from "next/head";

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

const convertTimestampToUTCDate = (timestamp) => {
	const dateObj = new Date(timestamp / 1000);
	const options = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "UTC",
	};
	return dateObj.toLocaleString("en-US", options);
};

const avatars = [
	"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Black&clotheType=Hoodie&clotheColor=Heather&eyeType=Side&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Brown",
	"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Gray02&eyeType=Dizzy&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=DarkBrown",
	"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Pale",
	"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=Blue02&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Brown",
	"https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&hatColor=Red&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=PastelOrange&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Disbelief&skinColor=Light",
	"https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=Blank&facialHairColor=Brown&clotheType=Overall&clotheColor=PastelRed&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Brown",
];

const stats = [
	{ value: "55K", label: "Supporters" },
	{ value: "410", label: "Supported" },
	{ value: "2.34K", label: "Posts" },
];

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const { loading, error, data } = useQuery(GET_USER, {
		variables: { username },
	});

	if (loading)
		return (
			<div className="min-h-screen flex justify-center items-center">
				<Loader color="blue" size="xl" type="dots" />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	const user = data.users;
	if (error || (!loading && !user)) {
		router.push("/404");
	}

	const items = stats.map((stat) => (
		<div key={stat.label}>
			<Text ta="center" fz="lg" fw={500}>
				{stat.value}
			</Text>
			<Text ta="center" fz="sm" c="dimmed" lh={1}>
				{stat.label}
			</Text>
		</div>
	));

	const iconStyle = { width: rem(20), height: rem(20) };

	if (localStorage.getItem("login") == "false") {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("login", true);
	}

	if (!user) return;

	return (
		<>
			<Head>
				<title>Linera Link | {user.username}</title>
			</Head>
			<Header />

			<Card padding="xl" radius="md" className="bg-[var(--mantine-color-body)]">
				<Card.Section
					h={240}
					style={{
						backgroundImage: "url(https://preline.co/assets/svg/component/polygon-bg-element.svg)",
						backgroundPosition: "top",
					}}
				/>
				<Avatar
					src={avatars[Math.floor(Math.random() * avatars.length)]}
					size={160}
					radius={160}
					mx="auto"
					mt={-80}
					className="border-[var(--mantine-color-body)]"
				/>

				<CopyButton className="text-gray-600 text-lg" value={`localhost:3000/${user.username}`} timeout={2000}>
					{({ copied, copy }) => (
						<Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
							<ActionIcon
								color={copied ? "teal" : "gray"}
								variant="subtle"
								onClick={copy}
								style={{
									position: "absolute",
								}}>
								{copied ? <IconCheck className="text-lg" /> : <IconLink className="text-lg" />}
							</ActionIcon>
						</Tooltip>
					)}
				</CopyButton>

				<div className="text-center font-semibold text-lg mb-2 mt-4">
					{user.username}
					<div className="hs-dropdown absolute inline-flex [--trigger:hover]">
						<button
							id="hs-dropdown-basic"
							type="button"
							className="hs-dropdown-toggle p-2 inline-flex justify-center items-center gap-2 font-medium text-gray-700 align-middle transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
							<svg
								className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</button>

						<div
							className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-lg rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
							aria-labelledby="hs-dropdown-basic">
							<a
								className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 dark:text-gray-400"
								href="#">
								<IconCurrencyEthereum style={{ width: rem(16) }} />
								{`${user.owner.slice(0, 6)}...${user.owner.slice(-4)}`}
								<CopyButton value={user.owner} timeout={2000}>
									{({ copied, copy }) => (
										<Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
											<ActionIcon color={copied ? "teal" : "gray"} variant="subtle" onClick={copy}>
												{copied ? (
													<IconCheck style={{ width: rem(16) }} />
												) : (
													<IconCopy style={{ width: rem(16) }} />
												)}
											</ActionIcon>
										</Tooltip>
									)}
								</CopyButton>
							</a>
						</div>
					</div>
				</div>

				<Text ta="center" fz="md" c="dimmed">
					Software Engineer
				</Text>
				<Text ta="center" fz="sm" c="dimmed">
					Joined: {convertTimestampToUTCDate(user.timestamp)}
				</Text>
				<Group mt="md" justify="center" gap={30}>
					{items}
				</Group>
				<Button radius="md" mt="xl" size="md" variant="subtle">
					Follow
				</Button>
			</Card>

			<Tabs color="blue" radius="md" defaultValue="home">
				<Tabs.List justify="center">
					<Tabs.Tab value="home" leftSection={<IconHome style={iconStyle} />}>
						Home
					</Tabs.Tab>
					<Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />} disabled>
						Messages
					</Tabs.Tab>
					<Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />} disabled>
						Gallery
					</Tabs.Tab>
				</Tabs.List>

				<div className="container mx-auto mt-12">
					<Tabs.Panel value="home" className="flex justify-around">
						<Supporters />
						<Donate user={user} />
					</Tabs.Panel>

					<Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

					<Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
				</div>
			</Tabs>

			{/* {user && (
				<div className="container mx-auto">
					<p>Username: {user.username}</p>
					<p>Chain ID: {user.chainId}</p>
					<p>Owner: {user.owner}</p>
					<p>Timestamp: {user.timestamp}</p>
				</div>
			)} */}

			<Footer />
		</>
	);
}
