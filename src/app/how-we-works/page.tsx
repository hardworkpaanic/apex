import {
	Conditions,
	Control,
	HowWeWorksHero,
	Stages,
	StagesList,
} from '@/page/how-we-works/widgets'
import { Footer } from '@/shared/components'

export default function HowWeWorksPage() {
	return (
		<main>
			<HowWeWorksHero />
			<Stages />
			<StagesList />
			<Control />
			<Conditions />
			<Footer className='mt-0! rounded-none!' />
		</main>
	)
}
