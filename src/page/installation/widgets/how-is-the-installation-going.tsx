import { Separator } from '@/shared/components/ui/separator'
import Image from 'next/image'

export function HowIsTheInstallationGoing() {
	return (
		<section className="bg-black text-white mt-15 pt-15 md:pt-30 rounded-t-3xl">
			<div className="mx-auto px-4 max-w-[1330px] container">
				<Image
					src="/mini-logo.svg"
					alt="mini-logo"
					width={28}
					height={8}
					className=""
					unoptimized
				/>

				<h1 className="font-semibold mt-5 max-w-[508px] text-[30px] md:text-[48px] leading-[110%]">
					Как проходит монтаж: 5 этапов
				</h1>

				<Separator className="mt-5 bg-white" />

				<div className="flex flex-col md:flex-row md:justify-between mt-10 gap-5">
					<div className="flex flex-col max-w-[427px] w-full gap-2">
						<span className="text-base font-semibold">Общий срок монтажа:</span>

						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base text-[#B9B9B9] leading-[150%]">
								Стандартный объект (300 м²): 20-30 рабочих дней
							</p>
						</div>

						<div className="items-center  flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base text-[#B9B9B9] leading-[150%]">
								Сложный объект (500+ м²): 30-45 рабочих дней
							</p>
						</div>
						<div className="mt-5">
							<span className="text-base font-semibold">Важное:</span>
							<p className="text-base text-[#B9B9B9] mt-2 italic leading-[150%]">
								"Мы не начинаем монтаж, пока не проверим готовность фасада. Если
								есть отклонения от проекта — сообщаем сразу и корректируем
								план."
							</p>
						</div>
					</div>

					<div className="md:max-w-[762px] flex flex-col gap-5 w-full">
						<div className="flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2">
							<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

							<div className="">
								<span className="text-base font-semibold">
									Подготовка фасада и замеры (5 дней)
								</span>
								<ul className="list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic">
									<li>Выезд инженера на объект</li>
									<li>Проверка геометрии фасада (лазерный уровень)</li>
									<li>Контрольные замеры (сверка с проектом)</li>
									<li>Фиксация отклонений и корректировка</li>
									<li>Составление карты монтажа</li>
								</ul>
							</div>

							<Image
								src={'/installation/img.png'}
								alt="img"
								width={139}
								height={139}
								className="ml-auto"
							/>
						</div>
						<div className="flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2">
							<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

							<div className="">
								<span className="text-base font-semibold">
									Подготовка фасада и замеры (5 дней)
								</span>
								<ul className="list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic">
									<li>Выезд инженера на объект</li>
									<li>Проверка геометрии фасада (лазерный уровень)</li>
									<li>Контрольные замеры (сверка с проектом)</li>
									<li>Фиксация отклонений и корректировка</li>
									<li>Составление карты монтажа</li>
								</ul>
							</div>

							<Image
								src={'/installation/img.png'}
								alt="img"
								width={139}
								height={139}
								className="ml-auto"
							/>
						</div>
						<div className="flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2">
							<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

							<div className="">
								<span className="text-base font-semibold">
									Подготовка фасада и замеры (5 дней)
								</span>
								<ul className="list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic">
									<li>Выезд инженера на объект</li>
									<li>Проверка геометрии фасада (лазерный уровень)</li>
									<li>Контрольные замеры (сверка с проектом)</li>
									<li>Фиксация отклонений и корректировка</li>
									<li>Составление карты монтажа</li>
								</ul>
							</div>

							<Image
								src={'/installation/img.png'}
								alt="img"
								width={139}
								height={139}
								className="ml-auto"
							/>
						</div>
						<div className="flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2">
							<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

							<div className="">
								<span className="text-base font-semibold">
									Подготовка фасада и замеры (5 дней)
								</span>
								<ul className="list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic">
									<li>Выезд инженера на объект</li>
									<li>Проверка геометрии фасада (лазерный уровень)</li>
									<li>Контрольные замеры (сверка с проектом)</li>
									<li>Фиксация отклонений и корректировка</li>
									<li>Составление карты монтажа</li>
								</ul>
							</div>

							<Image
								src={'/installation/img.png'}
								alt="img"
								width={139}
								height={139}
								className="ml-auto"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:mt-26.75 gap-3 mt-10 md:flex-row md:justify-between">
					<div className="">
						{' '}
						<Image
							src="/mini-logo.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className=""
							unoptimized
						/>
						<h2 className="font-semibold mt-5 text-[30px] md:text-[48px] leading-[110%]">
							Монтаж круглый год. <br /> Даже зимой.
						</h2>
						<p className="text-[14px] md:text-base mt-4">
							Технология сухого крепления не зависит от температуры
						</p>
					</div>
					<p className="text-[14px] max-w-[538px] md:mt-20 text-[#B9B9B9] leading-[150%]">
						Большинство конкурентов монтируют декор на клей или раствор — это
						невозможно при отрицательных температурах. Мы используем
						запатентованную систему механического крепления: элементы
						фиксируются на металлокаркасе из нержавеющей стали без клея и
						раствора.
					</p>
				</div>

				<div className="flex flex-col mt-10 w-full">
					<div className="flex flex-col w-full md:border-b  md:border-white/30 md:flex-row">
						{' '}
						<div className="flex flex-col mt-5 md:max-w-[433px] md:pt-5 md:px-7 w-full pb-13 md:border-none border-b border-[#919191] gap-2">
							<span className="text-[14px] md:text-[20px] font-bold">
								Не зависим от погоды
							</span>
							<p className="text-[14px]">работаем при температуре до -15°C</p>
						</div>
						<div className="flex flex-col md:max-w-[433px] md:py-5 md:px-7 w-full mt-5 pb-4 md:border-b-0  border-b-1 md:border-r-1 md:border-l-1 md:border-white/30 border-[#919191] gap-2">
							<span className="text-[14px]  md:text-[20px] font-bold">
								Нет риска промерзания раствора
							</span>
							<p className="text-[14px]">крепёж полностью механический</p>
						</div>
						<div className="flex flex-col md:max-w-[433px] md:py-5 md:px-7 w-full mt-5 pb-4 md:border-none md:border-white/30 border-b border-[#919191] gap-2">
							<span className="text-[14px]  md:text-[20px] font-bold">
								Быстрее
							</span>
							<p className="text-[14px]">
								не нужно ждать высыхания клея (48 часов)
							</p>
						</div>
					</div>

					<div className="flex flex-col md:border-b md:border-white/30 md:flex-row">
						<div className="flex md:px-7 md:border-r-1 md:pt-7 md:w-full flex-col mt-5 md:mt-0 md:pb-10 md:border-b-0 border-b border-[#919191] gap-2">
							<span className="text-[14px] md:text-[20px] font-bold">
								Надёжнее
							</span>
							<p className="text-[14px]">
								металлический крепёж прочнее клеевого соединения
							</p>
						</div>

						<div className="flex md:px-7 md:w-full md:pt-7 md:py-5 flex-col md:mt-0 mt-5 md:pb-9 pb-4 md:border-b-0 border-b border-white/30 gap-2">
							<span className="text-[14px] md:text-[20px] font-bold">
								Гибкость графика
							</span>
							<p className="text-[14px]">
								можете планировать монтаж с октября по март
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:border-r md:py-5 md:px-7 md:border-white/30">
						<span className="text-base font-semibold">Статистика:</span>

						<ul className="flex flex-col mt-5 md:gap-9 gap-4">
							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>

							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>

							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="w-full md:px-7 md:py-5">
						<span className="text-base font-semibold">Статистика:</span>

						<ul className="flex flex-col mt-5 md:gap-9 gap-4">
							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>

							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>

							<li className="flex flex-row items-center gap-3">
								<Image
									src={'/wall.svg'}
									alt="wall"
									width={24}
									height={24}
								/>
								<div className="flex flex-col">
									<span className="text-[14px] font-semibold">
										35% наших объектов
									</span>
									<p className="text-[14px]">
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="bg-[#1E1E1E] relative rounded-2xl gap- flex flex-col md:flex-row md:p-15 px-4 py-5 mt-10">
					<div className="">
						<Image
							src="/mini-logo.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className=""
							unoptimized
						/>

						<h3 className="font-semibold z-10 mt-2 text-[30px] md:text-[48px] leading-[110%]">
							Сравнение технологий.
						</h3>
					</div>

					<div className="w-full">
						<Image
							src={'/installation/table.svg'}
							alt="table"
							width={831}
							height={346}
							className="hidden md:block w-full"
						/>
					</div>

					<div className="md:hidden">
						<div className="bg-black  rounded-2xl flex flex-col justify-between  gap-4 px-4 py-6 mt-5">
							<span className="text-[14px] font-semibold">
								Наша технология (механический крепёж)
							</span>

							<Separator className="bg-[#FFFFFF]/30" />

							<ul className="flex flex-col gap-2">
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
							</ul>
						</div>

						<div className="bg-black rounded-2xl flex flex-col justify-between gap-4 px-4 py-6 mt-5">
							<span className="text-[14px] font-semibold">
								Наша технология (механический крепёж)
							</span>

							<Separator className="bg-[#FFFFFF]/30" />

							<ul className="flex flex-col gap-2">
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="font-semibold text-[14px]">
										Температура монтажа
									</span>
									<span className="text-[14px]">До -15°C</span>
								</li>
							</ul>
						</div>
					</div>

					<Image
						src={'/installation/bg.png'}
						alt="bg"
						width={347}
						height={346}
						className="absolute z-0 bottom-0 left-0"
					/>
				</div>
			</div>
		</section>
	)
}
