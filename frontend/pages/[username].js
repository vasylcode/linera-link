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
	const { username, test } = router.query;
	console.log(test);

	return (
		<div>
			<h1>{`Welcome ${username}`}</h1>
		</div>
	);
}
