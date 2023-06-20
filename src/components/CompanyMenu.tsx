import { Popover, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { Fragment } from 'react'
import Image from 'next/image'

const company = [
	{
		name: 'About',
		icon: AboutIcon
	},
	{
		name: 'Contact',
		icon: ContactIcon
	},
	{
		name: 'Careers',
		icon: CareersIcon
	},
	{
		name: 'Feedback',
		icon: FeedbackIcon
	}
]

const resources = [
	{
		name: 'Community Forum',
		icon: CommunityForumIcon
	},
	{
		name: 'Online Compilers',
		icon: OnlineCompilersIcon
	},
	{
		name: 'Refer and Earn',
		icon: ReferAndEarnIcon
	},
	{
		name: 'Teach on codedamn',
		icon: TeachOnCodedamnIcon
	},
	{
		name: 'Web Tools',
		icon: WebToolsIcon
	}
]

const blogPosts = [
	{
		name: 'Top 10 data modeling tools for programmers (2023)',
		description:
			'Ever wondered how data actually represented in such a way that is more structured or easy to understand? Well...',
		imgUrl: '/blogPost1.png'
	},
	{
		name: 'DynamoDB vs MongoDB: Which one to choose and why?',
		description:
			'Developers often debate the merits of using SQL vs NoSQL, on one hand, you have safety, security, and consistency while...',
		imgUrl: '/blogPost2.png'
	}
]

export default function CompanyMenu() {
	return (
		<div className="w-full max-w-sm">
			<Popover className="z-0 relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={`group inline-flex items-center focus:outline-none`}
						>
							<span>Company</span>
							<BiChevronDown
								className={`${open ? ' rotate-180' : ' rotate-0'} h-5 w-5`}
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 -translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 -translate-y-1"
						>
							<Popover.Panel className="fixed inset-x-0 z-40 mt-[19px] sm:px-0 w-screen shadow-lg flex justify-center">
								<div className="absolute inset-0 flex" aria-hidden="true">
									<div className="bg-white w-1/2" />
									<div className="bg-gray-50 w-1/2" />
								</div>
								<div className="relative w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2">
									<nav
										className="grid gap-y-10 px-6 py-8 lg:py-10 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 xl:pr-12"
										aria-labelledby="solutions-heading"
									>
										<div>
											<h3 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
												Company
											</h3>
											<ul role="list" className="mt-5 space-y-6">
												{company.map((item, index) => (
													<li
														key={`${item.name}-${index}`}
														className="flow-root"
													>
														<a
															href=""
															className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
														>
															<div className="flex-shrink-0 text-gray-400">
																<item.icon aria-hidden="true" />
															</div>
															<span className="ml-4 text-gray-600">
																{item.name}
															</span>
														</a>
													</li>
												))}
											</ul>
										</div>
										<div>
											<h3 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
												Resources
											</h3>
											<ul role="list" className="mt-5 space-y-6">
												{resources.map((resource, index) => (
													<li
														key={`${resource.name}-${index}`}
														className="flow-root"
													>
														<a
															href=""
															className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
														>
															<div className="flex-shrink-0 text-gray-400">
																<resource.icon aria-hidden="true" />
															</div>
															<span className="ml-4 text-gray-600">
																{resource.name}
															</span>
														</a>
													</li>
												))}
											</ul>
										</div>
									</nav>
									<div className="bg-zinc-50 px-4 py-9 lg:px-6 xl:pl-12 lg:py-10">
										<div>
											<h3 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
												From the blog
											</h3>
											<ul role="list" className="mt-6 space-y-6">
												{blogPosts.map((post, index) => (
													<li
														key={`${post.name}-${index}`}
														className="flow-root"
													>
														<a
															href=""
															className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 pr-12"
														>
															<div className="hidden sm:block flex-shrink-0">
																<Image
																	className="w-32 h-20 object-cover rounded-md"
																	src={post.imgUrl}
																	width={128}
																	height={80}
																	alt="Blog Thumbnail"
																/>
															</div>
															<div className="min-w-0 flex-1 sm:ml-8">
																<h4 className="text-base font-medium text-gray-700 truncate">
																	{post.name}
																</h4>
																<p className="mt-1 text-sm font-normal text-gray-500">
																	{post.description}
																</p>
															</div>
														</a>
													</li>
												))}
											</ul>
										</div>
										<div className="mt-6 text-sm font-medium">
											<a
												href=""
												className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
											>
												View the latest developer news&nbsp;
												<span aria-hidden="true">&rarr;</span>
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

function AboutIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
			<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
		</svg>
	)
}
function ContactIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
		</svg>
	)
}
function CareersIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path>
		</svg>
	)
}
function FeedbackIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
			<path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path>
		</svg>
	)
}
function CommunityForumIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
		</svg>
	)
}
function OnlineCompilersIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path>
		</svg>
	)
}
function ReferAndEarnIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"></path>
		</svg>
	)
}
function TeachOnCodedamnIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"></path>
		</svg>
	)
}
function WebToolsIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-[18px] w-[18px] flex-shrink-0 text-gray-500"
			aria-hidden="true"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
		</svg>
	)
}
