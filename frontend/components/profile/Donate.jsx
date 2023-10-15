import { Paper, Group, Button, Text, TextInput, NumberInput, Textarea, Divider, Anchor, Stack } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export default function Donate({ user }) {
	const [type, toggle] = useToggle(["with", "without"]);
	const form = useForm({
		initialValues: {
			amount: 0,
			message: "",
		},
		validate: {
			amount: (value) => (value <= 0 ? "Amount should be >0" : null),
			message: (value) => (value.length >= 300 ? "Message should be max 300 characters" : null),
		},
	});
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
			<form onSubmit={form.onSubmit(() => {})}>
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
						Support
					</Button>
				</Group>
			</form>
		</Paper>
	);
}
