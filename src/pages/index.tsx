import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'
import TeslaProjectCodeReport from '../components/TeslaProjectCodeReport'
import GamePracticeProject from '../components/GamePracticeProject'
import JarvisHelpProject from '../components/JarvisHelpProject'
import TopCompaniesMarquee from '../components/TopCompaniesMarquee'
import SignUpSection from '../components/SignUpSection'
import GetAppSection from '../components/GetAppSection'
import TestimonialSection from '../components/TestimonialSection'
import StatsSection from '../components/StatsSection'
import BuildProjectMarquee from '../components/BuildProjectMarquee'
import HeroSection from '../components/HeroSection'

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
				<div className="relative overflow-x-clip">
					<Image
						src="/bg-img.png"
						alt="Background Image"
						width={2610}
						height={1305}
						className="absolute -top-[1rem] left-1/2 -z-10 -ml-[40rem] w-[2610px] h-[1305px] max-w-none opacity-40 sm:-ml-[67.5rem]"
						priority
					/>
				</div>
				<section>
					<HeroSection />
				</section>

				<section>
					<TopCompaniesMarquee />
				</section>

				<section>
					<div className="w-full h-fit bg-zinc-50/20 border-t border-gray-100 pt-[124px] lg:py-[124px] bg-gradient-to-l bg-big-grid-lines">
						<div className="w-full flex flex-col items-center">
							<span className="uppercase tracking-widest text-base text-center font-bold text-gray-500 mb-12 px-4">
								Explore the codedamn way
							</span>
							<div className="h-24 w-px bg-gradient-to-b from-white via-indigo-500/50 to-indigo-600 m"></div>
							<span className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-xl text-white font-bold flex justify-center items-center">
								1
							</span>
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-indigo-600 via-indigo-600 to-purple-600 bg-clip-text backdrop-blur-lg bg-white bg-opacity-50 pt-6">
								Learn
							</span>
							<h2 className="text-4xl sm:text-6xl tracking-tighter text-center font-bold text-gray-800 backdrop-blur-lg bg-white bg-opacity-50 p-4">
								Instantly and Interactively
							</h2>
							<span className="text-xl font-normal max-w-3xl leading-8 tracking-tight text-center text-gray-600 mt-2 mb-20 backdrop-blur-lg bg-white bg-opacity-50 px-6">
								Learn from carefully curated learning paths with up-to-date
								interactive courses, and receive 24x7 AI assistance as you develop
								your coding skills.
							</span>
							<div className="w-full h-fit lg:h-[380px] flex flex-col-reverse lg:flex-row px-px md:px-28 lg:px-0 max-w-screen-xl">
								<GamePracticeProject />
								<div className="w-full lg:w-fit h-full flex flex-col items-center lg:items-center order-1 lg:order-none ">
									<div className="h-28 w-px bg-gradient-to-b from-white via-gray-500/50 to-gray-600"></div>
									<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
									<div className="h-72 w-px border-l hidden lg:block border-gray-600 border-dashed"></div>
								</div>
								<div className="relative w-full lg:w-3/6 px-14 lg:py-16 flex flex-col items-center top-0 text-center lg:text-left">
									<div className="max-w-xl py-3 lg:py-6 flex flex-col items-center lg:items-start backdrop-blur-lg bg-white bg-opacity-50">
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
								<JarvisHelpProject />
								<div className="w-full lg:w-fit h-full flex flex-col items-center order-1 lg:order-none">
									<div className="h-28 w-px lg:border-l bg-gradient-to-b from-white via-gray-500 to-gray-600 lg:border-gray-600 lg:border-dashed"></div>
									<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
									<div className="h-72 w-px hidden lg:block bg-gradient-to-b from-gray-600 via-sky-600 to-sky-500"></div>
								</div>
								<div className="relative w-full lg:w-3/6 px-14 lg:py-16 flex flex-col items-center top-0 text-center lg:text-left">
									<div className="py-3 lg:py-6 max-w-xl flex flex-col items-center lg:items-start backdrop-blur-lg bg-white bg-opacity-50">
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
							<div className="h-24 w-px bg-gradient-to-b from-transparent via-sky-500/60 to-cyan-400 lg:bg-gradient-to-b lg:from-sky-500 lg:to-cyan-400 "></div>
							<span className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-xl text-white font-bold flex justify-center items-center">
								2
							</span>
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-sky-600 via-sky-500 to-cyan-400 bg-clip-text pt-6 backdrop-blur-lg bg-white bg-opacity-50">
								Apply
							</span>
							<h2 className="sm:text-6xl lg:text-6xl text-4xl tracking-tighter text-center font-bold text-gray-800 backdrop-blur-lg bg-white bg-opacity-50 p-4">
								Powerful IDE with AI Tooling
							</h2>
							<span className="text-xl max-w-3xl font-normal leading-8 tracking-tight text-center text-gray-600 my-2 backdrop-blur-lg bg-white bg-opacity-50 px-6">
								Become a better programmer by building tons of real-world projects
								and keep improving with detailed feedback on your code - generated
								by state-of-the-art AI.
							</span>
							<div className="flex flex-col items-center w-full lg:justify-center lg:flex-row py-10 md:py-20 max-w-screen-xl">
								<TeslaProjectCodeReport />
								<div className="relative w-full flex flex-col items-center lg:w-3/6 h-full px-10 sm:px-12 pb-8 xl:px-16 lg:py-16">
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center lg:items-start lg:text-left text-center backdrop-blur-lg bg-white bg-opacity-50">
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
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center text-center lg:items-start lg:text-left backdrop-blur-lg bg-white bg-opacity-50">
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
									<div className="pt-6 pb-9 lg:pr-4 max-w-xl  flex flex-col items-center text-center lg:items-start lg:text-left backdrop-blur-lg bg-white bg-opacity-50">
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
							<BuildProjectMarquee />
							<span className="uppercase tracking-widest text-sm text-center sm:text-base font-bold text-gray-500 mb-4backdrop-blur-lg bg-white bg-opacity-50 px-4">
								Boot playgrounds with over 25+ templates
							</span>
							<div className="w-full h-fit flex justify-center mb-20 flex-wrap">
								<div className="flex mt-8 backdrop-blur-lg bg-white bg-opacity-50">
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
								<div className="flex mt-8 backdrop-blur-lg bg-white bg-opacity-50">
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
							<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-lime-600 via-lime-600 to-lime-400 bg-clip-text pt-6 backdrop-blur-lg bg-white bg-opacity-50">
								Grow
							</span>
							<h2 className="text-4xl text-center sm:text-6xl tracking-tighter font-bold text-gray-800 backdrop-blur-lg bg-white bg-opacity-50 py-4">
								Expand your Potential
							</h2>
							<div className="w-full h-fit flex flex-col lg:flex-row max-w-screen-2xl">
								<div className="relative w-full flex flex-col items-center lg:items-start lg:w-3/6 h-full px-6 lg:pl-6 lg:pr-16 pt-16">
									<div className="pt-6 flex flex-col items-center lg:items-start pb-9 text-center lg:text-left backdrop-blur-lg bg-white bg-opacity-50">
										<h2 className="text-[30px] leading-9 font-bold text-gray-900 tracking-tight max-w-lg">
											Join the community{' '}
											<span className="hidden lg:inline">
												of developers changing the world
											</span>
										</h2>
										<p className="text-[18px] max-w-xl font-normal leading-[26px] text-zinc-700 mt-3">
											Transform the way you learn coding and connect with
											other like minded developers across the globe.
										</p>
									</div>
									<div className="pt-6 pb-9 pr-4 flex flex-col items-center lg:items-start text-center lg:text-start backdrop-blur-lg bg-white bg-opacity-50">
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
									<div className="pt-6 pb-9 xl:pr-16 flex flex-col items-center lg:items-start text-center lg:text-start backdrop-blur-lg bg-white bg-opacity-50">
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
									<button className="text-base z-10 lg:text-lg font-semibold text-white bg-gradient-to-r from-lime-600/90 via-lime-500 to-lime-400 shadow-xl shadow-lime-400/30 rounded-lg py-3 lg:py-3.5 px-[10%] lg:px-[20%] ">
										Begin your coding journey &rarr;
									</button>
								</div>
								<div className="lg:absolute h-[50vw] w-full lg:flex lg:justify-end lg:h-full overflow-clip max-w-screen-2xl">
									<Image
										src="/globe.png"
										alt="Globe Image"
										width={1400}
										height={1400}
										className="lg:absolute lg:-right-[24%] xl:-right-[6%] 2xl:right-10 lg:[mask-image:linear-gradient(white_30%,transparent_99%)] w-auto h-auto lg:h-[900px] lg:w-[900px] lg:-top-4 xl:-top-6 2xl:-top-8 xl:w-[960px] xl:h-[960px] "
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<StatsSection />
				</section>

				<section>
					<TestimonialSection />
				</section>

				<section>
					<SignUpSection />
				</section>

				<section>
					<GetAppSection />
				</section>

				<Footer />
			</main>
		</>
	)
}
