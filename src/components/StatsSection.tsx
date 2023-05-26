export default function StatsSection() {
	const stats = [
		{
			count: '286K+',
			description: 'Developers'
		},
		{
			count: '1.4M+',
			description: 'Playgrounds booted'
		},
		{
			count: '40K+',
			description: 'Doubts solved by Jarvis'
		},
		{
			count: '100K+',
			description: 'Hours of learning'
		}
	]

	return (
		<div className="w-full h-fit flex justify-center items-center  bg-zinc-50/50 border-y border-gray-100">
			<div className="w-full h-full flex flex-col justify-center sm:flex-row sm:items-start py-8">
				{stats
					.filter((stat, index) => index <= 2)
					.map((stat, index) => (
						<div
							key={`stat-${index}`}
							className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80 sm:border-r sm:border-gray-200"
						>
							<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
								{stat.count}
							</p>
							<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
								{stat.description}
							</p>
						</div>
					))}
				{stats
					.filter((stat, index) => index === 3)
					.map((stat, index) => (
						<div
							className="flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80"
							key={`stat-${index}`}
						>
							<p className="text-6xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900">
								{stat.count}
							</p>
							<p className="text-sm md:text-sm text-center font-bold mt-2.5 tracking-wider uppercase text-zinc-600">
								{stat.description}
							</p>
						</div>
					))}
			</div>
		</div>
	)
}
