import { Popover, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { Fragment } from 'react'
import Image from 'next/image'

const projects = [
	{
		name: 'Build a Twitter clone',
		description:
			'A working social media app like twitter based on localStorage, React and JavaScript.',
		imgUrl: '/project1Thumbnail.png'
	},
	{
		name: 'Build a Markdown editor',
		description: 'Build an Online Markdown Editor with vanilla JavaScript, HTML and CSS.',
		imgUrl: '/project2Thumbnail.png'
	}
]

const playgrounds = [
	{
		name: 'HTML/CSS',
		imgUrl: '/html-logo.png'
	},
	{
		name: 'React',
		imgUrl: '/react-logo.png'
	},
	{
		name: 'Vue 3',
		imgUrl: '/vue-logo.png'
	},
	{
		name: 'Solidity',
		imgUrl: '/solidity-logo.png'
	},
	{
		name: 'Python',
		imgUrl: '/python-logo.png'
	},
	{
		name: 'Java',
		imgUrl: '/java-logo.png'
	},
	{
		name: 'Golang',
		imgUrl: '/golang-logo.png'
	},
	{
		name: 'Node.js',
		imgUrl: '/node-logo.png'
	},
	{
		name: 'C++',
		imgUrl: '/cpp-logo.png'
	}
]

export default function PracticeMenu() {
	return (
		<div className="w-full max-w-sm">
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={`group inline-flex items-center focus:outline-none`}
						>
							<span>Practice</span>
							<BiChevronDown
								className={`${open ? ' rotate-180' : ' rotate-0'} h-5 w-5`}
								aria-hidden="true"
							/>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="fixed inset-x-0 z-40 mt-[19px] sm:px-0 w-screen">
								<div className="overflow-hidden shadow-lg border-y bg-white border-gray-200 flex flex-col items-center">
									<div className="relative grid grid-cols-2 gap-8 bg-white p-6 max-w-screen-2xl">
										<div>
											<div className="">
												<span className="flex items-center">
													<span className="uppercase text-sm tracking-wide font-semibold text-gray-600 mt-4">
														Build projects
													</span>
												</span>
												<span className="block font-normal text-sm text-gray-600 mt-1">
													Projects offer a practical and hands-on approach
													to reinforce all the concepts you learn.
												</span>
											</div>
											<div className=" my-4 py-4 pr-10">
												<ul role="list" className=" grid gap-8 grid-cols-2">
													{projects.map((project, index) => (
														<li
															key={`${project.name}-${index}`}
															className="flow-root"
														>
															<a
																href=""
																className="-m-3 p-3 flex flex-col rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
															>
																<div className="hidden sm:block flex-shrink-0">
																	<Image
																		className="w-40 h-[90px] object-cover rounded-md"
																		src={project.imgUrl}
																		alt="Project Thumbnail"
																		width={160}
																		height={90}
																	/>
																</div>
																<div className="min-w-0 flex-1 mt-3">
																	<h4 className="text-base font-medium text-gray-700 truncate">
																		{project.name}
																	</h4>
																	<p className="mt-1 text-sm font-normal text-gray-500">
																		{project.description}
																	</p>
																</div>
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
										<div>
											<div className="">
												<span className="flex items-center">
													<span className="uppercase text-sm tracking-wide font-semibold text-gray-600 mt-4">
														Boot playgrounds
													</span>
												</span>
												<span className="block font-normal text-sm text-gray-600 mt-1">
													Boot an in-browser IDE to build a side project
													or code collaboratively with your friends.
												</span>
											</div>
											<div className="mt-4 py-4">
												<ul
													role="list"
													className=" grid gap-8 grid-cols-2 lg:grid-cols-3"
												>
													{playgrounds.map((playground, index) => (
														<li
															key={`${playground.name}-${index}`}
															className="flow-root mb-2"
														>
															<a
																href=""
																className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
															>
																<div className="flex-shrink-0 text-gray-400">
																	<Image
																		className="w-8 h-8"
																		width={32}
																		height={32}
																		src={playground.imgUrl}
																		alt="Playground Image"
																	/>
																</div>
																<span className="ml-4 text-gray-600">
																	{playground.name}
																</span>
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 w-full">
										<div className=" mx-auto flex w-full max-w-screen-2xl flex-wrap items-center gap-4 p-5 [&_input]:min-w-[414px]">
											<a href="" className="">
												<button
													type="button"
													className="inline-flex min-w-max items-center gap-2 flex-shrink-0 border border-transparent font-semibold focus:outline-none rounded-lg px-3 py-2 text-sm shadow bg-indigo-600 text-white hover:bg-indigo-700"
												>
													Explore all projects
												</button>
											</a>
											<a href="" className="">
												<button
													type="button"
													className="inline-flex min-w-max items-center gap-2 flex-shrink-0 border border-transparent font-semibold focus:outline-none rounded-lg px-3 py-2 text-sm shadow bg-indigo-600 text-white hover:bg-indigo-700"
												>
													Explore all playgrounds
												</button>
											</a>
										</div>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	)
}
