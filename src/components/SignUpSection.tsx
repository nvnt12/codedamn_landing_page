import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SignUpSection() {
	return (
		<div className="w-full h-fit border-y border-gray-200 bg-gray-50/75">
			<motion.div
				className="absolute w-full flex items-center justify-center overflow-hidden"
				initial={{ opacity: 1 }}
				animate={{ opacity: 0.9 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 2.5
				}}
			>
				<Image
					src="/indigo-bg.png"
					alt="Background Image"
					width={1536}
					height={864}
					className="mx-auto  h-auto max-w-screen-xl opacity-80"
					priority
				/>
			</motion.div>
			<motion.div
				className="absolute w-full flex items-center justify-center overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.9 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 2.5,
					delay: 2
				}}
			>
				<Image
					src="/blue-bg.png"
					alt="Background Image"
					width={1536}
					height={864}
					className="mx-auto  h-auto max-w-screen-xl opacity-30"
					priority
				/>
			</motion.div>
			<motion.div
				className="absolute w-full flex items-center justify-center overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.9 }}
				transition={{
					duration: 0.5,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 4,
					delay: 4
				}}
			>
				<Image
					src="/green-bg.png"
					alt="Background Image"
					width={1536}
					height={864}
					className="mx-auto  h-auto max-w-screen-xl opacity-50"
					priority
				/>
			</motion.div>

			<div className="relative mx-auto my-8 sm:mt-12 lg:my-16 lg:mt-0 flex flex-col lg:pt-20 sm:px-6">
				<h4 className="uppercase text-center text-base font-bold tracking-widest text-gray-500 mb-6">
					Begin your journey with codedamn
				</h4>
				<div className="flex justify-center w-full">
					<div className="w-full h-fit flex flex-col lg:flex-row justify-center items-center px-1 lg:pt-10 pb-20 lg:max-w-6xl">
						<div className="relative h-fit lg:translate-x-5 bg-clip-padding lg:mt-0 lg:w-1/2">
							<div className="absolute -inset-y-8 hidden lg:block -left-2 w-px bg-gray-900/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:left-0"></div>
							<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
							<div className="absolute w-full -inset-x-8 hidden lg:block bottom-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
							<ul className="w-full flex flex-col xxs:flex-row lg:flex-col pb-8 lg:pb-0 lg:bg-white/70 ">
								<li className="w-full py-2 lg:py-4 px-2 lg:px-[42px]">
									<h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight">
										<span className="relative z-10 bg-zinc-600 bg-clip-text text-transparent">
											Learn
										</span>
									</h3>
									<motion.h3
										className="absolute top-2 lg:top-4 mb-2 block text-3xl font-bold uppercase tracking-tight"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 1,
											repeat: Infinity,
											repeatType: 'reverse',
											repeatDelay: 2
										}}
									>
										<motion.span
											className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-400 bg-clip-text text-transparent"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												repeatType: 'reverse',
												repeatDelay: 2
											}}
										>
											Learn
										</motion.span>
									</motion.h3>
									<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
										Get access to 100+ courses from renowned instructors.
									</p>
								</li>
								<li className="relative w-full py-2 lg:py-4 px-2 lg:px-[42px]">
									<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
									<h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight">
										<span className="relative z-10 bg-zinc-600 bg-clip-text text-transparent">
											Apply
										</span>
									</h3>
									<motion.h3
										className="absolute top-2 lg:top-4 mb-2 block text-3xl font-bold uppercase tracking-tight"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 1,
											repeat: Infinity,
											repeatType: 'reverse',
											repeatDelay: 2,
											delay: 2
										}}
									>
										<motion.span
											className="relative z-10 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												repeatType: 'reverse',
												repeatDelay: 2,
												delay: 2
											}}
										>
											Apply
										</motion.span>
									</motion.h3>
									<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
										Build projects and boot playgrounds, all within your
										browser.
									</p>
								</li>
								<li className="relative w-full py-2 lg:py-4 px-2 lg:px-[42px]">
									<div className="absolute w-full -inset-x-8 hidden lg:block top-0 h-px bg-gray-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
									<h3 className="relative mb-2 block text-3xl font-bold uppercase tracking-tight">
										<span className="relative z-10 bg-zinc-600 bg-clip-text text-transparent">
											Grow
										</span>
									</h3>
									<motion.h3
										className="absolute top-2 lg:top-4 mb-2 block text-3xl font-bold uppercase tracking-tight"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 1,
											repeat: Infinity,
											repeatType: 'reverse',
											repeatDelay: 2,
											delay: 4
										}}
									>
										<motion.span
											className="relative z-10 bg-gradient-to-r from-lime-600 to-lime-400 bg-clip-text text-transparent"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												repeatType: 'reverse',
												repeatDelay: 2,
												delay: 4
											}}
										>
											Grow
										</motion.span>
									</motion.h3>
									<p className="text-base hidden lg:block font-normal mt-1 mb-2 text-zinc-600">
										Upskill yourself with codedamn and land your dream job.
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
	)
}
