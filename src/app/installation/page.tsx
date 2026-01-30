import {
	InstallationHero,
	QualityControlSystem,
	Video,
	WhyIsItSafe
} from '@/page/installation/widgets'

export default function InstallationPage() {
	return (
		<main>
			<InstallationHero />
			<WhyIsItSafe />
			<Video />
			<QualityControlSystem />
		</main>
	)
}
