import TextSection from "@/components/sections/TextSection";
import Head from "next/head";

function about() {
	return (
		<>
		
			<Head>
				<title>About - Forestic</title>
			</Head>

			<main>

				<TextSection
					image="/images/headers/desk.png"
					large
					title="About me"
					detail={`大阪で情報処理を学んでいる専門学生です。学校ではプログラミングやインフラ構築、チーム開発などを学んでいます。\n学校の授業以外でも自主的にWebアプリやモバイルアプリを作っています。一からシステムを作り上げるのはとても大変ですが、自分の作りたいものを作ることができた時はとても嬉しいです。\n\n2020年4月 ECCコンピュータ専門学校 高度情報処理研究学科に入学\n2024年3月 卒業予定`}
					className="mt-6"
				/>
			</main>
		</>
	);
}

export default about;