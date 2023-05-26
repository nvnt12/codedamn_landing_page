import { motion } from 'framer-motion'
import { BsFillFileEarmarkCodeFill, BsSearch } from 'react-icons/bs'
import { SlSettings } from 'react-icons/sl'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { MdOutlineComment } from 'react-icons/md'
import { BiRefresh } from 'react-icons/bi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function TeslaProjectCodeReport() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 1
	})

	const codeText = '<Hero feature="model-3"/>'

	return (
		<div className="relative flex justify-center items-center w-[660px] h-[280px] xxs:h-[340px] sm:h-[500px] lg:w-3/6 px-2 sm:px-6 scale-[40%] xxs:scale-[60%] xs:scale-[70%] sm:scale-100 md:scale-100 lg:scale-90 2xl:scale-110">
			<div className="w-full max-w-xl h-fit" ref={ref}>
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
									<span className="block text-gray-500">....</span>
									<span className="font-normal">
										&#60;
										<span className="font-semibold text-sky-500">Layout</span>
										&#62;
									</span>

									<span className="block font-normal">
										&emsp;&emsp;&#60;
										<span className="font-semibold text-sky-500">
											Container
										</span>
										&#62;
									</span>

									<div className="relative">
										<motion.div className="w-fit font-normal text-gray-700">
											&emsp;&emsp;&emsp;&emsp;
											{codeText.split('').map((letter, index) => (
												<motion.span
													key={index}
													initial={{
														opacity: 0,
														...(index >= 1 &&
															index <= 4 && {
																color: 'rgb(14 165 233)',
																fontWeight: '600'
															})
													}}
													animate={
														inView
															? {
																	opacity: 1
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
												duration: 0.1
											}}
										>
											&emsp;&emsp;&emsp;&emsp;/* Your code here*/
										</motion.div>
									</div>
									<span className="font-normal block">
										&emsp;&emsp;&#60;
										<span className="font-semibold text-sky-500">
											<span className="font-normal text-gray-700">&#47;</span>
											Container
										</span>
										&#62;
									</span>
									<span className="font-normal block">
										&#60;
										<span className="font-semibold text-sky-500">
											<span className="font-normal text-gray-700">&#47;</span>
											Layout
										</span>
										&#62;
									</span>
									<span className="block text-gray-500">....</span>
								</code>
							</div>
						</div>
						<div className="w-2/5 h-full border-l border-gray-200">
							<div className="w-full h-[8%] flex border-b border-gray-200">
								<div className="flex items-center pl-2 h-full w-fit">
									<HiArrowNarrowLeft className="fill-gray-500 h-3 w-3" />
								</div>
								<div className="flex items-center p-1 w-full">
									<div className="w-full h-[5px] rounded-sm bg-zinc-300"></div>
								</div>
								<div className="flex items-center pl-1 h-full w-fit">
									<BiRefresh className="fill-gray-500 h-3 w-3" />
								</div>
							</div>
							<div className="relative w-full h-[92%] bg-zinc-50 ">
								<motion.div
									className="w-full h-full"
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1 } : { opacity: 0 }}
									transition={{
										duration: 0.2,
										delay: 2.8
									}}
								>
									<Image
										src={'/tesla-model.png'}
										alt={'Tesla Model 3'}
										width={400}
										height={400}
										className="w-auto h-auto"
									/>
								</motion.div>
								<motion.div
									className="absolute -top-0 w-full h-full flex justify-center items-center"
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
										className="h-8 w-8 fill-zinc-300"
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
				<div className="relative flex flex-col px-2">
					<div className="relative left-[10%] -mt-[10%] flex w-full max-w-[90%] flex-1 overflow-hidden rounded-sm border border-gray-400/30 bg-white shadow-xl">
						<div className="w-full h-full flex p-[3%]">
							<div className="w-2/5 h-full">
								<motion.div
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1 } : { opacity: 0 }}
									transition={{
										duration: 0.2,
										delay: 3
									}}
									className="w-full h-fit bg-zinc-50/50 p-3 mb-3"
								>
									<span className="uppercase block font-mono font-semibold text-xs text-zinc-800 mb-2">
										Suggestions
									</span>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-4/5 h-[3px] bg-zinc-300"></div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
									transition={{
										duration: 0.2,
										delay: 3.4
									}}
									className="w-full h-fit bg-zinc-50/50 p-3"
								>
									<span className="uppercase block font-mono font-semibold text-xs text-zinc-800 mb-2">
										Summary
									</span>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-full h-[3px] bg-zinc-300 mb-2"></div>
									<div className="w-4/5 h-[3px] bg-zinc-300"></div>
								</motion.div>
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
								transition={{
									duration: 0.2,
									delay: 3.2
								}}
								className="w-3/5 h-full"
							>
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
							</motion.div>
						</div>
						<motion.div
							initial={{ opacity: 1 }}
							animate={inView ? { opacity: 0, y: 0 } : { opacity: 1, y: 0 }}
							transition={{
								duration: 0.2,
								delay: 2.8
							}}
							className="absolute w-full h-full -top-0 flex flex-col justify-center items-center"
						>
							<div className="absolute w-full h-full flex flex-col justify-center items-center">
								<Image
									src={'/chip-bg.png'}
									alt={'Code Report Background Image'}
									width={600}
									height={400}
									className="w-auto h-auto"
								/>
							</div>
							<span className="block text-4xl z-10 text-center font-bold text-gray-800 mb-1">
								CodeReport&trade;
							</span>
							<span className="uppercase z-10 tracking-widest text-sm text-center font-semibold text-gray-500 ">
								Ai powered feedback for your code
							</span>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}
