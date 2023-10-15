import { useRouter } from "next/router";

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
