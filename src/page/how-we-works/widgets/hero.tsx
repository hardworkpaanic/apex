import { Button } from '@/shared/components'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function HowWeWorksHero() {
	return (
		<>
			<section className="bg-[url('/HowWeWorks/hero-bg.jpg')] md:hidden text-white w-full h-168.25 bg-cover bg-center h-[504px] rounded-3xl flex flex-col py-10">
				<div className="container max-w-[1320px] mx-auto px-4">
					<Image
						src="/mini-logo.svg"
						alt="mini-logo"
						width={28}
						height={8}
						className=""
						unoptimized
					/>

					<h1 className="font-semibold mt-4 text-[30px] leading-[110%]">
						Одна команда.
					</h1>

					<p className="italic mt-2 text-white/70 text-[14px] leading-[150%]">
						Фиксированные сроки. Контроль каждого этапа.
					</p>
					{/* TODO: Доделать ещё одну кнопку */}
					<div className="flex gap-2 flex-row md:justify-between mt-8">
						<Button
							size={'lg'}
							variant={'secondary'}
							className="text-[15px] font-bold px-7 py-4"
						>
							Начать проект <ArrowUpRight />
						</Button>
					</div>
				</div>
			</section>

			{/* Desktop */}

			<section className="hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-[580px] bg-cover bg-center flex-col">
				<div className="container bg-[url('/HowWeWorks/hero-bg-desctop.jpg')] px-[60px] py-6.25 flex-1 flex flex-col bg-cover bg-center rounded-3xl justify-center">
					<div className="space-y-4 flex flex-col justify-between h-full py-[93px]">
						<div className="">
							<div>
								<Image
									src="/mini-logo.svg"
									alt="mini-logo"
									width={28}
									height={8}
									unoptimized
								/>
							</div>

							<h1 className="font-semibold max-w-[817px] text-[54px] leading-[110%]">
								Одна команда
							</h1>

							<p className="italic mt-2 text-white/70 text-[16px] leading-[150%]">
								Фиксированные сроки. Контроль каждого этапа.
							</p>
						</div>

						<div className="flex gap-2 flex-row justify-between mt-8">
							<Button
								size={'lg'}
								variant={'secondary'}
							>
								Рассчитать проект <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>

			<div className="flex container mt-5 max-w-[1320px] mx-auto px-4 flex-col">
				<div className="flex justify-between py-2 items-center">
					<span className="text-[30px] font-semibold">5 этапов</span>
					<span className="text-[12px] italic">фиксированными сроками</span>
				</div>

				<div className="flex justify-between border-b border-t border-#EDEDED py-2 items-center">
					<span className="text-[30px] font-semibold">
						Сопровож- <br /> дение
					</span>
					<span className="text-[12px] italic">От начала и до конца</span>
				</div>

				<div className="flex justify-between py-2 items-center">
					<span className="text-[30px] font-semibold">100%</span>
					<span className="text-[12px] italic">Фото-отчеты каждый день</span>
				</div>
			</div>
		</>
	)
}
