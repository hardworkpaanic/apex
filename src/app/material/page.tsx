import {
	Certificates,
	Characteristics,
	Comparisons,
	Hero,
	Production,
	Video
} from '@/page/materials/widgets'
import { Questions } from '@/page/price/widgets'
import Image from 'next/image'

export default function MaterialPage() {
	return (
		<main>
			<Hero />
			<div className="mt-16 container max-w-[1320px] mx-auto px-4">
				<div className="bg-[#3C3C3C] md:h-[280px] relative h-[386px] rounded-3xl text-white flex flex-col justify-end md:justify-center">
					<Image
						src="/materials/materials.svg"
						alt="materials"
						width={427}
						height={280}
						className="w-full max-w-[427px] h-full absolute top-0 z-0 object-cover rounded-3xl "
						unoptimized
					/>
					<div className="p-6 z-10 md:pl-100">
						<Image
							src="/mini-logo.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className=""
							unoptimized
						/>

						<h2 className="font-semibold mt-4 text-[22px] leading-[110%]">
							Что такое полимербетон?
						</h2>

						<p className="italic mt-2 text-white/70 text-[14px] leading-[150%]">
							Инновационный композитный материал, объединяющий красоту
							натурального камня  с преимуществами современных технологий.
						</p>
					</div>
				</div>
			</div>

			<Video />
			<Characteristics />
			<Comparisons />
			<Production />
			<Certificates />
			<Questions />
		</main>
	)
}
