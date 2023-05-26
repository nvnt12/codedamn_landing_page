import { HiArrowNarrowLeft } from 'react-icons/hi'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'

export default function GamePracticeProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 1
	})

	const codeText = '<Game details={data} />'
	const resultText = '6/6 challenges completed'

	return (
		<div className="lg:w-3/6 flex justify-center relative w-full sm:px-1 max-w-3/6 py-10 md:py-16 h-fit scale-[57%] xxs:scale-75 xs:scale-90 sm:scale-[98%] md:scale-x-110 md:scale-y-110 lg:scale-90 2xl:scale-110">
			<div className="relative p-1" ref={ref}>
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
									<span className="w-full block">....</span>
									<span className="w-full inline-block font-semibold text-gray-700">
										export function&nbsp;
										<span className="font-normal">
											&#40;&#123; data &#125;&#41; &#61;&#62; &#123;
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
									<div className="relative">
										<motion.div className="font-normal text-gray-700">
											&emsp;&emsp;&emsp;&emsp;
											{codeText.split('').map((letter, index) => (
												<motion.span
													key={index}
													initial={{
														opacity: 0,
														...(index >= 1 &&
															index <= 4 && {
																color: 'rgb(126 34 206)',
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
										<span className="font-semibold text-purple-700">
											<span className="font-normal text-gray-700">&#47;</span>
											Layout
										</span>
										&#62;
									</span>
									<span className="font-normal">&#125;</span>
									<span className="block">....</span>
								</code>
							</div>
						</div>
						<div className="w-2/5 h-full border-l border-gray-300">
							<div className="w-full h-[10%] flex border-b border-gray-200">
								<div className="flex items-center px-2 h-full w-fit ">
									<HiArrowNarrowLeft className="fill-gray-400" />
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
									<div className="w-full h-full text-center bg-zinc-50 select-none">
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
				<motion.div
					className="absolute w-max h-fit right-0 top-0 shadow-2xl flex justify-center items-center rounded-md overflow-clip"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
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
					<Image src={'/js-img.png'} alt={''} width={170} height={100} />
				</motion.div>
				<div className="absolute w-[176px] h-[86px] bottom-0 left-0 bg-zinc-700 shadow-2xl rounded text-center">
					<div className="relative">
						<motion.div className="text-white font-medium text-[13px] p-2 leading-5">
							{resultText.split('').map((letter, index) => (
								<motion.span
									key={index}
									initial={{
										opacity: 0,
										...(index == 0 && {
											fontWeight: 'bold',
											fontSize: '14px'
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
										delay: 3
									}}
								>
									{letter}
								</motion.span>
							))}
							<motion.div
								className="w-full justify-evenly flex items-center py-0.5"
								initial={{
									opacity: 0
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
									delay: 3
								}}
							>
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
								<BsCheckCircle className=" fill-lime-600 h-[22px] w-[22px] m-0.5" />
							</motion.div>
						</motion.div>
						<motion.div
							className="absolute -top-0 p-2 w-full text-white font-medium text-[13px]"
							initial={{
								opacity: 1
							}}
							animate={inView ? { opacity: 0 } : { opacity: 1 }}
							transition={{
								duration: 0.2,
								delay: 3
							}}
						>
							<span className="font-bold text-sm leading-5">0</span>/0 challenges
							completed
							<div className="w-full justify-evenly flex items-center py-0.5">
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
								<AiOutlineMinusCircle className="fill-gray-300 h-6 w-6 m-0.5" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}
