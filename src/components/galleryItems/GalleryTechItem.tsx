interface Props {
	title: string
	children: JSX.Element
}

function GalleryTechItem(props: Props) {

	return (
		<div>

			<div className="text-center text-9xl">
				{props.children}
			</div>

			<div className="mt-4 text-center ">
				<span className="text-gray-600">{props.title}</span>
			</div>
		</div>
	)
}

export default GalleryTechItem