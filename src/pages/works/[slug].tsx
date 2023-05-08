import Head from "next/head"
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from "next/image"
import TextSection from "@/components/sections/TextSection"

export async function getStaticPaths() {

	// mdファイル一覧を取得
	const files = fs.readdirSync('src/posts')

	// 記事ページのpath情報を作成
	const paths = files.map((fileName) => ({

		params: {
			slug: fileName.replace(/\.md$/, ''),
		},
	}))

	// getStaticPropsに渡す
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: any) {

	// 表示する記事のmdファイルを取得
	const fileSlug = params.slug
	const file = fs.readFileSync(`src/posts/${fileSlug}.md`, 'utf-8')

	// ファイルの内容をfrontMatter部分とcontent部分に分ける
	const { data, content } = matter(file);

	// PostPageに渡す
	return {
		props: {
			frontMatter: data,
			content
		}
	}
}



interface Props {
	frontMatter: {
		[key: string]: any;
	},
	content: string
}

function WorkPage(props: Props) {

	return (

		<>

			<Head>
				<title>Hello Next</title>
			</Head>

			<main className="mx-auto w-full lg:width-lg px-4 lg:px-0">

				<TextSection imageSrc={props.frontMatter.headerImage} imageAlt={`${props.frontMatter.title}のスクリーンショット`} large className="mt-6" noDivider>

					<div dangerouslySetInnerHTML={{ __html: marked(props.content) }} className="markdown mt-4"></div>
				</TextSection>
			</main>
		</>
	)
}

export default WorkPage;