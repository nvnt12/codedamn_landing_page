import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { BsFillStarFill, BsFillFileEarmarkCodeFill, BsSearch } from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { MdOutlineComment } from 'react-icons/md'
import { SlSettings } from 'react-icons/sl'
import {
	GoogleLogo,
	AppleLogo,
	AdobeLogo,
	AmazonLogo,
	NetflixLogo,
	NotionLogo,
	MetaLogo,
	MicrosoftLogo
} from '../components/CompanyLogos'

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
				<link
					rel="icon"
					href="https://res.cloudinary.com/dum8ltv4o/image/upload/v1683723104/logo_zypdb5.svg"
				/>
			</Head>

			<NavBar />
			<main className="w-full flex-grow">
				<Image
					src={'/bg-img.png'}
					alt="Background Image"
					width={'2610'}
					height={'1305'}
					className="absolute -z-10 -top-[1rem] left-1/2 overflow-y-clip -ml-[40rem] w-[163.125rem] max-w-screen opacity-40 sm:-ml-[67.5rem]"
				/>
				<section className="mt-14">
					<div className="mx-auto h-[82vw] w-full max-w-screen-2xl overflow-hidden px-6 pt-12 sm:h-[min(70vw,64rem)] sm:overflow-visible sm:pt-16 md:px-8 lg:px-10">
						<div className="relative z-10 aspect-w-1 aspect-h-1 w-full h-full min-w-[200vw] -translate-x-[55vw] sm:min-w-0 sm:-translate-y-[24%] sm:translate-x-0">
							<div className="relative h-[88vw] w-full">
								<div className="absolute inset-0 h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[10%] sm:[mask-image:linear-gradient(transparent_15%,white_25%,white_85%,transparent_95%)]">
									<div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[12.25%]">
										<div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75"></div>
									</div>
								</div>
								<svg
									viewBox="0 0 152 162"
									className="absolute left-[1.85%] top-[50.5%] hidden w-[11.75%] -rotate-[31deg] stroke-gray-300 sm:block"
								>
									<path
										fill="none"
										d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<svg
									viewBox="0 0 94 177"
									className="absolute left-[38%] top-[10.05%] w-[6.85%] rotate-[100deg] -scale-x-100 stroke-gray-300 sm:left-[87.9%] sm:top-[60%] sm:w-[7%] sm:-rotate-1 sm:scale-x-100"
								>
									<path
										fill="none"
										d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<defs>
										<linearGradient id="LearnSvgGradient">
											<stop offset="5%" stopColor="#4f46e5"></stop>
											<stop offset="95%" stopColor="#c084fc"></stop>
										</linearGradient>
										<linearGradient id="ApplySvgGradient">
											<stop offset="5%" stopColor="#0ea5e9"></stop>
											<stop offset="95%" stopColor="#22d3ee"></stop>
										</linearGradient>
										<linearGradient id="GrowSvgGradient">
											<stop offset="5%" stopColor="#65a30d"></stop>
											<stop offset="95%" stopColor="#84cc16"></stop>
										</linearGradient>
										<linearGradient id="AccentSvgGradient">
											<stop offset="10%" stopColor="#fde047"></stop>
											<stop offset="90%" stopColor="#bef264"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="absolute inset-0 w-full h-[82vw]">
								<div className="relative font-mono w-fit h-fit p-4 text-left bg-white rounded-lg border border-gray-100 shadow shadow-gray-200 top-[10.5vw] left-[16.5vw]">
									<div className="absolute -top-[12px] left-[158px] w-fit h-fit">
										<svg
											viewBox="0 0 28 28"
											className=" w-[38px] h-[38px] bg-white p-[8%] rounded-full border border-gray-100 shadow shadow-gray-200"
										>
											<path d="M14 .7a13.3 13.3 0 1 0 0 26.6A13.3 13.3 0 0 0 14 .7ZM9.4 16c.4.3.4 1 0 1.4a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3l-2.7-2.7a1 1 0 0 1 0-1.4L8 10.6a1 1 0 0 1 1.4 0c.4.4.4 1 0 1.4l-2 2 2 2Zm6.9-4.7-2.7 6.2a1 1 0 0 1-1.3.5 1 1 0 0 1-.5-1.3l2.6-6.2a1 1 0 0 1 1.3-.5c.5.2.8.8.6 1.3Zm6.4 3.4L20 17.4a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.4l2-2-2-2a1 1 0 0 1 0-1.4 1 1 0 0 1 1.4 0l2.7 2.7c.4.4.4 1 0 1.4Z"></path>
										</svg>
									</div>

									<div className="flex w-full ">
										<div className="w-[6px] h-[6px] rounded mr-1.5 -full bg-red-500 shadow shadow-red-500"></div>
										<div className="w-[6px] h-[6px] rounded mr-1.5 -full bg-amber-400 shadow shadow-amber-400"></div>
										<div className="w-[6px] h-[6px] rounded mr-1.5 -full bg-green-500 shadow shadow-green-500"></div>
									</div>
									<div className="mt-4">
										<p className="text-gray-500 font-semibold tracking-tight mt-1 text-[10px]">
											<span className="font-bold text-[#0ea4e9f4]">
												&lt;h1&gt;
											</span>
											&nbsp;Learn programming&nbsp;
											<span className="font-bold text-[#0ea4e9f4]">
												&lt;&#47;h1&gt;
											</span>
										</p>
										<p className="text-gray-500 font-semibold tracking-tight mt-1 text-[10px]">
											<span className="font-bold text-[#0ea4e9f4]">
												&lt;em&gt;
											</span>
											&nbsp;with AI support&nbsp;
											<span className="font-bold text-[#0ea4e9f4]">
												&lt;&#47;em&gt;
											</span>
										</p>
									</div>
								</div>

								<div className="relative w-48 h-fit top-[46.5vw] left-[65%]">
									<Image
										src={'/pp1.png'}
										alt={''}
										width={45}
										height={45}
										className="rounded-full border border-white"
									/>
									<div className="absolute w-fit h-fit px-2.5 pt-2.5 pb-2 text-left bg-white/90 rounded-md border border-gray-100 shadow shadow-gray-200 top-[34px] left-[23px]">
										<div className="flex w-full ">
											<BsFillStarFill className="w-[11px] h-[11px] fill-amber-400 mr-0.5" />
											<BsFillStarFill className="w-[11px] h-[11px] fill-amber-400 mr-0.5" />
											<BsFillStarFill className="w-[11px] h-[11px] fill-amber-400 mr-0.5" />
											<BsFillStarFill className="w-[11px] h-[11px] fill-amber-400 mr-0.5" />
											<BsFillStarFill className="w-[11px] h-[11px] fill-amber-400 mr-0.5" />
										</div>
										<div className="mt-1.5">
											<p className="text-gray-500 font-bold tracking-tight mt-1.5 text-[10px]">
												&ldquo;Great platform for learning to
												<br /> code.&rdquo;
											</p>
										</div>
									</div>
								</div>

								<div className="relative w-[200px] h-fit p-5 text-left bg-white rounded-lg border border-gray-100 shadow shadow-gray-200 top-[0vw] left-[79%]">
									<svg
										viewBox="0 0 29 18"
										className="h-5 w-5 rounded bg-black p-[3.5%] md:h-6 md:w-6 min-[960px]:h-8 min-[960px]:w-8 lg:rounded-md xl:h-10 xl:w-10"
									>
										<path
											fill="url(#AccentSvgGradient)"
											d="M7.3 6.8C8.2 3 10.5 1 14.3 1c5.6-.1 6.4 4 9.2 4.7 1.9.4 3.5-.3 4.9-2.2-.9 3.8-3.2 5.7-7 5.8-5.6.1-6.4-4.1-9.2-4.7-1.9-.5-3.5.3-4.9 2.2ZM.5 15.4c.9-3.8 3.2-5.7 6.9-5.8 5.6-.1 6.4 4 9.2 4.7 2 .4 3.6-.3 5-2.2-1 3.8-3.2 5.7-7 5.8-5.6 0-6.4-4.1-9.2-4.8-2-.4-3.5.4-4.9 2.3Z"
										></path>
									</svg>
									<div className="mt-4">
										<p className="text-gray-700 font-bold tracking-[-0.015rem] mt-1 text-[13px]">
											Apply as you learn
										</p>
										<p className="text-gray-400 font-semibold text-[10px]">
											without leaving your browser
										</p>
									</div>
									<div className="relative mt-2.5">
										<div className="w-full h-2 rounded -full bg-sky-100"></div>
										<div className="absolute w-[70%] h-2 rounded -full bg-gradient-to-r from-sky-500 to-cyan-400 top-0"></div>
									</div>
								</div>

								<div className="absolute top-[30vw] left-[76.5%]">
									<svg
										fill="none"
										viewBox="0 0 50 51"
										className="w-[35px] h-[36px] p-[13%] bg-black rounded-lg"
									>
										<path
											fill="url(#AccentSvgGradient)"
											d="M23.4 0h-.8a25 25 0 0 0-18 10.4 24.8 24.8 0 0 0-4.4 11C0 22.7 0 23 0 25a25.1 25.1 0 0 0 36.9 22s-2-2.5-4.1-5.5l-4-5.4-5-7.4-5-7.4a399.9 399.9 0 0 0-.2 14.8c-.1.2-.2.3-.5.4l-1 .1h-.8l-.3-.1a1 1 0 0 1-.3-.4v-20c.2 0 .3-.2.5-.3h1c1 0 1.2 0 1.5.2a924.8 924.8 0 0 1 15.9 24l4 6h.2c1.7-1.2 3.6-2.9 5-4.6a24.9 24.9 0 0 0 6-12.8c.2-1.3.2-1.7.2-3.6 0-1.9 0-2.3-.2-3.6A25.1 25.1 0 0 0 23.4 0zm10.2 15.1a1 1 0 0 1 .5.6v17.8L32.6 31 31 28.7V15.8a1 1 0 0 1 .5-.7h2.1z"
										></path>
									</svg>
								</div>

								<div className="absolute top-[40vw] left-[22%]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 64 64"
										className="w-[35px] h-[36px] bg-black rounded-lg"
									>
										<rect width="64" height="64" fill="black" rx="15"></rect>
										<path
											fill="url(#AccentSvgGradient)"
											d="M32 54c-.6 0-1.2-.2-1.7-.5L25 50.4c-.8-.5-.4-.6-.1-.7l2.4-1.1a.4.4 0 01.4 0l4.2 2.4a.5.5 0 00.5 0l16-9.3a.5.5 0 00.3-.4V22.7a.5.5 0 00-.2-.5L32.2 13a.5.5 0 00-.4 0l-16.2 9.3a.5.5 0 00-.2.5v18.6a.5.5 0 00.2.4l4.5 2.6c2.4 1.2 3.8-.2 3.8-1.7V24.3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v18.3c0 3.2-1.7 5-4.8 5-1.3.1-2.6-.2-3.7-1l-4.2-2.4a3.4 3.4 0 01-1.7-2.9V22.7a3.4 3.4 0 011.7-3l16.1-9.3a3.5 3.5 0 013.4 0l16.1 9.3a3.4 3.4 0 011.7 3v18.6a3.4 3.4 0 01-1.7 3l-16.1 9.2c-.5.3-1.1.5-1.7.5z"
										></path>
										<path
											fill="url(#AccentSvgGradient)"
											d="M29 35a.5.5 0 01.4-.4h2.1a.5.5 0 01.5.4c.3 2.1 1.2 3.2 5.5 3.2 3.4 0 4.8-.8 4.8-2.6 0-1-.4-1.8-5.7-2.3-4.4-.5-7.1-1.4-7.1-5 0-3.2 2.7-5.1 7.3-5.1 5.2 0 7.8 1.7 8 5.6a.5.5 0 01-.4.5h-2a.5.5 0 01-.5-.4c-.5-2.2-1.8-3-5-3-3.8 0-4.2 1.4-4.2 2.3 0 1.2.5 1.6 5.5 2.2 5 .7 7.3 1.6 7.3 5 0 3.6-3 5.6-8 5.6-7 0-8.6-3.2-8.6-6z"
										></path>
									</svg>
								</div>

								<div className="absolute top-[59vw] left-[46%]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 64 64"
										className="w-[36px] h-[35px] bg-black rounded-lg"
									>
										<rect width="64" height="64" fill="black" rx="15"></rect>
										<path
											fill="#bef264"
											d="m32 10-.3 1v29l.3.4 13.5-8L32 10Z"
										></path>
										<path fill="#fde047" d="M32 10 18.5 32.4l13.5 8V10Z"></path>
										<path
											fill="#bef264"
											d="m32 43-.2.1v10.4l.2.5 13.5-19L32 43Z"
										></path>
										<path fill="#fde047" d="M32 54V43l-13.5-8L32 54Z"></path>
										<path fill="#bef264" d="m32 40.4 13.5-8L32 26.3v14Z"></path>
										<path
											fill="#fde047"
											d="m18.5 32.4 13.5 8V26.3l-13.5 6.1Z"
										></path>
									</svg>
								</div>

								<div className="absolute top-[27vw] left-[11%]">
									<svg
										fill="none"
										className="w-12 h-12 p-1 bg-black rounded-lg"
										viewBox="0 0 50 50"
									>
										<path
											fill="url(#AccentSvgGradient)"
											d="M25.7 29.2a4.7 4.7 0 1 0-2.2-9 4.7 4.7 0 0 0 2.2 9Z"
										></path>
										<path
											stroke="url(#AccentSvgGradient)"
											d="M39 14.4V14v.5c2.7.3 5 .9 6.6 1.7 1.7.8 2.6 1.8 2.8 2.8.3 1-.1 2.5-1.3 4-1.2 1.6-3 3.3-5.6 4.8a52 52 0 0 1-14.8 5.8c-5.9 1.4-11.6 2-16 1.7-2.9-.3-5.3-1-7-1.8-1.7-.9-2.7-2-2.9-3-.2-1 .1-2.3 1.2-3.8 1-1.4 2.7-3 5-4.4a54.6 54.6 0 0 1 31.9-7.8Z"
										></path>
										<path
											stroke="url(#AccentSvgGradient)"
											d="M13.6 38.7A52 52 0 0 1 16 22.4v-.2c1.8-6 4.3-11.3 7-15 1.6-2.2 3.2-4 4.8-5 1.5-1 2.8-1.3 3.8-1 1 .3 2 1.4 2.8 3.2.8 1.8 1.3 4.2 1.4 7.2a52 52 0 0 1-2.4 15.7c-1.7 5.8-4 11-6.6 14.8l.4.2-.4-.2c-1.7 2.3-3.4 4-5 5s-3 1.4-4 1.1c-1-.3-2-1.2-2.7-2.9a21 21 0 0 1-1.4-6.6h-.5.5Z"
										></path>
										<path
											stroke="url(#AccentSvgGradient)"
											d="M18 31a51.9 51.9 0 0 1-9.4-13.5 19.6 19.6 0 0 1-2-6.6C6.7 9 7 7.7 7.8 7c.8-.7 2.2-1 4.2-.8 1.9.2 4.3 1 6.9 2.4 3.9 2 8.3 5.6 12.4 9.9 4.2 4.4 7.6 9 9.5 13a20 20 0 0 1 1.9 7c0 1.9-.3 3.3-1.1 4-.7.7-2 1-3.9.9-1.7-.2-4-1-6.4-2.2l-.2.5.2-.5c-4-2-8.8-5.7-13.1-10.3Z"
										></path>
									</svg>
									<div className="absolute top-9 left-9 bg-gradient-to-r from-sky-500 to-cyan-400 px-1.5 py-0.5 rounded flex justify-center items-center">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth="0"
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
											className="fill-white h-2.5 w-2.5 mr-1"
										>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
										</svg>
										<p className="text-[10px] text-white font-semibold">
											Completed
										</p>
									</div>
								</div>

								<div className="absolute w-fit flex items-center h-fit p-4 text-left bg-white rounded-[8px] border border-gray-100 shadow shadow-gray-200 top-[54vw] left-[8%]">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 16 16"
										className="h-6 w-6 fill-sky-400 rounded-full ring-[3px] ring-sky-400 ring-offset-1 mr-4"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
									</svg>
									<div>
										<p className="text-gray-700 font-bold text-[13px] tracking-tight">
											Complete a project
										</p>
										<p className="text-gray-400 font-medium text-[10px]">
											Get AI feedback for your code
										</p>
									</div>
									<div className="bg-gradient-to-r ml-5 from-sky-500 to-cyan-400 px-1.5 py-0.5 rounded-[3px]">
										<p className="font-bold text-xs text-white">20 XP</p>
									</div>
								</div>

								<div className="relative w-48 h-fit -top-[12vw] left-[65.5%]">
									<Image
										src={'/pp2.png'}
										alt={''}
										width={45}
										height={45}
										className="rounded-full border border-white"
									/>
									<div className="absolute top-7 left-7 p-1.5 border border-gray-100 rounded-full bg-white shadow shadow-gray-200">
										<svg viewBox="0 0 22 28" className="h-[23px] w-[23px]">
											<path d="M18.7 5.3v1L14 3.6c-1.8-1-4.3-1-6 0L3.3 6.3v-1c0-3 1.6-4.6 4.6-4.6H14c3 0 4.6 1.6 4.6 4.6Z"></path>
											<path d="M18.8 8.6h-.2l-1.8-1.1L13 5.3c-1.1-.6-2.9-.6-4 0L5.2 7.5l-1.8 1-.2.2C.8 10.2.7 10.5.7 13v6c0 2.5.1 2.8 2.5 4.4L9 26.8a4 4 0 0 0 2 .5c.7 0 1.5-.1 2-.5l5.8-3.3c2.4-1.6 2.5-1.9 2.5-4.4v-6c0-2.6-.1-2.9-2.5-4.5Zm-4 7.4-.9 1a1 1 0 0 0-.2.6V19c.1.8-.4 1.2-1.2 1l-1.2-.6h-.6l-1.2.5c-.8.3-1.3-.1-1.3-1l.1-1.2c0-.2 0-.5-.2-.6l-.8-1c-.5-.6-.3-1.3.5-1.5l1.2-.3c.2 0 .4-.2.5-.4l.7-1c.5-.7 1.1-.7 1.6 0l.7 1c0 .2.3.4.5.4l1.2.3c.8.2 1 .9.5 1.5Z"></path>
										</svg>
									</div>
								</div>

								<div className="relative w-[200px] h-fit top-[6.5vw] left-[1.5%]">
									<Image
										src={'/pp3.png'}
										alt={''}
										width={46}
										height={46}
										className="rounded-full border border-white"
									/>
									<div className="absolute w-fit h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 top-[41px] left-3">
										<p className="text-gray-600 font-semibold text-[10px]">
											<span className="mr-0.5">&#128549;</span>Stuck
										</p>
									</div>
									<div className="absolute w-fit h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 top-[106px] left-[60px]">
										<p className="text-gray-600 font-semibold text-[10px]">
											<span className="mr-0.5">&#128516;</span>Ask AI
										</p>
									</div>
									<div className="absolute top-[154px] left-[154px] p-1.5 border border-gray-100 rounded-xl bg-white shadow shadow-gray-200 flex justify-center items-center">
										<svg
											viewBox="0 0 28 28"
											fill="currentColor"
											className="h-[22px] w-[22px]"
										>
											<path d="M23 16.5h-2.6a1 1 0 0 0-.5.2l-3.1 2a2.9 2.9 0 0 1-4.4-1.7c0-.4-.4-.8-.8-1-.7-.3-1.3-.7-1.8-1.2A6.4 6.4 0 0 1 8 10.2V4.3c0-.5-.4-1-1-1h-.3c-3.6 0-6 1.8-6 6v7.2c0 4.2 2.4 6 6 6h5v3.8H7.9a1 1 0 0 0-1 1c0 .6.4 1 1 1h9.6c.5 0 1-.4 1-1 0-.5-.5-1-1-1h-3.8v-3.8h5c3.3 0 5.6-1.5 6-5 0-.5-.5-1-1-1H23Z"></path>
											<path d="M27.3 5v5.2c0 2-1 3.5-2.6 4-.5.2-1.1.3-1.7.3h-3.5l-3.8 2.6a.9.9 0 0 1-1.4-.7v-1.9c-1.3 0-2.4-.4-3.1-1.2a4.4 4.4 0 0 1-1.2-3.1V5c0-.6 0-1.2.3-1.7.6-1.6 2-2.6 4-2.6H23c2.6 0 4.3 1.7 4.3 4.3Z"></path>
										</svg>
									</div>
								</div>

								<div className="relative w-[180px] h-fit top-[9.5vw] left-[84.5%]">
									<Image
										src={'/pp4.png'}
										alt={''}
										width={46}
										height={46}
										className="rounded-full border border-white"
									/>
									<div className="absolute w-fit h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 top-[38px] left-[15px]">
										<p className="text-gray-600 font-semibold text-[10px]">
											<span className="mr-0.5">&#128218;</span>Practice
										</p>
									</div>

									<svg
										viewBox="0 0 120 130"
										className="absolute top-[94px] left-0 w-[88px] h-[88px]"
									>
										<path
											fill="#000"
											d="M42.4 30l.2 46.3c0 .7.5 1.4 1.1 1.6l18.5 7.4h1l19.4-4.5c.6-.2 1.1-.8 1.3-1.4l7-45.8c0-1-.7-1.8-1.6-2l-45-3.2c-1 0-1.9.7-1.9 1.7z"
										></path>
										<path
											fill="url(#AccentSvgGradient)"
											d="M80.4 47.5L57 45.8l.2 6.5L79.4 54l-2.8 18.4-13.3 3.2-12.7-5v-9.8l6.8.5L57 66l7 2.5 7.2-1.4 1.1-7.6L50.5 58V39.3l30.8 2.2-.9 6z"
										></path>
									</svg>

									<div className="absolute top-[205px] left-[52px] p-1 border border-gray-100 rounded-xl bg-white shadow shadow-gray-200 flex justify-center items-center">
										<svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
											<path d="M21 7c-.8-1-2.2-1.4-4.2-1.4h-.3c0-1.8 0-3.8-3.7-3.8h-1.6c-3.7 0-3.7 2-3.7 3.7h-.3C5.2 5.6 3.8 6 3 7c-1 1-1 2.6-.8 3.6v.9l.3.3a17.9 17.9 0 006.8 2.7c0 1 .5 2 2.7 2s2.6-1 2.7-2c2-.3 4-1 5.8-2l.1-.2 1.2-.8.2-.3v-.8c.2-1 .1-2.4-.8-3.4zm-8 6.8c0 1 0 1.3-1.1 1.3-1.3 0-1.3-.2-1.3-1.3v-1.2h2.5v1.2zM9 5.6c0-1.8 0-2.4 2.2-2.4h1.6c2.3 0 2.3.6 2.3 2.3H8.9z"></path>
											<path d="M20.9 13.7c.3-.1.7.1.7.5l-.4 4c-.2 2-1 4-5.4 4H8.2c-4.4 0-5.2-2-5.4-4l-.4-3.7c0-.4.4-.7.7-.6 1.2.6 3.3 1.5 4.6 1.8l.3.3c.7 1.3 2 2 3.9 2s3.2-.7 3.8-2a34.6 34.6 0 005.2-2.3z"></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative z-20 px-6 pb-12 text-center sm:absolute sm:left-1/2 sm:top-1/2 sm:flex sm:aspect-1 sm:w-full sm:max-w-[min(50%,50rem)] sm:-translate-x-1/2 sm:-translate-y-[46%] sm:flex-col sm:items-center sm:justify-center md:-translate-y-[49%] min-[900px]:-translate-y-[52%] lg:gap-4">
						<h1 className="font-bold text-4xl md:text-5xl lg:text-[58px] leading-none tracking-tight text-gray-800 mt-12 mb-10">
							Change the world
							<br /> with codedamn
						</h1>
						<h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-500 mb-16 leading-relaxed">
							Learn coding with your personal AI powered tutor and 100+ interactive
							courses. Become job ready 10x faster.
						</h2>

						<button
							type="button"
							className="text-sm md:text-base lg:text-lg font-semibold text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-lg py-3.5 px-7 mb-12 shadow-xl shadow-indigo-600/50"
						>
							Begin your coding journey
						</button>
					</div>
				</section>

				<section>
					<div className="relative w-full text-center pt-12 pb-12 bg-transparent overflow-hidden bg-gradient-to-b from-transparent via-white/50 to-white">
						<p className="font-bold text-sm px-4 uppercase tracking-wider mg:tracking-wider lg:tracking-widest text-gray-600 ">
							Powering over 259K developers to land their dream job
						</p>

						<div className="container w-full h-24 lg:h-48">
							<div className="marquee-inner to-left w-fit h-fit lg:w-full flex lg:flex-col lg:my-6 mx-4 ">
								<div className="flex justify-center items-center w-full my-6 ">
									<GoogleLogo />
									<AppleLogo />
									<MetaLogo />
									<MicrosoftLogo />
								</div>
								<div className="flex justify-center items-center w-full my-6">
									<NetflixLogo />
									<AmazonLogo />
									<AdobeLogo />
									<NotionLogo />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="w-full h-fit bg-zinc-50/20 border-t border-gray-100 py-[124px] bg-gradient-to-l bg-big-grid-lines">
						<div className="w-full flex flex-col items-center">
							<span className="uppercase tracking-widest text-base font-bold text-gray-500 mb-12 px-4">
								Explore the codedamn way
							</span>
							<div className="h-24 w-px bg-gradient-to-b from-white via-indigo-500/50 to-indigo-600 m"></div>
							<span className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-xl text-white font-bold flex justify-center items-center">
								1
							</span>
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-indigo-600 via-indigo-600 to-purple-600 bg-clip-text pt-6">
								Learn
							</span>
							<h2 className="text-4xl sm:text-6xl tracking-tighter text-center font-bold text-gray-800 p-4">
								Instantly and Interactively
							</h2>
							<span className="text-xl font-normal max-w-3xl leading-8 tracking-tight text-center text-gray-600 mt-2 mb-20 px-6">
								Learn from carefully curated learning paths with up-to-date
								interactive courses, and receive 24x7 AI assistance as you develop
								your coding skills.
							</span>
							<div className="w-full h-fit lg:h-[380px] flex flex-col-reverse lg:flex-row px-px md:px-28 lg:px-0 max-w-screen-xl">
								<div className="lg:w-3/6 flex justify-center relative w-full sm:px-1 max-w-3/6 py-10 md:py-16 h-fit scale-[60%] xxs:scale-75 xs:scale-90 sm:scale-[98%] md:scale-x-110 md:scale-y-110 lg:scale-100 2xl:scale-110">
									<div className="relative p-1">
										<div className="w-[480px] h-[288px] px-5 py-5">
											<div className="w-full h-full flex overflow-clip rounded-md bg-white shadow-2xl">
												<div className="w-3/5 h-full">
													<div className="w-full h-[12%] flex">
														<div className="flex items-center px-2 h-full w-fit border-b border-gray-200">
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-red-400 bg-red-400"></div>
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-amber-300 bg-amber-300"></div>
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-green-400 bg-green-400"></div>
														</div>
														<div className="flex items-center px-2.5 h-full w-fit border-x border-gray-200">
															<span className="text-[10px] text-gray-500 font-normal">
																index.jsx
															</span>
														</div>
														<div className="w-full h-full border-b border-gray-200"></div>
													</div>
													<div className="w-full flex h-full">
														<div className="w-fit h-full flex flex-col font-mono">
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																05
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																06
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																07
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																08
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																09
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																10
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																11
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																12
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																13
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																14
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																15
															</span>
														</div>
														<code className="w-full tracking-tight px-2 text-[13px] text-left">
															<span className="w-full block">
																....
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																export function&nbsp;
																<span className="font-normal">
																	&#40;&#123; data &#125;&#41;
																	&#61;&#62; &#123;
																</span>
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																&emsp;&emsp;return&nbsp;
																<span className="font-normal">
																	&#60;
																	<span className="font-semibold text-purple-700">
																		Layout
																	</span>
																	&#62;
																</span>
															</span>
															<span className="font-normal block">
																&emsp;&emsp;&emsp;&emsp;&#60;
																<span className="font-semibold text-purple-700">
																	Game&nbsp;
																	<span className="font-normal text-gray-700">
																		details&#61;&#123;data&#125;&nbsp;&#47;
																	</span>
																</span>
																&#62;
															</span>
															<span className="font-normal block">
																&emsp;&emsp;&#60;
																<span className="font-semibold text-purple-700">
																	<span className="font-normal text-gray-700">
																		&#47;
																	</span>
																	Layout
																</span>
																&#62;
															</span>
															<span className="font-normal">
																&#125;
															</span>
															<span className="block">....</span>
														</code>
													</div>
												</div>
												<div className="w-2/5 h-full border-l border-gray-200">
													<div className="w-full h-[10%] flex border-b border-gray-200">
														<div className="flex items-center px-2 h-full w-fit ">
															<HiArrowNarrowLeft className="fill-gray-400" />
														</div>
													</div>
													<div className="w-full h-full text-center bg-gray-50 ">
														<span className="relative top-[90px] font-mono text-lg text-gray-800 font-extrabold">
															Learn + Practice
														</span>
														<div className="relative top-[168px] w-full h-fit gap-[2px] p-px grid grid-cols-12 ">
															<div className="w-[12px] h-[12px] bg-red-500"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-yellow-500"></div>
															<div className="w-[12px] h-[12px] bg-yellow-500"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-green-500"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-sky-500"></div>
															<div className="w-[12px] h-[12px] bg-sky-500"></div>
															<div className="w-[12px] h-[12px] bg-red-500"></div>
															<div className="w-[12px] h-[12px] bg-red-500"></div>
															<div className="w-[12px] h-[12px] bg-red-500"></div>
															<div className="w-[12px] h-[12px] bg-yellow-500"></div>
															<div className="w-[12px] h-[12px] bg-yellow-500"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-green-500"></div>
															<div className="w-[12px] h-[12px] bg-green-500"></div>
															<div className="w-[12px] h-[12px] bg-green-500"></div>
															<div className="w-[12px] h-[12px] bg-transparent"></div>
															<div className="w-[12px] h-[12px] bg-sky-500"></div>
															<div className="w-[12px] h-[12px] bg-sky-500"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="absolute w-max h-fit right-0 top-0 shadow-2xl flex justify-center items-center rounded-md overflow-clip">
											<svg
												stroke="currentColor"
												fill="currentColor"
												strokeWidth="0"
												viewBox="0 0 16 16"
												className="absolute z-20 w-8 h-8 fill-white"
												height="1em"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
											</svg>
											<Image
												src={'/js-img.png'}
												alt={''}
												width={170}
												height={100}
												className=""
											/>
										</div>
										<div className="absolute w-[176px] h-[86px] bottom-0 left-0 bg-zinc-700 shadow-2xl rounded text-center">
											<p className="p-2 text-white font-medium text-[13px]">
												<span className="font-bold text-sm">6</span>/6
												challenges completed
											</p>
											<div></div>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-fit h-full flex flex-col items-center lg:items-center order-1 lg:order-none">
									<div className="h-28 w-px bg-gradient-to-b from-white via-gray-500/50 to-gray-600"></div>
									<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
									<div className="h-72 w-px border-l hidden lg:block border-gray-600 border-dashed"></div>
								</div>
								<div className="relative w-full lg:w-3/6 px-14 lg:py-16 flex flex-col items-center top-0 text-center lg:text-left">
									<div className="max-w-xl py-3 lg:py-6 flex flex-col items-center lg:items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8"
											fill="none"
											viewBox="0 0 186 186"
										>
											<path
												fill="url(#LearnSvgGradient)"
												d="M17.438 0A17.437 17.437 0 000 17.438v81.374a17.438 17.438 0 0017.438 17.438H69.75v11.625H11.625A11.626 11.626 0 000 139.5v34.875A11.625 11.625 0 0011.625 186h162.75A11.625 11.625 0 00186 174.375V139.5a11.625 11.625 0 00-11.625-11.625H116.25V116.25h52.312A17.439 17.439 0 00186 98.812V17.439A17.438 17.438 0 00168.562 0H17.437zm0 11.625h151.124a5.814 5.814 0 015.813 5.813v81.374a5.813 5.813 0 01-5.813 5.813H17.437a5.812 5.812 0 01-5.812-5.813V17.439a5.813 5.813 0 015.813-5.813zM139.5 145.312a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zm23.25 0a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zM17.437 139.5h58.126a5.812 5.812 0 110 11.625H17.437a5.812 5.812 0 110-11.625zm-5.812 26.156a2.906 2.906 0 012.906-2.906H78.47a2.906 2.906 0 110 5.812H14.53a2.906 2.906 0 01-2.906-2.906z"
											></path>
											<rect
												width="114"
												height="9"
												x="27"
												y="37"
												rx="4.5"
												className=" fill-violet-700"
											></rect>
											<rect
												width="69"
												height="9"
												x="27"
												y="54"
												rx="4.5"
												className=" fill-violet-700"
											></rect>
											<rect
												width="114"
												height="9"
												x="27"
												y="71"
												rx="4.5"
												className=" fill-violet-700"
											></rect>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Hands&#45;on practice
										</h3>
										<p className="text-base lg:block font-normal leading-[26px] text-zinc-700 mt-1">
											At codedamn, you get to learn by doing. Escape tutorial
											hell by solving real-world challenges in our interactive
											labs, all within your browser.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full h-fit lg:h-[380px] flex flex-col-reverse lg:flex-row px-px md:px-28 lg:px-0 max-w-screen-xl">
								<div className="lg:w-3/6 flex justify-center relative w-full sm:px-1 max-w-3/6 py-10 md:py-16 h-fit scale-[60%] xxs:scale-75 xs:scale-90 sm:scale-100 md:scale-x-110 md:scale-y-110 lg:scale-100 2xl:scale-110">
									<div className="relative p-1">
										<div className="relative w-[480px] h-[288px] px-5 py-5">
											<div className="w-full h-full flex flex-auto overflow-clip rounded-md bg-white shadow-2xl">
												<div className="w-3/5 h-full">
													<div className="w-full h-[12%] flex">
														<div className="flex items-center px-2 h-full w-fit border-b border-gray-200">
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-red-400 bg-red-400"></div>
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-amber-300 bg-amber-300"></div>
															<div className="w-[7px] h-[7px] rounded mr-1.5 shadow-sm shadow-green-400 bg-green-400"></div>
														</div>
														<div className="flex items-center px-2.5 h-full w-fit border-x border-gray-200">
															<span className="text-[10px] text-gray-500 font-normal">
																main.py
															</span>
														</div>
														<div className="w-full h-full border-b border-gray-200"></div>
													</div>
													<div className="w-full flex h-full">
														<div className="w-fit h-full flex flex-col font-mono">
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																01
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																02
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																03
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																04
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																05
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																06
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																07
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																08
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																09
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																10
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																11
															</span>
														</div>
														<code className="w-full tracking-tight px-2 text-[13px] text-left mt-px">
															<span className="w-full block text-gray-400">
																# Concatenate the parameters
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																def&nbsp;
																<span className="font-semibold text-purple-700">
																	concat
																</span>
																<span className="font-normal">
																	&#40;p1,p2&#41;&#58;
																</span>
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																&emsp;&emsp;return&nbsp;
																<span className="font-semibold text-purple-700">
																	str
																	<span className="font-normal">
																		&#40;p1&#41;
																	</span>
																</span>
																&nbsp;&#43;&nbsp;
																<span className="font-semibold text-purple-700">
																	str
																	<span className="font-normal">
																		&#40;p2&#41;
																	</span>
																</span>
															</span>
															<span className="font-normal block">
																&emsp;&emsp;&emsp;&emsp;
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																param_1&nbsp;&#61;&nbsp;
																<span className="font-semibold text-purple-700">
																	13
																</span>
															</span>
															<span className="w-full inline-block font-semibold text-gray-700">
																param_2&nbsp;&#61;&nbsp;
																<span className="font-semibold text-purple-700">
																	37
																</span>
															</span>
															<span className="font-semibold text-purple-700">
																print
																<span className="font-normal text-gray-700">
																	&#40;
																	<span className="font-semibold text-purple-700">
																		concat
																		<span className="font-normal text-gray-700">
																			&#40;param_1,param_2&#41;
																		</span>
																	</span>
																	&#41;
																</span>
															</span>
														</code>
													</div>
												</div>
												<div className="w-2/5 h-full border-l border-gray-200">
													<div className="w-full h-[10%] flex border-b border-gray-200">
														<div className="flex items-center px-2 h-full w-fit ">
															<HiArrowNarrowLeft className="fill-gray-400" />
														</div>
													</div>
													<div className="w-full h-full text-center bg-gray-50 ">
														<div className="relative top-[168px] w-full h-14 p-px bg-zinc-700"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="absolute w-[200px] h-[86px] right-0 top-0 bg-zinc-700 rounded shadow-2xl py-2 px-3">
											<p className=" text-white font-normal text-[13px] mb-0.5">
												I&apos;m stuck, please help me with this challenge.
											</p>
											<div className="w-full h-1/2 flex justify-between items-center">
												<div className="w-fit flex justify-start items-center">
													<Image
														src={'/pp2.png'}
														alt={'Jarvis Image'}
														width={24}
														height={24}
														className="rounded-full mr-2"
													/>
													<p className="text-white font-normal text-[13px]">
														Sarah
													</p>
												</div>
												<p className="text-white w-14 font-mono font-normal text-[11px]">
													10&#58;20 PM
												</p>
											</div>
										</div>
										<div className="absolute w-[200px] h-[86px] left-0 bottom-0 bg-white border py-2 px-3 border-gray-200 shadow-2xl rounded text-left">
											<p className=" text-gray-900 font-normal text-[13px] mb-0.5">
												Sure, Convert the params using the str&#40;&#41;
												function.
											</p>
											<div className="w-full h-1/2 flex justify-between items-center">
												<div className="w-fit flex justify-start items-center">
													<Image
														src={'/jarvis.png'}
														alt={'Jarvis Image'}
														width={24}
														height={24}
														className="rounded-full mr-2"
													/>
													<p className="text-gray-900 font-normal text-[13px]">
														Jarvis
													</p>
												</div>
												<p className="text-gray-900 w-14 font-mono font-normal text-[11px]">
													10&#58;20 PM
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-fit h-full flex flex-col items-center order-1 lg:order-none">
									<div className="h-28 w-px lg:border-l bg-gradient-to-b from-white via-gray-500 to-gray-600 lg:border-gray-600 lg:border-dashed"></div>
									<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
									<div className="h-72 w-px hidden lg:block bg-gradient-to-b from-gray-600 via-sky-600 to-sky-500"></div>
								</div>
								<div className="relative w-full lg:w-3/6 px-14 lg:py-16 flex flex-col items-center top-0 text-center lg:text-left">
									<div className="py-3 lg:py-6 max-w-xl flex flex-col items-center lg:items-start">
										<svg
											stroke="currentColor"
											fill="url(#LearnSvgGradient)"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-8 w-8"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path>
											<path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Instant help from Jarvis
										</h3>
										<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
											Meet Jarvis, your personal state-of-the-art AI assistant
											who is available 24x7 to clarify your doubts, solve
											problems and help you whenever you get stuck.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col items-center">
							<div className="h-24 w-px bg-gradient-to-b from-sky-500 to-cyan-400 "></div>
							<span className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-xl text-white font-bold flex justify-center items-center">
								2
							</span>
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-sky-600 via-sky-500 to-cyan-400 bg-clip-text pt-6">
								Apply
							</span>
							<h2 className="sm:text-6xl lg:text-6xl text-4xl tracking-tighter text-center font-bold text-gray-800 p-4">
								Powerful IDE with AI Tooling
							</h2>
							<span className="text-xl max-w-3xl font-normal leading-8 tracking-tight text-center text-gray-600 my-2 px-6">
								Become a better programmer by building tons of real-world projects
								and keep improving with detailed feedback on your code - generated
								by state-of-the-art AI.
							</span>
							<div className="flex flex-col items-center w-full lg:justify-center lg:flex-row py-10 md:py-20 max-w-screen-xl">
								<div className="relative flex justify-center w-[660px] h-[500px] lg:w-3/6 px-2 sm:px-6 scale-[60%] xxs:scale-[75%] xs:scale-[85%] sm:scale-90 md:scale-100 lg:scale-100 2xl:scale-110">
									<div className="max-w-xl h-fit">
										<div className="relative px-2 h-full bg-white">
											<div className="relative flex h-[229px] w-full max-w-[90%] flex-1 overflow-hidden rounded-sm border border-gray-400/20 shadow-xl">
												<div className="flex-[6%] xs:flex-[7%] bg-zinc-700 flex flex-col justify-between items-center">
													<div className="py-4">
														<BsFillFileEarmarkCodeFill className="w-3.5 h-3.5 fill-white mb-2" />
														<BsSearch className="w-3.5 h-3.5 fill-white mb-2" />
														<MdOutlineComment className="w-3.5 h-3.5 fill-white mb-2" />
													</div>
													<div className="py-3">
														<SlSettings className="w-3.5 h-3.5 fill-white" />
													</div>
												</div>
												<div className="w-3/5 h-full">
													<div className="w-full h-[8%] flex">
														<div className="flex items-center px-2 h-full w-fit border-b border-gray-200">
															<span className="text-[9px] text-gray-500 font-normal">
																Tesla.jsx
															</span>
														</div>
														<div className="flex items-center bg-gray-100 px-2.5 h-full w-fit border-x border-gray-200">
															<span className="text-[9px] text-gray-500 font-normal">
																globals.css
															</span>
														</div>
														<div className="w-full h-full border-b border-gray-200"></div>
													</div>
													<div className="w-full flex h-full">
														<div className="w-fit h-full flex flex-col font-mono overflow-y-hidden">
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																01
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																02
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																03
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																04
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																05
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																06
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																07
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																08
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																09
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																10
															</span>
															<span className=" px-1.5 text-[13px] text-gray-400 bg-gray-50">
																11
															</span>
														</div>
														<code className="w-full tracking-tight px-2 xs:text-[13px] text-left text-[12px]">
															<span className="font-normal text-gray-500">
																&#47;&#47;&nbsp;Tesla clone project
															</span>
															<span className="block text-gray-500">
																....
															</span>
															<span className="font-normal">
																&#60;
																<span className="font-semibold text-sky-500">
																	Layout
																</span>
																&#62;
															</span>

															<span className="block font-normal">
																&emsp;&emsp;&#60;
																<span className="font-semibold text-sky-500">
																	Container
																</span>
																&#62;
															</span>
															<span className="font-normal block">
																&emsp;&emsp;&emsp;&emsp;&#60;
																<span className="font-semibold text-sky-500">
																	Hero&nbsp;
																	<span className="font-normal text-gray-700">
																		feature&#61;&#34;model-3&#34;&#47;
																	</span>
																</span>
																&#62;
															</span>
															<span className="font-normal block">
																&emsp;&emsp;&#60;
																<span className="font-semibold text-sky-500">
																	<span className="font-normal text-gray-700">
																		&#47;
																	</span>
																	Container
																</span>
																&#62;
															</span>
															<span className="font-normal block">
																&#60;
																<span className="font-semibold text-sky-500">
																	<span className="font-normal text-gray-700">
																		&#47;
																	</span>
																	Layout
																</span>
																&#62;
															</span>
															<span className="block text-gray-500">
																....
															</span>
														</code>
													</div>
												</div>
												<div className=" w-2/5 h-full border-l border-gray-200 ">
													<div className="w-full h-[8%] flex border-b border-gray-200">
														<div className="flex items-center pl-2 h-full w-fit">
															<HiArrowNarrowLeft className="fill-gray-500 h-3 w-3" />
														</div>
														<div className="p-1 w-full">
															<div className="w-full h-[4px] rounded-sm bg-zinc-300"></div>
														</div>
														<div className="flex items-center pl-1 h-full w-fit">
															<BiRefresh className="fill-gray-500 h-3 w-3" />
														</div>
													</div>
													<div className="w-full h-[92%] text-center">
														<Image
															src={'/tesla-model.png'}
															alt={'Tesla model 3'}
															width={400}
															height={400}
															className="w-auto h-auto"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="relative px-2">
											<div className="relative left-[10%] -mt-[10%] flex w-full max-w-[90%] flex-1 overflow-hidden rounded-sm border border-gray-400/30 bg-white shadow-xl p-[3%]">
												<div className="w-2/5 h-full">
													<div className="w-full h-fit bg-zinc-50/50 p-3 mb-3">
														<span className="uppercase block font-mono font-semibold text-xs text-zinc-800 mb-2">
															Suggestions
														</span>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-4/5 h-[3px] bg-zinc-300"></div>
													</div>
													<div className="w-full h-fit bg-zinc-50/50 p-3">
														<span className="uppercase block font-mono font-semibold text-xs text-zinc-800 mb-2">
															Summary
														</span>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
														<div className="w-4/5 h-[3px] bg-zinc-300"></div>
													</div>
												</div>
												<div className="w-3/5 h-full">
													<div className="w-full bg-zinc-50/50 p-3">
														<span className="uppercase block font-mono font-semibold text-xs text-zinc-800 mb-2">
															Code analysis
														</span>
														<div className="w-full h-8 mb-2 flex justify-start items-center">
															<span className="text-base mr-1 font-mono font-bold text-amber-400">
																4.5
															</span>
															<svg
																width="80"
																height="16"
																viewBox="0 0 70 14"
																xmlns="http://www.w3.org/2000/svg"
															>
																<defs>
																	<symbol
																		id="icon-rating-star-:r0:"
																		viewBox="0 0 24 24"
																	>
																		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
																	</symbol>
																</defs>
																<mask
																	id="star-rating-mask-:r0:"
																	data-purpose="star-rating-mask"
																>
																	<rect
																		x="0"
																		y="0"
																		width="90%"
																		height="100%"
																		fill="white"
																	></rect>
																</mask>
																<g
																	fill="rgb(250 204 21)"
																	mask="url(#star-rating-mask-:r0:)"
																	data-purpose="star-filled"
																>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="14"
																		height="14"
																		x="0"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="14"
																		height="14"
																		x="14"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="14"
																		height="14"
																		x="28"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="14"
																		height="14"
																		x="42"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="14"
																		height="14"
																		x="56"
																	></use>
																</g>
																<g
																	fill="transparent"
																	stroke="rgb(250 204 21)"
																	strokeWidth="2"
																	data-purpose="star-bordered"
																>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="12"
																		height="12"
																		x="1"
																		y="1"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="12"
																		height="12"
																		x="15"
																		y="1"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="12"
																		height="12"
																		x="29"
																		y="1"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="12"
																		height="12"
																		x="43"
																		y="1"
																	></use>
																	<use
																		xlinkHref="#icon-rating-star-:r0:"
																		width="12"
																		height="12"
																		x="57"
																		y="1"
																	></use>
																</g>
															</svg>
														</div>
														<div className="w-full h-fit mb-2">
															<div className="w-full h-fit flex">
																<span className="block w-14 font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	Performance
																</span>
																<div className="relative w-32 h-full flex p-1">
																	<div className="w-full h-[6px] rounded-full bg-zinc-200 border border-gray-200"></div>
																	<div className="absolute w-[78%] h-[6px] rounded-full bg-amber-400"></div>
																</div>
																<span className="block font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	87&#37;
																</span>
															</div>
															<div className="w-full h-fit flex">
																<span className="block w-14 font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	Security
																</span>
																<div className="relative w-32 h-full flex p-1">
																	<div className="w-full h-[6px] rounded-full bg-zinc-200 border border-gray-200"></div>
																	<div className="absolute w-[70%] h-[6px] rounded-full bg-amber-400"></div>
																</div>
																<span className="block font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	78&#37;
																</span>
															</div>
															<div className="w-full h-fit flex">
																<span className="block w-14 font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	Readability
																</span>
																<div className="relative w-32 h-full flex p-1">
																	<div className="w-full h-[6px] rounded-full bg-zinc-200 border border-gray-200"></div>
																	<div className="absolute w-[85%] h-[6px] rounded-full bg-amber-400"></div>
																</div>
																<span className="block font-mono font-semibold text-[9px] text-zinc-800 mb-0.5">
																	92&#37;
																</span>
															</div>
															<div className="w-full h-fit flex">
																<span className="block w-14 font-mono font-semibold text-[9px] text-zinc-800 mb-2">
																	Accuracy
																</span>
																<div className="relative w-32 h-full flex p-1">
																	<div className="w-full h-[6px] rounded-full bg-zinc-200 border border-gray-200"></div>
																	<div className="absolute w-[80%] h-[6px] rounded-full bg-amber-400"></div>
																</div>
																<span className="block font-mono font-semibold text-[9px] text-zinc-800 mb-2">
																	89&#37;
																</span>
															</div>
														</div>
													</div>
													<div className="w-full text-center">
														<span className="w-full block text-[9px] rounded font-mono py-2 bg-zinc-700 text-white">
															Generated by codedamn AI in 10 mins
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative w-full flex flex-col items-center lg:w-3/6 h-full px-10 sm:px-12 pb-8 xl:px-16 lg:py-16">
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center lg:items-start lg:text-left text-center">
										<svg
											stroke="currentColor"
											fill="url(#ApplySvgGradient)"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-8 w-8"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
											<path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Practice 100+ Projects
										</h3>
										<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
											Improve you skills by building. Choose from over 100+
											projects to practice, build for your resume and showcase
											to the world.
										</p>
									</div>
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center text-center lg:items-start lg:text-left">
										<svg
											stroke="currentColor"
											fill="url(#ApplySvgGradient)"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-8 w-8"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"></path>
											<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Unlimited building and feedback
										</h3>
										<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
											For every great project you build, we help you make it
											better with CodeReport&trade;. Get detailed feedback on
											your projects.
										</p>
									</div>
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center text-center lg:items-start lg:text-left">
										<svg
											stroke="currentColor"
											fill="url(#ApplySvgGradient)"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-8 w-9"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z"></path>
											<path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0Z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Brush away all the bugs
										</h3>
										<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
											Use code brushes in playgrounds to fix, debug, refactor
											or even write full code blocks - at a click of a button
										</p>
									</div>
								</div>
							</div>
							<div className="relative w-full h-[440px] mb-24 overflow-clip flex justify-center [mask-image:linear-gradient(transparent_5%,white_30%,white_70%,transparent_95%)]">
								<div className="relative w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-4 px-6 max-w-screen-2xl">
									<div className="w-full">
										<div className="h-full relative container">
											<div className="flex flex-wrap flex-col gap-6 md:gap-5 lg:gap-4 marquee-inner to-top-1">
												<Image
													src={'/projects/proj1.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj2.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj3.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj4.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
											</div>
										</div>
									</div>
									<div className="w-full">
										<div className="h-full relative container">
											<div className="flex flex-wrap flex-col gap-6 md:gap-5 lg:gap-4 marquee-inner to-top-2">
												<Image
													src={'/projects/proj5.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj6.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj7.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj8.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
											</div>
										</div>
									</div>
									<div className="w-full hidden md:block lg:block">
										<div className="h-full relative container">
											<div className="flex flex-wrap flex-col gap-6 md:gap-5 lg:gap-4 marquee-inner to-top-3">
												<Image
													src={'/projects/proj9.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj10.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj11.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj12.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
											</div>
										</div>
									</div>
									<div className="w-full hidden lg:block">
										<div className="h-full relative container">
											<div className="flex flex-wrap flex-col gap-6 md:gap-5 lg:gap-4 marquee-inner to-top-1">
												<Image
													src={'/projects/proj13.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj14.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj15.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
												<Image
													src={'/projects/proj16.png'}
													alt={''}
													width={400}
													height={156}
													className="mb-8"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute w-full h-full top-0 flex justify-center items-center">
									<span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mx-5 text-gray-900 py-5 px-8 bg-white bg-opacity-90 rounded-md">
										Build your portfolio with 100+ projects
									</span>
								</div>
							</div>
							<span className="uppercase tracking-widest text-sm text-center sm:text-base font-bold text-gray-500 mb-4 px-4">
								Boot playgrounds with over 25+ templates
							</span>
							<div className="w-full h-fit flex justify-center mb-20 flex-wrap">
								<div className="flex mt-8">
									<a href="">
										<svg
											fill="none"
											className="transition-transform hover:scale-110 mx-3.5"
											height={44}
											width={46}
											viewBox="-10.5 -9.4 21 18.9"
										>
											<circle r="2" fill="#00D8FF"></circle>
											<g stroke="#00D8FF">
												<ellipse rx="10" ry="4.5"></ellipse>
												<ellipse
													rx="10"
													ry="4.5"
													transform="rotate(60)"
												></ellipse>
												<ellipse
													rx="10"
													ry="4.5"
													transform="rotate(120)"
												></ellipse>
											</g>
										</svg>
									</a>

									<a href="">
										<svg
											fill="none"
											viewBox="0 0 400 400"
											height={44}
											width={48}
											className="transition-transform hover:scale-110 mx-3.5"
										>
											<path
												fill="#E44D26"
												d="M56 360 24 0h353l-32 360-145 40"
											></path>
											<path fill="#F16529" d="M200 369V30h145l-28 307"></path>
											<path
												fill="#EBEBEB"
												d="M90 74h110v44h-62l4 45h58v44h-98L90 74Zm14 155h44l3 35 49 14v46l-90-26"
											></path>
											<path
												fill="#fff"
												d="M311 74H200v44h107l4-44Zm-8 89H200v44h55l-6 57-49 14v46l91-26"
											></path>
										</svg>
									</a>

									<a href="">
										<svg
											className="transition-transform hover:scale-110 mx-3.5"
											fill="none"
											height={44}
											width={48}
											viewBox="0 0 400 400"
										>
											<path
												fill="#5382A1"
												d="M147 309s-15 9 11 12c32 4 48 3 83-3l22 10c-79 34-177-1-116-19Zm-10-43s-17 12 9 15c34 3 61 4 107-5 0 0 7 6 17 10-95 28-200 2-133-20Z"
											></path>
											<path
												fill="#E76F00"
												d="M218 191c19 22-5 42-5 42s49-25 27-56c-21-30-38-45 50-95 0 0-137 34-72 109Z"
											></path>
											<path
												fill="#5382A1"
												d="M322 342s11 9-13 16c-45 14-188 18-228 1-14-6 13-15 21-17 9-2 14-1 14-1-16-12-102 22-44 31 160 26 291-12 250-30ZM154 220s-72 17-25 24c19 2 59 2 96-1l60-8s-11 4-18 10c-74 19-217 10-176-10 35-17 63-15 63-15Zm131 73c75-39 40-76 16-71l-9 2 7-5c48-17 84 50-16 76l2-2Z"
											></path>
											<path
												fill="#E76F00"
												d="M240 0s41 42-40 106c-65 51-15 80 0 113-38-34-66-64-47-92 27-41 103-61 87-127Z"
											></path>
											<path
												fill="#5382A1"
												d="M162 399c72 4 182-3 185-37 0 0-5 13-60 23-61 12-137 11-182 3 0 0 9 8 57 11Z"
											></path>
										</svg>
									</a>

									<a href="">
										<svg
											fill="none"
											viewBox="0 0 400 400"
											height={44}
											width={48}
											className="transition-transform hover:scale-110 mx-3.5"
										>
											<path
												fill="#539E43"
												d="M200 400c-5 0-10-1-15-4l-49-29c-7-4-3-6-1-6l22-10h3l38 23h4l147-85 2-4V115l-2-4-147-84h-4L51 111l-2 4v170l2 4 40 23c22 11 36-2 36-15V130c0-2 1-5 4-5h19c2 0 4 2 4 5v167c0 29-16 46-43 46-9 0-15 0-34-9l-39-22c-9-6-15-16-15-27V116c0-11 6-22 15-27L185 4c9-5 22-5 31 0l147 85c9 5 15 16 15 27v169c0 11-6 21-15 27l-147 85c-5 2-10 3-16 3Zm46-116c-65 0-78-30-78-55 0-2 2-4 5-4h19c2 0 4 1 4 3 3 20 11 29 50 29 31 0 44-7 44-23 0-10-4-17-52-21-40-4-65-13-65-45 0-30 25-48 67-48 47 0 70 17 73 52l-1 3-3 2h-19c-2 0-4-2-4-4-4-20-16-27-46-27-34 0-38 12-38 21 0 11 5 14 51 20 45 6 66 14 66 46s-27 51-73 51Z"
											></path>
										</svg>
									</a>
								</div>
								<div className="flex mt-8">
									<a href="">
										<svg
											className="transition-transform hover:scale-110 mx-3.5"
											fill="none"
											height={44}
											width={48}
											viewBox="0 0 400 400"
										>
											<path
												fill="url(#a)"
												d="M199 1c-102 0-96 44-96 44v46h97v13H65S0 97 0 199c0 103 57 99 57 99h34v-47s-2-57 55-57h96s54 1 54-52V54s9-53-97-53Zm-54 31a17 17 0 1 1 0 35 17 17 0 0 1 0-35Z"
											></path>
											<path
												fill="url(#b)"
												d="M201 399c102 0 96-44 96-44v-46h-97v-13h135s65 7 65-96c0-102-57-98-57-98h-34v47s2 57-55 57h-96s-54-1-54 52v88s-9 53 97 53Zm54-31a17 17 0 1 1 0-35 17 17 0 0 1 0 35Z"
											></path>
											<defs>
												<linearGradient
													id="a"
													x1="38.4"
													x2="236.7"
													y1="36.8"
													y2="233"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#387EB8"></stop>
													<stop offset="1" stopColor="#366994"></stop>
												</linearGradient>
												<linearGradient
													id="b"
													x1="160.1"
													x2="373"
													y1="162.8"
													y2="364"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FFE052"></stop>
													<stop offset="1" stopColor="#FFC331"></stop>
												</linearGradient>
											</defs>
										</svg>
									</a>

									<a href="">
										<svg
											fill="none"
											viewBox="0 0 400 400"
											height={44}
											width={48}
											className="transition-transform hover:scale-110 mx-3.5"
										>
											<path
												fill="#000"
												d="m264 0-64 114H71L135 0h129"
												opacity=".5"
											></path>
											<path
												fill="#000"
												d="M200 114h128L264 0H135l65 114Z"
												opacity=".6"
											></path>
											<path
												fill="#000"
												d="m135 229 65-115L135 0 71 114l64 115Z"
												opacity=".8"
											></path>
											<path
												fill="#000"
												d="m136 400 64-114h129l-65 114H136Z"
												opacity=".5"
											></path>
											<path
												fill="#000"
												d="M200 286H72l64 114h128l-64-114Z"
												opacity=".6"
											></path>
											<path
												fill="#000"
												d="m264 171-64 115 64 114 65-114-65-115Z"
												opacity=".8"
											></path>
										</svg>
									</a>

									<a href="">
										<svg
											className="transition-transform hover:scale-110 mx-3.5"
											fill="none"
											height={44}
											width={48}
											viewBox="0 0 400 400"
										>
											<path
												fill="#000"
												d="m397 195-17-10v-5l14-14a6 6 0 0 0-1-9l-19-7-1-5 11-16a6 6 0 0 0-4-9l-19-3-2-5 8-17a6 6 0 0 0-6-9l-19 1-4-4 5-19a6 6 0 0 0-7-7l-19 5-4-4 1-19a6 6 0 0 0-8-6l-18 8-5-2-3-19a6 6 0 0 0-9-4l-16 11-5-1-7-19a6 6 0 0 0-9-1l-14 14h-5L205 3a6 6 0 0 0-10 0l-10 17h-5L166 6a6 6 0 0 0-9 1l-7 19-5 1-16-11a6 6 0 0 0-9 4l-3 19-5 2-18-8a6 6 0 0 0-8 6l1 19-4 4-19-5a6 6 0 0 0-7 7l5 19-4 4-19-1c-2 0-4 1-5 3s-2 4-1 6l8 17-2 5-19 3a6 6 0 0 0-4 9l11 16-1 5-19 7a6 6 0 0 0-1 9l14 14v5L3 195a6 6 0 0 0 0 10l17 10v5L6 234a6 6 0 0 0 1 9l19 7 1 5-11 16a6 6 0 0 0 4 9l19 3 2 5-8 18a6 6 0 0 0 6 8l19-1 4 4-5 19a6 6 0 0 0 7 7l19-5 4 4-1 19a6 6 0 0 0 8 6l18-8 5 2 3 19a6 6 0 0 0 9 4l16-11 5 1 7 19a6 6 0 0 0 9 1l14-14h5l10 17a6 6 0 0 0 10 0l10-17h5l14 14a6 6 0 0 0 9-1l7-19 5-1 16 11a6 6 0 0 0 9-4l3-19 5-2 18 8a6 6 0 0 0 8-6l-1-19 4-4 19 5a6 6 0 0 0 7-7l-5-19 4-4 19 1a6 6 0 0 0 6-8l-8-18 2-5 19-3a6 6 0 0 0 4-9l-11-16 1-5 19-7a6 6 0 0 0 1-9l-14-14v-5l17-10a6 6 0 0 0 0-10ZM285 334a12 12 0 1 1 5-23 12 12 0 0 1-5 23Zm-6-38c-6-1-11 2-13 8l-6 28a146 146 0 0 1-122-1l-6-27c-1-6-7-10-12-9l-25 5-13-14h120l2-2v-42l-2-2h-35v-26h38c3 0 18 0 23 20l7 31c2 7 11 21 21 21h60l2-1-14 16-25-5Zm-165 38a12 12 0 1 1-5-23 12 12 0 0 1 5 23ZM69 150a12 12 0 1 1-22 10 12 12 0 0 1 22-10Zm-14 33 25-11c6-3 8-9 6-15l-6-12h21v94H59a146 146 0 0 1-4-56Zm112-9v-28h49c3 0 18 3 18 15 0 9-12 13-21 13h-46Zm179 25v11h-15c-2 0-2 1-2 2v7c0 16-9 20-17 21-8 0-17-4-18-8-4-26-12-31-23-40 14-10 30-23 30-42 0-20-14-32-23-39-13-8-28-10-32-10H91c21-23 50-40 82-46l18 19c4 5 11 5 15 1l21-20c43 8 79 35 100 71l-14 32c-2 5 0 12 6 14l27 12v15ZM191 39a12 12 0 1 1 17 17 12 12 0 1 1-17-17Zm139 112a12 12 0 1 1 22 9 12 12 0 1 1-22-9Z"
											></path>
										</svg>
									</a>

									<a href="">
										<svg
											className="transition-transform hover:scale-110 mx-3.5"
											fill="none"
											height={44}
											width={48}
											viewBox="0 0 400 400"
										>
											<path
												fill="#649AD2"
												d="M378 118c0-7-2-13-4-18-3-5-8-9-13-13L218 5c-12-7-25-7-37 1L39 87c-11 7-17 17-17 31v164c0 7 1 13 4 18s7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13s4-11 4-18V118Z"
											></path>
											<path
												fill="#004482"
												d="M200 199 26 300c3 5 7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13L200 199Z"
											></path>
											<path
												fill="#1A4674"
												d="M149 229a59 59 0 0 0 102 0l-51-30-51 30Z"
											></path>
											<path
												fill="#01589C"
												d="M378 118c0-7-2-13-4-18l-174 99 174 101c3-5 4-11 4-18V118Z"
											></path>
											<path
												fill="#fff"
												d="M368 207h-13v13h-14v-13h-13v-14h13v-13h14v13h13v14ZM200 82c43 0 81 23 102 58v1l-51 29a59 59 0 1 0 0 59l52 30A118 118 0 1 1 200 82Zm105 98v13h14v14h-14v13h-13v-13h-14v-14h14v-13h13Z"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col items-center">
							<div className="h-24 w-px bg-gradient-to-b from-white via-lime-400 to-lime-600"></div>
							<span className="h-10 w-10 rounded-full bg-gradient-to-r from-lime-600 to-lime-400 text-xl text-white font-bold flex justify-center items-center">
								3
							</span>
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-lime-600 via-lime-600 to-lime-400 bg-clip-text pt-6">
								Grow
							</span>
							<h2 className="text-4xl text-center sm:text-6xl tracking-tighter font-bold text-gray-800 py-4">
								Expand your Potential
							</h2>
							<div className="w-full h-fit flex max-w-screen-2xl">
								<div className="relative w-full flex flex-col items-center lg:items-start lg:w-3/6 h-full px-6 lg:pl-6 lg:pr-16 pt-16">
									<div className="pt-6 flex flex-col items-center lg:items-start pb-9 text-center lg:text-left">
										<h2 className="text-[30px] leading-9 font-bold text-gray-900 tracking-tight max-w-lg">
											Join the community of developers changing the world
										</h2>
										<p className="text-[18px] max-w-xl font-normal leading-[26px] text-zinc-700 mt-3">
											Transform the way you learn coding and connect with
											other like minded developers across the globe.
										</p>
									</div>
									<div className="pt-6 pb-9 pr-4 flex flex-col items-center lg:items-start text-center lg:text-start">
										<svg
											stroke="currentColor"
											fill="url(#GrowSvgGradient)"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-8 w-9"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"></path>
											<path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"></path>
											<path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Make something great
										</h3>
										<p className="text-base font-normal max-w-xl leading-[26px] text-zinc-700 mt-1">
											Start a playground, invite your friends and build your
											projects collaboratively, from anywhere around the
											globe.
										</p>
									</div>
									<div className="pt-6 pb-9 xl:pr-16 flex flex-col items-center lg:items-start text-center lg:text-start">
										<svg
											className="h-8 w-9"
											fill="#84cc16"
											strokeWidth="2"
											stroke="url(#GrowSvgGradient)"
											viewBox="0 0 64 64"
										>
											<path d="M40 30a4 4.5 0 1 0 0 9 4 4.5 0 1 0 0-9Z"></path>
											<path d="M52.3 16a31 31 0 0 0-13.4-5 1 1 0 0 0-1 .6s-.6 1.2-.8 2.7a39.5 39.5 0 0 0-10.4 0c-.2-1.5-.8-2.7-.8-2.7a1 1 0 0 0-1-.6c-.4 0-8.3 1-13.2 5A54.7 54.7 0 0 0 4 44.5c3.5 6 13.6 8.4 15.9 8.5.3 0 .6-.1.8-.4l3.5-4.3a39.6 39.6 0 0 0 15.4 0l3.5 4.3c.2.3.5.4.8.4 2.3 0 12.4-2.5 15.9-8.5l.1-.5c0-11.9-5.1-25.7-7.7-28zm-7.8 35-2.6-3.2c5.6-1.5 8.6-3.9 8.7-4a1 1 0 0 0-1.2-1.6S43.4 47 32 47a29.3 29.3 0 0 1-17.4-4.8 1 1 0 1 0-1.2 1.6c.1.1 3 2.5 8.7 4L19.6 51c-3-.4-10.8-2.7-13.6-7.3a55 55 0 0 1 7-26.2c3.5-2.9 9.3-4 11.3-4.4l.4 1.6a26 26 0 0 0-9.2 3.5 1 1 0 1 0 1 1.6C22 16.5 28.5 16 32 16a30.6 30.6 0 0 1 16 4 1 1 0 0 0 .5-1.8c-3-2-6.4-3-9.4-3.6 0-.6.2-1.1.3-1.5 2.1.3 8 1.5 11.6 4.4 2 1.8 7 14.9 7 26.2-2.8 4.6-10.6 7-13.5 7.3z"></path>
											<path d="M24 30a4 4.5 0 1 0 0 9 4 4.5 0 1 0 0-9Z"></path>
										</svg>
										<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
											Connect on Discord
										</h3>
										<p className="text-base max-w-lg font-normal leading-[26px] text-zinc-700 mt-1">
											Find developers, mentors, and new friends. Attend
											exclusive events organized by codedamn and have fun
											while growing your skills.
										</p>
									</div>
									<button className=" text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-lime-600/90 via-lime-500 to-lime-400 shadow-xl shadow-lime-400/30 rounded-lg py-3 lg:py-3.5 px-[10%] lg:px-[20%] ">
										Begin your coding journey &rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="w-full h-fit flex justify-center items-center  bg-zinc-50/50 border-y border-gray-100">
						<div className="w-full h-full flex flex-col justify-center sm:flex-row sm:items-start py-8">
							<div className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80 sm:border-r sm:border-gray-200">
								<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
									256K+
								</p>
								<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
									Developers
								</p>
							</div>
							<div className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80 sm:border-r sm:border-gray-200">
								<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
									1.4M+
								</p>
								<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
									Playgrounds booted
								</p>
							</div>
							<div className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80 sm:border-r sm:border-gray-200">
								<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
									228K+
								</p>
								<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
									Doubts solved by Jarvis
								</p>
							</div>
							<div className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80">
								<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
									100K+
								</p>
								<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
									Hours of learning
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full flex justify-center bg-small-grid-lines">
					<div className="relative px-6 flex w-full max-w-screen-2xl snap-x snap-mandatory overflow-x-scroll py-20 md:block md:columns-2 lg:columns-3">
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;I have seen so many courses but finding course that
										gives lecture + playground to code is difficult to find. But
										codedamn is totally amazing in this perspective even quality
										of content is unmatchable and helped me many times in
										understanding concepts in depth.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Ashish Kumar
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Software Engineer
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>

						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;Codedamn is building a killer ecosystem. Really
										amazed to see what they have brought in the last 6
										months&#129327;.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Riten Debnath
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Founder & CEO @Fueler
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;I enrolled in the Solidity course and honestly, it is
										extremely good! The speaker is well versed in Solidity and
										the environment that codedamn provides for learning and
										interaction is very impressive&#10024;.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Tanishka Borkar
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										University Student, KJSIEIT
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;Day by Day, codedamn is turning me into a Front-End
										Superman&#129464;.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Manuraj Shukla
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Frontend developer @buildoor
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;Codedamn is a super slick platform that teaches in
										demand tech stacks. It&rsquo;s great to start with because
										the practice exercises and tasks are completed in the
										browser in a super cool IDE&#128126;.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Jess Klette
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Software Engineer
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;For my full-stack learning path, I chose codedamn
										over other options like Masai, Newton, etc. The subscription
										cost is bare minimum, their inbuilt IDE works great and the
										support is amazing.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Sandeep Tomar
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Product Manager @K2FocusOnForce
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>

						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;In my experience, codedamn is an extremely effective
										tool for learning how to code. They provide a structured
										curriculum as well as many amazing projects. I&rsquo;m
										becoming more productive and better at programming.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Bhumika Chauhan
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										University Student, AKTU
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;I&rsquo;ve had a great time making projects using
										codedamn playgrounds. I chose it because it was fast and
										free in comparison to other platforms I explored.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Aniket Saha
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										University Student
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;I decided to learn on codedamn and have not regretted
										it at all! They have easy to follow videos that break down
										every concept. As someone who needs a bit longer time to
										process things, I appreciated this so much.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">Sam</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Music marketing professional
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;Codedamn has many roadmaps you can explore to learn
										how to code and build skills as a dev. It’s very well
										structured and the Pro version is pretty affordable as well,
										giving you unlimited access to all the features.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										gayboredape.eth
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										Founder ABY, Blockchain enthusiast
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;I feel codedamn has high potential and they provide
										free learning material. Mehul has done a great job by
										founding such a good platform.&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Muralidhara Bhat
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										University Student
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>

						<figure className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit">
							<blockquote className="relative text-900">
								<div className="flex w-full ">
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
									<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								</div>
								<div className=" mt-6">
									<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
										&ldquo;Courses on codedamn are really beginner-friendly and
										the exercises are great for practicing as you learn..&rdquo;
									</p>
								</div>
							</blockquote>
							<div className="w-full h-px bg-gray-200 my-6"></div>
							<figcaption className="flex justify-between">
								<div className="mx-2">
									<p className="text-gray-700 font-semibold xl:text-lg">
										Anurag Srivastava
									</p>
									<p className="text-gray-500 font-medium text-xs xl:text-sm">
										University Student, KIIT
									</p>
								</div>
								<Image
									src={'/pp4.png'}
									alt={'Testimonial User Profile Picture'}
									width={50}
									height={50}
									className="rounded-full"
								/>
							</figcaption>
						</figure>
					</div>
				</section>

				<section>
					<div className="w-full h-fit border-y border-gray-200 bg-gray-50/75 lg:pt-20 sm:px-6">
						<div className="mx-auto my-8 sm:mt-12 lg:my-16 lg:mt-0 flex flex-col">
							<h4 className="uppercase text-center text-base font-bold tracking-widest text-gray-500 mb-6">
								Begin your journey with codedamn
							</h4>
							<div className="flex justify-center w-full">
								<div className="w-full h-fit flex flex-col lg:flex-row justify-center items-center px-1 lg:pt-10 pb-20 lg:max-w-6xl">
									<div className="relative h-fit lg:translate-x-5 lg:bg-white bg-opacity-75 bg-clip-padding lg:mt-0 lg:w-1/2">
										<div className="absolute -inset-y-8 hidden lg:block -left-2 w-px bg-gray-900/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:left-0"></div>
										<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
										<div className="absolute w-full -inset-x-8 hidden lg:block bottom-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
										<ul className="w-full flex lg:flex-col pb-8 lg:pb-0 lg:bg-white bg-opacity-50">
											<li className="w-full py-2 lg:py-4 px-2 lg:px-[42px]">
												<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
													Learn
												</h3>
												<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
													Get access to 100+ courses from renowned
													instructors.
												</p>
											</li>
											<li className="relative w-full py-2 lg:py-4 px-2 lg:px-[42px]">
												<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
												<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
													Apply
												</h3>
												<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
													Build projects and boot playgrounds, all within
													your browser.
												</p>
											</li>
											<li className="relative w-full py-2 lg:py-4 px-2 lg:px-[42px]">
												<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
												<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
													Grow
												</h3>
												<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
													Upskill yourself with codedamn and land your
													dream job.
												</p>
											</li>
										</ul>
									</div>

									<div className="relative z-10 w-full sm:w-[36rem] sm:rounded-xl lg:w-1/2 lg:flex-none lg:-translate-x-5">
										<div className="relative z-10 border border-gray-200 flex min-h-[448px] w-xl max-w-xl items-center justify-center bg-white px-6 pb-6 pt-8 sm:rounded-xl sm:px-10">
											<div className="flex w-full flex-col gap-4">
												<button className="w-full bg-gray-50/75 hover:bg-gray-100/75 flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
													<svg
														className=" mr-3 h-5 w-5"
														aria-hidden="true"
														preserveAspectRatio="xMidYMid"
														viewBox="0 0 256 262"
													>
														<path
															fill="#4285F4"
															d="M256 133c0-10-1-18-3-26H131v48h71c-1 12-9 30-26 43v1l38 30h3c25-22 39-56 39-96"
														></path>
														<path
															fill="#34A853"
															d="M131 261c35 0 64-12 86-32l-41-31a80 80 0 0 1-120-42l-1 1-41 31v1c21 43 65 72 117 72"
														></path>
														<path
															fill="#FBBC05"
															d="M56 156a80 80 0 0 1 0-51v-2L15 71l-1 1a131 131 0 0 0 0 117l42-33"
														></path>
														<path
															fill="#EB4335"
															d="M131 50c24 0 41 11 50 20l37-36A130 130 0 0 0 14 72l42 33c11-32 40-55 75-55"
														></path>
													</svg>
													Continue with Google
												</button>
												<button className="w-full bg-zinc-800 hover:bg-zinc-950  text-white flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
													<svg
														className=" mr-3 h-5 w-5"
														preserveAspectRatio="xMidYMid"
														viewBox="0 0 256 250"
													>
														<path
															fill="#FFF"
															d="M128 0a128 128 0 0 0-40 249c6 2 8-2 8-6v-24c-36 8-43-15-43-15-6-14-14-18-14-18-12-8 1-8 1-8 12 1 19 13 19 13 12 20 30 14 38 11 1-9 4-14 8-17-29-4-59-15-59-64 0-14 5-25 14-34-2-3-6-16 1-34 0 0 11-3 35 13a123 123 0 0 1 64 0c24-16 35-13 35-13 7 18 3 31 1 34 9 9 14 20 14 34 0 49-30 60-59 63 5 4 9 12 9 24v35c0 4 2 8 9 6A128 128 0 0 0 128 0zM48 182l-2 1-1-2 2-1 1 2zm6 6-2-1-1-2h3v3zm5 7c-1 1-3 0-3-1v-3c1-1 2 0 3 1v3zm7 8h-3c-2-1-2-3-1-3h3l1 3zm9 3c0 1-1 2-3 1l-2-2c0-1 2-2 3-1 2 0 3 1 2 2zm11 1c0 2-1 2-3 2l-2-1c0-2 1-2 2-2l3 1zm11 0c0 1-1 2-3 2-1 1-3 0-3-1s1-2 3-2c1-1 2 0 3 1z"
														></path>
													</svg>
													Continue with GitHub
												</button>
												<div className="relative h-6 flex flex-col justify-center my-3">
													<div className="w-full border-t border-gray-200"></div>
													<div className="absolute w-full flex justify-center items-center ">
														<span className="text-sm px-2 bg-white text-gray-500">
															or register with email
														</span>
													</div>
												</div>
												<div className="flex flex-col gap-4">
													<form action="">
														<input
															type="email"
															className="w-full bg-white border border-gray-300 rounded-md px-3 py-2.5 text-base font-normal placeholder:text-gray-600 focus:outline-indigo-600"
															placeholder="Your email here"
														/>
													</form>
													<button className="w-full bg-indigo-600 hover:bg-indigo-800 text-white flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
														<svg
															stroke="currentColor"
															fill="currentColor"
															strokeWidth="0"
															viewBox="0 0 16 16"
															className="-ml-0.5 mr-2.5 h-5 w-5"
															aria-hidden="true"
															height="1em"
															width="1em"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
														</svg>
														Continue with Email
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="relative mx-auto max-w-screen-2xl overflow-hidden py-20">
						<div className="absolute top-96 rotate-45 -left-5 rounded-full w-4/12 h-5 bg-fuchsia-300 blur-3xl"></div>
						<div className="absolute bottom-64 rotate-45 -left-5 rounded-full w-4/12 h-5 bg-fuchsia-300 blur-3xl"></div>
						<div className="absolute top-96 rotate-45 left-32 rounded-full w-5/6 h-4 bg-sky-300 blur-2xl"></div>

						<div className="grid grid-cols-1 gap-x-8 gap-y-16 px-6 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
							<div className="relative order-2 mx-auto flex h-full w-full max-w-4xl items-center justify-center lg:order-1">
								<div className="absolute inset-0 h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[10%] [mask-image:linear-gradient(to_bottom,white_30%,transparent_90%)]">
									<div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[12.25%]"></div>
								</div>
								<div className="absolute bottom-12 left-6 rounded-full w-7/12 h-60 bg-white blur-2xl"></div>
								<div className="absolute bottom-20 left-64 rounded-full w-1/12 h-5 bg-sky-300 blur-3xl"></div>
								<div className="absolute bottom-20 left-80 rounded-full -rotate-[10deg] w-4/12 h-4 bg-fuchsia-300 blur-3xl"></div>
								<Image
									src={'/mobile-mockup.png'}
									alt={''}
									width={900}
									height={900}
									className="relative aspect-1 w-full"
								/>
							</div>

							<div className="order-1 flex h-full items-center justify-center lg:order-2 lg:pr-4 lg:pt-4">
								<div className="relative mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-lg lg:text-left">
									<div className="absolute top-12 left-12 mt-20 rotate-[35deg] rounded-full w-[600px] h-7 bg-indigo-300 blur-3xl "></div>
									<h3 className="text-3xl sm::text-4xl font-bold text-gray-900 tracking-tight">
										All of codedamn at your fingertips.
									</h3>
									<p className="text-lg leading-8 my-6 text-gray-600">
										Codedamn&apos;s mobile app keeps you connected to your
										progress and enables learning programming on-the-go from
										anywhere around the globe.
									</p>
									<div className="mt-12 flex justify-center gap-4 lg:justify-start">
										<Image
											src={'/codedamn-qr.png'}
											alt={''}
											width={115}
											height={115}
											className="hidden aspect-1 w-28 sm:block"
										/>
										<div className="flex max-w-xs justify-between gap-4 sm:h-28 sm:max-w-none sm:flex-col sm:gap-0">
											<Link href={''}>
												<svg
													className="aspect-[3.375] w-full max-w-[172px] rounded mx-2 sm:mx-0"
													viewBox="0 0 135 40"
												>
													<path
														fill="#A6A6A6"
														d="M130.2 40H4.7A4.7 4.7 0 0 1 0 35.3V4.7A4.7 4.7 0 0 1 4.7 0h125.5c2.6 0 4.8 2.1 4.8 4.7v30.6c0 2.6-2.2 4.7-4.8 4.7z"
													></path>
													<path d="M134 35.3a3.8 3.8 0 0 1-3.8 3.8H4.7A3.8 3.8 0 0 1 1 35.3V4.7A3.8 3.8 0 0 1 4.7 1h125.5a3.8 3.8 0 0 1 3.8 3.8v30.6z"></path>
													<path
														fill="#FFF"
														d="M30.1 19.8c0-3.2 2.7-4.8 2.8-4.9a6 6 0 0 0-4.7-2.5c-2-.2-3.9 1.2-4.9 1.2-1 0-2.5-1.2-4.2-1.2a6.2 6.2 0 0 0-5.2 3.2c-2.3 4-.6 9.7 1.6 12.9 1 1.6 2.3 3.3 4 3.2 1.6 0 2.2-1 4.2-1s2.5 1 4.2 1c1.7 0 2.8-1.6 3.9-3.1 1.2-1.8 1.7-3.6 1.7-3.7 0 0-3.3-1.3-3.4-5.1zM27 10.3c.9-1 1.5-2.6 1.3-4-1.2 0-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.4 3.9 1.5.1 3-.7 3.8-1.8zm26.6 21.2h-2.2L50 27.6h-4.3l-1.2 3.9h-2.2l4.3-13.3h2.6l4.3 13.3zM49.8 26l-1.2-3.5L48 20a96.8 96.8 0 0 1-.7 2.5L46.2 26h3.6zm14.9.6c0 1.6-.5 3-1.4 3.9-.8.8-1.7 1.2-2.9 1.2-1.3 0-2.2-.4-2.7-1.3v5h-2.2V22h1.8l.1 1.5a3.6 3.6 0 0 1 3.3-1.7c1.1 0 2 .5 2.8 1.4.8.8 1.2 2 1.2 3.5zm-2.2 0a4 4 0 0 0-.6-2.2c-.5-.7-1.1-1-1.9-1-.5 0-1 .2-1.4.5a2.8 2.8 0 0 0-1 2v1.7c0 .7.2 1.2.7 1.7s1 .7 1.6.7c.8 0 1.5-.3 2-.9a4 4 0 0 0 .6-2.4zm13.2 0c0 1.6-.4 3-1.3 3.9-.8.8-1.8 1.2-3 1.2s-2.1-.4-2.7-1.3v5h-2.2V22h1.8l.2 1.5a3.5 3.5 0 0 1 3.2-1.7c1.2 0 2.1.5 2.9 1.4.7.8 1.1 2 1.1 3.5zm-2.2 0a4 4 0 0 0-.6-2.2c-.5-.7-1-1-1.9-1a2.2 2.2 0 0 0-1.4.5c-.4.4-.7.8-.8 1.4l-.1.7v1.6c0 .7.2 1.2.6 1.7.4.5 1 .7 1.7.7.8 0 1.4-.3 1.9-.9a4 4 0 0 0 .6-2.4zM88 27.9c0 1.1-.4 2-1.1 2.7-1 .8-2.1 1.2-3.7 1.2-1.4 0-2.5-.3-3.4-.8l.5-1.8c1 .6 2 .8 3 .8a3 3 0 0 0 2-.5c.4-.4.6-.8.6-1.5 0-.5-.2-1-.5-1.3-.4-.4-1-.7-1.9-1-2.3-1-3.5-2.2-3.5-3.9 0-1 .4-2 1.2-2.7.9-.7 2-1 3.3-1 1.2 0 2.2.2 3 .6l-.5 1.8c-.8-.4-1.6-.6-2.6-.6-.7 0-1.3.1-1.7.5a1.6 1.6 0 0 0-.5 1.2c0 .5.2 1 .6 1.3.3.3 1 .7 1.9 1 1.1.5 2 1 2.5 1.7.6.6.8 1.4.8 2.3zm7-4.3h-2.3v4.7c0 1.2.5 1.7 1.3 1.7h1v1.6l-1.7.2c-.8 0-1.5-.3-2-.8-.4-.5-.7-1.3-.7-2.6v-4.8h-1.4V22h1.4v-1.8l2.1-.6V22h2.4v1.6zm10.7 3.1c0 1.5-.4 2.7-1.3 3.7s-2 1.4-3.5 1.4c-1.4 0-2.5-.4-3.4-1.4s-1.2-2-1.2-3.5.4-2.7 1.3-3.7c.8-1 2-1.4 3.5-1.4 1.4 0 2.5.5 3.4 1.4a5 5 0 0 1 1.2 3.5zm-2.2.1c0-.9-.2-1.6-.6-2.3-.4-.7-1-1.1-2-1.1-.8 0-1.4.4-1.9 1.1a5.6 5.6 0 0 0 0 4.6c.5.8 1.1 1.2 2 1.2.8 0 1.4-.4 1.9-1.2.4-.7.6-1.4.6-2.3zm9.1-3a3.7 3.7 0 0 0-.7 0 2 2 0 0 0-1.7.9c-.3.5-.5 1.1-.5 1.9v5h-2.2V22h1.8l.1 1.8c.3-.6.7-1 1.1-1.5a2.6 2.6 0 0 1 1.6-.5h.5v2zm9.6 2.6a5 5 0 0 1-.1 1h-6.4c0 .9.3 1.6 1 2 .4.5 1.1.8 2 .8a7 7 0 0 0 2.6-.5l.3 1.5a8 8 0 0 1-3.2.6 5 5 0 0 1-3.5-1.3c-.8-1-1.3-2-1.3-3.6 0-1.4.4-2.6 1.2-3.6a4 4 0 0 1 3.4-1.5c1.4 0 2.4.5 3.1 1.5.6.8.9 1.9.9 3zm-2-.6c0-.6-.2-1.2-.5-1.6a2 2 0 0 0-1.7-1 2 2 0 0 0-1.7 1c-.3.4-.6 1-.6 1.6h4.4zM49 10c0 1.2-.3 2-1 2.7-.7.5-1.6.8-2.8.8h-1.5V7l1.8-.2a4 4 0 0 1 2.6.8c.6.6 1 1.4 1 2.4zm-1 0c0-.7-.3-1.3-.7-1.7-.4-.4-1-.6-1.7-.6h-.9v5h.7c.8 0 1.5-.3 1.9-.7s.6-1.1.6-2zm7 1c0 .8-.3 1.4-.7 1.8-.4.5-1 .7-1.7.7s-1.3-.2-1.7-.6c-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.6-1.8s1-.7 1.7-.7 1.3.3 1.7.7c.4.5.6 1 .6 1.7zm-1.2 0c0-.4 0-.7-.3-1a1 1 0 0 0-.9-.6 1 1 0 0 0-1 .6l-.2 1c0 .5 0 .9.2 1.2.3.4.6.6 1 .6s.7-.2 1-.6l.2-1.1zm9-2.3-1.5 4.7h-1l-.6-2a15.3 15.3 0 0 1-.4-1.5 11.2 11.2 0 0 1-.4 1.5l-.6 2h-1L56 8.7h1l.5 2.3.4 1.5c0-.4.2-1 .4-1.5l.6-2.3h.9l.6 2.2.4 1.6.4-1.6.5-2.2h1zm5.4 4.7h-1v-2.7c0-.8-.4-1.2-1-1.2a1 1 0 0 0-.8.3 1.2 1.2 0 0 0-.2.8v2.8H64V8.7h.9v.8l.6-.6c.3-.2.6-.3 1-.3s.8.2 1 .4c.4.4.6 1 .6 1.6v2.8zm2.9 0h-1V6.6h1v6.8zm6.2-2.4c0 .8-.2 1.4-.7 1.8-.4.5-1 .7-1.7.7s-1.2-.2-1.6-.6c-.5-.5-.7-1-.7-1.8 0-.7.3-1.3.7-1.8s1-.7 1.7-.7 1.2.3 1.7.7c.4.5.6 1 .6 1.7zm-1.1 0c0-.4-.1-.7-.3-1a1 1 0 0 0-1-.6 1 1 0 0 0-1 .6l-.2 1c0 .5.1.9.3 1.2.2.4.5.6 1 .6.3 0 .7-.2.9-.6.2-.3.3-.7.3-1.1zm6.1 2.4h-1V13c-.3.4-.8.6-1.4.6-.4 0-.8-.1-1-.4a1.3 1.3 0 0 1-.4-1c0-.5.2-1 .7-1.3.5-.3 1.1-.4 2-.4v-.1c0-.6-.3-1-1-1-.4 0-.8.2-1.2.4l-.2-.7a3 3 0 0 1 1.6-.4c1.2 0 1.9.7 1.9 2v2.8zm-1-1.6v-.7c-1.2 0-1.8.3-1.8 1 0 .2 0 .4.2.5a.7.7 0 0 0 .5.2l.7-.2a.9.9 0 0 0 .3-.8zm7 1.6h-1v-.7c-.3.6-.8.8-1.5.8-.6 0-1-.2-1.5-.6s-.5-1-.5-1.8c0-.7.2-1.3.6-1.8.4-.5.9-.7 1.5-.7s1 .2 1.3.7V6.6h1v6.8zm-1.1-2v-.7a1.2 1.2 0 0 0-.4-1 1 1 0 0 0-.7-.3 1 1 0 0 0-1 .5 2 2 0 0 0-.3 1.2c0 .5.1.8.4 1.1.2.3.5.5.9.5.3 0 .6-.1.8-.4.2-.2.3-.5.3-.9zm10-.4c0 .8-.2 1.4-.6 1.8-.4.5-1 .7-1.7.7s-1.2-.2-1.7-.6c-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.7-1.8s1-.7 1.7-.7 1.2.3 1.6.7c.4.5.6 1 .6 1.7zm-1 0c0-.4-.1-.7-.3-1a1 1 0 0 0-1-.6 1 1 0 0 0-1 .6l-.2 1c0 .5 0 .9.3 1.2.2.4.5.6 1 .6.3 0 .6-.2.9-.6.2-.3.3-.7.3-1.1zm6.7 2.4h-1v-2.7c0-.8-.4-1.2-1-1.2-.3 0-.6.1-.8.3s-.3.5-.3.8v2.8h-1V8.7h.9v.8a1.5 1.5 0 0 1 .6-.6c.3-.2.6-.3 1-.3s.7.2 1 .4c.4.4.6 1 .6 1.6v2.8zm7-3.9h-1.1v2.3c0 .6.2.9.6.9h.5v.7l-.8.1c-.4 0-.8-.1-1-.3-.2-.3-.3-.7-.3-1.3V9.5h-.7v-.8h.7V8l1-.4v1.2h1.1v.8zm5.6 4h-1v-2.7c0-.9-.4-1.3-1-1.3-.5 0-.8.2-1 .7a1.3 1.3 0 0 0 0 .4v2.8h-1.1V6.6h1v2.8c.4-.5.9-.8 1.5-.8.4 0 .8.2 1 .4.4.4.6 1 .6 1.6v2.8zm5.7-2.6v.4H118c0 .5.2.8.5 1 .2.3.6.4 1 .4.5 0 .9 0 1.3-.2l.1.7a4 4 0 0 1-1.5.3c-.8 0-1.3-.2-1.8-.6-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.6-1.7a2 2 0 0 1 1.6-.8 2 2 0 0 1 1.6.8c.3.4.4.9.4 1.5zm-1-.3a1.4 1.4 0 0 0-.2-.8 1 1 0 0 0-.8-.5 1 1 0 0 0-.9.5 1.6 1.6 0 0 0-.3.8h2.2z"
													></path>
												</svg>
											</Link>
											<Link href={''}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 135 40"
													className="aspect-[3.375] w-full max-w-[172px] rounded mx-2 sm:mx-0"
												>
													<rect
														width="134"
														height="39"
														x="0.5"
														y="0.5"
														fill="#000"
														rx="4.5"
													></rect>
													<path
														fill="#fff"
														d="M68.136 21.75c-2.352 0-4.269 1.79-4.269 4.254 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253-.001-2.464-1.918-4.253-4.27-4.253zm0 6.833c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578 0 1.514-1.111 2.578-2.4 2.578zm-9.314-6.832c-2.352 0-4.269 1.789-4.269 4.253 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253 0-2.464-1.917-4.253-4.27-4.253zm0 6.832c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578.001 1.514-1.111 2.578-2.4 2.578zm-11.078-5.526v1.804h4.318c-.129 1.015-.467 1.756-.983 2.27-.628.629-1.611 1.322-3.335 1.322-2.658 0-4.736-2.143-4.736-4.801 0-2.658 2.078-4.801 4.736-4.801 1.434 0 2.481.564 3.254 1.289l1.273-1.273c-1.08-1.031-2.513-1.82-4.527-1.82-3.641 0-6.702 2.964-6.702 6.605 0 3.64 3.061 6.605 6.702 6.605 1.965 0 3.448-.645 4.607-1.853 1.192-1.192 1.563-2.868 1.563-4.221 0-.418-.032-.805-.097-1.127h-6.073zm45.308 1.4c-.354-.95-1.434-2.706-3.641-2.706-2.191 0-4.012 1.724-4.012 4.253 0 2.384 1.805 4.253 4.221 4.253 1.949 0 3.077-1.192 3.545-1.885l-1.45-.967c-.483.709-1.144 1.176-2.095 1.176-.95 0-1.627-.435-2.062-1.29l5.687-2.351-.193-.482zm-5.8 1.419c-.048-1.644 1.273-2.481 2.224-2.481.741 0 1.369.37 1.579.902l-3.803 1.579zM82.629 30h1.868V17.499h-1.868v12.5zm-3.062-7.298h-.064c-.419-.5-1.225-.951-2.239-.951-2.127 0-4.076 1.869-4.076 4.27 0 2.384 1.949 4.237 4.076 4.237 1.015 0 1.82-.451 2.239-.966h.064v.612c0 1.627-.87 2.497-2.271 2.497-1.144 0-1.853-.821-2.143-1.514l-1.627.677c.467 1.127 1.707 2.513 3.77 2.513 2.191 0 4.044-1.29 4.044-4.431V22.01h-1.772v.692h-.001zm-2.142 5.88c-1.289 0-2.368-1.08-2.368-2.561 0-1.5 1.079-2.594 2.368-2.594 1.272 0 2.271 1.095 2.271 2.594 0 1.482-.999 2.562-2.271 2.562zM101.806 17.5h-4.471v12.5H99.2v-4.735h2.605c2.068 0 4.102-1.497 4.102-3.882s-2.033-3.883-4.101-3.883zm.048 6.025H99.2v-4.285h2.654c1.395 0 2.187 1.155 2.187 2.143 0 .968-.792 2.142-2.187 2.142zm11.532-1.795c-1.351 0-2.75.595-3.329 1.914l1.656.69c.354-.69 1.014-.916 1.705-.916.965 0 1.946.579 1.962 1.608v.129c-.338-.193-1.062-.482-1.946-.482-1.785 0-3.603.98-3.603 2.814 0 1.673 1.464 2.75 3.104 2.75 1.254 0 1.946-.563 2.38-1.223h.064v.965h1.802v-4.793c.001-2.218-1.657-3.456-3.795-3.456zm-.226 6.85c-.61 0-1.463-.305-1.463-1.061 0-.965 1.062-1.335 1.979-1.335.819 0 1.206.177 1.704.418a2.262 2.262 0 01-2.22 1.979zm10.583-6.577l-2.139 5.42h-.064l-2.22-5.42h-2.01l3.329 7.575-1.898 4.214h1.946L125.818 22h-2.075zM106.937 30h1.865V17.499h-1.865v12.5zM47.418 10.243c0 .838-.248 1.505-.745 2.003-.564.592-1.3.888-2.204.888-.866 0-1.603-.3-2.208-.9-.606-.6-.909-1.345-.909-2.233 0-.889.303-1.633.91-2.233.604-.6 1.341-.9 2.207-.9.43 0 .841.083 1.231.25.391.168.704.391.938.67l-.527.528c-.397-.475-.944-.712-1.643-.712-.632 0-1.178.222-1.639.666-.461.444-.69 1.021-.69 1.73 0 .71.229 1.286.69 1.73a2.282 2.282 0 001.639.666c.67 0 1.23-.223 1.676-.67.29-.29.458-.696.503-1.215h-2.179v-.72h2.907c.03.156.043.307.043.452zM52.028 7.737h-2.732V9.64h2.464v.721h-2.464v1.902h2.732V13h-3.503V7h3.503v.737zM55.279 13h-.771V7.737h-1.676V7h4.123v.737h-1.676V13zM59.938 13V7h.771v6h-.771zM64.128 13h-.77V7.737H61.68V7h4.123v.737h-1.676V13zM73.609 12.225c-.59.606-1.323.91-2.2.91-.877 0-1.61-.304-2.2-.91-.59-.606-.883-1.348-.883-2.225s.294-1.619.884-2.225c.589-.606 1.322-.91 2.199-.91.872 0 1.604.305 2.196.914.592.61.888 1.35.888 2.221 0 .877-.295 1.62-.884 2.225zm-3.83-.503a2.2 2.2 0 001.63.674c.643 0 1.187-.225 1.63-.674.444-.45.667-1.024.667-1.722s-.223-1.272-.667-1.722a2.199 2.199 0 00-1.63-.674c-.643 0-1.186.225-1.63.674-.443.45-.666 1.024-.666 1.722s.223 1.272.666 1.722zM75.575 13V7h.938l2.916 4.667h.033l-.033-1.156v-3.51h.77v6h-.804l-3.051-4.895h-.033l.033 1.156V13h-.77z"
													></path>
													<path
														stroke="#fff"
														strokeMiterlimit="10"
														strokeWidth="0.2"
														d="M47.418 10.243c0 .838-.248 1.505-.745 2.003-.564.592-1.3.888-2.204.888-.866 0-1.603-.3-2.208-.9-.606-.6-.909-1.345-.909-2.233 0-.889.303-1.633.91-2.233.604-.6 1.341-.9 2.207-.9.43 0 .841.083 1.231.25.391.168.704.391.938.67l-.527.528c-.397-.475-.944-.712-1.643-.712-.632 0-1.178.222-1.639.666-.461.444-.69 1.021-.69 1.73 0 .71.229 1.286.69 1.73a2.282 2.282 0 001.639.666c.67 0 1.23-.223 1.676-.67.29-.29.458-.696.503-1.215h-2.179v-.72h2.907c.03.156.043.307.043.452zM52.028 7.737h-2.732V9.64h2.464v.721h-2.464v1.902h2.732V13h-3.503V7h3.503v.737zM55.279 13h-.771V7.737h-1.676V7h4.123v.737h-1.676V13zM59.938 13V7h.771v6h-.771zM64.128 13h-.77V7.737H61.68V7h4.123v.737h-1.676V13zM73.609 12.225c-.59.606-1.323.91-2.2.91-.877 0-1.61-.304-2.2-.91-.59-.606-.883-1.348-.883-2.225s.294-1.619.884-2.225c.589-.606 1.322-.91 2.199-.91.872 0 1.604.305 2.196.914.592.61.888 1.35.888 2.221 0 .877-.295 1.62-.884 2.225zm-3.83-.503a2.2 2.2 0 001.63.674c.643 0 1.187-.225 1.63-.674.444-.45.667-1.024.667-1.722s-.223-1.272-.667-1.722a2.199 2.199 0 00-1.63-.674c-.643 0-1.186.225-1.63.674-.443.45-.666 1.024-.666 1.722s.223 1.272.666 1.722zM75.575 13V7h.938l2.916 4.667h.033l-.033-1.156v-3.51h.77v6h-.804l-3.051-4.895h-.033l.033 1.156V13h-.77z"
													></path>
													<g filter="url(#filter0_ii_2092_139931)">
														<path
															fill="url(#paint0_linear_2092_139931)"
															d="M10.436 7.538c-.29.308-.463.786-.463 1.405v22.116c0 .62.172 1.097.463 1.405l.074.072 12.39-12.39v-.291L10.51 7.465l-.074.073z"
														></path>
														<path
															fill="url(#paint1_linear_2092_139931)"
															d="M27.028 24.278l-4.13-4.131v-.292l4.13-4.13.094.053 4.893 2.78c1.397.794 1.397 2.093 0 2.888l-4.893 2.78-.094.052z"
														></path>
														<g filter="url(#filter1_i_2092_139931)">
															<path
																fill="url(#paint2_linear_2092_139931)"
																d="M27.122 24.225l-4.224-4.224-12.462 12.463c.46.488 1.221.548 2.078.062l14.608-8.301z"
															></path>
														</g>
														<path
															fill="url(#paint3_linear_2092_139931)"
															d="M27.122 15.777l-14.608-8.3c-.857-.487-1.618-.426-2.078.062l12.463 12.463 4.223-4.225z"
														></path>
													</g>
													<rect
														width="134"
														height="39"
														x="0.5"
														y="0.5"
														stroke="#A6A6A6"
														rx="4.5"
													></rect>
													<defs>
														<filter
															id="filter0_ii_2092_139931"
															width="23.089"
															height="25.721"
															x="9.973"
															y="7.141"
															colorInterpolationFilters="sRGB"
															filterUnits="userSpaceOnUse"
														>
															<feFlood
																floodOpacity="0"
																result="BackgroundImageFix"
															></feFlood>
															<feBlend
																in="SourceGraphic"
																in2="BackgroundImageFix"
																result="shape"
															></feBlend>
															<feColorMatrix
																in="SourceAlpha"
																result="hardAlpha"
																values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															></feColorMatrix>
															<feOffset dy="-0.15"></feOffset>
															<feComposite
																in2="hardAlpha"
																k2="-1"
																k3="1"
																operator="arithmetic"
															></feComposite>
															<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
															<feBlend
																in2="shape"
																result="effect1_innerShadow_2092_139931"
															></feBlend>
															<feColorMatrix
																in="SourceAlpha"
																result="hardAlpha"
																values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															></feColorMatrix>
															<feOffset dy="0.15"></feOffset>
															<feComposite
																in2="hardAlpha"
																k2="-1"
																k3="1"
																operator="arithmetic"
															></feComposite>
															<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
															<feBlend
																in2="effect1_innerShadow_2092_139931"
																result="effect2_innerShadow_2092_139931"
															></feBlend>
														</filter>
														<filter
															id="filter1_i_2092_139931"
															width="16.686"
															height="12.86"
															x="10.436"
															y="20.001"
															colorInterpolationFilters="sRGB"
															filterUnits="userSpaceOnUse"
														>
															<feFlood
																floodOpacity="0"
																result="BackgroundImageFix"
															></feFlood>
															<feBlend
																in="SourceGraphic"
																in2="BackgroundImageFix"
																result="shape"
															></feBlend>
															<feColorMatrix
																in="SourceAlpha"
																result="hardAlpha"
																values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															></feColorMatrix>
															<feOffset dy="-0.15"></feOffset>
															<feComposite
																in2="hardAlpha"
																k2="-1"
																k3="1"
																operator="arithmetic"
															></feComposite>
															<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
															<feBlend
																in2="shape"
																result="effect1_innerShadow_2092_139931"
															></feBlend>
														</filter>
														<linearGradient
															id="paint0_linear_2092_139931"
															x1="21.801"
															x2="5.019"
															y1="8.709"
															y2="25.491"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#00A0FF"></stop>
															<stop
																offset="0.007"
																stopColor="#00A1FF"
															></stop>
															<stop
																offset="0.26"
																stopColor="#00BEFF"
															></stop>
															<stop
																offset="0.512"
																stopColor="#00D2FF"
															></stop>
															<stop
																offset="0.76"
																stopColor="#00DFFF"
															></stop>
															<stop
																offset="1"
																stopColor="#00E3FF"
															></stop>
														</linearGradient>
														<linearGradient
															id="paint1_linear_2092_139931"
															x1="33.833"
															x2="9.638"
															y1="20.001"
															y2="20.001"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#FFE000"></stop>
															<stop
																offset="0.409"
																stopColor="#FFBD00"
															></stop>
															<stop
																offset="0.775"
																stopColor="orange"
															></stop>
															<stop
																offset="1"
																stopColor="#FF9C00"
															></stop>
														</linearGradient>
														<linearGradient
															id="paint2_linear_2092_139931"
															x1="24.828"
															x2="2.07"
															y1="22.295"
															y2="45.053"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#FF3A44"></stop>
															<stop
																offset="1"
																stopColor="#C31162"
															></stop>
														</linearGradient>
														<linearGradient
															id="paint3_linear_2092_139931"
															x1="7.297"
															x2="17.46"
															y1="0.177"
															y2="10.339"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#32A071"></stop>
															<stop
																offset="0.069"
																stopColor="#2DA771"
															></stop>
															<stop
																offset="0.476"
																stopColor="#15CF74"
															></stop>
															<stop
																offset="0.801"
																stopColor="#06E775"
															></stop>
															<stop
																offset="1"
																stopColor="#00F076"
															></stop>
														</linearGradient>
													</defs>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}
