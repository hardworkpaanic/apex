import { Button } from '@/shared/components'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Characteristics() {
	return (
		<section className="container max-w-[1320px] mt-15 mx-auto px-4">
			<div className="flex flex-col gap-2">
				<Image
					src="/mini-logo-gray.svg"
					alt="mini-logo"
					width={28}
					height={8}
					className=""
					unoptimized
				/>
				<h2 className="font-semibold text-[30px] md:text-[42px] md:max-w-[600px] leading-[110%]">
					Технические характеристики полимербетона
				</h2>
			</div>

			<div className="mt-10">
				<div className="w-full flex flex-col md:flex-row md:justify-between gap-4">
					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-32 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>

					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-12 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>

					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-12 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>
				</div>

				<div className="w-full mt-5 flex flex-col md:flex-row md:justify-between gap-4">
					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-32 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>

					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-12 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>

					<div className="bg-[#F3F3F3] md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-12 py-5">
						<Image
							src={'/materials/scales.svg'}
							alt="scales"
							width={32}
							height={32}
						/>

						<span className="text-[18px] font-bold">
							17-18 кг/м² — Вес элемента
						</span>

						<p className="text-[14px]">
							В 7 раз легче натурального камня. Не требует усиления фундамента.
						</p>
					</div>
				</div>

				<div className="bg-[#3C3C3C] relative flex flex-col md:flex-row md:justify-between text-white mt-5 rounded-3xl md:p-[60px] px-4 py-7">
					<div className="flex flex-col">
						<h4 className="text-[22px] font-bold">
							Дополнительные характеристики:
						</h4>

						<div className="flex flex-col md:flex-row md:gap-10">
							<p className="text-[14px] mt-3 leading-[150%]">
								- Плотность: 1 800 — 2 000 кг/м³  <br /> - Предел прочности при
								изгибе: 25 МПа <br /> - Температура эксплуатации: от -50°C до
								+80°C
							</p>

							<p className="text-[14px] mt-3 leading-[150%]">
								- Всесезонный монтаж (до -15°C)
								<br /> - Класс горючести: Г1 (слабогорючий) <br /> - Срок
								изготовления: 7 рабочих дней
							</p>

							<Image
								src={'/materials/apex.png'}
								alt="apex"
								width={954}
								height={269}
								className="absolute bottom-0 top-5 z-0 right-0"
								unoptimized
							/>
						</div>
					</div>

					<Button
						size={'lg'}
						className="rounded-3xl mt-5 z-10 font-bold"
					>
						Скачать техпаспорт <ArrowUpRight />
					</Button>
				</div>
			</div>
		</section>
	)
}
