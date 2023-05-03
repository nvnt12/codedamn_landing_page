import Link from 'next/link'

export default function Footer() {
	return (
		<div className="relative h-fit w-full px-8 py-16 bg-zinc-50 border-t border-gray-200">
			<div className="w-full flex justify-between ">
				<div className="w-4/12 pr-6">
					<svg
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 168 268"
						className="h-auto w-12 mb-8"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						width="168"
						height="268"
					>
						<path d="M41.78 157.47L28.15 157.5L0.829987 117.95L28.5 76.5H52.83L25.17 116.79L52.83 157.5L41.78 157.47Z"></path>
						<path d="M126.22 157.47L139.85 157.5L167.17 117.95L139.5 76.5H115.17L142.83 116.79L115.17 157.5L126.22 157.47Z"></path>
						<path d="M99.7 136.57C96.92 140.75 92.9 143.39 88.41 143.39C80.03 143.39 73.23 134.22 73.23 122.91C73.23 111.6 80.03 102.43 88.41 102.43C92.81 102.43 96.77 104.97 99.54 109.01L113.02 99.59C106.98 90.99 97.74 85.48 87.36 85.48C69.16 85.48 54.41 102.39 54.41 123.25C54.41 144.11 69.16 161.02 87.36 161.02C98.63 161.02 108.57 154.53 114.51 144.63L99.7 136.57Z"></path>
						<path d="M84.83 0.5C67.16 0.5 52.83 17.39 52.83 38.23C52.83 59.07 67.16 75.96 84.83 75.96C102.5 75.96 116.83 59.07 116.83 38.23C116.83 17.39 102.51 0.5 84.83 0.5ZM85.15 59.66C77.26 59.66 70.87 50.35 70.87 38.88C70.87 27.41 77.26 18.1 85.15 18.1C93.04 18.1 99.43 27.41 99.43 38.88C99.43 50.35 93.04 59.66 85.15 59.66Z"></path>
						<path d="M74.54 171.5H97.57L124.97 267.5H103.1L86.29 199.27L68.79 267.5H47.83L74.54 171.5Z"></path>
					</svg>
					<p className="text-md font-light my-2">
						Learn to code interactively - without ever leaving your browser.
					</p>
					<div className="flex w-full mt-8">
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								width="24"
								height="24"
							>
								<path
									fill-rule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clip-rule="evenodd"
									fill="#71717A"
								></path>
							</svg>
						</Link>
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								width="24"
								height="24"
							>
								<path
									fill-rule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clip-rule="evenodd"
									fill="#71717A"
								></path>
							</svg>
						</Link>
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								width="24"
								height="24"
							>
								<path
									d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									fill="#71717A"
								></path>
							</svg>
						</Link>
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								width="24"
								height="24"
							>
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
									fill="#71717A"
								></path>
							</svg>
						</Link>
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 75 75"
								width="75"
								height="75"
							>
								<defs>
									<clipPath id="clip1">
										<path d="M 0 9.609375 L 75 9.609375 L 75 64.828125 L 0 64.828125 Z M 0 9.609375 "></path>
									</clipPath>
								</defs>
								<g id="surface1" fill="#71717A">
									<g clip-path="url(#clip1)" clip-rule="nonzero" fill="#71717A">
										<path
											fill="#71717A"
											d="M 72.910156 19.132812 C 72.214844 15.34375 68.914062 12.585938 65.078125 11.722656 C 59.339844 10.519531 48.722656 9.65625 37.234375 9.65625 C 25.753906 9.65625 14.96875 10.519531 9.222656 11.722656 C 5.398438 12.585938 2.085938 15.167969 1.394531 19.132812 C 0.691406 23.4375 0 29.46875 0 37.21875 C 0 44.972656 0.691406 51 1.5625 55.308594 C 2.261719 59.09375 5.566406 61.855469 9.394531 62.714844 C 15.484375 63.921875 25.925781 64.78125 37.414062 64.78125 C 48.902344 64.78125 59.339844 63.921875 65.433594 62.714844 C 69.257812 61.855469 72.5625 59.269531 73.261719 55.308594 C 73.957031 51 74.824219 44.796875 75.003906 37.21875 C 74.648438 29.46875 73.777344 23.4375 72.910156 19.132812 Z M 27.84375 49.277344 L 27.84375 25.160156 L 49.070312 37.21875 Z M 27.84375 49.277344 "
										></path>
									</g>
								</g>
							</svg>
						</Link>
						<Link href={''}>
							<svg
								xmlnsXlink="http://www.w3.org/1999/xlink"
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 50 50"
								width="50"
								height="50"
							>
								<path
									d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"
									fill="#71717A"
								></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className="w-8/12 flex justify-between">
					<div className="flex justify-between">
						<div className="w-[200px] pr-8">
							<h3 className="uppercase text-sm font-semibold tracking-wider mb-4 text-zinc-700">
								Solutions
							</h3>
							<ul>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Learn paths
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900"
										href=""
									>
										Explore courses
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Build projects
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Boot playgrounds
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Teach on codedamn
									</a>
								</li>
							</ul>
						</div>
						<div className="w-[200px] pr-8">
							<h3 className="uppercase text-sm font-semibold tracking-wider mb-4 text-zinc-700">
								Resources
							</h3>
							<ul>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Pricing
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Student account
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Developer blog
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Refer and earn
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Affiliate program
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Online compilers
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Online web tools
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Choose your career
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="w-[200px] pr-8">
							<h3 className="uppercase text-sm font-semibold tracking-wider mb-4 text-zinc-700">
								Company
							</h3>
							<ul>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										About
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900"
										href=""
									>
										Careers
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Support
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Terms
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Privacy
									</a>
								</li>
								<li className="mb-4">
									<a
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
										href=""
									>
										Feedback
									</a>
								</li>
							</ul>
						</div>
						<div className="w-[200px] pr-8">
							<h3 className="uppercase text-sm font-semibold tracking-wider mb-4 text-zinc-700">
								Popular
							</h3>
							<ul>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										How much JS before React?
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Solidity require keyword
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Next.js vs Nuxt.js
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										React.js online compiler
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Python online IDE
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Next.js best practices
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Payable function solidity
									</a>
								</li>
								<li className="mb-4">
									<a
										href=""
										className="text-md font-normal text-zinc-500 hover:text-zinc-900 mb-4"
									>
										Solidity online compiler
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full text-center pt-8 border-t mt-12 border-gray-200">
				<span className="text-zinc-400">
					&copy; codedamn&trade; 2023 | All rights reserved.
				</span>
			</div>
		</div>
	)
}
