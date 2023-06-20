import GamePracticeProject from './GamePracticeProject'
import JarvisHelpProject from './JarvisHelpProject'

export default function LearnSection() {
	const sectionInfo = {
		sectionOrder: 1,
		sectionTitle: 'Learn',
		sectionHeader: 'Instantly and Interactively',
		sectionSubHeader: `Learn from carefully curated learning paths with up-to-date interactive courses, and
        receive 24x7 AI assistance as you develop your coding skills.`,
		subsection: [
			{
				animatedIDE: GamePracticeProject,
				icon: HandsOnPracticeIcon,
				title: 'Hands-on practice',
				description: `At codedamn, you get to learn by doing. Escape tutorial hell by solving
                real-world challenges in our interactive labs, all within your browser.`,
				divider: () => (
					<div className="w-full lg:w-fit h-full flex flex-col items-center lg:items-center order-1 lg:order-none ">
						<div className="h-28 w-px bg-gradient-to-b from-white via-gray-500/50 to-gray-600"></div>
						<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
						<div className="h-72 w-px border-l hidden lg:block border-gray-600 border-dashed"></div>
					</div>
				)
			},
			{
				animatedIDE: JarvisHelpProject,
				icon: InstantHelpFromJarvisIcon,
				title: 'Instant help from Jarvis',
				description: `Meet Jarvis, your personal state-of-the-art AI assistant who is
                available 24x7 to clarify your doubts, solve problems and help you
                whenever you get stuck.`,
				divider: () => (
					<div className="w-full lg:w-fit h-full flex flex-col items-center order-1 lg:order-none">
						<div className="h-28 w-px lg:border-l bg-gradient-to-b from-white via-gray-500 to-gray-600 lg:border-gray-600 lg:border-dashed"></div>
						<div className="w-[11px] h-[11px] border rounded-full border-gray-600 my-1"></div>
						<div className="h-72 w-px hidden lg:block bg-gradient-to-b from-gray-600 via-sky-600 to-sky-500"></div>
					</div>
				)
			}
		]
	}

	return (
		<div className="w-full flex flex-col items-center">
			<span className="uppercase tracking-widest text-base text-center font-bold text-gray-500 mb-12 px-4">
				Explore the codedamn way
			</span>
			<div className="h-24 w-px bg-gradient-to-b from-white via-indigo-500/50 to-indigo-600 m"></div>
			<span className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-xl text-white font-bold flex justify-center items-center">
				{sectionInfo.sectionOrder}
			</span>
			<span className="uppercase text-[28px] tracking-tight leading-9 font-bold text-transparent bg-gradient-to-b from-indigo-600 via-indigo-600 to-purple-600 bg-clip-text backdrop-blur-lg bg-white bg-opacity-50 pt-6">
				{sectionInfo.sectionTitle}
			</span>
			<h2 className="text-4xl sm:text-6xl tracking-tighter text-center font-bold text-gray-800 backdrop-blur-lg bg-white bg-opacity-50 p-4">
				{sectionInfo.sectionHeader}
			</h2>
			<span className="text-xl font-normal max-w-3xl leading-8 tracking-tight text-center text-gray-600 mt-2 mb-20 backdrop-blur-lg bg-white bg-opacity-50 px-6">
				{sectionInfo.sectionSubHeader}
			</span>
			{sectionInfo.subsection.map((item, index) => (
				<div
					key={`subsection-item-${index}`}
					className="w-full h-fit lg:h-[380px] flex flex-col-reverse lg:flex-row px-px md:px-28 lg:px-0 max-w-screen-xl"
				>
					<item.animatedIDE />
					<item.divider />
					<div className="relative w-full lg:w-3/6 px-14 lg:py-16 flex flex-col items-center top-0 text-center lg:text-left">
						<div className="max-w-xl py-3 lg:py-6 flex flex-col items-center lg:items-start backdrop-blur-lg bg-white bg-opacity-50">
							<item.icon />
							<h3 className="text-[26px] font-semibold text-gray-900 tracking-tight mt-3">
								{item.title}
							</h3>
							<p className="text-base font-normal leading-[26px] text-zinc-700 mt-1">
								{item.description}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

function HandsOnPracticeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-8 w-8"
			fill="none"
			viewBox="0 0 186 186"
		>
			<path
				fill="url(#LearnSvgGradient)"
				d="M17.438 0A17.437 17.437 0 000 17.438v81.374a17.438 17.438 0 0017.438 17.438H69.75v11.625H11.625A11.626 11.626 0 000 139.5v34.875A11.625 11.625 0 0011.625 186h162.75A11.625 11.625 0 00186 174.375V139.5a11.625 11.625 0 00-11.625-11.625H116.25V116.25h52.312A17.439 17.439 0 00186 98.812V17.439A17.438 17.438 0 00168.562 0H17.437zm0 11.625h151.124a5.814 5.814 0 015.813 5.813v81.374a5.813 5.813 0 01-5.813 5.813H17.437a5.812 5.812 0 01-5.812-5.813V17.439a5.813 5.813 0 015.813-5.813zM139.5 145.312a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zm23.25 0a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zM17.437 139.5h58.126a5.812 5.812 0 110 11.625H17.437a5.812 5.812 0 110-11.625zm-5.812 26.156a2.906 2.906 0 012.906-2.906H78.47a2.906 2.906 0 110 5.812H14.53a2.906 2.906 0 01-2.906-2.906z"
			></path>
			<rect width="114" height="9" x="27" y="37" rx="4.5" className=" fill-violet-700"></rect>
			<rect width="69" height="9" x="27" y="54" rx="4.5" className=" fill-violet-700"></rect>
			<rect width="114" height="9" x="27" y="71" rx="4.5" className=" fill-violet-700"></rect>
		</svg>
	)
}

function InstantHelpFromJarvisIcon() {
	return (
		<svg
			stroke="currentColor"
			fill="url(#LearnSvgGradient)"
			strokeWidth="0"
			viewBox="0 0 16 16"
			className="h-8 w-8"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path>
			<path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path>
		</svg>
	)
}
