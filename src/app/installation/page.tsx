import {
	Contact,
	HowIsTheInstallationGoing,
	InstallationHero,
	OurInstallers,
	QualityControlSystem,
	Video,
	WhyIsItSafe,
} from '@/page/installation/widgets'
import { Questions } from '@/page/price/widgets'
import { Footer } from '@/shared/components'

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
			<Footer />
		</main>
	)
}
