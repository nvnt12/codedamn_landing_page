import Image from 'next/image'
import { BsFillStarFill } from 'react-icons/bs'

const testimonies = [
	{
		userName: 'Ashish Kumar',
		userProfession: 'Software Engineer',
		userImgUrl: '/users/ashish-kumar.png',
		userReviewComment: `I have seen so many courses but finding course that gives lecture
	+ playground to code is difficult to find. But codedamn is totally
	amazing in this perspective even quality of content is unmatchable and
	helped me many times in understanding concepts in depth.`
	},
	{
		userName: 'Riten Debnath',
		userProfession: 'Founder & CEO @Fueler',
		userImgUrl: '/users/riten-debnath.png',
		userReviewComment: `Codedamn is building a killer ecosystem. Really amazed to see
		what they have brought in the last 6 months🤯`
	},
	{
		userName: 'Tanishka Borkar',
		userProfession: 'University Student, KJSIEIT',
		userImgUrl: '/users/tanishka-borkar.png',
		userReviewComment: `I enrolled in the Solidity course and honestly, it is extremely
		good! The speaker is well versed in Solidity and the environment that
		codedamn provides for learning and interaction is very
		impressive✨`
	},
	{
		userName: 'Manuraj Shukla',
		userProfession: 'Frontend developer @buildoor',
		userImgUrl: '/users/manuraj-shukla.png',
		userReviewComment: `Day by Day, codedamn is turning me into a Front-End Superman 🦸‍♂️`
	},
	{
		userName: 'Jess Klette',
		userProfession: 'Software Engineer',
		userImgUrl: '/users/jess-klette.png',
		userReviewComment: `Codedamn is a super slick platform that teaches in demand tech stacks. It's great to start with because the practice exercises and tasks are completed in the browser in a super cool IDE👾`
	},
	{
		userName: 'Sandeep Tomar',
		userProfession: 'Product Manager @K2FocusOnForce',
		userImgUrl: '/users/sandeep-tomar.png',
		userReviewComment: `For my full-stack learning path, I chose codedamn over other options like Masai, Newton, etc. The subscription cost is bare minimum, their inbuilt IDE works great and the support is amazing.`
	},
	{
		userName: 'Bhumika Chauhan',
		userProfession: 'University Student, AKTU',
		userImgUrl: '/users/bhumika-chauhan.png',
		userReviewComment: `In my experience, codedamn is an extremely effective tool for learning how to code. They provide a structured curriculum as well as many amazing projects. I'm becoming more productive and better at programming.`
	},
	{
		userName: 'Aniket Saha',
		userProfession: 'University Student',
		userImgUrl: '/users/aniket-saha.png',
		userReviewComment: `I've had a great time making projects using codedamn playgrounds. I chose it because it was fast and free in comparison to other platforms I explored.`
	},
	{
		userName: 'Sam',
		userProfession: 'Music marketing professional',
		userImgUrl: '/users/sam.png',
		userReviewComment: `I decided to learn on codedamn and have not regretted it at all! They have easy to follow videos that break down every concept. As someone who needs a bit longer time to process things, I appreciated this so much.`
	},
	{
		userName: 'gayboredape.eth',
		userProfession: 'Founder ABY, Blockchain enthusiast',
		userImgUrl: '/users/gayboredape-eth.png',
		userReviewComment: `Codedamn has many roadmaps you can explore to learn how to code and build skills as a dev. It's very well structured and the Pro version is pretty affordable as well, giving you unlimited access to all the features.`
	},
	{
		userName: 'Muralidhara Bhat',
		userProfession: 'University Student',
		userImgUrl: '/users/muralidhara-bhat.png',
		userReviewComment: `I feel codedamn has high potential and they provide free learning material. Mehul has done a great job by founding such a good platform.`
	},
	{
		userName: 'Anurag Srivastava',
		userProfession: 'University Student, KIIT',
		userImgUrl: '/users/anurag-srivastava.png',
		userReviewComment: `Courses on codedamn are really beginner-friendly and the exercises are great for practicing as you learn`
	}
]

export default function TestimonialSection() {
	return (
		<div className="w-full flex justify-center bg-small-grid-lines">
			<div className="relative px-6 flex w-full max-w-screen-2xl snap-x snap-mandatory overflow-x-scroll py-20 md:block md:columns-2 lg:columns-3">
				{testimonies.map((user, index) => (
					<figure
						key={`${user.userName}-${index}`}
						className="mx-[5vw] mb-4 flex min-w-[90vw] snap-center flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-900/10 md:mx-0 md:inline-block md:min-w-fit"
					>
						<blockquote className="relative text-900">
							<div className="flex w-full ">
								<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
								<BsFillStarFill className="w-[18px] h-[18px] fill-amber-400 mr-1.5" />
							</div>
							<div className=" mt-6">
								<p className="text-gray-700 font-normal tracking-normal leading-7 mt-1.5 xl:text-lg">
									&ldquo;{user.userReviewComment}&rdquo;
								</p>
							</div>
						</blockquote>
						<div className="w-full h-px bg-gray-200 my-6"></div>
						<figcaption className="flex justify-between items-center">
							<div className="mx-2">
								<p className="text-gray-700 font-semibold xl:text-lg">
									{user.userName}
								</p>
								<p className="text-gray-500 font-medium text-xs xl:text-sm">
									{user.userProfession}
								</p>
							</div>
							<Image
								src={user.userImgUrl}
								alt={'Testimonial User Profile Picture'}
								width={50}
								height={50}
								className="rounded-full w-10 h-10 xl:w-11 xl:h-11"
							/>
						</figcaption>
					</figure>
				))}
			</div>
		</div>
	)
}
