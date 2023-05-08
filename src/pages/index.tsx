import GalleryWebWorkLink from "@/components/galleryItems/GalleryWebWorkLink"
import GallerySection from "@/components/sections/GallerySection"
import TextSection from "@/components/sections/TextSection"
import Head from "next/head"
import fs from 'fs'
import matter from 'gray-matter'
import GalleryMobileWorkLink from "@/components/galleryItems/GalleryMobileWorkLink"
import Link from "next/link"
import Post from "@/entities/Post"

export const getStaticProps = () => {

	// 投稿ファイルのファイル名をすべて取得
	const fileNames = fs.readdirSync('src/posts')

	// mdファイルの内容を取得
	const workPosts = fileNames.map((fileName) => {

		// 拡張子無しのファイル名
		const slug = fileName.replace(/\.md$/, '')

		// ファイルの内容
		const fileContent = fs.readFileSync(`src/posts/${fileName}`, 'utf-8')

		// ファイルのFront MatterとContentを分離
		const { data, content } = matter(fileContent)

		return {
			slug: slug,
			frontMatter: data,
		}
	})

	// postsをwebとmobileに分ける
	const webWorkPosts: Post[] = workPosts.slice(0, 6)
	const mobileWorkPosts: Post[] = workPosts.slice(6, 12)
	
	return {
		props: {
			webWorkPosts: webWorkPosts,
			mobileWorkPosts: mobileWorkPosts
		},
	}
}



interface Props {
	webWorkPosts: Post[],
	mobileWorkPosts: Post[]
}

export default function Home(props: Props ) {

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

					{props.webWorkPosts.map((post: Post) => (

						<div key={post.slug}>

							<GalleryWebWorkLink
								image={post.frontMatter.thumbnail}
								title={post.frontMatter.title}
								to={`/works/${post.slug}`}
							/>
						</div>
					))}
				</GallerySection>

				<GallerySection title="Mobile" large className="mt-16" noDivider>

					{props.mobileWorkPosts.map((post: Post) => (

						<div key={post.slug}>

							<GalleryMobileWorkLink
								images={post.frontMatter.thumbnails}
								title={post.frontMatter.title}
								to={`/works/${post.slug}`}
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
