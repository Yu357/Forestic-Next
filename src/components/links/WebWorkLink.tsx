import Link from "next/link";

interface Props {
	image: string
	title: string
	to: string
}

function WebWorkLink(props: Props) {
	
	return (
		<div>

			<div>

				<Link href={props.to} onClick={() => window.scroll(0, 0)} className="transition hover:brightness-95">

					<img src={props.image} alt={props.title} className="w-full border hover:border-gray-100" />
				</Link>
			</div>

			<div className="mt-4 text-center">

				<Link href={props.to} onClick={() => window.scroll(0, 0)} className="hover:underline">{props.title}</Link>
			</div>
		</div>
	)
}

export default WebWorkLink;