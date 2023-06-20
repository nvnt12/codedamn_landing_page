export default function StatsSection() {
	const stats = [
		{
			count: '286K+',
			description: 'Developers',
			className: 'sm:border-r sm:border-gray-200'
		},
		{
			count: '1.4M+',
			description: 'Playgrounds booted',
			className: 'sm:border-r sm:border-gray-200'
		},
		{
			count: '40K+',
			description: 'Doubts solved by Jarvis',
			className: 'sm:border-r sm:border-gray-200'
		},
		{
			count: '100K+',
			description: 'Hours of learning',
			className: ''
		}
	]

	return (
		<div className="w-full h-fit flex justify-center items-center  bg-zinc-50/50 border-y border-gray-100">
			<div className="w-full h-full flex flex-col justify-center sm:flex-row sm:items-start py-8">
				{stats.map((stat, index) => (
					<div
						key={`stat-${index}`}
						className={`flex flex-col items-center px-3 py-6 sm:py-0 sm:w-80 ${stat.className}`}
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
