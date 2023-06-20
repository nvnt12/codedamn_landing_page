import { Popover, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { Fragment } from 'react'

export const learningPaths = [
	{
		name: 'Frontend Development',
		description:
			'A distilled roadmap for frontend developers. Cover the fundamentals of web development from the ground up.',
		icon: FrontendIcon
	},
	{
		name: 'Backend Development',
		description:
			'The roadmap for becoming a top notch backend developer with a true understanding of servers and databases.',
		icon: BackendIcon
	},
	{
		name: 'Fullstack Development',
		description:
			'Become a fullstack developer. Learn to buid applications end-to-end, use CI/CD and deploy for scalability.',
		icon: FullStackIcon
	},
	{
		name: 'Web 3.0 and Blockchain',
		description:
			'Explore and learn about the decentralized Web 3.0 to become a solid blockchain developer.',
		icon: Web3BlockchainIcon
	},
	{
		name: 'Data Structures and Algorithms',
		description:
			'Knowledge of DSA can help you become an efficient developer and clear interviews more effectively.',
		icon: DataStructureIcon
	}
]

export default function LearnMenu() {
	return (
		<div className="w-full max-w-sm">
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={`group inline-flex items-center focus:outline-none`}
						>
							<span>Learn</span>
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
									<div className="bg-white px-6 py-2 w-full flex justify-center">
										<div className="w-full max-w-screen-2xl">
											<span className="flex items-center">
												<span className="uppercase text-sm tracking-wide font-semibold text-gray-600 mt-8">
													Interactive learning paths
												</span>
											</span>
											<span className="block font-normal text-sm text-gray-600 mt-1">
												Pick any learning path and get started immediately
												on the developer skills you need.
											</span>
										</div>
									</div>
									<div className="relative grid gap-7 bg-white pt-4 pb-8 pl-4 pr-16 grid-cols-2 xl:grid-cols-4 max-w-screen-2xl">
										{learningPaths.map((path, index) => (
											<a
												key={`${path.name}-${index}`}
												className=" flex rounded-lg py-3 px-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
											>
												<div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
													<path.icon />
												</div>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-700">
														{path.name}
													</p>
													<p className="text-sm font-normal leading-[23px] text-gray-500 mt-1">
														{path.description}
													</p>
												</div>
											</a>
										))}
									</div>
									<div className="bg-gray-50 w-full">
										<div className=" p-5 mx-auto flex w-full max-w-screen-2xl flex-wrap items-center gap-4 px-6 py-5 lg:px-8 [&_input]:min-w-[414px]">
											<form className="relative md:px-3">
												<input
													name="search"
													className="block w-full rounded-md border border-gray-300 bg-white py-1 pl-3 pr-8 text-xs leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 md:py-1.5 md:text-sm"
													placeholder="Search across our catalog of 100+ interactive courses"
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
											<a href="">
												<button
													type="button"
													className="inline-flex min-w-max items-center gap-2 flex-shrink-0 border border-transparent font-semibold focus:outline-none rounded-lg px-3 py-2 text-sm shadow bg-indigo-600 text-white hover:bg-indigo-700"
												>
													Explore all courses
												</button>
											</a>
											<span className="w-fit whitespace-nowrap text-sm text-gray-500 lg:ml-auto lg:text-base px-3">
												Not sure where to begin?&nbsp;
												<a
													className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline hover:underline-offset-2"
													href=""
												>
													Take Quiz →
												</a>
											</span>
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

function FrontendIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-6 w-6 fill-indigo-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
			<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z"></path>
		</svg>
	)
}

function BackendIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-6 w-6 fill-indigo-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8z"></path>
			<path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
		</svg>
	)
}

function FullStackIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-6 w-6 fill-indigo-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"></path>
			<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"></path>
		</svg>
	)
}

function Web3BlockchainIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-6 w-6 fill-indigo-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
			></path>
		</svg>
	)
}

function DataStructureIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-6 w-6 fill-indigo-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
			></path>
		</svg>
	)
}
