import Link from "next/link"
import TextSection from "../components/sections/TextSection"
import Head from "next/head"

function NotFoundPage() {

	return (
		<>

			<Head>
				<title>Not found - Forestic</title>
			</Head>

			<main>
				<TextSection
					title="Page Not Found"
					detail="ページが見つかりませんでした。"
					detailCenter
					noDivider
					className="mt-6"
				/>

				<div className="mt-20 text-center">
					<Link href="/" className="black-button">トップに戻る</Link>
				</div>
			</main>
		</>
	)
}

export default NotFoundPage