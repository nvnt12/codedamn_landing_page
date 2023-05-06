import { BiChevronDown } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
	return (
		<div className="flex items-center w-full sticky top-0 z-10 bg-gradient-to-t from-white/95 via-gray-100/95 to-white/95 bg-opacity-95 border-b border-b-gray-200">
			<div className="mx-4 my-2.5 justify-between flex items-center w-full">
				<Link className="flex items-center" href={'/'}>
					<Image
						src={'./logo.svg'}
						alt={'Codedamn Logo Image'}
						width={26}
						height={26}
						className="mr-1"
					/>
					<span className="text-xl font-semibold text-gray-800">codedamn</span>
				</Link>
				<div className="flex items-center">
					<Link
						className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600"
						href={''}
					>
						Learn
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600"
						href={''}
					>
						Practice
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600"
						href={''}
					>
						Company
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600"
						href={''}
					>
						Pricing
					</Link>
				</div>
				<div className="flex items-center">
					<Link
						href={'/'}
						className="text-sm font-semibold text-gray-500 mr-3 hover:text-gray-600"
					>
						Login
					</Link>
					<Link href={'/'}>
						<button
							className={
								' bg-indigo-600 hover:bg-indigo-700 py-2 px-2.5 text-white text-sm rounded-md font-semibold '
							}
						>
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
