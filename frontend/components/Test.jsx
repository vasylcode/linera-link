// import { useQuery, gql } from "@apollo/client";

// const GET_USERS = gql`
// 	query {
// 		usersKeys
// 	}
// `;
// const GET_ACCOUNTS = gql`
// 	query {
// 		accounts(accountOwner: "User:445991f46ae490fe207e60c95d0ed95bf4e7ed9c270d4fd4fa555587c2604fe1")
// 	}
// `;

// function Test() {
// 	const { loading, error, data } = useQuery(GET_ACCOUNTS, { context: { clientName: "fungible" } });

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error: {error.message}</p>;

// 	console.log(data);

// 	return (
// 		<div>
// 			<h1>bibika</h1>
// 		</div>
// 	);
// }

// export default Test;

import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

function Test() {
	const [name, setName] = useState("");
	const [updateUserAccount] = useMutation(gql`
		mutation UpdateUserAccount($userId: ID!, $newAccountOwner: String!) {
			updateUserAccount(id: $userId, accountOwner: $newAccountOwner) {
				id
				accountOwner
			}
		}
	`);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await updateUserAccount({
				variables: {
					userId: "yourUserId", // Replace with the actual user ID
					newAccountOwner: name,
				},
			});

			// Handle the response as needed
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			<label className="block">Name:</label>
			<input
				type="text"
				value={name}
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

export default Test;
