import { Check } from 'lucide-react'
import Image from 'next/image'

export function Landmark() {
	return (
		<section className="mt-15">
			<div className="container max-w-[1320px] mx-auto px-4">
				<div className="flex flex-col md:gap-20 md:justify-between md:flex-row">
					<div className="md:max-w-[500px]">
						<div className="flex items-center gap-2">
							<Image
								src="/mini-logo-gray.svg"
								alt="mini-logo"
								width={28}
								height={8}
								className=""
								unoptimized
							/>
						</div>
						<h2 className="font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]">
							Инвестиция в архитектуру — прозрачно и честно
						</h2>

						<p className="mt-5 text-[14px] italic text-[#3C3C3C]">
							Стоимость вашего фасада зависит от площади и архитектурных
							решений.  Каждый проект рассчитывается индивидуально после
							знакомства с вашим объектом.
						</p>
					</div>

					<div className="">
						<h5 className="mt-5 text-[20px] font-semibold">
							ОРИЕНТИРЫ СТОИМОСТИ
						</h5>

						<p className="mt-2 text-[14px] text-[#3C3C3C]">
							Полный цикл под ключ: проектирование + производство + монтаж
						</p>

						<div className="mt-5 flex flex-col gap-2.5">
							<div className="flex flex-col md:flex-row gap-1 mt-2">
								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] font-semibold">
										Площадь фасада
									</span>
									<span className="text-[14px] md:hidden">200–300 м²</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] font-semibold">
										Ориентир стоимости
									</span>
									<span className="text-[14px] md:hidden">от 3 млн ₽</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] font-semibold">
										Типичный срок
									</span>
									<span className="text-[14px] md:hidden">60–75 дней срок</span>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-1 mt-2">
								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Площадь фасада
									</span>
									<span className="text-[14px]">300–400 м²</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Ориентир стоимости
									</span>
									<span className="text-[14px]">от 4 млн ₽₽</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Типичный срок
									</span>
									<span className="text-[14px]">70–85 дней</span>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-1 mt-2">
								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Площадь фасада
									</span>
									<span className="text-[14px]">400–500 м²</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Ориентир стоимости
									</span>
									<span className="text-[14px]">от 5 млн ₽</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Типичный срок
									</span>
									<span className="text-[14px]">80–95 дней</span>
								</div>
							</div>
							<div className="flex flex-col  md:flex-row gap-1 mt-2">
								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Площадь фасада
									</span>
									<span className="text-[14px]">400–500 м²</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px]  md:hidden font-semibold">
										Ориентир стоимости
									</span>
									<span className="text-[14px]">от 7 млн ₽</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Типичный срок
									</span>
									<span className="text-[14px]">95–110 дней</span>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-1 mt-2">
								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Площадь фасада
									</span>
									<span className="text-[14px]">700+ м²</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Ориентир стоимости
									</span>
									<span className="text-[14px]">индивидуально</span>
								</div>

								<div className="bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5">
									<span className="text-[14px] md:hidden font-semibold">
										Типичный срок
									</span>
									<span className="text-[14px]">индивидуально</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 2 */}
				<div className="flex flex-col md:h-[340px] mt-30 md:gap-10 md:justify-between md:flex-row">
					<div className="mt-15 w-full md:max-w-[547px] md:mt-0">
						<div className="border border-border rounded-2xl px-4 py-5">
							<h5 className="font-semibold text-base leading-[150%]">
								Что влияет на итоговую стоимость:
							</h5>

							<div className="flex items-center gap-2.5 mt-5">
								<Image
									src="/price/list.svg"
									alt="list"
									width={24}
									height={24}
								/>
								<div className="flex flex-col leading-[15%0]">
									<span className="text-[14px] font-bold">
										Архитектурная сложность
									</span>
									<span className="text-[14px] text-[#3C3C3C]">
										количество и детализация элементов
									</span>
								</div>
							</div>

							<div className="flex items-center gap-2.5 mt-5">
								<Image
									src="/price/list.svg"
									alt="list"
									width={24}
									height={24}
								/>
								<div className="flex flex-col leading-[15%0]">
									<span className="text-[14px] font-bold">Стиль фасада</span>
									<span className="text-[14px] text-[#3C3C3C]">
										классические стили требуют больше ручной работы
									</span>
								</div>
							</div>

							<div className="flex items-center gap-2.5 mt-5">
								<Image
									src="/price/list.svg"
									alt="list"
									width={24}
									height={24}
								/>
								<div className="flex flex-col leading-[15%0]">
									<span className="text-[14px] font-bold">
										Индивидуальные формы
									</span>
									<span className="text-[14px] text-[#3C3C3C]">
										авторские элементы по вашим эскизам
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2.5 mt-5">
								<Image
									src="/price/list.svg"
									alt="list"
									width={24}
									height={24}
								/>
								<div className="flex flex-col leading-[15%0]">
									<span className="text-[14px] font-bold">
										Регион реализации
									</span>
									<span className="text-[14px] text-[#3C3C3C]">
										логистика и особенности монтажа
									</span>
								</div>
							</div>
						</div>
					</div>

					<Image
						src={'/price/home1.jpg'}
						alt="home"
						width={189.9999847412111}
						height={340.0000000000003}
						className="mt-5 w-full block md:hidden object-cover object-center"
					/>

					<Image
						src={'/price/home-desctop.png'}
						alt="home"
						width={295}
						height={340}
						className="w-[295px] hidden md:block object-cover object-center"
					/>

					<div className="border border-border w-full md:max-w-[747px] rounded-2xl md:mt-0 md:h-[340px] mt-5 px-4 py-5">
						<h5 className="font-semibold text-base leading-[150%]">
							Все включено в стоимость:
						</h5>

						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								3D-визуализация (до 5 ракурсов)
							</span>
						</div>
						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								Авторское архитектурное проектирование
							</span>
						</div>
						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								Производство из премиального полимербетона (85% натуральный
								камень)
							</span>
						</div>
						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								Доставка на объект (в пределах 100 км от МКАД)
							</span>
						</div>
						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								Профессиональный монтаж с контролем качества
							</span>
						</div>
						<div className="flex gap-2 mt-3 items-center">
							<Check size={16} />
							<span className="text-[14px] font-bold">
								Гарантия 50 лет на материал, 10 лет на монтаж
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
