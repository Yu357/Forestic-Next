import WebWorkLink from "@/components/links/WebWorkLink"
import GallerySection from "@/components/sections/GallerySection"
import TextSection from "@/components/sections/TextSection"
import Head from "next/head"

export default function Home() {
	return (

		<>

			<Head>
				<title>Forestic</title>
			</Head>

			<main>

				<TextSection
					image="/images/headers/development.png"
					alt="パソコン"
					large
					title="つくってみたいものをつくる"
					detail={`専門学校に入学してからそろそろ3年。自分が作ってみたいものを自由に作って暮らしていたら、いつの間にかたくさんの作品ができていました。\nせっかくなので、今まで趣味で作ってきた作品をまとめてみました。ぜひご覧ください!`}
					className="mt-6"
				/>

				<GallerySection title="Web" large className="mt-16">

					<WebWorkLink image="/images/thumbnails/simple-typing.png" title="Simple Typing" to="/works/simple-typing" />
				</GallerySection>
			</main>
		</>
	)
}
