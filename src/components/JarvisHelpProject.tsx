import { HiArrowNarrowLeft } from 'react-icons/hi'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { BsUiChecks } from 'react-icons/bs'

export default function JarvisHelpProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 1
	})
	const [isCodeVisible, setIsCodeVisible] = useState(false)
	const [isOutputVisible, setIsOutputVisible] = useState(false)

	useEffect(() => {
		let timer: NodeJS.Timeout
		let outputTimer: NodeJS.Timeout
		if (inView) {
			setIsCodeVisible(true)
			setIsOutputVisible(true)
			timer = setTimeout(() => {
				setIsCodeVisible(false)
			}, 14 * 1000)
			outputTimer = setTimeout(() => {
				setIsOutputVisible(false)
			}, 17 * 1000)
		} else {
			setIsCodeVisible(false)
			setIsOutputVisible(false)
		}
		return () => clearTimeout(timer)
	}, [inView])

	const initialCodeText = 'return p1 + p2'
	const finalCodeText = 'return str(p1) + str(p2)'

	const sarahText = `I'm stuck, please help me with this challenge.`
	const jarvisText = 'Sure, Convert the params using the `str()` function.'

	return (
		<div className="lg:w-3/6 flex justify-center relative w-full sm:px-1 max-w-3/6 py-10 md:py-16 h-fit scale-[57%] xxs:scale-75 xs:scale-90 sm:scale-100 md:scale-x-110 md:scale-y-110 lg:scale-90 2xl:scale-110">
			<div className="relative p-1" ref={ref}>
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
										<span className="font-normal">&#40;p1,p2&#41;&#58;</span>
									</span>
									<div className="relative">
										<motion.div
											className="w-fit font-normal text-gray-700"
											initial={{
												opacity: 0
											}}
											animate={inView ? { opacity: 1 } : { opacity: 0 }}
											transition={{
												duration: 0.1,
												delay: 14
											}}
										>
											&emsp;&emsp;
											{finalCodeText.split('').map((letter, index) => (
												<motion.span
													key={index}
													initial={{
														opacity: 0,
														...(index >= 0 &&
															index <= 5 && {
																fontWeight: '600'
															}),
														...(index >= 7 &&
															index <= 9 && {
																color: 'rgb(126 34 206)',
																fontWeight: '600'
															}),
														...(index >= 17 &&
															index <= 19 && {
																color: 'rgb(126 34 206)',
																fontWeight: '600'
															})
													}}
													animate={
														inView
															? {
																	opacity: 1,
																	transition: {
																		delay: 14 + index * 0.1
																	}
															  }
															: {
																	opacity: 0
															  }
													}
													transition={{
														duration: 0.2,
														delay: index * 0.1
													}}
												>
													{letter}
												</motion.span>
											))}
										</motion.div>

										<motion.div
											className="absolute -top-0 w-fit font-normal text-gray-700"
											initial={{
												opacity: 0
											}}
											animate={
												isCodeVisible
													? {
															opacity: 1
													  }
													: {
															opacity: 0
													  }
											}
											transition={{
												duration: 0.1,
												delay: 0.2
											}}
										>
											&emsp;&emsp;
											{isCodeVisible &&
												initialCodeText.split('').map((letter, index) => (
													<motion.span
														key={index}
														initial={{
															opacity: 0,
															...(index >= 0 &&
																index <= 5 && {
																	fontWeight: '600'
																})
														}}
														animate={
															inView
																? {
																		opacity: 1,
																		transition: {
																			delay: 0.2 + index * 0.1
																		}
																  }
																: {
																		opacity: 0
																  }
														}
														transition={{
															duration: 0.2,
															delay: index * 0.1
														}}
													>
														{letter}
													</motion.span>
												))}
										</motion.div>

										<motion.div
											className="absolute -top-0 w-full font-normal text-gray-500"
											initial={{
												opacity: 1
											}}
											animate={inView ? { opacity: 0 } : { opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.2
											}}
										>
											&emsp;&emsp;&emsp;&emsp;/* Your code here*/
										</motion.div>
									</div>
									<span className="font-normal block">
										&emsp;&emsp;&emsp;&emsp;
									</span>
									<span className="w-full inline-block font-semibold text-gray-700">
										param_1&nbsp;&#61;&nbsp;
										<span className="font-semibold text-purple-700">13</span>
									</span>
									<span className="w-full inline-block font-semibold text-gray-700">
										param_2&nbsp;&#61;&nbsp;
										<span className="font-semibold text-purple-700">37</span>
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
							<div className="relative w-full h-full text-center bg-zinc-50 ">
								<motion.div
									className="w-full h-full flex flex-col justify-center"
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1 } : { opacity: 0 }}
									transition={{
										duration: 0.2,
										delay: 17
									}}
								>
									<BsUiChecks
										className="h-9 w-9 fill-green-600 self-center -mt-6"
										height="1em"
										width="1em"
									/>
									<div className="absolute top-[168px] w-full h-14 p-2 bg-zinc-700 text-left font-mono">
										<span className="block text-[10px] text-white font-semibold -mt-1">
											&#36;shell&#58;&nbsp;
											<span className="text-[10px] text-white font-normal">
												Output &rarr; 1337
											</span>
										</span>
										<span className="block w-full text-[10px] text-white font-semibold ">
											&#36;shell&#58;&nbsp;
											<span className="text-[10px] text-white font-normal">
												Success&#33; &#127881;
											</span>
										</span>
									</div>
								</motion.div>
								<motion.div
									className="absolute top-0 w-full h-full flex flex-col justify-center"
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1 } : { opacity: 0 }}
									transition={{
										duration: 0.2,
										delay: 2.8
									}}
								>
									{isOutputVisible && (
										<>
											<MdOutlineReportGmailerrorred
												className="h-9 w-9 fill-red-500 self-center -mt-6"
												height="1em"
												width="1em"
											/>
											<div className="absolute top-[168px] w-full h-14 p-2 bg-zinc-700 text-left font-mono">
												<span className="block text-[10px] text-white font-semibold -mt-1">
													&#36;shell&#58;&nbsp;
													<span className="text-[10px] text-white font-normal">
														Output &rarr; 50
													</span>
												</span>
												<span className="block w-full text-[10px] text-white font-semibold ">
													&#36;shell&#58;&nbsp;
													<span className="text-[10px] text-white font-normal">
														Expected &rarr; 1337
													</span>
												</span>
											</div>
										</>
									)}
								</motion.div>
								<motion.div
									className="absolute -top-0 w-full h-full flex flex-col justify-center"
									initial={{ opacity: 1 }}
									animate={inView ? { opacity: 0 } : { opacity: 1 }}
									transition={{
										duration: 0.2,
										delay: 2.8
									}}
								>
									<svg
										strokeWidth="0"
										viewBox="0 0 16 16"
										className="h-8 w-8 fill-zinc-300 self-center -mt-4"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"></path>
									</svg>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				<motion.div
					className="absolute w-[200px] h-[86px] right-0 top-0 bg-zinc-700 rounded shadow-2xl py-2 px-3"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div>
						<motion.div
							className=""
							initial={{
								opacity: 0
							}}
							animate={inView ? { opacity: 1 } : { opacity: 0 }}
							transition={{
								duration: 0.2,
								delay: 3
							}}
						>
							<p className="text-white font-normal text-[13px] ml-1 mb-0.5">
								{sarahText.split('').map((letter, index) => (
									<motion.span
										key={index}
										initial={{
											opacity: 0
										}}
										animate={
											inView
												? {
														opacity: 1,
														transition: {
															delay: 3 + index * 0.1
														}
												  }
												: {
														opacity: 0
												  }
										}
									>
										{letter}
									</motion.span>
								))}
							</p>
						</motion.div>
						<motion.div
							className="absolute top-0"
							initial={{
								opacity: 1
							}}
							animate={inView ? { opacity: 0 } : { opacity: 1 }}
							transition={{
								duration: 0.2,
								delay: 3
							}}
						>
							<p className="text-white font-normal text-[13px] mb-0.5 p-1.5">
								This seems like an easy like an easy challenge.
							</p>
						</motion.div>
					</div>
					<div className="w-full h-1/2 flex justify-between items-center mt-1">
						<div className="w-fit flex justify-start items-center">
							<Image
								src={'/pp2.png'}
								alt={'User Picture'}
								width={24}
								height={24}
								className="rounded-full mr-2"
							/>
							<p className="text-white font-normal text-[13px]">Sarah</p>
						</div>
						<p className="text-white w-14 font-mono font-normal text-[11px]">
							10&#58;20 PM
						</p>
					</div>
				</motion.div>
				<div className="absolute w-[200px] h-[86px] left-0 bottom-0 bg-white border py-2 px-3 border-gray-200 shadow-2xl rounded text-left">
					<div>
						<motion.div
							className=" "
							initial={{
								opacity: 0
							}}
							animate={inView ? { opacity: 1 } : { opacity: 0 }}
							transition={{
								duration: 0.2,
								delay: 8
							}}
						>
							<p className="text-gray-900 font-normal text-[13px] mb-0.5 ml-1">
								{jarvisText.split('').map((letter, index) => (
									<motion.span
										key={index}
										initial={{
											opacity: 0
										}}
										animate={
											inView
												? {
														opacity: 1,
														transition: {
															delay: 8 + index * 0.1
														}
												  }
												: {
														opacity: 0
												  }
										}
									>
										{letter}
									</motion.span>
								))}
							</p>
						</motion.div>
						<motion.div
							className="absolute top-0"
							initial={{
								opacity: 1
							}}
							animate={inView ? { opacity: 0 } : { opacity: 1 }}
							transition={{
								duration: 0.2,
								delay: 8
							}}
						>
							<p className="text-gray-900 font-normal text-[13px] mb-0.5 p-1.5">
								I&apos;m Jarvis, your 24x7 AI assistant here to help.
							</p>
						</motion.div>
					</div>
					<div className="w-full h-1/2 flex justify-between items-center mt-1">
						<div className="w-fit flex justify-start items-center">
							<Image
								src={'/jarvis.png'}
								alt={'Jarvis Image'}
								width={24}
								height={24}
								className="rounded-full mr-2"
							/>
							<p className="text-gray-900 font-normal text-[13px]">Jarvis</p>
						</div>
						<p className="text-gray-900 w-14 font-mono font-normal text-[11px]">
							10&#58;20 PM
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
