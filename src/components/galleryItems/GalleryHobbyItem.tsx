import Image from "next/image"

interface Props {
	image: string
	title?: string
}

function GalleryHobbyItem(props: Props) {

	return (
		<div>

			<Image
				src={props.image}
				alt="--"
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