import Link from "next/link";

interface Props {
	title: string
	images: string[]
	to: string
}

function MobileWorkLink(props: Props) {

	return (
		<div>

			<div className="flex justify-between gap-4">

				{props.images.map((image, index) => (

					<Link key={index} href={props.to} className="transition hover:brightness-95">

						<img src={image} alt={props.title} className="w-full border border-gray-300 hover:border-gray-200 rounded-lg" />
					</Link>
				))}
			</div>

			<div className="mt-4 text-center">

				<Link href={props.to} className="hover:underline">{props.title}</Link>
			</div>
		</div>
	)
}

export default MobileWorkLink