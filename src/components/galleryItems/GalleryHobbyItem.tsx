interface Props {
	image: string
	title?: string
}

function GalleryHobbyItem(props: Props) {

	return (
		<div>

			<img src={props.image} alt={props.title ?? "Hobby"} className="border" />

			<div className="mt-4 text-center ">
				<span className="text-gray-600">{props.title ?? ""}</span>
			</div>
		</div>
	)
}

export default GalleryHobbyItem