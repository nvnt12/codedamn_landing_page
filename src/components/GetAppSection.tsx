import Link from 'next/link'
import Image from 'next/image'

export default function GetAppSection() {
	return (
		<div className="relative w-full mx-auto overflow-hidden py-20 flex justify-center">
			<Image
				src="/bg-img.png"
				alt="Background Image"
				width={2610}
				height={1305}
				className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none opacity-40 sm:-ml-[67.5rem]"
				priority
			/>

			<div className="grid grid-cols-1 w-full gap-x-8 gap-y-16 px-6 sm:gap-y-20 lg:grid-cols-2 lg:items-start max-w-screen-2xl">
				<div className="relative order-2 mx-auto flex h-full w-full max-w-4xl items-center justify-center lg:order-1">
					<div className="absolute inset-0 h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[10%] [mask-image:linear-gradient(to_bottom,white_30%,transparent_90%)]">
						<div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[12.25%]"></div>
					</div>

					<Image
						src={'/mobile-mockup.png'}
						alt={'Mobile Mockup'}
						width={900}
						height={900}
						className="relative w-full"
					/>
				</div>

				<div className="order-1 flex h-full items-center justify-center lg:order-2 lg:pr-4 lg:pt-4">
					<div className="relative mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-lg lg:text-left">
						<h3 className="text-4xl sm::text-4xl font-bold text-gray-900 tracking-tight">
							All of codedamn at your fingertips.
						</h3>
						<p className="text-lg leading-8 my-6 text-gray-600">
							Codedamn&apos;s mobile app keeps you connected to your progress and
							enables learning programming on-the-go from anywhere around the globe.
						</p>
						<div className="mt-12 flex justify-center gap-4 lg:justify-start">
							<Image
								src={'/codedamn-qr.png'}
								alt={'Codedamn QR'}
								width={115}
								height={115}
								className="hidden w-28 sm:block"
							/>
							<div className="flex max-w-xs justify-between gap-4 sm:h-28 sm:max-w-none sm:flex-col sm:gap-0">
								<Link href={''}>
									<AppleStoreTcon />
								</Link>
								<Link href={''}>
									<GooglePlayIcon />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function AppleStoreTcon() {
	return (
		<svg className=" w-full max-w-[172px] rounded mx-2 sm:mx-0" viewBox="0 0 135 40">
			<path
				fill="#A6A6A6"
				d="M130.2 40H4.7A4.7 4.7 0 0 1 0 35.3V4.7A4.7 4.7 0 0 1 4.7 0h125.5c2.6 0 4.8 2.1 4.8 4.7v30.6c0 2.6-2.2 4.7-4.8 4.7z"
			></path>
			<path d="M134 35.3a3.8 3.8 0 0 1-3.8 3.8H4.7A3.8 3.8 0 0 1 1 35.3V4.7A3.8 3.8 0 0 1 4.7 1h125.5a3.8 3.8 0 0 1 3.8 3.8v30.6z"></path>
			<path
				fill="#FFF"
				d="M30.1 19.8c0-3.2 2.7-4.8 2.8-4.9a6 6 0 0 0-4.7-2.5c-2-.2-3.9 1.2-4.9 1.2-1 0-2.5-1.2-4.2-1.2a6.2 6.2 0 0 0-5.2 3.2c-2.3 4-.6 9.7 1.6 12.9 1 1.6 2.3 3.3 4 3.2 1.6 0 2.2-1 4.2-1s2.5 1 4.2 1c1.7 0 2.8-1.6 3.9-3.1 1.2-1.8 1.7-3.6 1.7-3.7 0 0-3.3-1.3-3.4-5.1zM27 10.3c.9-1 1.5-2.6 1.3-4-1.2 0-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.4 3.9 1.5.1 3-.7 3.8-1.8zm26.6 21.2h-2.2L50 27.6h-4.3l-1.2 3.9h-2.2l4.3-13.3h2.6l4.3 13.3zM49.8 26l-1.2-3.5L48 20a96.8 96.8 0 0 1-.7 2.5L46.2 26h3.6zm14.9.6c0 1.6-.5 3-1.4 3.9-.8.8-1.7 1.2-2.9 1.2-1.3 0-2.2-.4-2.7-1.3v5h-2.2V22h1.8l.1 1.5a3.6 3.6 0 0 1 3.3-1.7c1.1 0 2 .5 2.8 1.4.8.8 1.2 2 1.2 3.5zm-2.2 0a4 4 0 0 0-.6-2.2c-.5-.7-1.1-1-1.9-1-.5 0-1 .2-1.4.5a2.8 2.8 0 0 0-1 2v1.7c0 .7.2 1.2.7 1.7s1 .7 1.6.7c.8 0 1.5-.3 2-.9a4 4 0 0 0 .6-2.4zm13.2 0c0 1.6-.4 3-1.3 3.9-.8.8-1.8 1.2-3 1.2s-2.1-.4-2.7-1.3v5h-2.2V22h1.8l.2 1.5a3.5 3.5 0 0 1 3.2-1.7c1.2 0 2.1.5 2.9 1.4.7.8 1.1 2 1.1 3.5zm-2.2 0a4 4 0 0 0-.6-2.2c-.5-.7-1-1-1.9-1a2.2 2.2 0 0 0-1.4.5c-.4.4-.7.8-.8 1.4l-.1.7v1.6c0 .7.2 1.2.6 1.7.4.5 1 .7 1.7.7.8 0 1.4-.3 1.9-.9a4 4 0 0 0 .6-2.4zM88 27.9c0 1.1-.4 2-1.1 2.7-1 .8-2.1 1.2-3.7 1.2-1.4 0-2.5-.3-3.4-.8l.5-1.8c1 .6 2 .8 3 .8a3 3 0 0 0 2-.5c.4-.4.6-.8.6-1.5 0-.5-.2-1-.5-1.3-.4-.4-1-.7-1.9-1-2.3-1-3.5-2.2-3.5-3.9 0-1 .4-2 1.2-2.7.9-.7 2-1 3.3-1 1.2 0 2.2.2 3 .6l-.5 1.8c-.8-.4-1.6-.6-2.6-.6-.7 0-1.3.1-1.7.5a1.6 1.6 0 0 0-.5 1.2c0 .5.2 1 .6 1.3.3.3 1 .7 1.9 1 1.1.5 2 1 2.5 1.7.6.6.8 1.4.8 2.3zm7-4.3h-2.3v4.7c0 1.2.5 1.7 1.3 1.7h1v1.6l-1.7.2c-.8 0-1.5-.3-2-.8-.4-.5-.7-1.3-.7-2.6v-4.8h-1.4V22h1.4v-1.8l2.1-.6V22h2.4v1.6zm10.7 3.1c0 1.5-.4 2.7-1.3 3.7s-2 1.4-3.5 1.4c-1.4 0-2.5-.4-3.4-1.4s-1.2-2-1.2-3.5.4-2.7 1.3-3.7c.8-1 2-1.4 3.5-1.4 1.4 0 2.5.5 3.4 1.4a5 5 0 0 1 1.2 3.5zm-2.2.1c0-.9-.2-1.6-.6-2.3-.4-.7-1-1.1-2-1.1-.8 0-1.4.4-1.9 1.1a5.6 5.6 0 0 0 0 4.6c.5.8 1.1 1.2 2 1.2.8 0 1.4-.4 1.9-1.2.4-.7.6-1.4.6-2.3zm9.1-3a3.7 3.7 0 0 0-.7 0 2 2 0 0 0-1.7.9c-.3.5-.5 1.1-.5 1.9v5h-2.2V22h1.8l.1 1.8c.3-.6.7-1 1.1-1.5a2.6 2.6 0 0 1 1.6-.5h.5v2zm9.6 2.6a5 5 0 0 1-.1 1h-6.4c0 .9.3 1.6 1 2 .4.5 1.1.8 2 .8a7 7 0 0 0 2.6-.5l.3 1.5a8 8 0 0 1-3.2.6 5 5 0 0 1-3.5-1.3c-.8-1-1.3-2-1.3-3.6 0-1.4.4-2.6 1.2-3.6a4 4 0 0 1 3.4-1.5c1.4 0 2.4.5 3.1 1.5.6.8.9 1.9.9 3zm-2-.6c0-.6-.2-1.2-.5-1.6a2 2 0 0 0-1.7-1 2 2 0 0 0-1.7 1c-.3.4-.6 1-.6 1.6h4.4zM49 10c0 1.2-.3 2-1 2.7-.7.5-1.6.8-2.8.8h-1.5V7l1.8-.2a4 4 0 0 1 2.6.8c.6.6 1 1.4 1 2.4zm-1 0c0-.7-.3-1.3-.7-1.7-.4-.4-1-.6-1.7-.6h-.9v5h.7c.8 0 1.5-.3 1.9-.7s.6-1.1.6-2zm7 1c0 .8-.3 1.4-.7 1.8-.4.5-1 .7-1.7.7s-1.3-.2-1.7-.6c-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.6-1.8s1-.7 1.7-.7 1.3.3 1.7.7c.4.5.6 1 .6 1.7zm-1.2 0c0-.4 0-.7-.3-1a1 1 0 0 0-.9-.6 1 1 0 0 0-1 .6l-.2 1c0 .5 0 .9.2 1.2.3.4.6.6 1 .6s.7-.2 1-.6l.2-1.1zm9-2.3-1.5 4.7h-1l-.6-2a15.3 15.3 0 0 1-.4-1.5 11.2 11.2 0 0 1-.4 1.5l-.6 2h-1L56 8.7h1l.5 2.3.4 1.5c0-.4.2-1 .4-1.5l.6-2.3h.9l.6 2.2.4 1.6.4-1.6.5-2.2h1zm5.4 4.7h-1v-2.7c0-.8-.4-1.2-1-1.2a1 1 0 0 0-.8.3 1.2 1.2 0 0 0-.2.8v2.8H64V8.7h.9v.8l.6-.6c.3-.2.6-.3 1-.3s.8.2 1 .4c.4.4.6 1 .6 1.6v2.8zm2.9 0h-1V6.6h1v6.8zm6.2-2.4c0 .8-.2 1.4-.7 1.8-.4.5-1 .7-1.7.7s-1.2-.2-1.6-.6c-.5-.5-.7-1-.7-1.8 0-.7.3-1.3.7-1.8s1-.7 1.7-.7 1.2.3 1.7.7c.4.5.6 1 .6 1.7zm-1.1 0c0-.4-.1-.7-.3-1a1 1 0 0 0-1-.6 1 1 0 0 0-1 .6l-.2 1c0 .5.1.9.3 1.2.2.4.5.6 1 .6.3 0 .7-.2.9-.6.2-.3.3-.7.3-1.1zm6.1 2.4h-1V13c-.3.4-.8.6-1.4.6-.4 0-.8-.1-1-.4a1.3 1.3 0 0 1-.4-1c0-.5.2-1 .7-1.3.5-.3 1.1-.4 2-.4v-.1c0-.6-.3-1-1-1-.4 0-.8.2-1.2.4l-.2-.7a3 3 0 0 1 1.6-.4c1.2 0 1.9.7 1.9 2v2.8zm-1-1.6v-.7c-1.2 0-1.8.3-1.8 1 0 .2 0 .4.2.5a.7.7 0 0 0 .5.2l.7-.2a.9.9 0 0 0 .3-.8zm7 1.6h-1v-.7c-.3.6-.8.8-1.5.8-.6 0-1-.2-1.5-.6s-.5-1-.5-1.8c0-.7.2-1.3.6-1.8.4-.5.9-.7 1.5-.7s1 .2 1.3.7V6.6h1v6.8zm-1.1-2v-.7a1.2 1.2 0 0 0-.4-1 1 1 0 0 0-.7-.3 1 1 0 0 0-1 .5 2 2 0 0 0-.3 1.2c0 .5.1.8.4 1.1.2.3.5.5.9.5.3 0 .6-.1.8-.4.2-.2.3-.5.3-.9zm10-.4c0 .8-.2 1.4-.6 1.8-.4.5-1 .7-1.7.7s-1.2-.2-1.7-.6c-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.7-1.8s1-.7 1.7-.7 1.2.3 1.6.7c.4.5.6 1 .6 1.7zm-1 0c0-.4-.1-.7-.3-1a1 1 0 0 0-1-.6 1 1 0 0 0-1 .6l-.2 1c0 .5 0 .9.3 1.2.2.4.5.6 1 .6.3 0 .6-.2.9-.6.2-.3.3-.7.3-1.1zm6.7 2.4h-1v-2.7c0-.8-.4-1.2-1-1.2-.3 0-.6.1-.8.3s-.3.5-.3.8v2.8h-1V8.7h.9v.8a1.5 1.5 0 0 1 .6-.6c.3-.2.6-.3 1-.3s.7.2 1 .4c.4.4.6 1 .6 1.6v2.8zm7-3.9h-1.1v2.3c0 .6.2.9.6.9h.5v.7l-.8.1c-.4 0-.8-.1-1-.3-.2-.3-.3-.7-.3-1.3V9.5h-.7v-.8h.7V8l1-.4v1.2h1.1v.8zm5.6 4h-1v-2.7c0-.9-.4-1.3-1-1.3-.5 0-.8.2-1 .7a1.3 1.3 0 0 0 0 .4v2.8h-1.1V6.6h1v2.8c.4-.5.9-.8 1.5-.8.4 0 .8.2 1 .4.4.4.6 1 .6 1.6v2.8zm5.7-2.6v.4H118c0 .5.2.8.5 1 .2.3.6.4 1 .4.5 0 .9 0 1.3-.2l.1.7a4 4 0 0 1-1.5.3c-.8 0-1.3-.2-1.8-.6-.4-.5-.6-1-.6-1.8 0-.7.2-1.3.6-1.7a2 2 0 0 1 1.6-.8 2 2 0 0 1 1.6.8c.3.4.4.9.4 1.5zm-1-.3a1.4 1.4 0 0 0-.2-.8 1 1 0 0 0-.8-.5 1 1 0 0 0-.9.5 1.6 1.6 0 0 0-.3.8h2.2z"
			></path>
		</svg>
	)
}

function GooglePlayIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 135 40"
			className=" w-full max-w-[172px] rounded mx-2 sm:mx-0"
		>
			<rect width="134" height="39" x="0.5" y="0.5" fill="#000" rx="4.5"></rect>
			<path
				fill="#fff"
				d="M68.136 21.75c-2.352 0-4.269 1.79-4.269 4.254 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253-.001-2.464-1.918-4.253-4.27-4.253zm0 6.833c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578 0 1.514-1.111 2.578-2.4 2.578zm-9.314-6.832c-2.352 0-4.269 1.789-4.269 4.253 0 2.449 1.917 4.253 4.269 4.253 2.353 0 4.27-1.804 4.27-4.253 0-2.464-1.917-4.253-4.27-4.253zm0 6.832c-1.289 0-2.4-1.063-2.4-2.578 0-1.531 1.112-2.578 2.4-2.578 1.289 0 2.4 1.047 2.4 2.578.001 1.514-1.111 2.578-2.4 2.578zm-11.078-5.526v1.804h4.318c-.129 1.015-.467 1.756-.983 2.27-.628.629-1.611 1.322-3.335 1.322-2.658 0-4.736-2.143-4.736-4.801 0-2.658 2.078-4.801 4.736-4.801 1.434 0 2.481.564 3.254 1.289l1.273-1.273c-1.08-1.031-2.513-1.82-4.527-1.82-3.641 0-6.702 2.964-6.702 6.605 0 3.64 3.061 6.605 6.702 6.605 1.965 0 3.448-.645 4.607-1.853 1.192-1.192 1.563-2.868 1.563-4.221 0-.418-.032-.805-.097-1.127h-6.073zm45.308 1.4c-.354-.95-1.434-2.706-3.641-2.706-2.191 0-4.012 1.724-4.012 4.253 0 2.384 1.805 4.253 4.221 4.253 1.949 0 3.077-1.192 3.545-1.885l-1.45-.967c-.483.709-1.144 1.176-2.095 1.176-.95 0-1.627-.435-2.062-1.29l5.687-2.351-.193-.482zm-5.8 1.419c-.048-1.644 1.273-2.481 2.224-2.481.741 0 1.369.37 1.579.902l-3.803 1.579zM82.629 30h1.868V17.499h-1.868v12.5zm-3.062-7.298h-.064c-.419-.5-1.225-.951-2.239-.951-2.127 0-4.076 1.869-4.076 4.27 0 2.384 1.949 4.237 4.076 4.237 1.015 0 1.82-.451 2.239-.966h.064v.612c0 1.627-.87 2.497-2.271 2.497-1.144 0-1.853-.821-2.143-1.514l-1.627.677c.467 1.127 1.707 2.513 3.77 2.513 2.191 0 4.044-1.29 4.044-4.431V22.01h-1.772v.692h-.001zm-2.142 5.88c-1.289 0-2.368-1.08-2.368-2.561 0-1.5 1.079-2.594 2.368-2.594 1.272 0 2.271 1.095 2.271 2.594 0 1.482-.999 2.562-2.271 2.562zM101.806 17.5h-4.471v12.5H99.2v-4.735h2.605c2.068 0 4.102-1.497 4.102-3.882s-2.033-3.883-4.101-3.883zm.048 6.025H99.2v-4.285h2.654c1.395 0 2.187 1.155 2.187 2.143 0 .968-.792 2.142-2.187 2.142zm11.532-1.795c-1.351 0-2.75.595-3.329 1.914l1.656.69c.354-.69 1.014-.916 1.705-.916.965 0 1.946.579 1.962 1.608v.129c-.338-.193-1.062-.482-1.946-.482-1.785 0-3.603.98-3.603 2.814 0 1.673 1.464 2.75 3.104 2.75 1.254 0 1.946-.563 2.38-1.223h.064v.965h1.802v-4.793c.001-2.218-1.657-3.456-3.795-3.456zm-.226 6.85c-.61 0-1.463-.305-1.463-1.061 0-.965 1.062-1.335 1.979-1.335.819 0 1.206.177 1.704.418a2.262 2.262 0 01-2.22 1.979zm10.583-6.577l-2.139 5.42h-.064l-2.22-5.42h-2.01l3.329 7.575-1.898 4.214h1.946L125.818 22h-2.075zM106.937 30h1.865V17.499h-1.865v12.5zM47.418 10.243c0 .838-.248 1.505-.745 2.003-.564.592-1.3.888-2.204.888-.866 0-1.603-.3-2.208-.9-.606-.6-.909-1.345-.909-2.233 0-.889.303-1.633.91-2.233.604-.6 1.341-.9 2.207-.9.43 0 .841.083 1.231.25.391.168.704.391.938.67l-.527.528c-.397-.475-.944-.712-1.643-.712-.632 0-1.178.222-1.639.666-.461.444-.69 1.021-.69 1.73 0 .71.229 1.286.69 1.73a2.282 2.282 0 001.639.666c.67 0 1.23-.223 1.676-.67.29-.29.458-.696.503-1.215h-2.179v-.72h2.907c.03.156.043.307.043.452zM52.028 7.737h-2.732V9.64h2.464v.721h-2.464v1.902h2.732V13h-3.503V7h3.503v.737zM55.279 13h-.771V7.737h-1.676V7h4.123v.737h-1.676V13zM59.938 13V7h.771v6h-.771zM64.128 13h-.77V7.737H61.68V7h4.123v.737h-1.676V13zM73.609 12.225c-.59.606-1.323.91-2.2.91-.877 0-1.61-.304-2.2-.91-.59-.606-.883-1.348-.883-2.225s.294-1.619.884-2.225c.589-.606 1.322-.91 2.199-.91.872 0 1.604.305 2.196.914.592.61.888 1.35.888 2.221 0 .877-.295 1.62-.884 2.225zm-3.83-.503a2.2 2.2 0 001.63.674c.643 0 1.187-.225 1.63-.674.444-.45.667-1.024.667-1.722s-.223-1.272-.667-1.722a2.199 2.199 0 00-1.63-.674c-.643 0-1.186.225-1.63.674-.443.45-.666 1.024-.666 1.722s.223 1.272.666 1.722zM75.575 13V7h.938l2.916 4.667h.033l-.033-1.156v-3.51h.77v6h-.804l-3.051-4.895h-.033l.033 1.156V13h-.77z"
			></path>
			<path
				stroke="#fff"
				strokeMiterlimit="10"
				strokeWidth="0.2"
				d="M47.418 10.243c0 .838-.248 1.505-.745 2.003-.564.592-1.3.888-2.204.888-.866 0-1.603-.3-2.208-.9-.606-.6-.909-1.345-.909-2.233 0-.889.303-1.633.91-2.233.604-.6 1.341-.9 2.207-.9.43 0 .841.083 1.231.25.391.168.704.391.938.67l-.527.528c-.397-.475-.944-.712-1.643-.712-.632 0-1.178.222-1.639.666-.461.444-.69 1.021-.69 1.73 0 .71.229 1.286.69 1.73a2.282 2.282 0 001.639.666c.67 0 1.23-.223 1.676-.67.29-.29.458-.696.503-1.215h-2.179v-.72h2.907c.03.156.043.307.043.452zM52.028 7.737h-2.732V9.64h2.464v.721h-2.464v1.902h2.732V13h-3.503V7h3.503v.737zM55.279 13h-.771V7.737h-1.676V7h4.123v.737h-1.676V13zM59.938 13V7h.771v6h-.771zM64.128 13h-.77V7.737H61.68V7h4.123v.737h-1.676V13zM73.609 12.225c-.59.606-1.323.91-2.2.91-.877 0-1.61-.304-2.2-.91-.59-.606-.883-1.348-.883-2.225s.294-1.619.884-2.225c.589-.606 1.322-.91 2.199-.91.872 0 1.604.305 2.196.914.592.61.888 1.35.888 2.221 0 .877-.295 1.62-.884 2.225zm-3.83-.503a2.2 2.2 0 001.63.674c.643 0 1.187-.225 1.63-.674.444-.45.667-1.024.667-1.722s-.223-1.272-.667-1.722a2.199 2.199 0 00-1.63-.674c-.643 0-1.186.225-1.63.674-.443.45-.666 1.024-.666 1.722s.223 1.272.666 1.722zM75.575 13V7h.938l2.916 4.667h.033l-.033-1.156v-3.51h.77v6h-.804l-3.051-4.895h-.033l.033 1.156V13h-.77z"
			></path>
			<g filter="url(#filter0_ii_2092_139931)">
				<path
					fill="url(#paint0_linear_2092_139931)"
					d="M10.436 7.538c-.29.308-.463.786-.463 1.405v22.116c0 .62.172 1.097.463 1.405l.074.072 12.39-12.39v-.291L10.51 7.465l-.074.073z"
				></path>
				<path
					fill="url(#paint1_linear_2092_139931)"
					d="M27.028 24.278l-4.13-4.131v-.292l4.13-4.13.094.053 4.893 2.78c1.397.794 1.397 2.093 0 2.888l-4.893 2.78-.094.052z"
				></path>
				<g filter="url(#filter1_i_2092_139931)">
					<path
						fill="url(#paint2_linear_2092_139931)"
						d="M27.122 24.225l-4.224-4.224-12.462 12.463c.46.488 1.221.548 2.078.062l14.608-8.301z"
					></path>
				</g>
				<path
					fill="url(#paint3_linear_2092_139931)"
					d="M27.122 15.777l-14.608-8.3c-.857-.487-1.618-.426-2.078.062l12.463 12.463 4.223-4.225z"
				></path>
			</g>
			<rect width="134" height="39" x="0.5" y="0.5" stroke="#A6A6A6" rx="4.5"></rect>
			<defs>
				<filter
					id="filter0_ii_2092_139931"
					width="23.089"
					height="25.721"
					x="9.973"
					y="7.141"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="-0.15"></feOffset>
					<feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
					<feBlend in2="shape" result="effect1_innerShadow_2092_139931"></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="0.15"></feOffset>
					<feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
					<feBlend
						in2="effect1_innerShadow_2092_139931"
						result="effect2_innerShadow_2092_139931"
					></feBlend>
				</filter>
				<filter
					id="filter1_i_2092_139931"
					width="16.686"
					height="12.86"
					x="10.436"
					y="20.001"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dy="-0.15"></feOffset>
					<feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
					<feBlend in2="shape" result="effect1_innerShadow_2092_139931"></feBlend>
				</filter>
				<linearGradient
					id="paint0_linear_2092_139931"
					x1="21.801"
					x2="5.019"
					y1="8.709"
					y2="25.491"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00A0FF"></stop>
					<stop offset="0.007" stopColor="#00A1FF"></stop>
					<stop offset="0.26" stopColor="#00BEFF"></stop>
					<stop offset="0.512" stopColor="#00D2FF"></stop>
					<stop offset="0.76" stopColor="#00DFFF"></stop>
					<stop offset="1" stopColor="#00E3FF"></stop>
				</linearGradient>
				<linearGradient
					id="paint1_linear_2092_139931"
					x1="33.833"
					x2="9.638"
					y1="20.001"
					y2="20.001"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFE000"></stop>
					<stop offset="0.409" stopColor="#FFBD00"></stop>
					<stop offset="0.775" stopColor="orange"></stop>
					<stop offset="1" stopColor="#FF9C00"></stop>
				</linearGradient>
				<linearGradient
					id="paint2_linear_2092_139931"
					x1="24.828"
					x2="2.07"
					y1="22.295"
					y2="45.053"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF3A44"></stop>
					<stop offset="1" stopColor="#C31162"></stop>
				</linearGradient>
				<linearGradient
					id="paint3_linear_2092_139931"
					x1="7.297"
					x2="17.46"
					y1="0.177"
					y2="10.339"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#32A071"></stop>
					<stop offset="0.069" stopColor="#2DA771"></stop>
					<stop offset="0.476" stopColor="#15CF74"></stop>
					<stop offset="0.801" stopColor="#06E775"></stop>
					<stop offset="1" stopColor="#00F076"></stop>
				</linearGradient>
			</defs>
		</svg>
	)
}
