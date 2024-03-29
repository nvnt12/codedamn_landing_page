import Image from 'next/image'
import { BsFillStarFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function HeroSection() {
	return (
		<div className="w-full h-[170vw] xxs:h-[155vw] xs:h-[140vw] max-h-[1150px] sm:h-[72vw] flex justify-center overflow-hidden">
			<div className="relative h-fit w-full flex justify-center max-w-screen-2xl">
				<div className="absolute sm:[mask-image:linear-gradient(transparent_15%,white_25%,white_85%,transparent_95%)] flex justify-center items-center w-[200vw] h-[200vw] sm:w-[92vw] sm:h-[92vw] p-[22%] sm:p-[9.5%] max-w-[1323px] max-h-[1323px] xl:max-w-[1456px] xl:max-h-[1456px] border border-gray-300 rounded-full top-[8vw] sm:-top-[16vw] lg:-top-[17.2vw] 2xl:-top-[15.2vw]">
					<svg
						viewBox="0 0 152 162"
						className="absolute left-[1.85%] top-[50.5%] w-[11.75%] -rotate-[31deg] stroke-gray-300"
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
						className="absolute top-[10.7%] left-[38%] -scale-x-100 sm:scale-x-100 sm:left-[87.9%] sm:top-[60.5%] w-[6.85%] rotate-[98deg] sm:rotate-[-1deg] stroke-gray-300 "
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
					<div className="h-full w-full [mask-image:linear-gradient(white_35%,transparent_99%)] sm:[mask-image:none] rounded-full border border-gray-200 border-x-gray-300/75 p-[12.25%]">
						<div className="h-full w-full [mask-image:linear-gradient(white_35%,transparent_99%)] sm:[mask-image:none] rounded-full border border-gray-200 border-x-gray-300/75"></div>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: '1rem' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="absolute h-[170vw] xxs:h-[155vw] xs:h-[140vw] sm:h-[72vw] max-h-[1150px] w-full flex justify-center items-end sm:items-center max-w-screen-2xl"
			>
				<div className="absolute w-full sm:w-6/12 h-fit mt-4 sm:-mt-10 md:-mt-16 lg:-mt-[5.5rem] flex flex-col justify-between gap-2 xs:gap-4 text-center px-6 sm:px-4">
					<h1 className="relative mb-6 text-center text-[min(10vw,4.5rem)] font-bold leading-none tracking-tight text-gray-900 sm:text-[min(4.5vw,4.5rem)]">
						<span className="whitespace-nowrap">Change the world</span>
						<br />
						with&nbsp;
						<motion.span className="relative mr-[28%] xxs:mr-[28%] xs:mr-[27%] sm:mr-[24%] md:mr-[23.5%] lg:mr-[22.5%] 2xl:mr-[23%]">
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent"
								initial={{ opacity: 1 }}
								animate={{ opacity: 0.9 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 2.5
								}}
							>
								code
							</motion.span>
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 2.5,
									delay: 2
								}}
							>
								code
							</motion.span>
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-lime-600 to-lime-400 bg-clip-text text-transparent"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 4,
									delay: 4
								}}
							>
								code
							</motion.span>
						</motion.span>
						damn
					</h1>
					<h2 className="relative mx-auto max-w-xl text-center text-[min(5vw,1rem)] font-medium leading-relaxed text-gray-500 sm:text-[min(1.65vw,1.25rem)] ">
						Learn coding with your personal AI powered tutor and 100+ interactive
						courses. Become job ready 10x faster.
					</h2>

					<div className="relative mt-10 mx-auto flex w-full h-fit sm:mt-6 md:mt-8 lg:mt-10">
						<motion.div className="w-full h-14 flex justify-center">
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-indigo-600 to-purple-400 text-white w-full mx-auto rounded-lg block cursor-pointer shadow-lg shadow-indigo-300 px-5 py-3 font-semibold sm:w-fit sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-3 md:text-sm lg:rounded-lg lg:px-5 lg:text-base xl:px-7 xl:py-4 xl:text-lg"
								initial={{ opacity: 1 }}
								animate={{ opacity: 0.9 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 2.5
								}}
							>
								<span>Begin your coding journey &rarr;</span>
							</motion.span>
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-sky-400 to-cyan-400 text-white w-full mx-auto rounded-lg block cursor-pointer shadow-lg shadow-sky-300 px-5 py-3 font-semibold sm:w-fit sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-3 md:text-sm lg:rounded-lg lg:px-5 lg:text-base xl:px-7 xl:py-4 xl:text-lg"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 2.5,
									delay: 2
								}}
							>
								<span>Begin your coding journey &rarr;</span>
							</motion.span>
							<motion.span
								className="absolute z-10 bg-gradient-to-r from-lime-600 to-lime-400 text-white w-full mx-auto rounded-lg block cursor-pointer shadow-lg shadow-lime-300/50 px-5 py-3 font-semibold sm:w-fit sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-3 md:text-sm lg:rounded-lg lg:px-5 lg:text-base xl:px-7 xl:py-4 xl:text-lg"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									repeat: Infinity,
									repeatType: 'reverse',
									repeatDelay: 4,
									delay: 4
								}}
							>
								<span>Begin your coding journey &rarr;</span>
							</motion.span>
						</motion.div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}
				className="absolute top-0 w-full h-[80vw] sm:h-[72vw] max-h-[1150px] flex justify-center"
			>
				<div className="absolute w-full h-full text-center top-0 max-w-screen-2xl">
					<div className="absolute font-mono w-fit h-fit p-4 text-left bg-white rounded-lg border border-gray-100 shadow shadow-gray-200 top-[14vw] left-[0.5vw] xs:top-[15vw] xs:left-[2vw] rotate-[-3deg] scale-[65%] xxs:scale-75 xs:scale-[85%] sm:rotate-0 sm:top-[20%] sm:left-[6%] sm:scale-[70%] md:top-[20%] md:left-[10%] md:scale-[80%] lg:top-[16%] lg:left-[13%] lg:scale-100 xl:top-[17%] xl:left-[14%] 2xl:top-[18%] 2xl:left-[17%] 2xl:scale-125">
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
								<span className="font-bold text-[#0ea4e9f4]">&lt;h1&gt;</span>
								&nbsp;Learn programming&nbsp;
								<span className="font-bold text-[#0ea4e9f4]">&lt;&#47;h1&gt;</span>
							</p>
							<p className="text-gray-500 font-semibold tracking-tight mt-1 text-[10px]">
								<span className="font-bold text-[#0ea4e9f4]">&lt;em&gt;</span>
								&nbsp;with AI support&nbsp;
								<span className="font-bold text-[#0ea4e9f4]">&lt;&#47;em&gt;</span>
							</p>
						</div>
					</div>

					<div className="absolute w-48 h-fit top-[50%] left-[45%] xxs:top-[48%] xxs:left-[50%] xs:top-[46%] xs:left-[55%] rotate-3 scale-75 xs:scale-[85%] sm:rotate-0 sm:top-[78%] sm:left-[60%] sm:scale-[60%] md:scale-[70%] lg:top-[74%] lg:left-[65%] lg:scale-90 xl:scale-100 2xl:top-[74%] 2xl:scale-110">
						<Image
							src={'/pp1.png'}
							alt={'User Picture'}
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

					<div className="absolute hidden sm:block w-[200px] h-fit p-5 text-left bg-white rounded-lg border border-gray-100 shadow shadow-gray-200 top-[16%] left-[72%] scale-[65%] md:top-[17%] md:left-[76%] md:scale-[75%] lg:top-[15%] lg:left-[78%] lg:scale-95 xl:top-[14%] xl:left-[79%] xl:scale-100 2xl:left-[80%] 2xl:scale-110">
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

					<div className="absolute top-[70vw] left-[80%] xs:top-[65vw] xs:left-[80%] scale-[85%] xxs:scale-100 xs:scale-125 rotate-[5deg] sm:rotate-0 sm:top-[33vw] sm:left-[75.5%] sm:scale-[70%] md:top-[46%] md:left-[76%] md:scale-[80%] lg:top-[45%] lg:left-[76.5%] lg:scale-95 xl:top-[45%] xl:left-[76.5%] xl:scale-100 2xl:left-[77%] 2xl:scale-110">
						<svg
							fill="none"
							viewBox="0 0 50 51"
							className="w-[35px] h-[36px] p-[13%] bg-black rounded-md"
						>
							<path
								fill="url(#AccentSvgGradient)"
								d="M23.4 0h-.8a25 25 0 0 0-18 10.4 24.8 24.8 0 0 0-4.4 11C0 22.7 0 23 0 25a25.1 25.1 0 0 0 36.9 22s-2-2.5-4.1-5.5l-4-5.4-5-7.4-5-7.4a399.9 399.9 0 0 0-.2 14.8c-.1.2-.2.3-.5.4l-1 .1h-.8l-.3-.1a1 1 0 0 1-.3-.4v-20c.2 0 .3-.2.5-.3h1c1 0 1.2 0 1.5.2a924.8 924.8 0 0 1 15.9 24l4 6h.2c1.7-1.2 3.6-2.9 5-4.6a24.9 24.9 0 0 0 6-12.8c.2-1.3.2-1.7.2-3.6 0-1.9 0-2.3-.2-3.6A25.1 25.1 0 0 0 23.4 0zm10.2 15.1a1 1 0 0 1 .5.6v17.8L32.6 31 31 28.7V15.8a1 1 0 0 1 .5-.7h2.1z"
							></path>
						</svg>
					</div>

					<div className="absolute hidden sm:block top-[56%] left-[20%] scale-[70%] md:top-[56%] md:left-[21%] md:scale-[80%] lg:left-[22%] lg:scale-95 xl:left-[22.5%] xl:scale-100 2xl:scale-110">
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

					<div className="absolute hidden sm:block top-[87%] left-[44%] scale-[70%] md:top-[84%] md:left-[44%] md:scale-[80%] lg:top-[82%] lg:scale-95 xl:top-[81.5%] xl:scale-100 2xl:top-[81%] 2xl:scale-110">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 64 64"
							className="w-[36px] h-[35px] bg-black rounded-lg"
						>
							<rect width="64" height="64" fill="black" rx="15"></rect>
							<path fill="#bef264" d="m32 10-.3 1v29l.3.4 13.5-8L32 10Z"></path>
							<path fill="#fde047" d="M32 10 18.5 32.4l13.5 8V10Z"></path>
							<path fill="#bef264" d="m32 43-.2.1v10.4l.2.5 13.5-19L32 43Z"></path>
							<path fill="#fde047" d="M32 54V43l-13.5-8L32 54Z"></path>
							<path fill="#bef264" d="m32 40.4 13.5-8L32 26.3v14Z"></path>
							<path fill="#fde047" d="m18.5 32.4 13.5 8V26.3l-13.5 6.1Z"></path>
						</svg>
					</div>

					<div className="absolute top-[18vw] xxs:top-[16.5vw] xs:top-[15vw] left-[65%] xs:left-[70%] scale-[80%] xxs:scale-90 xs:scale-100 rotate-[4deg] sm:rotate-0 sm:top-[30vw] sm:left-[10%] sm:scale-[65%] md:top-[42%] md:left-[11%] md:scale-[75%] lg:top-[42%] lg:left-[12%] lg:scale-95 xl:top-[42%] xl:scale-100 2xl:top-[42%]  2xl:left-[11%] 2xl:scale-110">
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
							<p className="text-[10px] text-white font-semibold">Completed</p>
						</div>
					</div>

					<div className="absolute hidden w-fit sm:flex items-center h-fit p-4 text-left bg-white rounded-[8px] border border-gray-100 shadow shadow-gray-200 top-[78%] left-[3%] scale-[60%] md:top-[77%] md:left-[6%] md:scale-[70%] lg:top-[77%] lg:left-[9%] lg:scale-90 xl:top-[78%] xl:left-[12%] xl:scale-110">
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

					<div className="absolute w-48 h-fit top-[79%] left-[8%] xs:top-[80%] xs:left-[8%] scale-[80%] xxs:scale-90 xs:scale-100 -rotate-[10deg] sm:rotate-0 sm:top-[15%] sm:left-[56%] sm:scale-[60%] md:top-[15.7%] md:left-[61%] md:scale-[70%] lg:top-[14%] lg:left-[65%] lg:scale-90 xl:top-[13%] xl:left-[65%] xl:scale-100 2xl:top-[12%] 2xl:left-[65%] 2xl:scale-110">
						<Image
							src={'/pp2.png'}
							alt={'User Picture'}
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

					<div className="absolute -rotate-[8deg] sm:rotate-0 xs:scale-90 top-[56%] left-[7%] scale-[65%] xxs:top-[54%] xxs:left-[10%] xxs:scale-[75%] xs:top-[53%] xs:left-[10%] sm:top-[49%] sm:left-[0.5%] sm:scale-[60%] md:top-[49%] md:left-[1%] md:scale-[70%] lg:top-[46%] lg:left-[2%] lg:scale-90 xl:top-[46%] xl:left-[2%] xl:scale-100 2xl:top-[46%] 2xl:left-[1.5%] 2xl:scale-105">
						<Image
							src={'/pp3.png'}
							alt={'User Picture'}
							width={46}
							height={46}
							className="rounded-full border border-white"
						/>
						<div className="absolute w-16 h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 top-[40px] left-5 sm:top-[41px] sm:left-3">
							<p className="text-gray-600 font-semibold text-[10px]">
								<span className="mr-0.5">&#128549;</span>Stuck
							</p>
						</div>
					</div>
					<div className="absolute w-fit h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 -rotate-[8deg] sm:rotate-0 top-[70%] left-[22%] scale-[65%] xxs:top-[67%] xxs:left-[24%] xxs:scale-[75%] xs:top-[65%] xs:left-[26%] xs:scale-90 sm:top-[62%] sm:left-[4%] sm:scale-[60%] md:top-[60.8%] md:left-[5.5%] md:scale-[70%] lg:top-[57.5%] lg:left-[7%] lg:scale-90 xl:top-[56%] xl:left-[7%] xl:scale-100 2xl:top-[55.5%] 2xl:left-[6%] 2xl:scale-105">
						<p className="text-gray-600 font-semibold text-[10px]">
							<span className="mr-0.5">&#128516;</span>Ask AI
						</p>
					</div>
					<div className="absolute -rotate-[8deg] sm:rotate-0 top-[75.1%] left-[39%] scale-[60%] xxs:top-[72%] xxs:left-[41%] xxs:scale-[75%] xs:top-[70%] xs:left-[42%] xs:scale-90 sm:top-[66%] sm:left-[12%] sm:scale-[60%] md:top-[65%] md:left-[14%] md:scale-[70%] lg:top-[64%] lg:left-[15%] lg:scale-90 xl:top-[62%] xl:left-[15%] xl:scale-100 2xl:top-[62%] 2xl:left-[14.5%] 2xl:scale-105 p-1.5 border border-gray-100 rounded-xl bg-white shadow shadow-gray-200 flex justify-center items-center">
						<svg viewBox="0 0 28 28" fill="currentColor" className="h-[22px] w-[22px]">
							<path d="M23 16.5h-2.6a1 1 0 0 0-.5.2l-3.1 2a2.9 2.9 0 0 1-4.4-1.7c0-.4-.4-.8-.8-1-.7-.3-1.3-.7-1.8-1.2A6.4 6.4 0 0 1 8 10.2V4.3c0-.5-.4-1-1-1h-.3c-3.6 0-6 1.8-6 6v7.2c0 4.2 2.4 6 6 6h5v3.8H7.9a1 1 0 0 0-1 1c0 .6.4 1 1 1h9.6c.5 0 1-.4 1-1 0-.5-.5-1-1-1h-3.8v-3.8h5c3.3 0 5.6-1.5 6-5 0-.5-.5-1-1-1H23Z"></path>
							<path d="M27.3 5v5.2c0 2-1 3.5-2.6 4-.5.2-1.1.3-1.7.3h-3.5l-3.8 2.6a.9.9 0 0 1-1.4-.7v-1.9c-1.3 0-2.4-.4-3.1-1.2a4.4 4.4 0 0 1-1.2-3.1V5c0-.6 0-1.2.3-1.7.6-1.6 2-2.6 4-2.6H23c2.6 0 4.3 1.7 4.3 4.3Z"></path>
						</svg>
					</div>

					<div className="absolute hidden sm:block w-[180px] h-fit top-[60%] left-[78.5%] scale-[60%] md:top-[59%] md:left-[81%] md:scale-[70%] lg:top-[56%] lg:left-[83%] lg:scale-90 xl:top-[55.5%] xl:left-[83%] xl:scale-100 2xl:top-[56%] 2xl:left-[85%] 2xl:scale-105">
						<Image
							src={'/pp4.png'}
							alt={'User Picture'}
							width={46}
							height={46}
							className="rounded-full border border-white"
						/>
						<div className="absolute w-fit h-fit px-1.5 text-left bg-white/90 rounded-sm border border-gray-100 shadow shadow-gray-200 top-[38px] left-[10px] lg:top-[38px] lg:left-[15px]">
							<p className="text-gray-600 font-semibold text-[10px]">
								<span className="mr-0.5">&#128218;</span>Practice
							</p>
						</div>
					</div>
					<svg
						viewBox="0 0 120 130"
						className="absolute hidden sm:block w-[88px] h-[88px] top-[67%] left-[81.5%] scale-[60%] md:top-[66%] md:left-[83%] md:scale-[70%] lg:top-[64%] lg:left-[84%] lg:scale-90 xl:top-[64%] xl:left-[84%] xl:scale-100 2xl:top-[63%] 2xl:left-[85.5%] 2xl:scale-105"
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

					<div className="absolute hidden sm:flex top-[82%] left-[88%] scale-[70%] md:top-[80%] md:left-[88%] md:scale-[80%] lg:top-[77%] lg:left-[88.5%] lg:scale-95 xl:top-[77%] xl:left-[88.5%] xl:scale-105 2xl:top-[77%] 2xl:left-[89%] 2xl:scale-110 p-1 border border-gray-100 rounded-xl bg-white shadow shadow-gray-200 justify-center items-center">
						<svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
							<path d="M21 7c-.8-1-2.2-1.4-4.2-1.4h-.3c0-1.8 0-3.8-3.7-3.8h-1.6c-3.7 0-3.7 2-3.7 3.7h-.3C5.2 5.6 3.8 6 3 7c-1 1-1 2.6-.8 3.6v.9l.3.3a17.9 17.9 0 006.8 2.7c0 1 .5 2 2.7 2s2.6-1 2.7-2c2-.3 4-1 5.8-2l.1-.2 1.2-.8.2-.3v-.8c.2-1 .1-2.4-.8-3.4zm-8 6.8c0 1 0 1.3-1.1 1.3-1.3 0-1.3-.2-1.3-1.3v-1.2h2.5v1.2zM9 5.6c0-1.8 0-2.4 2.2-2.4h1.6c2.3 0 2.3.6 2.3 2.3H8.9z"></path>
							<path d="M20.9 13.7c.3-.1.7.1.7.5l-.4 4c-.2 2-1 4-5.4 4H8.2c-4.4 0-5.2-2-5.4-4l-.4-3.7c0-.4.4-.7.7-.6 1.2.6 3.3 1.5 4.6 1.8l.3.3c.7 1.3 2 2 3.9 2s3.2-.7 3.8-2a34.6 34.6 0 005.2-2.3z"></path>
						</svg>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
