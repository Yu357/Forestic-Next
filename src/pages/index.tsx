import GalleryWebWorkLink from "@/components/galleryItems/GalleryWebWorkLink"
import GallerySection from "@/components/sections/GallerySection"
import TextSection from "@/components/sections/TextSection"
import Head from "next/head"
import fs from 'fs'
import matter from 'gray-matter'
import GalleryMobileWorkLink from "@/components/galleryItems/GalleryMobileWorkLink"
import Link from "next/link"

export const getStaticProps = () => {

	// posts内のファイルをすべて取得
	const webWorkMdFiles = fs.readdirSync('src/posts/web-works')
	const mobileWorkMdFiles = fs.readdirSync('src/posts/mobile-works')

	// Web作品のmdファイルの内容を取得
	const webPosts = webWorkMdFiles.map((fileName) => {

		// ファイル名
		const fileSlug = fileName.replace(/\.md$/, '')

		// ファイルの内容
		const fileContent = fs.readFileSync(`src/posts/web-works/${fileName}`, 'utf-8')

		// ファイルのFront MatterとContentを分離
		const { data, content } = matter(fileContent)

		return {
			frontMatter: data,
			fileSlug,
		}
	})

	// モバイル作品のmdファイルの内容を取得
	const mobilePosts = mobileWorkMdFiles.map((fileName) => {

		// ファイル名
		const fileSlug = fileName.replace(/\.md$/, '')

		// ファイルの内容
		const fileContent = fs.readFileSync(`src/posts/mobile-works/${fileName}`, 'utf-8')

		// ファイルのFront MatterとContentを分離
		const { data, content } = matter(fileContent)

		return {
			frontMatter: data,
			fileSlug,
		}
	})

	return {
		props: {
			webPosts: webPosts,
			mobilePosts: mobilePosts
		},
	}
}

export default function Home({ webPosts, mobilePosts }: any) {
	return (

		<>

			<Head>
				<title>Forestic</title>
			</Head>

			<main>

				<TextSection
					imageSrc="/images/headers/development.png"
					imageAlt="パソコン"
					large
					title="つくってみたいものをつくる"
					detail={`専門学校に入学してからそろそろ3年。自分が作ってみたいものを自由に作って暮らしていたら、いつの間にかたくさんの作品ができていました。\nせっかくなので、今まで趣味で作ってきた作品をまとめてみました。ぜひご覧ください!`}
					className="mt-6"
				/>

				<GallerySection title="Web" large className="mt-16">

					{webPosts.map((post: any) => (

						<div key={post.fileSlug}>

							<GalleryWebWorkLink
								image={post.frontMatter.thumbnail}
								title={post.frontMatter.title}
								to={`/works/${post.fileSlug}`}
							/>
						</div>
					))}
				</GallerySection>

				<GallerySection title="Mobile" large className="mt-16" noDivider>

					{mobilePosts.map((post: any) => (

						<div key={post.fileSlug}>

							<GalleryMobileWorkLink
								images={post.frontMatter.thumbnails}
								title={post.frontMatter.title}
								to={`/works/${post.fileSlug}`}
							/>
						</div>
					))}
				</GallerySection>

				<div className="mt-20 text-center">
					<Link href="/about" className="black-button">自己紹介を見る</Link>
				</div>
			</main>
		</>
	)
}
