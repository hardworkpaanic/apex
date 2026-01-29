import { Button } from '@/shared/components'

export function Projects() {
	return (
		<section className="flex justify-center mt-15 md:mt-30 items-center flex-col gap-5">
			<div className="w-full container max-w-[1320px] mx-auto px-4">
				<h2 className="font-semibold mt-2 text-[30px] md:text-[48px] text-center leading-[110%]">
					Реализованные проекты
				</h2>
				<span className="text-base leading-[150%] flex text-center mt-2 md:text-[16px] justify-center text-[#3C3C3C]">
					Архитектура, которая переживёт десятилетия
				</span>
			</div>

			<div className="w-full container max-w-[1320px] md:mt-5 mx-auto px-4">
				<div className="flex w-full flex-col md:flex-row md: flex-items-center md:justify-center gap-[22px]">
					<div className="flex flex-col w-full gap-2">
						<div className="bg-[url('/homepage/project1.jpg')] w-full h-[250px] md:h-[413px] rounded-3xl bg-cover bg-center">
							{/* TODO: Добавить Badges */}
						</div>
						{/* TODO: Починить отступ */}
						<p className="text-base leading-[150%] md:text-[22px] font-semibold mt-2">
							Особняк в неоклассическом стиле
						</p>

						<span className="text-base leading-[150%] md:text-[16px] text-[#3C3C3C]">
							Подробнее
						</span>
					</div>

					<div className="w-full">
						<div className="bg-[url('/homepage/project2.jpg')] w-full h-[250px] md:h-[413px] rounded-3xl bg-cover bg-center">
							{/* TODO: Добавить Badges */}
						</div>
						{/* TODO: Починить отступ */}
						<p className="text-base leading-[150%] md:text-[22px] font-semibold mt-2">
							Особняк в неоклассическом стиле
						</p>

						<span className="text-base leading-[150%] md:text-[16px] text-[#3C3C3C]">
							Подробнее
						</span>
					</div>
				</div>
			</div>

			<div className="w-full container max-w-[1320px]mx-auto mt-3 px-4 flex items-center justify-center">
				<Button size={'lg'}>Смотреть все проекты</Button>
			</div>
		</section>
	)
}
