import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { BsFillStarFill } from 'react-icons/bs'

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

			<NavBar />
			<HeroSection />
			<div className="relative w-full text-center pt-6 pb-6 bg-white/50 ">
				<p className="font-bold text-sm uppercase tracking-widest text-gray-600 ">
					Powering over 252K developers to land their dream job
				</p>
				<div className="w-full flex-col">
					<div className="flex justify-center items-center w-full my-12">
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[42px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="google"
									viewBox="0 0 103 33"
								>
									<path d="M13 0h1c3 0 6.2 1.3 8.4 3.5L20 6A9.4 9.4 0 0 0 8.4 5a9.4 9.4 0 0 0-2 13.8c1.7 2 4.2 3.2 6.7 3.3a9 9 0 0 0 6.7-2.3c1.4-1.1 2-3 2.2-4.7h-8.5v-3.4h12c.6 3.7-.3 8-3.2 10.6-2 2-4.6 3-7.3 3.2a13.1 13.1 0 0 1-13.8-8.4A12.4 12.4 0 0 1 6 2.5C7.9 1 10.5.2 13 0Zm68.7.9h3.7V25h-3.7V.9ZM33.6 9.3c2.3-.4 4.7 0 6.6 1.4a8.3 8.3 0 0 1 1.6 11.9 8.4 8.4 0 0 1-7 3 8.4 8.4 0 0 1-6.3-3.3 8.4 8.4 0 0 1-1.2-7.7 8.1 8.1 0 0 1 6.3-5.3Zm.5 3.2c-1 .2-1.8.8-2.4 1.5-1.6 2-1.5 5.2.3 7a4.6 4.6 0 0 0 7.2-1c1.2-2 .9-4.9-.9-6.4a4.7 4.7 0 0 0-4.2-1.1Zm17.7-3.2c2.5-.5 5.4.2 7.3 2 3.2 2.8 3.5 8 .8 11.3a8.4 8.4 0 0 1-6.9 3 8.3 8.3 0 0 1-6.4-3.3 8.5 8.5 0 0 1-1-7.9 8.1 8.1 0 0 1 6.2-5.1Zm.5 3.2c-1 .2-1.8.8-2.4 1.5-1.7 2-1.6 5 .2 7a4.6 4.6 0 0 0 7.3-1c1.1-2 .8-4.9-1-6.4a4.6 4.6 0 0 0-4.1-1.1Z"></path>
									<path d="M67.2 10.3a7 7 0 0 1 6.7-.5c.6.2 1.2.7 1.7 1.2V9.6h3.5v15c0 2.3-.6 4.6-2.3 6.3a8.2 8.2 0 0 1-13-2.7l3.2-1.4a4.7 4.7 0 0 0 3.3 2.9c1.5.2 3.3-.1 4.3-1.4 1-1.3 1-3 1-4.6a6 6 0 0 1-2.8 1.7c-2.4.6-5-.2-6.8-1.8a8.3 8.3 0 0 1 1.2-13.3Zm3.5 2.1A5 5 0 0 0 68 14a5.4 5.4 0 0 0 0 6.8c1 1 2.4 1.7 3.9 1.5 1.3-.1 2.6-1 3.2-2.1 1.2-2 1-4.7-.5-6.4-1-1-2.5-1.6-3.9-1.4Zm19.1-1.3c2-1.9 5.2-2.5 7.8-1.5 2.5 1 4.1 3.3 5 5.7l-11.2 4.6c.5 1 1.3 1.8 2.4 2.2a4.8 4.8 0 0 0 5.8-2l2.8 1.8a8.3 8.3 0 0 1-6 3.6c-2.7.4-5.5-.7-7.3-2.7a8.6 8.6 0 0 1 .7-11.7Zm1.8 3.2c-.6.8-.8 1.8-.8 2.8l7.5-3a3 3 0 0 0-2.5-1.7c-1.6-.3-3.3.5-4.2 1.9Z"></path>
								</symbol>
							</defs>
							<use href="#google"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[42px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="apple"
									viewBox="0 0 106 36"
								>
									<path d="M24.6 19.1c0-4.5 3.7-6.7 3.9-6.8a8.4 8.4 0 0 0-6.6-3.6c-2.8-.3-5.5 1.7-7 1.7-1.3 0-3.5-1.7-5.9-1.6-3 0-5.8 1.8-7.4 4.5C-1.6 18.8.8 27 3.9 31.4c1.5 2.2 3.3 4.7 5.6 4.6 2.3 0 3.2-1.5 6-1.5 2.7 0 3.5 1.5 5.9 1.5 2.4-.1 4-2.3 5.5-4.5 1.7-2.5 2.4-5 2.5-5.1 0 0-4.8-1.8-4.8-7.3ZM20 5.8A8 8 0 0 0 22 0a8 8 0 0 0-5.3 2.7 7.5 7.5 0 0 0-2 5.6c2.1.2 4.2-1 5.4-2.5m20.3 17.8-2 6.3h-2.7l6.8-20h3.1l6.9 20h-2.8l-2.1-6.3h-7.2Zm6.6-2-2-5.8-1-3.7-1 3.7-2 5.8h6Zm7.5-1.4-.1-4.7h2.3L57 18c1-1.8 2.8-2.8 5.1-2.8 3.5 0 6.1 3 6.1 7.3 0 5.2-3.1 7.8-6.5 7.8a5 5 0 0 1-4.4-2.3H57v7.8h-2.6V20.2Zm2.6 3.9.1 1a4 4 0 0 0 4 3.1c2.7 0 4.3-2.3 4.3-5.6 0-2.9-1.5-5.3-4.3-5.3a4.2 4.2 0 0 0-4 3.2v3.6H57Zm13.8-3.9-.2-4.7h2.4l.1 2.5a5.7 5.7 0 0 1 5.2-2.8c3.5 0 6.1 3 6.1 7.3 0 5.2-3.2 7.8-6.6 7.8a5 5 0 0 1-4.4-2.3v7.8h-2.6V20.2Zm2.6 3.9v1a4 4 0 0 0 4 3.1c2.8 0 4.4-2.3 4.4-5.6 0-2.9-1.5-5.3-4.3-5.3a4.2 4.2 0 0 0-4 3.2l-.1 1v2.6ZM87.2 8.8h2.6v21.1h-2.6V8.8Zm8 14.4c0 3.5 2.2 5 4.8 5 2 0 3-.3 4-.7l.5 1.8c-1 .4-2.5 1-4.8 1-4.4 0-7.1-3-7.1-7.3 0-4.4 2.6-7.8 6.8-7.8 4.7 0 6 4.1 6 6.8l-.2 1.2h-10Zm7.6-1.9c0-1.7-.7-4.2-3.6-4.2-2.7 0-3.9 2.4-4 4.2h7.6Z"></path>
								</symbol>
							</defs>
							<use href="#apple"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[36px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="meta"
									viewBox="0 0 115 23"
								>
									<path d="M42.4.7h4.3L54.1 14 61.5.7h4.2v21.9h-3.5V5.8l-6.5 11.6h-3.3L45.9 5.8v16.8h-3.5V.7ZM77 23c-1.6 0-3-.4-4.2-1.1a7.6 7.6 0 0 1-3-3 10.5 10.5 0 0 1 0-8.9 7.6 7.6 0 0 1 7-4c1.6 0 2.9.3 4 1s2 1.8 2.6 3.1c.6 1.3 1 2.9 1 4.7v1h-12c.1 1.3.7 2.3 1.5 3 .9.8 2 1.2 3.3 1.2 1 0 2-.1 2.7-.5a7 7 0 0 0 2.2-1.4l1.8 2.3a9.8 9.8 0 0 1-6.8 2.6Zm2.7-13a3.9 3.9 0 0 0-3-1.1 4 4 0 0 0-2.9 1.1c-.8.8-1.3 1.8-1.5 3.1H81a4.9 4.9 0 0 0-1.2-3Zm8.9-.8h-3.3V6.3h3.3V1.5H92v4.8h5v2.9h-5v7.3c0 1.2.2 2.1.6 2.6.4.5 1.1.8 2.2.8a10 10 0 0 0 2.1-.2v2.9a9.6 9.6 0 0 1-2.8.4c-3.7 0-5.5-2-5.5-6V9.1Zm26.1 13.4h-3.4v-2.3a6 6 0 0 1-2.2 2c-1 .5-2 .7-3.2.7a7 7 0 0 1-3.8-1.1c-1-.7-2-1.8-2.6-3a10.6 10.6 0 0 1 0-8.9 7.1 7.1 0 0 1 6.6-4.1 6 6 0 0 1 3 .7 6 6 0 0 1 2.2 1.8V6.3h3.4v16.3ZM111.3 12a4.6 4.6 0 0 0-4.5-3c-1.4 0-2.6.5-3.5 1.5-.8 1-1.3 2.3-1.3 4 0 1.6.5 3 1.3 4 .8.9 2 1.4 3.4 1.4 1 0 2-.3 2.8-.8.8-.6 1.4-1.3 1.8-2.2V12Zm-107 3.2c0 1.3.2 2.3.6 3 .5.7 1.3 1 2 1 1 0 1.9-.2 3.6-2.6 1.4-1.9 3-4.5 4.1-6.2l1.9-2.9c1.2-2 2.7-4.1 4.4-5.6A6.8 6.8 0 0 1 25.3 0c2.6 0 5 1.5 6.8 4.2 2 3 3 6.9 3 10.8 0 2.3-.4 4-1.2 5.4a5.2 5.2 0 0 1-4.7 2.6v-3.7c2.1 0 2.6-2 2.6-4.2 0-3.2-.7-6.7-2.3-9.3C28.3 4.1 26.8 3 25.2 3c-1.8 0-3.3 1.3-4.9 3.7l-2.7 4.6-1.1 2a48.7 48.7 0 0 1-3.9 6.2C10.7 22 9.1 23 7 23a5.6 5.6 0 0 1-5.2-2.8A10 10 0 0 1 .5 15l3.8.2Z"></path>
									<path d="M3.5 4.5C5.2 1.8 7.7 0 10.5 0c1.6 0 3.3.5 5 1.9 1.8 1.5 3.8 4 6.3 8.1l1 1.5c2 3.6 3.3 5.4 4 6.3 1 1.1 1.6 1.5 2.4 1.5 2.1 0 2.6-2 2.6-4.2l3.3-.1c0 2.3-.4 4-1.2 5.4a5.2 5.2 0 0 1-4.7 2.6c-1.5 0-3-.3-4.4-1.8-1.2-1-2.5-3-3.6-4.7l-3-5.2a29 29 0 0 0-4-5.5c-.8-.9-2-2-3.8-2-1.4 0-2.7 1-3.7 2.6l-3.2-2Z"></path>
									<path d="M10.4 3.8c-1.4 0-2.7 1-3.7 2.6a16.7 16.7 0 0 0-2.4 8.8c0 1.3.2 2.3.6 3l-3.2 2A10 10 0 0 1 .5 15c0-3.7 1-7.5 3-10.5C5.2 1.8 7.7 0 10.5 0v3.8Z"></path>
								</symbol>
							</defs>
							<use href="#meta"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[42px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="microsoft"
									viewBox="0 0 160 34"
								>
									<path d="M66.3 6.8v20.4h-3.5v-16l-6.4 16H54l-6.4-16v16h-3.4V6.8h5.1l5.9 15.1h.1l6.2-15.1h4.8Zm3 1.6c0-.6.1-1 .5-1.5a3 3 0 0 1 1.5-.5 2 2 0 0 1 1.5.5 2 2 0 0 1 0 2.9c-.4.4-.9.5-1.5.5a2 2 0 0 1-1.5-.5c-.3-.4-.6-1-.6-1.4Zm3.8 4.2v14.6h-3.5V12.6h3.5Zm10.4 12.1c.5 0 1-.1 1.7-.4.6-.2 1.2-.5 1.7-1v3.3a6 6 0 0 1-1.9.7l-2.3.2a7 7 0 0 1-7.3-7.2c0-2.4.7-4.3 2-5.8a8 8 0 0 1 6-2.3 8.7 8.7 0 0 1 3.4.8v3.3c-.5-.3-1-.7-1.6-.9-.5-.1-1.1-.3-1.7-.3-1.3 0-2.4.4-3.3 1.3A5 5 0 0 0 79 20c0 1.5.4 2.7 1.2 3.5.8.8 2 1.2 3.3 1.2Zm13.2-12.4a3.8 3.8 0 0 1 1.3.2V16l-.8-.4-1.3-.2c-.8 0-1.6.4-2.1 1.1a5 5 0 0 0-1 3.3v7.4h-3.4V12.6H93v2.3c.4-.8.8-1.4 1.4-2a6 6 0 0 1 2.4-.6Zm1.5 7.8a8 8 0 0 1 2-5.7 7.5 7.5 0 0 1 5.7-2.2 7 7 0 0 1 5.3 2 8 8 0 0 1 2 5.6 8 8 0 0 1-2 5.7 7.4 7.4 0 0 1-5.7 2c-2.2 0-4-.6-5.3-2a7.6 7.6 0 0 1-2-5.4Zm3.6-.1c0 1.5.3 2.7 1 3.5.7.8 1.7 1.2 3 1.2 1.2 0 2.2-.4 2.9-1.2.6-.8 1-2 1-3.6s-.4-2.8-1-3.6a3.5 3.5 0 0 0-2.9-1.2c-1.3 0-2.2.4-2.9 1.2-.8 1-1.1 2.1-1.1 3.7Zm16.5-3.6c0 .5.1 1 .5 1.2.3.3 1 .6 2 1 1.4.6 2.4 1.2 3 1.9.5.7.8 1.5.8 2.5a4 4 0 0 1-1.6 3.3c-1 .9-2.5 1.2-4.3 1.2a11.2 11.2 0 0 1-4-.8v-3.4c.7.5 1.4.8 2 1 .8.3 1.5.4 2 .4.8 0 1.4 0 1.8-.3.3-.2.5-.6.5-1 0-.5-.2-1-.5-1.3l-2.2-1.1a6.5 6.5 0 0 1-2.7-1.8 4 4 0 0 1-.8-2.6 4 4 0 0 1 1.6-3.2c1-.9 2.4-1.3 4-1.3a19 19 0 0 1 3.3.6v3.4l-1.6-.8a5 5 0 0 0-1.8-.4 3 3 0 0 0-1.5.4c-.3.3-.5.7-.5 1.1Zm7.7 3.7a8 8 0 0 1 2-5.7 7.5 7.5 0 0 1 5.7-2.2 7 7 0 0 1 5.4 2c1.2 1.4 2 3.3 2 5.6a8 8 0 0 1-2.1 5.7 7.4 7.4 0 0 1-5.6 2 7 7 0 0 1-5.4-2 7.8 7.8 0 0 1-2-5.4Zm3.6-.1c0 1.5.4 2.7 1 3.5a4 4 0 0 0 3 1.2c1.3 0 2.3-.4 3-1.2.6-.8 1-2 1-3.6s-.4-2.8-1-3.6a3.5 3.5 0 0 0-3-1.2c-1.2 0-2.1.4-2.8 1.2-.8 1-1.2 2.1-1.2 3.7Zm22.9-4.6h-5.2v11.8h-3.5V15.4h-2.4v-2.8h2.4v-2c0-1.6.6-2.9 1.5-3.8 1-1 2.3-1.5 3.9-1.5h1.1l.9.2v3l-.7-.2-1-.2c-.7 0-1.2.3-1.6.7-.4.4-.6 1.1-.6 2v1.7h5.2V9.2l3.4-1v4.3h3.5v2.8H156v6.9c0 .9.2 1.5.5 1.9.3.4.8.6 1.6.6l.7-.2c.3 0 .5-.2.7-.3V27c-.3.2-.6.2-1.1.3l-1.5.2c-1.5 0-2.6-.4-3.3-1.1-.7-.8-1-2-1-3.5v-7.5ZM16.1 0H0v16.1h16.1V0ZM34 0H17.8v16.1H34V0ZM16.1 17.9H0V34h16.1V17.9Zm17.9 0H17.8V34H34V17.9Z"></path>
								</symbol>
							</defs>
							<use href="#microsoft"></use>
						</svg>
					</div>
					<div className="flex justify-center items-center w-full my-12">
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[34px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="netflix"
									viewBox="0 0 126 35"
								>
									<path d="M83.8 0v25.5l9.1.5v5.4a434 434 0 0 0-14.4-.7V0h5.3ZM126 0l-7 16.6 7 18.4-6-.8-4-10.4-3.9 9.4-5.5-.6 6.7-16.1L107.1 0h5.8l3.4 9.2 3.9-9.2h5.8ZM60.3 30.4V0h14.8v5.5h-9.5v7h7.2V18h-7.2v12.5h-5.3Zm-19.8-25V0h16.4v5.5h-5.5v25l-5.3.2V5.5h-5.6Zm-18.1 27V0H37v5.5h-9.4v7.3h7.1v5.4h-7.1v8.2l9.4-.6v5.4c-5 .3-9.8.6-14.7 1.1ZM12 19.8V0h5.3v32.8l-5.8.7-6.2-18.3v19L0 35V0h5l7 19.8Zm85.3 12V0h5.3v32.2l-5.3-.4Z"></path>
								</symbol>
							</defs>
							<use href="#netflix"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[42px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="amazon"
									viewBox="0 0 113 34"
								>
									<path d="M70 26.6a43.9 43.9 0 0 1-53.9-3.9c-.6-.6 0-1.3.7-.9a59.6 59.6 0 0 0 52.3 3.3c1-.5 2 .7 1 1.5Z"></path>
									<path d="M72.7 23.5c-.8-1.1-5.5-.5-7.6-.3-.7 0-.8-.5-.2-.9 3.8-2.6 10-1.8 10.6-1 .8 1-.1 7-3.7 10-.5.5-1 .2-.8-.4.8-2 2.6-6.4 1.7-7.4ZM65.2 3.7V1.1c0-.3.3-.6.7-.6h11.5c.3 0 .6.3.6.6v2.2c0 .4-.3.9-.8 1.7l-6 8.4c2.2 0 4.6.3 6.6 1.5.4.2.5.6.6 1v2.7c0 .4-.4.8-.9.6-3.5-1.9-8.2-2-12.1 0-.4.2-.8-.2-.8-.6V16c0-.4 0-1.1.4-1.8l7-9.8h-6a.7.7 0 0 1-.7-.7Zm-41.8 16h-3.5a.7.7 0 0 1-.6-.6v-18c0-.3.3-.5.6-.5h3.3c.3 0 .6.2.6.5v2.4c1-2.3 2.5-3.3 4.7-3.3s3.5 1 4.5 3.3A5 5 0 0 1 37.8.2a5 5 0 0 1 4 2c1.2 1.4 1 3.6 1 5.5v11.4c0 .3-.4.6-.7.6h-3.5a.7.7 0 0 1-.6-.6V9.6l-.1-3.4c-.3-1.2-1-1.5-2-1.5S34 5.2 33.6 6c-.3 1-.3 2.4-.3 3.5V19c0 .3-.3.6-.7.6h-3.5a.7.7 0 0 1-.6-.6V9.6c0-2 .3-5-2.1-5-2.6 0-2.5 2.9-2.5 5V19c0 .3-.3.6-.6.6ZM88 .2c5 0 7.9 4.4 7.9 10 0 5.5-3.1 9.9-8 9.9-5 0-7.9-4.5-7.9-10C80 4.5 83 0 88 0Zm0 3.6c-2.6 0-2.8 3.5-2.8 5.7s0 6.9 2.7 6.9 2.8-3.8 2.8-6c0-1.6 0-3.4-.5-4.8-.4-1.3-1.2-1.8-2.3-1.8Zm14.6 15.9h-3.5a.7.7 0 0 1-.6-.6V1c0-.3.3-.5.7-.5h3.2c.3 0 .6.2.6.5v2.7h.1c1-2.5 2.3-3.6 4.8-3.6 1.5 0 3 .5 4 2s1 4 1 5.7V19c0 .4-.4.6-.7.6h-3.5a.7.7 0 0 1-.6-.6V9.4c0-2 .2-4.8-2.2-4.8-.9 0-1.7.6-2 1.4a8 8 0 0 0-.6 3.4v9.7c0 .3-.3.6-.7.6ZM56 11.1v-.7c-2.4 0-5.1.5-5.1 3.5 0 1.5.8 2.5 2.1 2.5 1 0 1.9-.6 2.4-1.5.7-1.3.7-2.4.7-3.8Zm3.6 8.6c-.2.2-.6.2-.8 0-1.2-1-1.4-1.4-2-2.3-2 2-3.3 2.6-5.8 2.6-3 0-5.2-1.9-5.2-5.5a6 6 0 0 1 3.7-5.7c2-.8 4.6-1 6.6-1.2V7c0-.8 0-1.8-.4-2.5-.5-.6-1.3-.9-2-.9-1.3 0-2.5.7-2.8 2.1 0 .3-.3.6-.6.6L46.9 6c-.3 0-.6-.3-.5-.8.8-4 4.5-5.3 7.8-5.3 1.7 0 4 .5 5.3 1.7 1.7 1.6 1.5 3.7 1.5 6v5.5c0 1.6.7 2.3 1.3 3.2.2.3.3.7 0 1l-2.7 2.3Zm-49.3-8.6v-.7c-2.5 0-5.2.5-5.2 3.5 0 1.5.8 2.5 2.1 2.5 1 0 1.9-.6 2.5-1.5.6-1.3.6-2.4.6-3.8Zm3.5 8.6c-.2.2-.5.2-.8 0-1.2-1-1.4-1.4-2-2.3-2 2-3.3 2.6-5.8 2.6C2.3 20 0 18 0 14.5a6 6 0 0 1 3.7-5.7c2-.8 4.6-1 6.6-1.2V7c0-.8 0-1.8-.4-2.5-.4-.6-1.3-.9-2-.9-1.3 0-2.5.7-2.8 2.1 0 .3-.3.6-.6.6L1.1 6c-.3 0-.6-.3-.5-.8.8-4 4.5-5.3 7.8-5.3 1.7 0 4 .5 5.3 1.7 1.7 1.6 1.5 3.7 1.5 6v5.5c0 1.6.7 2.3 1.3 3.2.3.3.3.7 0 1l-2.7 2.3Z"></path>
								</symbol>
							</defs>
							<use href="#amazon"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[42px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="adobe"
									viewBox="0 0 134 35"
								>
									<path d="M15.5 0H1v35L15.5 0Zm10.3 0h14.6v35L25.8 0Zm-5.1 12.9L30 35h-6.1L21 28h-6.8l6.4-15.1Zm43.6 9.4 1.7 5h3.7c.1 0 .2 0 .1-.2L63 8.1c0-.2 0-.2-.2-.2h-4.1c-.2 0-.2 0-.2.2 0 1-.2 1.3-.3 1.6l-6.1 17.4c0 .2 0 .3.2.3h3c.2 0 .2 0 .3-.3l1.6-4.8h7.1ZM58.2 19l2.5-8.1 2.7 8.1h-5.2Zm20.5 8.7a14 14 0 0 0 5.6-1.2l.1-.2V6.4l-.2-.1h-3.3l-.1.2v6h-1.3c-5.2 0-8.4 3.4-8.4 7.7 0 5 3.3 7.5 7.6 7.5Zm2-3.3-1.7.2c-2.3 0-4.3-1.3-4.3-4.6 0-2.8 2-4.5 4.7-4.5.5 0 1 0 1.4.2v8.7Zm14.1-11.9c-4.5 0-7.3 3.4-7.3 7.6 0 3.8 2.2 7.6 7.2 7.6 4.2 0 7.1-3.1 7.1-7.7 0-4-2.5-7.5-7-7.5Zm-.2 3c2.5 0 3.6 2.1 3.6 4.6 0 3-1.6 4.6-3.4 4.6-2.3 0-3.6-2-3.6-4.7 0-2.8 1.4-4.5 3.4-4.5Zm10.6-9.2c-.2 0-.3 0-.3.2v20.3s.1.2.3.2c1.4.5 2.9.7 4.4.7 4.4 0 8.7-2.7 8.7-8.2 0-4-2.8-7-7-7-1 0-2 .1-2.7.4V6.5c0-.2-.1-.2-.3-.2h-3.1Zm9.4 13.5c0 3.3-2.2 4.9-4.7 4.9-.5 0-1 0-1.3-.2V16c.4-.2 1-.4 2-.4 2.4 0 4 1.5 4 4.3Zm15.7 1.1 3-.1c.2 0 .3-.1.3-.2l.1-1.9c0-2.8-1.7-6.2-6-6.2-4.5 0-7 3.6-7 7.7 0 3.7 2 7.5 7.3 7.5 2 0 3.3-.3 4.5-.9l.1-.3V24c0-.1 0-.1-.1 0-1.2.4-2.4.6-3.7.6-3 0-4.4-1.6-4.5-3.7h6Zm-6-2.6c.2-1.4 1.2-3 3.2-3 2.3 0 2.9 2 2.9 2.8v.2h-6.1Z"></path>
								</symbol>
							</defs>
							<use href="#adobe"></use>
						</svg>
						<svg
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[160px] h-[46px] mx-4 fill-zinc-600"
							width="200"
							height="80"
						>
							<defs>
								<symbol
									xmlns="http://www.w3.org/2000/svg"
									id="notion"
									viewBox="0 0 154 54"
								>
									<path d="M32.8.1 3.2 2.3C.8 2.5 0 4.1 0 6v32.8c0 1.4.5 2.7 1.8 4.4l7 9.1c1 1.5 2.1 1.8 4.3 1.7l34.3-2.1c3-.2 3.8-1.6 3.8-3.9V11.1c0-1.1-.5-1.5-1.9-2.5l-.2-.2-9.5-6.7C37.4 0 36.4-.2 32.8.1Zm-19 10.4c-2.8.2-3.4.3-5-1l-4-3.3c-.4-.4-.2-1 .8-1L34 3a6 6 0 0 1 4.6 1.3L43.5 8c.2.1.7.7 0 .7l-29.3 1.8H14Zm-3.2 37.2V16.4c0-1.4.4-2 1.6-2.1l33.8-2c1.1-.1 1.6.6 1.6 2v31c0 1.4-.2 2.6-2 2.7l-32.3 1.9c-1.9 0-2.7-.5-2.7-2.2ZM42.4 18c.2 1 0 1.9-.9 2l-1.6.3v23a8 8 0 0 1-3.6 1.2c-1.6 0-2-.5-3.3-2L22.8 26.3V42l3.2.7s0 2-2.6 2l-7.1.4c-.2-.5 0-1.5.7-1.7l1.9-.5V22.2l-2.6-.2c-.2-1 .3-2.3 1.8-2.5l7.6-.5 10.6 16.4V20.9l-2.7-.3c-.2-1.2.6-2 1.7-2.1l7.1-.4Zm31.4 20.2V24h.3l10.1 14.3h3.2v-21H84v14.3h-.3L73.5 17.3h-3.3v21h3.6Zm23.7.3c4.7 0 7.5-3.1 7.5-8.3 0-5.1-2.8-8.2-7.5-8.2s-7.6 3.1-7.6 8.2c0 5.2 2.9 8.3 7.6 8.3Zm0-3c-2.5 0-4-2-4-5.3s1.5-5.2 4-5.2c2.4 0 3.9 2 3.9 5.2 0 3.3-1.4 5.3-4 5.3Zm10.8-17.1v4h-2.5v2.9h2.5V34c0 3 1.4 4.3 5 4.3l1.9-.1v-2.9l-1.2.1c-1.5 0-2.2-.7-2.2-2.3v-7.7h3.4v-3h-3.4v-3.9h-3.5Zm9 19.8h3.6v-16h-3.6v16Zm1.8-18.5c1.2 0 2.1-1 2.1-2.2 0-1.2-1-2.2-2.1-2.2-1.2 0-2.1 1-2.1 2.2 0 1.2 1 2.2 2 2.2Zm11.5 18.8c4.7 0 7.5-3.1 7.5-8.3 0-5.1-2.8-8.2-7.5-8.2s-7.6 3.1-7.6 8.2c0 5.2 2.9 8.3 7.6 8.3Zm0-3c-2.5 0-4-2-4-5.3s1.5-5.2 4-5.2 3.9 2 3.9 5.2c0 3.3-1.4 5.3-4 5.3Zm9.7 2.7h3.5V29c0-2.3 1.3-3.8 3.5-3.8 2.1 0 3.1 1.2 3.1 3.6v9.5h3.6V28c0-3.8-2-6-5.4-6-2.4 0-4 1.2-4.7 3h-.2v-2.6h-3.4v15.9Z"></path>
								</symbol>
							</defs>
							<use href="#notion"></use>
						</svg>
					</div>
				</div>
			</div>

			<div className="w-full h-36 flex justify-center items-center bg-zinc-50/50 border-t border-b border-gray-100">
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex flex-col justify-center items-center w-80 border-r border-gray-200">
						<p className="text-5xl font-extrabold text-zinc-900">256K+</p>
						<p className="text-sm font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
							Developers
						</p>
					</div>
					<div className="flex flex-col justify-center items-center w-80 border-r border-gray-200">
						<p className="text-5xl font-extrabold text-zinc-900">1.4M+</p>
						<p className="text-sm font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
							Playgrounds booted
						</p>
					</div>
					<div className="flex flex-col justify-center items-center w-80 border-r border-gray-200">
						<p className="text-5xl font-extrabold text-zinc-900">228K+</p>
						<p className="text-sm font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
							Doubts solved by Jarvis
						</p>
					</div>
					<div className="flex flex-col justify-center items-center w-80">
						<p className="text-5xl font-extrabold text-zinc-900">100K+</p>
						<p className="text-sm font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
							Hours of learning
						</p>
					</div>
				</div>
			</div>

			<div className="w-full h-fit bg-white py-20 px-6 grid grid-cols-3 gap-4 bg-opacity-50 bg-gradient-to-l bg-notebook-lines">
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
				<div className="w-full h-fit py-7 px-6 text-left bg-white/90 rounded-xl border border-gray-100 shadow-xl shadow-gray-400/30">
					<div className="flex w-full ">
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
						<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-2" />
					</div>
					<div className="w mt-6">
						<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 text-[18px]">
							&ldquo;I have seen so many courses but finding course that gives lecture
							+ playground to code is difficult to find. But codedamn is totally
							amazing in this perspective even quality of content is unmatchable and
							helped me many times in understanding concepts in depth.&rdquo;
						</p>
					</div>
					<div className="w-full h-px bg-gray-200 my-6"></div>
					<div className="flex justify-between">
						<div className="mx-2">
							<p className="text-gray-700 font-semibold text-lg">Ashish Kumar</p>
							<p className="text-gray-500 font-medium text-sm">Software Engineer</p>
						</div>
						<Image
							src={'/pp4.png'}
							alt={'Testimonial User Profile Picture'}
							width={50}
							height={50}
							className="rounded-full"
						/>
					</div>
				</div>
			</div>

			<div className="w-full h-[730px] border-t border-gray-200 bg-gray-50/75 py-20 px-6">
				<div className="relative h-full">
					<h4 className="uppercase text-center text-base font-bold tracking-widest text-gray-500 mb-6">
						Begin your journey with codedamn
					</h4>
					<div className="w-full h-full flex pt-10 pb-20">
						<div className="w-3/6 h-full flex items-center ">
							<div className="w-full h-full flex flex-col justify-center ">
								<div className="w-11/12 relative left-8 h-px bg-gray-200"></div>
								<ul className="w-full bg-white bg-opacity-50 ml-12">
									<li className="w-full py-4 px-[42px]">
										<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
											Learn
										</h3>
										<p className="text-base font-normal mt-1 mb-2 text-zinc-600">
											Get access to 100+ courses from renowned instructors.
										</p>
									</li>
								</ul>
								<div className="w-11/12 relative left-8 h-px bg-gray-200"></div>
								<div className="relative top-[52px] -left-36 w-8/12 h-px rotate-90 bg-gray-200"></div>
								<ul className="w-full bg-white ml-12">
									<li className="w-full py-4 px-[42px]">
										<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
											Apply
										</h3>
										<p className="text-base font-normal mt-1 mb-2 text-zinc-600">
											Build projects and boot playgrounds, all within your
											browser.
										</p>
									</li>
								</ul>
								<div className="w-11/12 relative left-8 h-px bg-gray-200"></div>
								<ul className="w-full bg-white ml-12">
									<li className="w-full py-4 px-[42px]">
										<h3 className="text-[30px] tracking-tight uppercase font-bold text-zinc-600">
											Grow
										</h3>
										<p className="text-base font-normal mt-1 mb-2 text-zinc-600">
											Upskill yourself with codedamn and land your dream job.
										</p>
									</li>
								</ul>
								<div className="w-11/12 relative left-8 h-px bg-gray-200"></div>
							</div>
						</div>

						<div className="ml-3 w-3/6 bg-white mr-12 border border-gray-200 rounded-2xl p-20">
							<div className="px-5 h-full flex flex-col gap-4">
								<button className="w-full bg-gray-50/75 flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
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
								<button className="w-full bg-zinc-900 text-white flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
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
									<button className="w-full bg-indigo-600 text-white flex items-center justify-center border border-gray-300 rounded-lg p-3 text-base font-medium">
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

			<div className="relative w-full h-[760px] flex justify-center items-center border-t border-gray-200">
				<div className="absolute top-96 rotate-45 -left-5 rounded-full w-4/12 h-5 bg-fuchsia-300 blur-3xl"></div>
				<div className="absolute bottom-64 rotate-45 -left-5 rounded-full w-4/12 h-5 bg-fuchsia-300 blur-3xl"></div>
				<div className="absolute top-96 rotate-45 left-32 rounded-full w-5/6 h-4 bg-sky-300 blur-2xl"></div>

				<div className="relative flex justify-between h-full py-20 px-6">
					<div className="w-6/12 flex justify-center items-center">
						<div className="absolute flex justify-center items-center w-[590px] h-[590px] border border-gray-300 rounded-full">
							<div className="absolute w-[470px] h-[470px] border border-gray-300 rounded-full"></div>
						</div>
						<div className="absolute bottom-12 left-6 rounded-full w-7/12 h-60 bg-white blur-2xl"></div>
						<div className="absolute bottom-20 left-64 rounded-full w-1/12 h-5 bg-sky-300 blur-3xl"></div>
						<div className="absolute bottom-20 left-80 rounded-full -rotate-[10deg] w-4/12 h-4 bg-fuchsia-300 blur-3xl"></div>
						<Image
							src={'/mobile-mockup.png'}
							alt={''}
							width={590}
							height={590}
							className="absolute"
						/>
					</div>

					<div className="relative w-6/12 flex-col py-32 px-12">
						<div className="absolute top-28 left-12 mt-20 rotate-[35deg] rounded-full w-[600px] h-7 bg-indigo-300 blur-3xl "></div>
						<h3 className="text-4xl font-bold text-gray-900 tracking-tight">
							All of codedamn at your fingertips.
						</h3>
						<p className="text-lg leading-8 my-6 text-gray-600">
							Codedamn&apos;s mobile app keeps you connected to your progress and
							enables learning programming on-the-go from anywhere around the globe.
						</p>
						<div className="py-6 flex w-full justify-betweenh-40">
							<div className="w-32 h-32">
								<Image
									src={'/codedamn-qr.png'}
									alt={''}
									width={115}
									height={115}
									className="absolute"
								/>
							</div>
							<div className="flex-col justify-between">
								<Link href={''}>
									<svg
										className="aspect-[3.375] w-full max-w-[172px] rounded"
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
										className="aspect-[3.375] w-full max-w-[172px] rounded mt-3"
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
												<stop offset="0.007" stopColor="#00A1FF"></stop>
												<stop offset="0.26" stopColor="#00BEFF"></stop>
												<stop offset="0.512" stopColor="#00D2FF"></stop>
												<stop offset="0.76" stopColor="#00DFFF"></stop>
												<stop offset="1" stopColor="#00E3FF"></stop>
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
												<stop offset="0.409" stopColor="#FFBD00"></stop>
												<stop offset="0.775" stopColor="orange"></stop>
												<stop offset="1" stopColor="#FF9C00"></stop>
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
												<stop offset="1" stopColor="#C31162"></stop>
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
												<stop offset="0.069" stopColor="#2DA771"></stop>
												<stop offset="0.476" stopColor="#15CF74"></stop>
												<stop offset="0.801" stopColor="#06E775"></stop>
												<stop offset="1" stopColor="#00F076"></stop>
											</linearGradient>
										</defs>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
