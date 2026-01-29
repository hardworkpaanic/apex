import {
	Conditions,
	Control,
	HowWeWorksHero,
	Stages,
	StagesList
} from '@/page/how-we-works/widgets'

export default function HowWeWorksPage() {
	return (
		<main>
			<HowWeWorksHero />
			<Stages />
			<StagesList />
			<Control />
			<Conditions />
		</main>
	)
}
