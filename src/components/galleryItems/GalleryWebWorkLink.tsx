import Image from "next/image";
import Link from "next/link";

interface Props {
	image: string
	title: string
	to: string
}

function GalleryWebWorkLink(props: Props) {
	
	return (
		<div>

			<div>

				<Link href={props.to} className="transition hover:brightness-95">

					<Image
						src={props.image}
						alt={props.title}
						width={800}
						height={500}
						className="w-full border hover:border-gray-100"
					/>
				</Link>
			</div>

			<div className="mt-4 text-center">

				<Link href={props.to} className="hover:underline">{props.title}</Link>
			</div>
		</div>
	)
}

export default GalleryWebWorkLink;