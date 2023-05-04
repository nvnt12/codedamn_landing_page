export default function HeroSection() {
	return (
		<div className="w-full h-[900px]">
			<div className="relative">
				<div className="absolute top-96 mt-20 rotate-45 rounded-full w-4/12 h-4 bg-indigo-300 blur-3xl"></div>
				<div className="absolute top-96 rotate-45 -left-1 rounded-full w-6/12 h-5 bg-fuchsia-300 blur-3xl"></div>
				<div className="absolute top-96 rotate-45 left-32 rounded-full w-5/6 h-4 bg-sky-300 blur-2xl"></div>
				<div className="absolute top-60 rotate-45 right-0 rounded-full w-2/6 h-8 bg-indigo-300 blur-3xl"></div>
			</div>

			<div className="relative flex justify-center">
				<div className="absolute flex justify-center items-center w-[1190px] h-[1190px] border border-gray-300 rounded-full -top-[225px]">
					<svg
						viewBox="0 0 152 162"
						className="absolute left-[1.85%] top-[50.5%] hidden w-[11.75%] -rotate-[31deg] stroke-gray-300 sm:block"
					>
						<path
							fill="none"
							d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
					<svg
						viewBox="0 0 94 177"
						className="to-succ absolute left-[38%] top-[10.05%] w-[6.85%] rotate-[100deg] -scale-x-100 stroke-gray-300 sm:left-[87.9%] sm:top-[60%] sm:w-[7%] sm:-rotate-1 sm:scale-x-100"
					>
						<path
							fill="none"
							d="M11.5 0.5C4.50029 20 -7.46644 47.5 8.74439 69.5C17.5867 81.5 41.7436 98.375 51.7436 104C74.2436 116.656 91.2435 121 93.2435 146.5C93.7435 156 88.7443 166.667 83.7443 176.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
						<defs>
							<linearGradient id="LearnSvgGradient">
								<stop offset="5%" stop-color="#4f46e5"></stop>
								<stop offset="95%" stop-color="#c084fc"></stop>
							</linearGradient>
							<linearGradient id="ApplySvgGradient">
								<stop offset="5%" stop-color="#0ea5e9"></stop>
								<stop offset="95%" stop-color="#22d3ee"></stop>
							</linearGradient>
							<linearGradient id="GrowSvgGradient">
								<stop offset="5%" stop-color="#65a30d"></stop>
								<stop offset="95%" stop-color="#84cc16"></stop>
							</linearGradient>
							<linearGradient id="AccentSvgGradient">
								<stop offset="10%" stop-color="#fde047"></stop>
								<stop offset="90%" stop-color="#bef264"></stop>
							</linearGradient>
						</defs>
					</svg>
					<div className="absolute flex justify-center items-center w-[950px] h-[950px] border border-gray-300 rounded-full">
						<div className="absolute w-[720px] h-[720px] border border-gray-300 rounded-full"></div>
					</div>
				</div>
			</div>

			<div className="relative w-full h-full">
				<div className="relative flex justify-center w-6/12 h-3/6 text-center top-48 left-1/4">
					<div className="flex-col h-full">
						<h1 className="font-bold text-[58px] leading-none tracking-tight text-gray-800 mt-12 mb-10">
							Change the world
							<br /> with codedamn
						</h1>
						<h2 className="text-xl font-medium text-gray-500 mb-16 leading-relaxed">
							Learn coding with your personal AI powered tutor and 100+ interactive
							courses. Become job ready 10x faster.
						</h2>
						<button className="text-lg font-semibold text-white bg-indigo-600 rounded-lg py-3.5 px-7 mb-12">
							Begin your coding journey &rarr;
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
