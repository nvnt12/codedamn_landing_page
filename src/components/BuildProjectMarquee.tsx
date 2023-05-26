import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
	{
		projectName: 'Project 1',
		projectImgUrl: 'proj1.png'
	},
	{
		projectName: 'Project 2',
		projectImgUrl: 'proj2.png'
	},
	{
		projectName: 'Project 3',
		projectImgUrl: 'proj3.png'
	},
	{
		projectName: 'Project 4',
		projectImgUrl: 'proj4.png'
	},
	{
		projectName: 'Project 5',
		projectImgUrl: 'proj5.png'
	},
	{
		projectName: 'Project 6',
		projectImgUrl: 'proj6.png'
	},
	{
		projectName: 'Project 7',
		projectImgUrl: 'proj7.png'
	},
	{
		projectName: 'Project 8',
		projectImgUrl: 'proj8.png'
	},
	{
		projectName: 'Project 9',
		projectImgUrl: 'proj9.png'
	},
	{
		projectName: 'Project 10',
		projectImgUrl: 'proj10.png'
	},
	{
		projectName: 'Project 11',
		projectImgUrl: 'proj11.png'
	},
	{
		projectName: 'Project 12',
		projectImgUrl: 'proj12.png'
	},
	{
		projectName: 'Project 13',
		projectImgUrl: 'proj13.png'
	},
	{
		projectName: 'Project 14',
		projectImgUrl: 'proj14.png'
	},
	{
		projectName: 'Project 15',
		projectImgUrl: 'proj15.png'
	},
	{
		projectName: 'Project 16',
		projectImgUrl: 'proj16.png'
	}
]

export default function BuildProjectMarquee() {
	return (
		<div className="relative w-full h-[300px] md:h-[440px] mb-24 overflow-clip flex justify-center [mask-image:linear-gradient(transparent_5%,white_30%,white_70%,transparent_95%)]">
			<div className="relative w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-4 px-6 max-w-screen-2xl">
				<div className="w-full">
					<div className="h-full relative">
						<div className="flex flex-wrap flex-col">
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index < 4)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index < 4)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="h-full relative">
						<div className="flex flex-wrap flex-col">
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 4 && index < 8)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 4 && index < 8)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
						</div>
					</div>
				</div>
				<div className="w-full hidden md:block lg:block">
					<div className="h-full relative">
						<div className="flex flex-wrap flex-col">
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 21, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 8 && index < 12)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 21, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 8 && index < 12)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
						</div>
					</div>
				</div>
				<div className="w-full hidden lg:block">
					<div className="h-full relative">
						<div className="flex flex-wrap flex-col">
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 19, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 12 && index <= 16)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: '-100%' }}
								transition={{ duration: 19, ease: 'linear', repeat: Infinity }}
							>
								{projects
									.filter((project, index) => index >= 12 && index <= 16)
									.map((project, index) => (
										<Image
											key={`${project.projectName}-${index}`}
											src={`/projects/${project.projectImgUrl}`}
											alt={'Project Image'}
											width={400}
											height={156}
											className="mb-2 md:mb-4"
										/>
									))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute w-full h-full top-0 flex justify-center items-center">
				<span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mx-5 text-gray-900 py-5 px-8 bg-white bg-opacity-90 rounded-md">
					Build your portfolio with 100+ projects
				</span>
			</div>
		</div>
	)
}
