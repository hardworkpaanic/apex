import {
	Differences,
	Ecosystem,
	HomeHero,
	HomeInfo,
	Materials,
	Projects,
	Research,
	Video
} from '@/page/home/widgets'
import { Calculation } from '@/page/home/widgets/calculation'
import { Questions } from '@/page/home/widgets/questions'
import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<HomeHero />
			<HomeInfo />
			<Video />
			<Materials />
			<Ecosystem />
			<Differences />
			<Projects />
			<Research />
			<Calculation />
			<Questions />

			<Image
				src={'telegram.svg'}
				alt="telegram"
				width={343}
				height={369}
				className="w-full block md:hidden mt-15 bg-contain bg-center"
			/>

			<div className="container max-w-[1320px] mx-auto">
				<Image
					src={'/telegram-desctop.svg'}
					alt="telegram"
					width={1320}
					height={351}
					className="w-full h-[351px] hidden md:block mt-15 bg-contain bg-center"
				/>
			</div>
		</main>
	)
}
