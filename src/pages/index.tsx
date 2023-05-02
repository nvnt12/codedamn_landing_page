import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronDown } from 'react-icons/bi'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Learn to code for free - Personal AI powered tutor 100+ interactive courses
				</title>
				<meta
					name="description"
					content="Sign into your codedamn account here. Learn about today's job skills - frontend, backend, fullstack, mobile app development and practice online with thousands of developers. codedamn is the best way to learn to code online. Start with HTML, CSS, JavaScript, SQL, Python, Data Science, and more"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<div className="w-full h-full">
				<div className="flex items-center w-full sticky top-0 z-20 bg-gradient-to-b	from-white via-white to-transparent">
					<div className="mx-4 my-3 justify-between flex items-center w-full">
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
							<span className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600">
								Learn
								<BiChevronDown className="h-5 w-5" />
							</span>
							<span className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600">
								Practice
								<BiChevronDown className="h-5 w-5" />
							</span>
							<span className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600">
								Company
								<BiChevronDown className="h-5 w-5" />
							</span>
							<span className="text-sm font-semibold text-gray-500 mx-4 flex items-center hover:text-gray-600">
								Pricing
							</span>
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
				<div className="relative">
					<div className="absolute top-96 mt-20 rotate-45 rounded-full w-4/12 h-4 bg-indigo-300 blur-3xl"></div>
					<div className="absolute top-96 rotate-45 -left-1 rounded-full w-6/12 h-5 bg-fuchsia-400 blur-3xl"></div>
					<div className="absolute top-96 rotate-45 left-32 rounded-full w-5/6 h-4 bg-sky-300 blur-2xl"></div>
					<div className="absolute top-60 rotate-45 right-0 rounded-full w-2/6 h-8 bg-indigo-300 blur-3xl"></div>
				</div>

				<div className="relative flex justify-center">
					<div className="absolute w-[720px] h-[720px] border border-gray-300 rounded-full top-4"></div>
					<div className="absolute w-[950px] h-[950px] border border-gray-300 rounded-full -top-24"></div>
					<div className="absolute w-[1180px] h-[1180px] border border-gray-300 rounded-full -top-[220px]"></div>
				</div>

				<div className="relative w-full h-full z-10">
					<div className="absolute w-6/12 h-3/6 text-center top-48 left-1/4">
						<div className="flex-col h-full">
							<h1 className="font-bold text-[58px] leading-none tracking-tight text-gray-800 mt-12 mb-10">
								Change the world
								<br /> with codedamn
							</h1>
							<h2 className="text-xl font-medium text-gray-500 mb-16 leading-relaxed">
								Learn coding with your personal AI powered tutor and 100+
								interactive courses. Become job ready 10x faster.
							</h2>
							<button className="text-lg font-semibold text-white bg-indigo-600 rounded-lg py-3.5 px-7 mb-12">
								Begin your coding journey →
							</button>
						</div>
					</div>
				</div>

				<div className="w-full text-center">
					<p className="font-bold text-sm uppercase tracking-widest text-gray-600 p-4">
						Powering over 252K developers to land their dream job
					</p>
					<div></div>
				</div>
			</div>
		</>
	)
}
