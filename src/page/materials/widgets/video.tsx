import Image from 'next/image'

export function Video() {
	return (
		<>
			<section className="bg-[url('/materials/video.jpg')] md:hidden text-white mt-15 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
				<Image
					src="/play.svg"
					alt="play"
					width={48}
					height={48}
				/>
				<span className="text-[14px] text-white/70">Смотреть видео</span>
			</section>

			<section className="hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col">
				<div className="bg-[url('/materials/video-desctop.jpg')] w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
					<Image
						src="/play.svg"
						alt="play"
						width={48}
						height={48}
					/>
					<span className="text-[14px] text-white/70">Смотреть видео</span>
				</div>
			</section>

			<section className="container max-w-[1320px] mx-auto px-4 flex w-full flex-col md:justify-between md:flex-row mt-13.75 gap-5">
				<div className="flex flex-col gap-2 w-full max-w-[427px]">
					<span className="text-base font-bold">Состав:</span>
					<div className="w-full h-0.5 bg-black"></div>

					<p>
						<span className="font-semibold">
							Полимербетон APEX — это премиальный композитный материал
						</span>{' '}
						в основе которого лежит природный камень. 85% состава — молотый
						мрамор и доломит из итальянских и российских карьеров. 10% —
						полиэфирная смола высокой прочности. 5% — итальянские пигменты Bayer
						и добавки для морозостойкости.
					</p>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[427px]">
					<span className="text-base font-bold">Технология:</span>
					<div className="w-full h-0.5 bg-black"></div>

					<p>
						<span className="font-semibold">
							Каждый элемент формуется вручную в три слоя:
						</span>{' '}
						прокрашенный лицевой слой (гарантирует стойкость цвета), каменный
						фактурный слой (создаёт текстуру), армирующий слой из стекловолокна
						(обеспечивает прочность). Толщина готового изделия — всего 10 мм, но
						по прочности оно не уступает 50-миллиметровой плите натурального
						камня.
					</p>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[427px]">
					<span className="text-base font-bold">Результат:</span>
					<div className="w-full h-0.5 bg-black"></div>

					<p>
						<span className="font-semibold">
							Вы получаете материал, который визуально неотличим от итальянского
							мрамора
						</span>{' '}
						или травертина, но весит в 7 раз меньше, служит в 3 раза дольше и не
						требует усиления фундамента. Морозостойкость 200+ циклов, срок
						службы 50+ лет без потери цвета и фактуры.
					</p>
				</div>
			</section>
		</>
	)
}
