interface Props {
	title?: string
	detail?: string

	children: JSX.Element | JSX.Element[]

	noDivider?: boolean
	large?: boolean
	detailCenter?: boolean
	twoColumns?: boolean

	className?: string
}

function GallerySection(props: Props) {

	return (
		<div className={`mx-auto w-full px-4 ${props.large ? "lg:width-lg lg:px-0" : "md:width-md md:px-0"} ${props.className}`}>

			<div className={props.noDivider ? "" : "pb-16 border-b"}>

				{props.title &&
					<h2 className="mb-4 text-center font-bold text-2xl">{props.title}</h2>
				}

				{props.detail &&
					<p className={`mb-6 text-gray-600 whitespace-pre-wrap ${props.detailCenter ? "text-center" : ""}`}>{props.detail}</p>
				}

				<div className={`grid ${props.twoColumns ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3"} justify-around gap-y-12 gap-x-8 lg:gap-x-16`}>
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default GallerySection