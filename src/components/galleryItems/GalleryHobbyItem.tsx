import Image from "next/image"

interface Props {
	imageSrc: string
	imageAlt: string
	title?: string
}

function GalleryHobbyItem(props: Props) {

	return (
		<div>

			<Image
				src={props.imageSrc}
				alt={props.imageAlt}
				width={900}
				height={600}
				className="border"
			/>

			<div className="mt-4 text-center ">
				<span className="text-gray-600">{props.title ?? ""}</span>
			</div>
		</div>
	)
}

export default GalleryHobbyItem