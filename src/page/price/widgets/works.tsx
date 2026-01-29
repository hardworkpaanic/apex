import { Button, ProjectCard } from '@/shared/components'
import { Input } from '@/shared/components/ui/input'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Works() {
	return (
		<section className="bg-black mt-15 text-white rounded-t-3xl py-15 md:py-30">
			<div className="container max-w-[1320px] mx-auto px-4">
				<h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
					Примеры наших работ
				</h2>

				<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
					От классики до современной архитектуры
				</p>

				{/* TODO: Сделать карусель */}

				<ProjectCard
					className="mt-7.5"
					buttonVariant="secondary"
				/>

				<ProjectCard
					className="mt-7.5"
					buttonVariant="secondary"
				/>

				<ProjectCard
					className="mt-7.5"
					buttonVariant="secondary"
				/>

				<ProjectCard
					className="mt-7.5"
					buttonVariant="secondary"
				/>

				<div className="w-full md:flex justify-center">
					<Button
						variant={'secondary'}
						size={'lg'}
						className="w-full md:w-auto mx-auto mt-10"
					>
						Смотреть 200+ проектов <ArrowUpRight />
					</Button>
				</div>

				{/* Полная стоимость владения
— считаем на дистанции */}

				<div className="bg-[#171717] rounded-2xl px-4 md:px-8 md:py-16 py-10 text-center mt-10">
					<h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
						Полная стоимость владения — считаем на дистанции
					</h2>

					<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
						Сравнение затрат за 25 лет эксплуатации
					</p>

					<p className="text-start text-base md:hidden font-semibold leading-[150%] mt-7.5">
						Фасад дома 300 м²: сравнение стоимости за 25 лет
					</p>

					<Image
						src={'/price/table.svg'}
						alt="Table"
						width={1240}
						height={448}
						className="w-full py-9 hidden md:block"
					/>

					<div className="mt-2.5 md:hidden">
						<div className="rounded-2xl flex flex-col gap-3.5 bg-black text-start p-5">
							<span className="text-base font-semibold">Полимербетон APEX</span>

							<div className="flex flex-col gap-2">
								<span className="text-[14px] font-semibold">
									Стоимость с монтажом:
								</span>

								<span>3 900 000 ₽</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-[14px] font-semibold">
									Усиление конструкций:
								</span>

								<span>0 ₽</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-[14px] font-semibold">
									Покраска / ремонт (каждые 5–7 лет):
								</span>

								<span>0 ₽</span>
							</div>

							<div className="flex flex-col gap-2">
								<span className="text-[14px] font-semibold">
									ИТОГО за 25 лет:
								</span>

								<span>6 900 000 ₽</span>
							</div>
						</div>

						<div className="flex bg-white mt-2 text-black rounded-2xl px-5 py-2.5 justify-between">
							<span className="text-[14px] font-semibold">
								Экономия с APEX:
							</span>

							<span className="text-[14px]">Базовая</span>
						</div>

						{/* TODO: Сделать карусель */}
					</div>

					<h5 className="text-base font-semibold mt-5">
						Дополнительные преимущества APEX:
					</h5>

					<ul className="text-start flex flex-col md:w-full md:justify-center md:items-center md:flex-row md:gap-10 gap-2.5 mt-5 list-disc pl-4 text-[12px] text-[#999999]">
						<li>Не требует обслуживания</li>
						<li>Не теряет цвет и фактуру </li>

						<li>Не требует усиления фундамента </li>
						<li>Повышает стоимость недвижимости на 15–25% </li>
					</ul>
				</div>

				<h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%] mt-10">
					Удобные способы оплаты
				</h2>

				<p className="text-base text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
					Умная поэтапная оплата по факту работ и безналичный расчёт для юрлиц
				</p>
				<p className="text-[14px] text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
					Все условия оплаты и сроки чётко фиксируются в договоре. Мы не требуем
					полной предоплаты — вы платите по факту выполненных работ.
				</p>

				<div className="flex gap-2 flex-col md:flex-row justify-between">
					<div className="w-full">
						{' '}
						<div className="bg-[#171717] mt-7.5 rounded-2xl px-4 py-5">
							<h3 className="flex text-base font-semibold items-center gap-2">
								<img
									className="w-5 h-5"
									src="/price/rub.svg"
									alt="rub"
								/>
								Умная поэтапная оплата
							</h3>

							<div className="flex gap-3 mt-4 items-center">
								<div className="bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8">
									1
								</div>

								<div className="flex flex-col gap-1">
									<span className="font-bold text-[14px]">
										Старт проектирования — 10%
									</span>
									<span className="text-[14px] text-[#B9B9B9]">
										{' '}
										Оплата запуска проектных работ.
									</span>
								</div>
							</div>

							<div className="flex gap-3 mt-4 items-center">
								<div className="bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8">
									2
								</div>

								<div className="flex flex-col gap-1">
									<span className="font-bold text-[14px]">
										После утверждения проекта — 40%
									</span>
									<span className="text-[14px] text-[#B9B9B9]">
										{' '}
										Проект согласован и передан в производство.
									</span>
								</div>
							</div>

							<div className="flex gap-3 mt-4 items-center">
								<div className="bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8">
									3
								</div>

								<div className="flex flex-col gap-1">
									<span className="font-bold text-[14px]">
										Перед отгрузкой — 50%
									</span>
									<span className="text-[14px] text-[#B9B9B9]">
										{' '}
										Готовые изделия передаются к поставке.
									</span>
								</div>
							</div>
						</div>
						<div className="bg-[#171717] mt-2.5 rounded-2xl px-4 py-5">
							<h3 className="flex text-base font-semibold items-center gap-2">
								Этапы оплаты за монтаж
							</h3>

							<div className="flex gap-3 mt-4 items-center">
								<div className="bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8">
									1
								</div>

								<div className="flex flex-col gap-1">
									<span className="font-bold text-[14px]">
										Начало монтажных работ — 40%
									</span>
									<span className="text-[14px] text-[#B9B9B9]">
										{' '}
										Оплата старта работ на объекте.
									</span>
								</div>
							</div>

							<div className="flex gap-3 mt-4 items-center">
								<div className="bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8">
									2
								</div>

								<div className="flex flex-col gap-1">
									<span className="font-bold text-[14px]">
										Выполнение работ — остаток
									</span>
									<span className="text-[14px] text-[#B9B9B9]">
										{' '}
										Оплата производится раз в 20 дней за фактически выполненные
										объёмы.
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="flex w-full flex-col gap-2">
						<div className="bg-[#171717] mt-7.5 rounded-2xl px-4 py-5">
							<h3 className="flex text-base font-semibold items-center gap-2">
								<img
									className="w-5 h-5"
									src="/price/port.svg"
									alt="rub"
								/>
								Умная поэтапная оплата
							</h3>

							<div className="flex flex-col mt-5 gap-2">
								<div className="flex items-center gap-5">
									<img
										src="/price/list-w.svg"
										alt=""
									/>

									<span className="font-bold text-[14px] md:text-bold">
										Безналичный расчёт с НДС
									</span>
								</div>

								<div className="flex items-center gap-5">
									<img
										src="/price/list-w.svg"
										alt=""
									/>

									<span className="font-bold text-[14px] md:text-bold">
										Договор подряда
									</span>
								</div>

								<div className="flex items-center gap-5">
									<img
										src="/price/list-w.svg"
										alt=""
									/>

									<span className="font-bold text-[14px] md:text-bold">
										Счёт на оплату
									</span>
								</div>

								<div className="flex items-center gap-5">
									<img
										src="/price/list-w.svg"
										alt=""
									/>

									<span className="font-bold text-[14px] md:text-bold">
										Поэтапная оплата по актам выполненных работ
									</span>
								</div>
							</div>
						</div>
						<Button
							variant={'secondary'}
							size={'lg'}
							className="w-full"
						>
							Получить реквизиты
						</Button>

						<Image
							src={'/price/home-dectop-3.png'}
							width={655}
							height={228}
							alt="home3"
							className="object-cover object-center h-[198px] rounded-2xl w-full"
						/>
					</div>
				</div>

				<form className="flex sm:gap-2 flex-col md:flex-row w-full mt-10 rounded-3xl">
					<div className="">
						<h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
							Получите расчёт вашего проекта за 24 часа
						</h3>

						<p className="text-[14px] md:text-base leading-[150%] mt-2">
							Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
						</p>
					</div>

					<div className="flex flex-col mt-2 max-w-[650px] gap-2">
						<Input
							className="border-b outline-none border-white rounded-0"
							placeholder="Ваше Имя"
						/>
						<Input
							className="border-b border-white rounded-0"
							placeholder="Телефон"
						/>

						<Button
							className="mt-2"
							variant={'secondary'}
							size={'lg'}
						>
							Оставить заявку
						</Button>

						<p className="text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2">
							Нажимая кнопку «Отправить», я даю согласие на обработку моих
							персональных данных на условиях и для целей, определенных
							в политике о конфиденциальности
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
