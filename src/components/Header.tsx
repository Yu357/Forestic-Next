import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai"

function Header() {

	const router = useRouter()

	return (
		<header className='w-full mx-auto px-4 lg:width-lg lg:px-0'>

			<div className='py-4 flex justify-between items-center'>

				<Link href='/' className='text-4xl font-light'>Forestic</Link>

				<ul className='flex gap-6 items-center'>

					<li>
						<Link href="/" className={router.pathname == "/" ? "hover:text-black" : "text-gray-500 hover:text-black"}>Top</Link>
					</li>

					<li>
						<Link href="/about" className={router.pathname == "/about" ? "hover:text-black" : "text-gray-500 hover:text-black"}>About</Link>
					</li>

					<li>
						<a href="https://github.com/Yu357" target="blank">
							<AiFillGithub className='text-xl text-gray-500 hover:text-black transition' />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;