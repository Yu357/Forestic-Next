import WebWorkLink from "@/components/links/WebWorkLink"
import GallerySection from "@/components/sections/GallerySection"
import TextSection from "@/components/sections/TextSection"
import Head from "next/head"
import fs from 'fs'
import matter from 'gray-matter'
import Link from "next/link"
import Image from "next/image"

export const getStaticProps = () => {

	// posts内のファイルをすべて取得
	const files = fs.readdirSync('src/posts')

	// ファイルの内容を取得
	const posts = files.map((fileName) => {

		// ファイル名
		const fileSlug = fileName.replace(/\.md$/, '')

		// ファイルの内容
		const fileContent = fs.readFileSync(`src/posts/${fileName}`, 'utf-8')

		// ファイルのFront MatterとContentを分離
		const { data, content } = matter(fileContent)

		return {
			frontMatter: data,
			fileSlug,
		}
	})

	return {
		props: {
			posts,
		},
	}
}

export default function Home({ posts }: any) {
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

					{posts.map((post: any) => (

						<div key={post.fileSlug}>

							<WebWorkLink
								image={post.frontMatter.thumbnail}
								title={post.frontMatter.name}
								to={`/works/${post.fileSlug}`}
							/>
						</div>
					))}
				</GallerySection>
			</main>
		</>
	)
}
