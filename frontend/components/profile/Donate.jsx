import { useEffect, useState } from "react";
import { Paper, Group, Button, Text, TextInput, NumberInput, Textarea, Divider, Anchor, Stack } from "@mantine/core";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useToggle } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";

export default function Donate({ user }) {
	const [loggedUser, setLoggedUser] = useState({});
	const [error, setError] = useState("");
	const [type, toggle] = useToggle(["with", "without"]);
	const form = useForm({
		initialValues: {
			amount: 0,
			message: "",
		},
		validate: {
			amount: (value) => (value <= 0 ? "Amount can not be 0" : null),
			message: (value) => (value.length >= 300 ? "Message should be max 300 characters" : null),
		},
	});

	useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			setLoggedUser(JSON.parse(localStorage.getItem("user")));
		}
	}, []);

	const MAKE_PAYMENT = gql`
		mutation Transfer($owner: AccountOwner, $amount: Amount, $targetAccount: Account) {
			transfer(owner: $owner, amount: $amount, targetAccount: $targetAccount)
		}
	`;

	// const { loading, error, data } = useQuery(GET_ACCOUNTS, { context: { clientName: "fungible" } });

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error: {error.message}</p>;

	const [makePayment, { loading: paymentLoading }] = useMutation(MAKE_PAYMENT, {
		onError: (error) => console.log(error),
		onCompleted: (data) => {
			notifications.show({
				title: "Payment Completed",
				message: "Your payment has been successfully completed 🎉",
				color: "green",
				radius: "md",
			});
			notifications.show({
				title: "Transaction Hash",
				message: data,
				radius: "md",
			});
		},
	});

	const handleSubmit = async (form) => {
		makePayment({
			variables: {
				owner: `User:${loggedUser.owner}`,
				amount: form.amount,
				targetAccount: {
					chainId: user.chainId,
					owner: `User:${user.owner}`,
				},
			},
			context: { clientName: "fungible" },
		});
	};

	return (
		<Paper
			radius="md"
			p="xl"
			withBorder
			style={{
				width: "40%",
				height: "40%",
			}}>
			<Text size="lg" fw={500}>
				Donate {type} message
			</Text>
			<Divider my="lg" />
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Stack>
					<TextInput disabled label={`${user.username} chain`} placeholder={user.chainId} />
					<TextInput disabled label={`${user.username} address`} placeholder={user.owner} />

					<TextInput
						required
						label="Amount"
						placeholder="Amount to send"
						value={form.values.amount}
						onChange={(event) => form.setFieldValue("amount", event.currentTarget.value)}
						error={form.errors.amount}
						radius="md"
					/>

					{type === "with" && <Textarea variant="default" label="Message" description="Write you message" />}
				</Stack>

				<Group justify="space-between" mt="xl">
					<Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
						{type === "without" ? "Donate with message" : "Donate without message"}
					</Anchor>
					<Button type="submit" radius="xl">
						Send
					</Button>
				</Group>
			</form>
		</Paper>
	);
}
