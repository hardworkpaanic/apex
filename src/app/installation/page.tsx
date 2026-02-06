import {
	Contact,
	HowIsTheInstallationGoing,
	InstallationHero,
	OurInstallers,
	QualityControlSystem,
	Video,
	WhyIsItSafe
} from '@/page/installation/widgets'
import { Questions } from '@/page/price/widgets'

export default function InstallationPage() {
	return (
		<main>
			<InstallationHero />
			<WhyIsItSafe />
			<Video />
			<QualityControlSystem />
			<HowIsTheInstallationGoing />
			<OurInstallers />
			<Contact />
			<Questions />
		</main>
	)
}
