import {
	Landmark,
	PriceHero,
	PricingFactors,
	Questions,
	Works,
} from '@/page/price/widgets'
import { Footer } from '@/shared/components'

export default function PricePage() {
	return (
		<main>
			<PriceHero />
			<Landmark />
			<PricingFactors />
			<Works />
			<Questions />
			<Footer />
		</main>
	)
}
