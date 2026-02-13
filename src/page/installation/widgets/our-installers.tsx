import { Badge } from '@/shared/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function OurInstallers() {
	return (
		<>
			<section className=' pt-15 md:pt-30  relative top-[-30px] bg-white rounded-3xl '>
				<div className='flex container mx-auto px-4 max-w-[1330px] flex-col md:flex-row md:justify-between'>
					<div className='md:max-w-[650px]'>
						<div className='flex items-center gap-2'>
							<Image
								src='/mini-logo-gray.svg'
								alt='mini-logo'
								width={28}
								height={8}
								className=''
								unoptimized
							/>
						</div>
						<h2 className='font-semibold mt-2 md:font-bold text-[30px] md:text-[54px] leading-[110%]'>
							Наши монтажники — сертифицированные профессионалы
						</h2>

						<p className='text-base mt-5 italic'>
							Каждый прошёл обучение на производстве и имеет опыт 3+ лет
						</p>
					</div>

					<div className='bg-[#EDEDED] md:mt-10 flex flex-col justify-between py-7 px-5 rounded-3xl flex flex-col gap-2 mt-5'>
						<div className='items-center flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-[14px] leading-[150%]'>
								Все монтажники имеют допуск к высотным работам
							</p>
						</div>
						<div className='items-center flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-[14px] leading-[150%]'>
								Используем страховочные системы (пояса, тросы, каски)
							</p>
						</div>
						<div className='items-center flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-[14px] leading-[150%]'>
								Регулярный инструктаж по технике безопасности
							</p>
						</div>
						<div className='items-center flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-[14px] leading-[150%]'>
								Страхование гражданской ответственности на 10 млн руб.
							</p>
						</div>
					</div>
				</div>

				<div className='container mx-auto px-4 max-w-[1330px]'>
					<div className='mt-5 md:mt-15 flex justify-between w-full flex-row'>
						<div className="bg-[url('/home.png')] bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl">
							<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end  flex-col rounded-2xl'>
								<span className='text-[18px] font-bold'>Бригада</span>
								<ul className='mt-2 flex flex-col gap-1'>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>12 монтажников</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>4 бригады</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>Опыт: 3-15 лет</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="bg-[url('/home2.png')] bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl">
							<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end  flex-col rounded-2xl'>
								<span className='text-[18px] font-bold'>Обучение</span>
								<ul className='mt-2 flex flex-col gap-1'>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Теория на производстве
										</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Практика на учебном стенде
										</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>Экзамен</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Стажировка на объекте
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="bg-[url('/home3.png')] bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl">
							<div className='bg-black/40 p-7 text-white w-full h-full flex justify-end  flex-col rounded-2xl'>
								<span className='text-[18px] font-bold'>Сертификация</span>
								<ul className='mt-2 flex flex-col gap-1'>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Сертификат APEX
										</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Аттестация раз в год
										</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Страхование ответственности
										</p>
									</li>
									<li className='flex items-center gap-1'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[16px] leading-[150%]'>
											Допуск к работе на высоте
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='container hidden md:block mt-15 md:mt-30 max-w-[1330px] mx-auto px-4'>
				<div className='flex flex-col md:gap-[132px] md:flex-row'>
					<Image
						src='/installation/nodes.svg'
						alt='mini-logo'
						width={105}
						height={108}
						className='md:hidden'
						unoptimized
					/>
					<Image
						src='/installation/yzli.png'
						alt='yzli'
						width={424}
						height={430}
						className='hidden md:block'
						unoptimized
					/>
					<div className=''>
						<h3 className='text-[22px] md:text-[54px] leading-[110%] mt-5 md:mt-0 font-bold'>
							Узлы крепления и технические решения
						</h3>

						<p className='text-[14px] md:text-base mt-2'>
							Индивидуально спроектированные узлы для каждого элемента
						</p>

						<h3 className='text-base md:mt-10 md:text-base md:font-bold mt-5 font-bold'>
							Для каждого проекта мы разрабатываем индивидуальные узлы крепления
							с учётом:
						</h3>

						<ul className='flex flex-col md:mt-3'>
							<div className='items-center mt-4 flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-base leading-[150%]'>
									Типа фасада (кирпич, газоблок, монолит, вентфасад)
								</p>
							</div>

							<div className='items-center mt-4 flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-base leading-[150%]'>
									Толщины стены и её несущей способности
								</p>
							</div>

							<div className='items-center mt-4 flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-base leading-[150%]'>
									Ветровой нагрузки в регионе (до 60 кг/м² по СНиП)
								</p>
							</div>

							<div className='items-center mt-4 flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-base leading-[150%]'>
									Геометрии элементов декора (вес, размер, выступ)
								</p>
							</div>

							<div className='items-center mt-4 flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-base leading-[150%]'>
									Требований к теплотехнике (исключаем мостики холода)
								</p>
							</div>
						</ul>
					</div>
				</div>
			</section>

			<>
				<div className='container hidden md:block mx-auto mt-15 md:mt-30 max-w-[1330px] px-4'>
					<div className=''>
						<div className='flex items-center gap-2'>
							<Image
								src='/mini-logo-gray.svg'
								alt='mini-logo'
								width={28}
								height={8}
								className=''
								unoptimized
							/>
						</div>
						<h2 className='font-semibold md:font-bold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
							Посмотрите, как мы монтируем
						</h2>

						<p className='mt-5 text-[14px] italic text-[#3C3C3C]'>
							Таймлапс монтажа фасада особняка в Подмосковье: 12 дней в 3
							минутах
						</p>
					</div>
					<section className="bg-[url('/home-video.jpg')]  md:hidden text-white mt-5 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
						<Image src='/play.svg' alt='play' width={48} height={48} />
						<span className='text-[14px] text-white/70'>Смотреть видео</span>
					</section>
				</div>

				{/* Mobile */}
				<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col'>
					<div className="bg-[url('/home-video-desctop.jpg')]  w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
						<Image src='/play.svg' alt='play' width={48} height={48} />
						<span className='text-[14px] text-white/70'>Смотреть видео</span>
					</div>
				</section>
			</>

			<section className='mt-15 md:mt-30 md:block pb-30 container mx-auto max-w-[1330px] px-4'>
				<div className='flex flex-row justify-between items-end'>
					<div className='md:max-w-[804px]'>
						<div className='flex flex-col gap-2'>
							<Image
								src='/blabla.svg'
								alt='blabla'
								width={80}
								height={41}
								className='md:hidden'
								unoptimized
							/>
							<Image
								src='/mini-logo-gray.svg'
								alt='mini-logo'
								width={28}
								height={8}
								className='mt-5'
								unoptimized
							/>
						</div>
						<h2 className='font-semibold md:font-bold mt-2 text-[30px] md:text-[54px] leading-[110%]'>
							Трёхуровневая система контроля качества
						</h2>

						<p className='mt-5 text-[14px] md:text-[18px] italic text-[#3C3C3C]'>
							Проверяем каждый элемент на каждом этапе монтажа
						</p>
					</div>

					<div className=''>
						<Image
							src='/blabla.svg'
							alt='blabla'
							width={202}
							height={104}
							className=''
							unoptimized
						/>
					</div>
				</div>

				<div className='mt-5 md:mt-15 flex flex-col md:flex-row md:justify-between flex-wrap '>
					<div className='border border-[#EDEDED] rounded-2xl p-5 flex flex-col justify-between w-full md:max-w-[427px] md:h-[431px] max-w-[315px] h-[310px]'>
						<div className=''>
							<div className='flex items-center justify-between'>
								<p className='text-base font-semibold'>Бригадир (ежедневно)</p>

								<Badge>Уровень 1</Badge>
							</div>

							<div className='mt-4'>
								<p className='text-[14px] font-semibold'>Проверяет:</p>
								<div className='text-[14px]'>
									<p>• Геометрия каждого элемента (лазерный уровень)</p>
									<p>• Качество стыковки (зазоры до 0,5 мм)</p>
									<p>• Прочность крепежа (проверка на подвижность)</p>
									<p>• Отсутствие сколов и повреждений</p>
									<p>• Соответствие проекту (по чертежам)</p>
								</div>
							</div>
						</div>

						<div className=''>
							<p className='text-[14px] flex items-center gap-1 font-semibold'>
								Результае <ArrowUpRight size={16} />
							</p>
							<p className='text-[12px]'>Фото-отчёт в конце дня → заказчику</p>
						</div>
					</div>
					<div className='border border-[#EDEDED] rounded-2xl p-5 flex flex-col justify-between w-full md:max-w-[427px] md:h-[431px] max-w-[315px] h-[310px]'>
						<div className=''>
							<div className='flex items-start justify-between'>
								<div className=''>
									{' '}
									<p className='text-base font-semibold'>Инженер APEX </p>
									<p className='text-[14px] text-[#3C3C3C]'>
										(на ключевых этапах)
									</p>
								</div>

								<Badge>Уровень 2</Badge>
							</div>

							<div className='mt-4'>
								<p className='text-[14px] font-semibold'>Выезжает:</p>

								<div className='text-[14px]'>
									<p>• После монтажа подсистемы (проверка крепежа)</p>
									<p>• В середине монтажа элементов (контрольные замеры) </p>
									<p>• Перед герметизацией (проверка всех стыков)</p>
								</div>
							</div>
							<div className='mt-4'>
								<p className='text-[14px] font-semibold'>Проверяет:</p>

								<div className='text-[14px]'>
									<p>• Соответствие узлов крепления проекту</p>
									<p>• Прочность анкерных соединений (динамометр) </p>
									<p>• Общую геометрию фасада (тахеометр)</p>
									<p>• Качество монтажа критичных элементов</p>
								</div>
							</div>
						</div>

						<div className=''>
							<p className='text-[14px] flex items-center gap-1 font-semibold'>
								Результае <ArrowUpRight size={16} />
							</p>
							<p className='text-[12px]'>Техническое заключение → заказчику</p>
						</div>
					</div>
					<div className='border border-[#EDEDED] rounded-2xl p-5 flex flex-col justify-between w-full md:max-w-[427px] md:h-[431px] max-w-[315px] h-[310px]'>
						<div className=''>
							<div className='flex items-start justify-between'>
								<div className=''>
									<p className='text-base font-semibold'>
										Приёмка с заказчиком{' '}
									</p>
									<p className='text-[14px] text-[#3C3C3C]'>
										(на ключевых этапах)
									</p>
								</div>

								<Badge>Уровень 3</Badge>
							</div>

							<div className='mt-4'>
								<p className='text-[14px] font-semibold'>
									Совместный обход объекта:
								</p>
								<div className='text-[14px]'>
									<p>• Проверка каждого элемента визуально</p>
									<p>• Проверка стыков (зазоры, герметизация)</p>
									<p>• Проверка крепежа (нет видимых дефектов)</p>
									<p>• Очистка элементов от пыли и следов)</p>
								</div>
							</div>
							<div className='mt-4'>
								<p className='text-[14px] font-semibold'>
									Если есть замечания:
								</p>
								<div className='text-[14px]'>
									<p>→ Устраняем в течение 2 рабочих дней</p>
									<p>→ Повторная приёмка бесплатно</p>
								</div>
							</div>
						</div>

						<div className=''>
							<p className='text-[14px] flex items-center gap-1 font-semibold'>
								Результае <ArrowUpRight size={16} />
							</p>
							<p className='text-[12px]'>Акт выполненных работ → заказчику</p>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-[url('/quality-control-tools.svg')] bg-cover w-full h-[620.5594482421875px] bg-center rounded-2xl">
				<div className='container max-w-[1330px] pt-10 flex flex-col gap-5 mx-auto px-4'>
					<div className='bg-white max-w-[634px] rounded-2xl p-5'>
						<h4 className='font-bold text-base leading-[110%]'>
							Инструменты контроля качества:
						</h4>
						<div className='flex flex-col gap-2 mt-5'>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Лазерный уровень — проверка горизонталей и вертикалей
									(точность 1 мм на 10 м)
								</p>
							</div>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Тахеометр — проверка общей геометрии фасада (для сложных
									объектов)
								</p>
							</div>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Динамометрический ключ — проверка усилия затяжки анкеров
								</p>
							</div>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Щуп/калибр — измерение зазоров в стыках (от 0,1 мм)
								</p>
							</div>
							<div className='items-start flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>
									Фото-фиксация — каждый этап документируется
								</p>
							</div>
						</div>
					</div>
					<div className='w-full flex md:mt-20 justify-end'>
						<div className='bg-white md:max-w-[458px] rounded-2xl p-5'>
							<h4 className='font-bold text-base leading-[110%]'>
								Статистика:
							</h4>
							<div className='flex flex-col gap-2 mt-5'>
								<div className='items-start flex gap-2'>
									<Image
										src={'/about-us/list-icon.png'}
										alt='check'
										width={22}
										height={22}
									/>
									<p className='text-[14px] leading-[150%]'>
										98% объектов принимаются с первого раза (без замечаний)
									</p>
								</div>
								<div className='items-start flex gap-2'>
									<Image
										src={'/about-us/list-icon.png'}
										alt='check'
										width={22}
										height={22}
									/>
									<p className='text-[14px] leading-[150%]'>
										Среднее количество замечаний на объект: 0,3
									</p>
								</div>
								<div className='items-start flex gap-2'>
									<Image
										src={'/about-us/list-icon.png'}
										alt='check'
										width={22}
										height={22}
									/>
									<p className='text-[14px] leading-[150%]'>
										Время устранения замечаний: 1-2 дня
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='container py-15 mx-auto px-4 max-w-[1330px]'>
				<div className='py-7 flex flex-col gap-5 text-center'>
					<h3 className='text-[30px] md:text-[54px] font-bold leading-[110%]'>
						Гарантии на монтаж <br /> и материал
					</h3>

					<p className='md:text-[18px]'>Мы отвечаем за качество своей работы</p>

					<div className='bg-[#F5F5F5] md:py-10 flex flex-col md:flex-row md:justify-between rounded-2xl px-4 py-5'>
						<div className='w-full'>
							<h4 className='text-[30px] md:text-[68px] font-semibold'>
								{' '}
								2 года
							</h4>
							<span className='font-semibold'>ГАРАНТИЯ НА МОНТАЖ</span>

							<div className='h-[1px] w-full mt-5 bg-[#D0D0D0]'></div>

							<div className='flex flex-col border-r mt-4 border-[#D0D0D0]'>
								<p className=' text-[#999999] text-[14px] font-bold'>
									Покрывает:
								</p>
								<div className='w-full flex mt-10 flex-row'>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} />
											<span className='text-[14px] font-bold'>
												Крепёж и узлы
											</span>
											<p className='text-[14px] leading-0'>
												(не рашатаются не отойдут)
											</p>
										</div>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} />
											<span className='text-[14px] font-bold'>Геометрия</span>
											<p className='text-[14px] leading-0'>
												(не деформируется)
											</p>
										</div>
									</div>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} />
											<span className='text-[14px] font-bold'>
												Герметизация швов
											</span>
											<p className='text-[14px] leading-0'>(не разрушится)</p>
										</div>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} />
											<span className='text-[14px] font-bold'>
												Стыковка элементов
											</span>
											<p className='text-[14px] leading-0'>
												(зазоры не увеличатся)
											</p>
										</div>
									</div>
								</div>
								<p className='mt-4 text-[#999999] text-[14px] font-bold'>
									Не Покрывает:
								</p>
								<div className='w-full flex mt-3 flex-row'>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-2 justify-center items-center'>
											<img src={'/krestik.svg'} />

											<div className=''>
												<span className='text-[14px] font-bold'>
													Механические повреждения
												</span>
												<p className='text-[14px]'>(удары, сколы)</p>
											</div>
										</div>
									</div>
									<div className='flex w-full gap-4 flex-col'>
										<div className='flex flex-col gap-2 justify-center items-center'>
											<img src={'/krestik.svg'} />
											<div className=''>
												{' '}
												<span className='text-[14px] font-bold'>
													Форс-мажор
												</span>
												<p className='text-[14px]'>(ураганы, землятресения)</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full'>
							{' '}
							<h4 className='text-[30px] md:text-[68px] font-semibold'>
								{' '}
								50 лет
							</h4>
							<span className='font-semibold'>ГАРАНТИЯ НА МОНТАЖ</span>
							<div className='h-[1px] w-full mt-5 bg-[#D0D0D0]'></div>
							<p className='mt-4 text-[#999999] text-[14px] font-bold'>
								Покрывает:
							</p>
							<div className='w-full flex mt-10 flex-row'>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} />
										<span className='text-[14px] font-bold'>
											Сохранность цвета
										</span>
										<p className='text-[14px] leading-0'>(не выгорит)</p>
									</div>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} />
										<span className='text-[14px] font-bold'>
											Морозостойкость
										</span>
										<p className='text-[14px] leading-0'>(200+ циклов)</p>
									</div>
								</div>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} />
										<span className='text-[14px] font-bold'>
											Целостность структуры
										</span>
										<p className='text-[14px] leading-0'>
											(не потрескается, не отслоится)
										</p>
									</div>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} />
										<span className='text-[14px] font-bold'>
											Водонепроницаемость
										</span>
										<p className='text-[14px] leading-0'>
											(не впитывает влагу)
										</p>
									</div>
								</div>
							</div>
							<p className='mt-4 text-[#999999] text-[14px] font-bold'>
								Не Покрывает:
							</p>
							<div className='w-full flex mt-3 flex-row'>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-2 justify-center items-center'>
										<img src={'/krestik.svg'} />

										<div className=''>
											{' '}
											<span className='text-[14px] font-bold'>
												Механические повреждения
											</span>
											<p className='text-[14px]'>(удары, царапины)</p>
										</div>
									</div>
								</div>
								<div className='flex w-full gap-4 flex-col'>
									<div className='flex flex-col gap-2 justify-center items-center'>
										<img src={'/krestik.svg'} />

										<div className=''>
											{' '}
											<span className='text-[14px] font-bold'>
												Несанкционированный ремонт
											</span>
											<p className='text-[14px]'>третьими лицами</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col py-7 md:flex-row gap-5'>
					<div className=''>
						<div className=''>
							<div className='flex items-center gap-2'>
								<Image
									src='/mini-logo-gray.svg'
									alt='mini-logo'
									width={28}
									height={8}
									className=''
									unoptimized
								/>
							</div>
							<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
								Что входит в гарантийное обслуживание:
							</h2>
						</div>

						<div className='mt-5 md:mt-15 flex flex-col gap-2 md:flex-row md:justify-between flex-wrap'>
							<div className='bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5'>
								<h3 className='text-base font-bold'>
									В первые 12 месяцев после монтажа:
								</h3>

								<ul className='list-disc text-[14px] flex flex-col  pl-4'>
									<li>Бесплатный выезд инженера при любом обращении</li>
									<li>Устранение дефектов монтажа за наш счёт</li>
									<li>
										Замена повреждённых элементов (если дефект производства)
									</li>
								</ul>
							</div>
							<div className='bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5'>
								<h3 className='text-base font-bold'>
									Как получить гарантийное обслуживание:
								</h3>

								<ul className='list-disc text-[14px] flex flex-col pl-4'>
									<li>Позвонить по телефону +7 (495) 000-00-00</li>
									<li>
										Описать проблему (можно прислать фото на email/WhatsApp)
									</li>
									<li>Мы выезжаем на объект в течение 3 рабочих дней</li>
									<li>Инженер фиксирует дефект и определяет причину</li>
									<li>
										Если гарантийный случай — устраняем бесплатно в течение 7
										дней
									</li>
								</ul>
							</div>
							<div className='bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5'>
								<h3 className='text-base font-bold'>После 24 месяцев:</h3>

								<ul className='list-disc text-[14px] flex flex-col pl-4'>
									<li>
										Выезд инженера: 5 000 руб. (засчитывается в стоимость
										ремонта)
									</li>
									<li>Ремонт по гарантии: бесплатно (материалы и работа)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
								</ul>
							</div>
							<div className='bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5'>
								<h3 className='text-base font-bold'>
									Документы при сдаче объекта:
								</h3>

								<ul className='list-disc text-[14px] flex flex-col pl-4'>
									<li>Акт выполненных работ (КС-2, КС-3)</li>
									<li>Гарантийный талон на монтаж (10 лет)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
									<li>Инструкция по эксплуатации</li>
									<li>Контакты для гарантийного обслуживания</li>
								</ul>
							</div>
						</div>
					</div>

					<Image
						src='/installation/home.jpg'
						alt='home'
						width={426}
						height={630}
						className='hidden w-full max-w-[426px] md:block'
					/>
				</div>
			</section>
		</>
	)
}
