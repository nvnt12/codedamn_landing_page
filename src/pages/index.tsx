import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'
import TopCompaniesMarquee from '../components/TopCompaniesMarquee'
import SignUpSection from '../components/SignUpSection'
import GetAppSection from '../components/GetAppSection'
import TestimonialSection from '../components/TestimonialSection'
import StatsSection from '../components/StatsSection'
import HeroSection from '../components/HeroSection'
import LearnSection from '../components/LearnSection'
import ApplySection from '../components/ApplySection'
import GrowSection from '../components/GrowSection'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Learn to code for free - Personal AI powered tutor 100+ interactive courses
				</title>
				<meta
					name="description"
					content="Sign into your codedamn account here. Learn about today's job skills - frontend, backend, fullstack, mobile app development and practice online with thousands of developers. codedamn is the best way to learn to code online. Start with HTML, CSS, JavaScript, SQL, Python, Data Science, and more"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dum8ltv4o/image/upload/v1687339825/landing_page_og_img_cnvnqb.png"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href="https://res.cloudinary.com/dum8ltv4o/image/upload/v1683723104/logo_zypdb5.svg"
				/>
			</Head>

			<NavBar />
			<main className="w-full flex-grow">
				<div className="relative overflow-x-clip">
					<Image
						src="/bg-img.png"
						alt="Background Image"
						width={2610}
						height={1305}
						className="absolute -top-[1rem] left-1/2 -z-10 -ml-[40rem] w-[2610px] h-[1305px] max-w-none opacity-40 sm:-ml-[67.5rem]"
						priority
					/>
				</div>
				<section>
					<HeroSection />
				</section>

				<section>
					<TopCompaniesMarquee />
				</section>

				<section>
					<div className="w-full h-fit bg-zinc-50/20 border-t border-gray-100 pt-[124px] lg:py-[124px] bg-gradient-to-l bg-big-grid-lines">
						<LearnSection />
						<ApplySection />
						<GrowSection />
					</div>
				</section>

				<section>
					<StatsSection />
				</section>

				<section>
					<TestimonialSection />
				</section>

				<section>
					<SignUpSection />
				</section>

				<section>
					<GetAppSection />
				</section>

				<Footer />
			</main>
		</>
	)
}
