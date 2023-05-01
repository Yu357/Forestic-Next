import Image from "next/image"

interface Props {
	image?: string
	alt?: string

	title?: string
	detail?: string

	large?: boolean
	detailCenter?: boolean
	noDivider?: boolean

	className?: string

	children?: JSX.Element | JSX.Element[]
}

function TextSection(props: Props) {

	return (
		<div className={props.className}>

			{props.image &&

				<div className={`mx-auto w-full ${props.large ? "lg:width-lg" : "md:width-md"}`}>

					<Image
						src={props.image}
						width={1200}
						height={500}
						alt={props.alt ?? "-"}
					/>
				</div>
			}

			<div className={`mx-auto width-full px-4 md:width-md md:px-0 ${props.image ? "mt-4" : ""}`}>

				<div className={props.noDivider ? "" : "pb-16 border-b"}>

					{props.title &&

						<h2 className="text-center font-bold text-2xl">{props.title}</h2>
					}

					{props.detail &&

						<p className={`text-gray-600 mt-4 whitespace-pre-wrap leading-7 ${props.detailCenter ? "text-center" : ""}`}>{props.detail}</p>
					}

					{props.children &&
						<div className="mt-4">
							{props.children}
						</div>
					}
				</div>
			</div>
		</div >
	)
}

export default TextSection