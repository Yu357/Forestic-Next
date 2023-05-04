import Link from "next/link";
import Image from "next/image";

interface Props {
	title: string
	images: string[]
	to: string
}

function GalleryMobileWorkLink(props: Props) {

	return (
		<div>

			<div className="flex justify-between gap-4">

				{props.images.map((image, index) => (

					<Link key={index} href={props.to} className="transition hover:brightness-95">

						<Image
							src={image}
							alt={props.title}
							width={600}
							height={1300}
							className="w-full border border-gray-300 hover:border-gray-200 rounded-lg"
						/>
					</Link>
				))}
			</div>

			<div className="mt-4 text-center">

				<Link href={props.to} className="hover:underline">{props.title}</Link>
			</div>
		</div>
	)
}

export default GalleryMobileWorkLink