import Link from "next/link"

function Footer(props: { className?: string }) {

	return (
		<footer className={`mt-24 py-14 bg-gray-900 ${props.className}`}>

			<div className="mx-auto w-full px-4 lg:width-lg lg:px-0">

				<div className="flex flex-wrap gap-y-8 md:text-left">

					<div className="w-full md:w-1/2 pr-3">

						<Link href='/' className='text-4xl text-white font-light'>Forestic</Link>

						<p className="mt-1 text-gray-400 whitespace-pre-wrap">{`ものづくりが好きな専門学生のポートフォリオサイト\n学生時代に制作したWebアプリやモバイルアプリを紹介しています`}</p>
					</div>

					<div className="w-1/2 md:w-1/4">

						<h3 className="text-white text-xl">Pages</h3>

						<ul className="text-gray-400">

							<li>
								<Link href="/" className="hover:underline">Top</Link>
							</li>

							<li>
								<Link href="/about" className="hover:underline">About</Link>
							</li>
						</ul>
					</div>

					<div className="w-1/2 md:w-1/4">

						<h3 className="text-white text-xl">Links</h3>

						<ul className="text-gray-400">

							<li>
								<a href="https://github.com/Yu357" target="blank" className="hover:underline">GitHub</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 flex gap-4 justify-center">

					<span className="text-gray-400">Copyright 2022 Yu357.</span>
					<a href="https://github.com/Yu357/Forestic" target="blank" className="text-gray-400 hover:underline">Source</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer