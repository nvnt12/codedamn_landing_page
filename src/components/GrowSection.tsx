import Image from 'next/image'

export default function GrowSection() {
	const sectionInfo = {
		sectionOrder: 3,
		sectionTitle: 'Grow',
		sectionHeader: 'Expand your Potential',
		subsection: [
			{
				icon: MakeSomethingGreatIcon,
				title: 'Make something great',
				description: `Start a playground, invite your friends and build your projects
                collaboratively, from anywhere around the globe.`,
				className: 'max-w-xl'
			},
			{
				icon: ConnectOnDiscordIcon,
				title: 'Connect on Discord',
				description: `Find developers, mentors, and new friends. Attend exclusive events
                organized by codedamn and have fun while growing your skills.`,
				className: 'max-w-lg'
			}
		]
	}

	return (
		<div className="w-full flex flex-col items-center">
			<div className="h-24 w-px bg-gradient-to-b from-white via-lime-400 to-lime-600"></div>
			<span className="h-10 w-10 rounded-full bg-gradient-to-r from-lime-600 to-lime-400 text-xl text-white font-bold flex justify-center items-center">
				{sectionInfo.sectionOrder}
			</span>
			<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-lime-600 via-lime-600 to-lime-400 bg-clip-text pt-6 backdrop-blur-lg bg-white bg-opacity-50">
				{sectionInfo.sectionTitle}
			</span>
			<h2 className="text-4xl text-center sm:text-6xl tracking-tighter font-bold text-gray-800 backdrop-blur-lg bg-white bg-opacity-50 py-4">
				{sectionInfo.sectionHeader}
			</h2>
			<div className="w-full h-fit flex flex-col lg:flex-row max-w-screen-2xl">
				<div className="relative w-full flex flex-col items-center lg:items-start lg:w-3/6 h-full px-6 lg:pl-6 lg:pr-16 pt-16">
					<div className="pt-6 flex flex-col items-center lg:items-start pb-9 text-center lg:text-left backdrop-blur-lg bg-white bg-opacity-50">
						<h2 className="text-[30px] leading-9 font-bold text-gray-900 tracking-tight max-w-lg">
							Join the community{' '}
							<span className="hidden lg:inline">
								of developers changing the world
							</span>
						</h2>
						<p className="text-[18px] max-w-xl font-normal leading-[26px] text-zinc-700 mt-3">
							Transform the way you learn coding and connect with other like minded
							developers across the globe.
						</p>
					</div>
					{sectionInfo.subsection.map((item, index) => (
						<div
							key={`subsection-item-${index}`}
							className={`pt-6 pb-9 pr-4 flex flex-col items-center lg:items-start text-center lg:text-start backdrop-blur-lg bg-white bg-opacity-50 ${item.className}`}
						>
							<item.icon />
							<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
								{item.title}
							</h3>
							<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
								{item.description}
							</p>
						</div>
					))}

					<button className="text-base z-10 lg:text-lg font-semibold text-white bg-gradient-to-r from-lime-600/90 via-lime-500 to-lime-400 shadow-xl shadow-lime-400/30 rounded-lg py-3 lg:py-3.5 px-[10%] lg:px-[20%] ">
						Begin your coding journey &rarr;
					</button>
				</div>
				<div className="relative lg:absolute h-[50vw] w-full flex justify-center lg:justify-end lg:h-full overflow-clip max-w-screen-2xl">
					<Image
						src="/silver-globe.png"
						alt="Globe Image"
						width={1400}
						height={1400}
						className="absolute w-full h-auto top-2 lg:absolute lg:-right-[22%] lg:top-4 xl:-right-[3%] 2xl:right-14 lg:[mask-image:linear-gradient(white_30%,transparent_99%)] lg:h-[820px] lg:w-[820px] xl:top-6 2xl:top-8 xl:w-[860px] xl:h-[860px] "
						priority
					/>
				</div>
			</div>
		</div>
	)
}

function MakeSomethingGreatIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="url(#GrowSvgGradient)"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-8 w-9"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"></path>
			<path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"></path>
			<path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"></path>
		</svg>
	)
}
function ConnectOnDiscordIcon() {
	return (
		<svg
			className="h-8 w-9"
			fill="#84cc16"
			strokeWidth="2"
			stroke="url(#GrowSvgGradient)"
			viewBox="0 0 64 64"
		>
			<path d="M40 30a4 4.5 0 1 0 0 9 4 4.5 0 1 0 0-9Z"></path>
			<path d="M52.3 16a31 31 0 0 0-13.4-5 1 1 0 0 0-1 .6s-.6 1.2-.8 2.7a39.5 39.5 0 0 0-10.4 0c-.2-1.5-.8-2.7-.8-2.7a1 1 0 0 0-1-.6c-.4 0-8.3 1-13.2 5A54.7 54.7 0 0 0 4 44.5c3.5 6 13.6 8.4 15.9 8.5.3 0 .6-.1.8-.4l3.5-4.3a39.6 39.6 0 0 0 15.4 0l3.5 4.3c.2.3.5.4.8.4 2.3 0 12.4-2.5 15.9-8.5l.1-.5c0-11.9-5.1-25.7-7.7-28zm-7.8 35-2.6-3.2c5.6-1.5 8.6-3.9 8.7-4a1 1 0 0 0-1.2-1.6S43.4 47 32 47a29.3 29.3 0 0 1-17.4-4.8 1 1 0 1 0-1.2 1.6c.1.1 3 2.5 8.7 4L19.6 51c-3-.4-10.8-2.7-13.6-7.3a55 55 0 0 1 7-26.2c3.5-2.9 9.3-4 11.3-4.4l.4 1.6a26 26 0 0 0-9.2 3.5 1 1 0 1 0 1 1.6C22 16.5 28.5 16 32 16a30.6 30.6 0 0 1 16 4 1 1 0 0 0 .5-1.8c-3-2-6.4-3-9.4-3.6 0-.6.2-1.1.3-1.5 2.1.3 8 1.5 11.6 4.4 2 1.8 7 14.9 7 26.2-2.8 4.6-10.6 7-13.5 7.3z"></path>
			<path d="M24 30a4 4.5 0 1 0 0 9 4 4.5 0 1 0 0-9Z"></path>
		</svg>
	)
}
