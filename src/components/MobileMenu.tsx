import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdMenuOpen } from 'react-icons/md'
import { BsHeadphones } from 'react-icons/bs'
import Link from 'next/link'
import { learningPaths } from './LearnMenu'

const menuItems = [
	'Pricing',
	'Explore Courses',
	'Build Projects',
	'Boot playgrounds',
	'Create Courses',
	'Careers'
]

export default function MobileMenu() {
	const [open, setOpen] = useState(false)

	return (
		<div className="flex">
			<button
				type="button"
				className={`text-gray-600 hover:text-gray-700 focus:outline-none rotate-180 `}
				onClick={() => setOpen(!open)}
			>
				<span className="sr-only">Toggle panel</span>
				<MdMenuOpen className="h-6 w-6" aria-hidden="true" />
			</button>

			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 overflow-hidden z-40 md:hidden"
					onClose={setOpen}
					static
				>
					<div className="absolute inset-0 overflow-hidden">
						<Dialog.Overlay className="absolute inset-0" />

						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="flex flex-col h-full bg-white shadow-xl overflow-y-scroll">
								<div className="flex items-center justify-between px-3 py-4 border-b">
									<button
										type="button"
										className="rounded-md bg-white text-gray-600 hover:text-gray-700 focus:outline-none"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close panel</span>
										<MdMenuOpen className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="flex-1">
									<div className="px-4 overflow-y-auto">
										<div className="py-4 px-1 pr-4">
											<ul role="list" className=" grid gap-8 sm:grid-cols-2">
												{learningPaths.map((path, index) => (
													<li
														key={`${path.name}-${index}`}
														className="flow-root"
													>
														<a
															href=""
															className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
														>
															<div className="flex-shrink-0 text-gray-400">
																<div className="flex-shrink-0 text-gray-400">
																	<path.icon />
																</div>
															</div>
															<span className="ml-5 text-gray-800">
																{path.name}
															</span>
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="bg-gray-50 mx-auto w-full gap-4 px-4 py-5 lg:px-8">
										<form className="relative mb-2">
											<input
												name="search"
												className="block w-full rounded-md border border-gray-300 bg-white py-1 pl-3 pr-8 text-xs leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:py-1.5 md:text-sm"
												placeholder="Search for interactive courses"
											/>
											<button
												type="submit"
												className="absolute inset-y-0 right-3 flex items-center px-3"
											>
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 16 16"
													className="h-3 w-3 text-gray-500"
													aria-hidden="true"
													height="1em"
													width="1em"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
												</svg>
											</button>
										</form>
										<span className="w-fit whitespace-nowrap text-sm text-gray-500 lg:ml-auto lg:text-base">
											Not sure where to begin?&nbsp;
											<a
												className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline hover:underline-offset-2"
												href=""
											>
												Take Quiz →
											</a>
										</span>
									</div>
									<div className="grid grid-cols-2 gap-5 p-4">
										{menuItems.map((item, index) => (
											<a
												key={`${item}-${index}`}
												className="font-medium text-gray-950 hover:underline hover:underline-offset-2"
												href=""
											>
												{item}
											</a>
										))}
									</div>
									<div className="p-4">
										<a href="">
											<button
												type="button"
												className="w-full font-semibold focus:outline-none rounded-lg px-3 py-2 text-sm shadow bg-indigo-600 text-white hover:bg-indigo-800"
											>
												Get started
											</button>
										</a>
										<span className="w-full text-center block text-base text-gray-500 lg:ml-auto lg:text-base p-3">
											Already have an account?&nbsp;
											<a
												className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline hover:underline-offset-2"
												href=""
											>
												Login
											</a>
										</span>
									</div>
								</div>
								<div className="flex items-center justify-evenly p-3 border-t">
									<Link
										href=""
										className="flex items-center text-gray-600 hover:text-gray-800"
									>
										<BsHeadphones className=" h-[18px] w-[18px] mr-2 shrink-0" />
										<span className="font-medium ">Support</span>
									</Link>
									<Link
										href=""
										className="flex items-center text-gray-600 hover:text-gray-800"
									>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth="0"
											viewBox="0 0 16 16"
											className="h-[18px] w-[18px] mr-2 shrink-0"
											aria-hidden="true"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
											<path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path>
										</svg>
										<span className="font-medium">Feedback</span>
									</Link>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	)
}
