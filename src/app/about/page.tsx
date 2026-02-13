import { AboutUs, Differences, Hero, Team } from '@/page/about/widgets'
import { Footer } from '@/shared/components'

export default function AboutUsPage() {
	return (
		<main>
			<Hero />
			<AboutUs />
			<Differences />
			<Team />
			<Footer className='mt-0! rounded-none!' />
		</main>
	)
}
