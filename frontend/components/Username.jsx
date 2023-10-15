import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

export default function Username() {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");

	const SET_USER = gql`
		mutation SetUser($username: String) {
			setuser(username: $username)
		}
	`;

	const [setUser, { loading: setUserLoading }] = useMutation(SET_USER, {
		onError: (error) => setError("Error: " + error.networkError.result),
		onCompleted: () => {
			alert(123);
		},
	});

	const handleNameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await setUser({ variables: { username } });
			console.log(result);
		} catch (error) {
			setError("Error: " + error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			<label className="block">Name:</label>
			<input
				type="text"
				value={username}
				onChange={handleNameChange}
				className="w-full p-2 border rounded-md"
				placeholder="New Name"
			/>
			<button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded-md">
				Update User
			</button>
		</form>
	);
}
