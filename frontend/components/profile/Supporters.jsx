import { Avatar, Text, Group, Paper, ThemeIcon, rem } from "@mantine/core";
import { IconHeartHandshake } from "@tabler/icons-react";
import classesCommentHtml from "@/styles/CommentHtml.module.css";
import classesCardGradient from "@/styles/CardGradient.module.css";

export default function Supporters() {
	return (
		<Paper withBorder radius="md" className={classesCardGradient.card}>
			<Group>
				<ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: "orange", to: "pink" }}>
					<IconHeartHandshake style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
				</ThemeIcon>
				<p className="text-center font-semibold text-2xl">Latest Supporters</p>
			</Group>

			<Text size="sm" mt="sm" c="dimmed">
				Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many
				other properties to match your design requirements.
			</Text>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
					ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>

			<div className={classesCommentHtml.body}>
				<Group>
					<Avatar
						src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						alt="Jacob Warnhalter"
						radius="xl"
					/>
					<div>
						<Text size="sm">Jacob Warnhalter</Text>
						<Text size="xs" c="dimmed">
							10 minutes ago
						</Text>
					</div>
				</Group>
				<Text pl={54} size="sm" className={classesCommentHtml.text}>
					This Pokémon likes to lick its palms that are sweetened by being soaked in honey.
				</Text>
			</div>
		</Paper>
	);
}
