import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const { loading, error, data } = useQuery(GET_USER, {
		variables: { username },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const user = data.users;

	return (
		<div>
			<h1>{`Welcome ${username}`}</h1>
			<div>
				<h1>User Profile</h1>
				<p>Username: {user.username}</p>
				<p>Chain ID: {user.chainId}</p>
				<p>Owner: {user.owner}</p>
				<p>Timestamp: {user.timestamp}</p>
			</div>
		</div>
	);
}
