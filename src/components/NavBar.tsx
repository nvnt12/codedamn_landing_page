import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'

export default function NavBar() {
	return (
		<div className="flex items-center w-full sticky top-0 z-40 bg-gradient-to-t from-white/95 via-gray-100/95 to-white/95 bg-opacity-95 border-b border-b-gray-200">
			<div className="mx-4 my-2.5 flex justify-between items-center w-full">
				<Link className="flex items-center" href={'/'}>
					<svg
						className="mr-1"
						height={28}
						width={29}
						viewBox="0 0 53 58"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask
							id="mask0_1275_84"
							maskUnits="userSpaceOnUse"
							x="0"
							y="29"
							width="53"
							height="29"
						>
							<rect y="29" width="53" height="29" fill="#D9D9D9"></rect>
						</mask>
						<g mask="url(#mask0_1275_84)">
							<path
								d="M44 42.5L35.0351 37.1669C31.0351 42.6669 25 42 22 39.5C18.5003 36.7534 15.7595 25.3619 22 19C24.9828 15.9591 31.3219 14.982 35.0351 20.5L43.5 15C41.6667 11.8333 35.5351 6.00174 27.5351 6.00174C20.3685 5.88981 6.20348 10.5673 7.03507 30.166C7.83807 49.0909 21.0115 52.5116 27.5351 52.5C35.5351 52.4858 42.1667 45.6666 44 42.5Z"
								fill="#EA3F40"
							></path>
						</g>
						<mask
							id="mask1_1275_84"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="53"
							height="29"
						>
							<rect
								width="53"
								height="29"
								transform="matrix(1 0 0 -1 0 29)"
								fill="#D9D9D9"
							></rect>
						</mask>
						<g mask="url(#mask1_1275_84)">
							<path
								d="M44 15.5L35.0351 20.8331C31.0351 15.3331 25 16 22 18.5C18.5003 21.2466 15.7595 32.6381 22 39C24.9828 42.0409 31.3219 43.018 35.0351 37.5L43.5 43C41.6667 46.1667 35.5351 51.9983 27.5351 51.9983C20.3685 52.1102 6.20348 47.4327 7.03507 27.834C7.83807 8.90914 21.0115 5.48845 27.5351 5.5C35.5351 5.51417 42.1667 12.3334 44 15.5Z"
								fill="#EA3F40"
							></path>
						</g>
					</svg>
					<span className="hidden sm:block text-xl font-semibold text-gray-800">
						codedamn
					</span>
				</Link>
				<div className="hidden items-center md:flex">
					<Link
						className="text-sm font-semibold text-gray-500 mx-3.5 flex items-center hover:text-gray-600"
						href={''}
					>
						Learn
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-3.5 flex items-center hover:text-gray-600"
						href={''}
					>
						Practice
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-3.5 flex items-center hover:text-gray-600"
						href={''}
					>
						Company
						<BiChevronDown className="h-5 w-5" />
					</Link>
					<Link
						className="text-sm font-semibold text-gray-500 mx-3.5 flex items-center hover:text-gray-600"
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
