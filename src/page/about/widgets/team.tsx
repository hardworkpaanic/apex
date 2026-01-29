import { Button } from '@/shared/components'
import { Star } from 'lucide-react'
import Image from 'next/image'

export function Team() {
	return (
		<section className="bg-black mt-15 rounded-3xl text-white md:py-20 py-10">
			<div className="container max-w-[1320px] mx-auto px-4">
				<h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
					Команда APEX — эксперты своего дела
				</h2>

				<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
					Более 50 специалистов: архитекторы, инженеры, технологи, монтажники
				</p>

				<div className="flex flex-col md:flex-row gap-5 md:justify-between flex-wrap">
					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>
					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>

					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>

					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>

					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>

					<div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
						<div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
							<h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
							<p className="text-[14px]">Должность</p>
						</div>
					</div>
				</div>

				<h2 className="text-[30px] md:mt-20 md:text-[48px] mt-10 font-semibold leading-[110%]">
					Наше производство — <br /> технологии и мощности
				</h2>

				<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
					Современное оборудование и строгий контроль качества на каждом этапе
				</p>

				<Image
					src={'/about-us/2.png'}
					width={343}
					height={73.27727508544922}
					className="w-full md:hidden object-contain mt-5 object-center"
					alt="Производство APEX"
				/>

				<Image
					src={'/about-us/2-desktop.png'}
					width={1320}
					height={282}
					className="w-full hidden md:block object-contain mt-5 object-center"
					alt="Производство APEX"
				/>

				<div className="flex flex-col mt-10 md:flex-row md:justify-between">
					{' '}
					<h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold leading-[110%]">
						Мощности
					</h2>
					<div className="flex flex-col md:flex-row w-full md:justify-between md:max-w-[873px] gap-5">
						<div className="flex justify-between md:flex-col md:items-start items-center">
							<span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
								10+
							</span>
							<span className="text-[#B9B9B9]">станков ЧПУ</span>
						</div>

						<div className="flex justify-between md:flex-col md:items-start items-center">
							<span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
								5000+ м²
							</span>
							<span className="text-[#B9B9B9]">Производство в месяц</span>
						</div>

						<div className="flex justify-between md:flex-col md:items-start items-center">
							<span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
								2000+ м²{' '}
							</span>
							<span className="text-[#B9B9B9]">Складские площади</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col mt-10 md:flex-row md:justify-between">
					<h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold leading-[110%]">
						Технологические <br /> преимущества
					</h2>

					<div className="flex flex-col w-full md:max-w-[873px]">
						<div className="flex flex-col  pb-4 border-b border-white gap-2">
							<span className="text-[14px] font-bold">ЧПУ-фрезеры</span>
							<p className="text-[14px] text-[#B9B9B9] italic">
								Точность 0,1 мм. Изготовлениеформ любой сложности
							</p>
						</div>

						<div className="flex flex-col  pb-4 border-b border-white gap-2">
							<span className="text-[14px] font-bold">
								Многослойная формовка
							</span>
							<p className="text-[14px] text-[#B9B9B9] italic">
								Ручная укладка в 3 слоя. Армирование каждого элемента
							</p>
						</div>

						<div className="flex flex-col pb-4  gap-2">
							<span className="text-[14px] font-bold">Контроль качества</span>
							<p className="text-[14px] text-[#B9B9B9] italic">
								Лаборатория. 12 параметров проверки каждого элемента
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col mt-10 md:flex-row md:justify-between">
					<h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold leading-[110%]">
						Посещение производства
					</h2>

					<div className="flex flex-col w-full md:max-w-[873px]">
						<p className="text-[12px] md:text-[16px] leading-[150%] md:mt-0 mt-4">
							Наше производство оснащено современным оборудованием. ЧПУ-фрезеры
							с точностью 0,1 мм позволяют создавать формы любой сложности.
							Каждый элемент формуется вручную в три слоя с армированием и
							проходит строгий контроль качества на всех этапах. Мощность
							производства — до 5000 м² в месяц.
						</p>

						<div className="bg-[#171717] flex flex-col md:justify-between md:flex-row relative z-10 p-5 mt-5 rounded-3xl md:items-center">
							<div className="flex flex-row md:flex-col">
								<p className="text-[14px] md:text-[16px] leading-[150%]">
									Хотите увидеть производство своими глазами?
								</p>
								<p className="text-[14px] md:text-[16px] leading-[150%]">
									Проводим экскурсии для клиентов по предварительной записи.
								</p>
							</div>

							<Button
								className="w-full md:w-auto md:mt-0 mt-5"
								variant={'secondary'}
							>
								Посмотреть производство
							</Button>
						</div>
					</div>
				</div>
				{/* <Image
					src={'/about-us/col.png'}
					alt="колона"
					width={334.0190124511719}
					height={420.4186096191406}
					className="relative object-cover object-center bottom-20 z-0"
					unoptimized
				/> */}

				<h2 className="text-[30px] md:text-[48px] mt-10 md:mt-20 font-semibold leading-[110%]">
					Трёхуровневая система контроля качества
				</h2>

				<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
					Современное оборудование и строгий контроль качества на каждом этапе
				</p>

				{/*  */}

				<div className="flex flex-col md:py-10 md:flex-row md:gap-3">
					<div className="">
						<div className="bg-[#171717] mt-5 rounded-3xl p-7">
							<h3 className="text-[20px] font-bold">1: Производство</h3>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Контроль сырья (мрамор, смола, пигменты)</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Проверка форм перед использованием</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>
									Контроль толщины слоёв (лицевой 2мм, фактурный 5 мм,
									армирующий 3мм)
								</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Визуальная проверка после формовки</p>
							</div>
						</div>

						<div className="bg-[#171717] mt-2 rounded-3xl p-7">
							<h3 className="text-[20px] font-bold">
								2: ОТК (отдел технического контроля)
							</h3>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Проверка геометрии (размеры, углы))</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Контроль цвета (соответствие эталону)</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Проверка фактуры и текстуры</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Визуальная проверка после формовки</p>
							</div>
						</div>
					</div>

					{/*  */}

					<div className="w-full md:min-w-[873px]">
						<div className="bg-[#171717] mt-2 rounded-3xl p-7">
							<h3 className="text-[20px] font-bold">3: Монтаж на объекте</h3>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Проверка целостности при доставке</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Контроль точности крепления (0,5 мм)</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Проверка стыков и швов</p>
							</div>

							<div className="items-center mt-4 flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={24}
									height={24}
								/>
								<p>Финальная приёмка с заказчиком</p>
							</div>
						</div>

						<div className="bg-[#171717] p-7 rounded-3xl mt-1">
							<span className="text-base font-semibold">
								12 параметров проверки ОТК:
							</span>

							<div className="flex mt-5 flex-row">
								<div className="w-full flex-col flex">
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											1
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											3
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											5
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											7
										</div>
										<p>Геометрия</p>
									</div>

									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											9
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											11
										</div>
										<p>Геометрия</p>
									</div>
								</div>
								<div className="w-full">
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											2
										</div>
										<p>Размеры</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											4
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											6
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											8
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											10
										</div>
										<p>Геометрия</p>
									</div>
									<div className="flex py-1 items-center gap-2">
										<div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
											12
										</div>
										<p>Геометрия</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2 className="text-[30px] md:text-[48px] mt-10 font-semibold leading-[110%]">
					Сертификаты качества и соответствия
				</h2>

				<p className="text-[14px] italic text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
					Все наши материалы сертифицированы и соответствуют ГОСТам
				</p>

				{/* TODO: Доделать сертификаты */}

				<Button
					variant={'secondary'}
					className="w-full mt-5"
					size={'lg'}
				>
					Скачать архивом .zip
				</Button>

				<h2 className="text-[30px] text-center md:text-[48px] mt-10 font-semibold leading-[110%]">
					Отзывы наших клиентов
				</h2>

				<p className="text-[14px] text-center italic text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
					Более 200 довольных заказчиков по всей России
				</p>

				<div className="bg-[#171717] px-7 py-8 flex flex-col mt-5 gap-5 rounded-2xl">
					<div className="">
						<span className="flex items-center gap-1 text-[20px] font-bold">
							5 <Star size={18} />
						</span>
						<span className="text-[20px] font-bold">Иван Петрович К.</span>
						<p className="text-[14px] italic">Владелец дома, Рублёвка</p>
					</div>

					<p className="text-[14px] leading-[150%] text-[#B9B9B9]">
						Работали с APEX над фасадом нашего дома в Подмосковье. Очень
						довольны результатом. Особенно порадовала прозрачность процесса —
						каждый день получали фото с объекта. Сроки выдержали точно.
					</p>
				</div>

				<div className="bg-[#171717] rounded-3xl mt-5 px-4 py-5">
					<h5 className="text-[30px] font-bold">Партнерам</h5>
					<p className="text-[14px] mt-2 text-[#B9B9B9]">
						Приглашаем к сотрудничеству архитекторов, застройщиков и дизайнеров.
					</p>

					<p className="text-base font-semibold mt-3 text-[#B9B9B9]">
						Мы предлагаем:
					</p>
				</div>
			</div>
		</section>
	)
}
