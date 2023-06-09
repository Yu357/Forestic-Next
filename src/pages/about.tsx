import GalleryTechItem from "@/components/galleryItems/GalleryTechItem";
import GallerySection from "@/components/sections/GallerySection";
import TextSection from "@/components/sections/TextSection";
import Head from "next/head";
import "devicon"
import GalleryHobbyItem from "@/components/galleryItems/GalleryHobbyItem";

function about() {
	return (
		<>

			<Head>
				<title>About - Forestic</title>
			</Head>

			<main>

				<TextSection
					imageSrc="/images/headers/desk.png"
					imageAlt="机の上のパソコン"
					large
					title="About me"
					detail={`大阪で情報処理を学んでいる専門学生です。学校ではプログラミングやインフラ構築、チーム開発などを学んでいます。\n学校の授業以外でも自主的にWebアプリやモバイルアプリを作っています。一からシステムを作り上げるのはとても大変ですが、自分の作りたいものを作ることができた時はとても嬉しいです。\n\n2020年4月 ECCコンピュータ専門学校 高度情報処理研究学科に入学\n2024年3月 卒業予定`}
					className="mt-6"
				/>

				<GallerySection
					title="Skills"
					detail="開発経験のあるプログラミング言語やフレームワーク、その他システム開発関連の技術です"
					detailCenter
					className="mt-16"
				>

					<GalleryTechItem title='HTML'><i className="devicon-html5-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='CSS'><i className="devicon-css3-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='Tailwind CSS'><i className="devicon-tailwindcss-original-wordmark colored" /></GalleryTechItem>

					<GalleryTechItem title='PHP'><i className="devicon-php-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='Laravel'><i className="devicon-laravel-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='MySQL'><i className="devicon-mysql-plain-wordmark colored" /></GalleryTechItem>

					<GalleryTechItem title='JavaScript'><i className="devicon-javascript-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='TypeScript'><i className="devicon-typescript-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='React'><i className="devicon-react-original colored" /></GalleryTechItem>

					<GalleryTechItem title='Swift'><i className="devicon-swift-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='Kotlin'><i className="devicon-kotlin-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='Flutter'><i className="devicon-flutter-plain colored" /></GalleryTechItem>

					<GalleryTechItem title='Firebase'><i className="devicon-firebase-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='AWS'><i className="devicon-amazonwebservices-plain-wordmark colored" /></GalleryTechItem>
					<GalleryTechItem title='Node.js'><i className="devicon-nodejs-plain-wordmark colored" /></GalleryTechItem>

					<GalleryTechItem title='Git'><i className="devicon-git-plain colored" /></GalleryTechItem>
					<GalleryTechItem title='Docker'><i className="devicon-docker-plain-wordmark colored" /></GalleryTechItem>
				</GallerySection>

				<GallerySection
					title='趣味'
					detail={`趣味は映画鑑賞、ビデオゲーム、ジョギング、アプリ開発、そしてiPadでイラストを描くことです。`}
					detailCenter
					noDivider
					twoColumns
					className='mt-16'
				>

					<GalleryHobbyItem imageSrc="/images/hobbys/movie.png" imageAlt="すずめの戸締まりのパンフレット" title="最近観た映画は「すずめの戸締まり」です" />
					<GalleryHobbyItem imageSrc="/images/hobbys/genshin.png" imageAlt="原神のスクリーンショット" title="最近ハマっているゲーム「原神」" />

					<GalleryHobbyItem imageSrc="/images/hobbys/osaka-castle.png" imageAlt="大阪城" title="ジョギングでは大阪城が見えるコースを走っています" />
					<GalleryHobbyItem imageSrc="/images/hobbys/illustration.png" imageAlt="iPadのお絵描きアプリのスクリーンショット" title="iPadで好きなキャラクターをお絵描き" />
				</GallerySection>

				<div className="mt-20 text-center">
					
					<a href="https://github.com/Yu357" target="blank" className="black-button">GitHubプロフィールを見る</a>
				</div>
			</main>
		</>
	);
}

export default about;