import Image from 'next/image'

export function WhyIsItSafe() {
	return (
		<>
			<section className="container  mt-15 md:mt-30 max-w-[1330px] mx-auto px-4">
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
						Почему монтаж APEX — это безопасно
					</h2>
				</div>

				<div className="mt-5 md:mt-[54px] md:gap-1 flex flex-col md:flex-row md:justify-between flex-wrap">
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							1
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">
								Обученные и сертифицированные монтажники
							</p>
							<p className="text-[12px] italic md:text-[14px]">
								Все наши монтажники прошли обучение на производстве и знают
								каждый нюанс материала. Каждый специалист имеет сертификат APEX
								и опыт работы минимум 3 года. Монтажники владеют технологией
								сухого крепления, умеют работать с узлами любой сложности и
								знают, как достичь идеальной стыковки элементов.
							</p>
						</div>
					</div>
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							2
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">
								Всесезонный монтаж (круглый год)
							</p>
							<p className="text-[12px] italic md:text-[14px]">
								Технология сухого крепления позволяет монтировать элементы при
								температуре до -15°C. Мы не используем клей или раствор, поэтому
								не зависим от погоды. Монтаж возможен с марта по декабрь без
								ограничений, а в январе-феврале — при благоприятных условиях.
							</p>
						</div>
					</div>
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							3
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">Без мокрых процессов</p>
							<p className="text-[12px] italic md:text-[14px]">
								Элементы крепятся на специальные металлоконструкции из
								нержавеющей стали. Никакого клея, раствора, герметика на этапе
								монтажа. Это исключает риск отслоения, ускоряет процесс и
								позволяет работать зимой.
							</p>
						</div>
					</div>
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							4
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">
								Ручная подгонка каждого элемента
							</p>
							<p className="text-[12px] italic md:text-[14px]">
								Несмотря на высокую точность производства (±1 мм), каждый
								элемент подгоняется вручную на объекте. Монтажник проверяет
								геометрию, выравнивает, корректирует. Результат — идеальная
								стыковка с точностью 0,5 мм.
							</p>
						</div>
					</div>
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							5
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">
								Трёхуровневый контроль качества
							</p>
							<p className="text-[12px] italic md:text-[14px]">
								<span className="text-[#3C3C3C] font-semibold">
									- Уровень 1:
								</span>{' '}
								Бригадир проверяет каждый установленный элемент (геометрия,
								крепёж, стыковка) <br />{' '}
								<span className="text-[#3C3C3C] font-semibold">
									- Уровень 2:
								</span>{' '}
								Инженер APEX выезжает на ключевых этапах (контрольные замеры,
								фото-фиксация) <br />{' '}
								<span className="text-[#3C3C3C] font-semibold">
									- Уровень 3:
								</span>{' '}
								Финальная приёмка с заказчиком (обход объекта, проверка всех
								узлов, подписание акта).
							</p>
						</div>
					</div>
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between md:justify-start md:gap-2 w-full max-w-[428px] md:h-[323px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							6
						</div>

						<div className="flex flex-col md:gap-2">
							<p className="text-base font-semibold">
								Гарантия 10 лет на монтажные работы
							</p>
							<p className="text-[12px] italic md:text-[14px]">
								Мы даём 10 лет гарантии на все монтажные работы (крепёж, узлы,
								герметизацию швов). Гарантия на материал - 50 лет. Если в
								течении гарантийного срока возникнут проблемы по нашей вине -
								устраним бесплатно
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="container md:hidden mt-15 md:mt-30 max-w-[1330px] mx-auto px-4">
				<div className="flex flex-col md:gap-[132px] md:flex-row">
					<Image
						src="/installation/nodes.svg"
						alt="mini-logo"
						width={105}
						height={108}
						className="md:hidden"
						unoptimized
					/>
					<Image
						src="/installation/yzli.png"
						alt="yzli"
						width={424}
						height={430}
						className="hidden md:block"
						unoptimized
					/>
					<div className="">
						<h3 className="text-[22px] md:text-[54px] leading-[110%] mt-5 md:mt-0 font-bold">
							Узлы крепления и технические решения
						</h3>

						<p className="text-[14px] md:text-base mt-2">
							Индивидуально спроектированные узлы для каждого элемента
						</p>

						<h3 className="text-base md:mt-10 md:text-base md:font-bold mt-5 font-bold">
							Для каждого проекта мы разрабатываем индивидуальные узлы крепления
							с учётом:
						</h3>

						<ul className="flex flex-col md:mt-3">
							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Типа фасада (кирпич, газоблок, монолит, вентфасад)
								</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Толщины стены и её несущей способности
								</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Ветровой нагрузки в регионе (до 60 кг/м² по СНиП)
								</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Геометрии элементов декора (вес, размер, выступ)
								</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Требований к теплотехнике (исключаем мостики холода)
								</p>
							</div>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
