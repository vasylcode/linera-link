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
				Meet our Latest Supporters, the ones who help creators and organizations follow their passions. Join our
				community, support what you love, and be part of something truly special.
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo at, voluptas minus nostrum impedit
					corrupti.
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
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, excepturi? Deserunt reprehenderit
					officia qui fugiat?
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
					Lorem ipsum dolor sit amet.
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
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi placeat asperiores tempore
					sint fuga eaque consequuntur, atque nulla laudantium.
				</Text>
			</div>
		</Paper>
	);
}
