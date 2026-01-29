import {
	Landmark,
	PriceHero,
	PricingFactors,
	Questions,
	Works
} from '@/page/price/widgets'

export default function PricePage() {
	return (
		<main>
			<PriceHero />
			<Landmark />
			<PricingFactors />
			<Works />
			<Questions />
		</main>
	)
}
