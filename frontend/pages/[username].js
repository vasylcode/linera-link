import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Card, Avatar, Text, Group, Button } from "@mantine/core";

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
	{ value: "55K", label: "Followers" },
	{ value: "410", label: "Follows" },
	{ value: "2.34K", label: "Posts" },
];

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const { loading, error, data } = useQuery(GET_USER, {
		variables: { username },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const user = data.users;

	if (error || (!loading && !data.users)) {
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

	return (
		<div>
			<h1>{`Welcome ${username}`}</h1>
			{user && (
				<div>
					<h1>User Profile</h1>
					<p>Username: {user.username}</p>
					<p>Chain ID: {user.chainId}</p>
					<p>Owner: {user.owner}</p>
					<p>Timestamp: {user.timestamp}</p>
				</div>
			)}
			<Card withBorder padding="xl" radius="md" className="bg-[var(--mantine-color-body)]">
				<Card.Section
					h={340}
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
					className="border-[2px] border-solid border-[var(--mantine-color-body)]"
				/>
				<Text ta="center" fz="lg" fw={500} mt="sm">
					{user.username}
				</Text>
				<Text ta="center" fz="sm" c="dimmed">
					Software Engineer
				</Text>
				<Group mt="md" justify="center" gap={30}>
					{items}
				</Group>
				<Text ta="center" fz="sm" mt="md" c="dimmed">
					Joined: {convertTimestampToUTCDate(user.timestamp)}
				</Text>
				{/* <Button fullWidth radius="md" mt="xl" size="md" variant="default">
					Follow
				</Button> */}
			</Card>
		</div>
	);
}
