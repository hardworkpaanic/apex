import Image from 'next/image'

export function OurInstallers() {
	return (
		<>
			<section className="container py-15 md:py-30 mx-auto relative top-[-30px] bg-white rounded-3xl px-4 max-w-[1330px]">
				<div className="flex flex-col md:flex-row md:justify-between">
					<div className="md:max-w-[650px]">
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
						<h2 className="font-semibold mt-2 text-[30px] md:text-[54px] leading-[110%]">
							Наши монтажники — сертифицированные профессионалы
						</h2>

						<p className="text-base mt-5 italic">
							Каждый прошёл обучение на производстве и имеет опыт 3+ лет
						</p>
					</div>

					<div className="bg-[#EDEDED] md:mt-10 flex flex-col justify-between py-7 px-5 rounded-3xl flex flex-col gap-2 mt-5">
						<div className="items-center flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-[14px] leading-[150%]">
								Все монтажники имеют допуск к высотным работам
							</p>
						</div>
						<div className="items-center flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-[14px] leading-[150%]">
								Все монтажники имеют допуск к высотным работам
							</p>
						</div>
						<div className="items-center flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-[14px] leading-[150%]">
								Все монтажники имеют допуск к высотным работам
							</p>
						</div>
						<div className="items-center flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-[14px] leading-[150%]">
								Все монтажники имеют допуск к высотным работам
							</p>
						</div>
					</div>
				</div>

				<div className="mt-5 md:mt-15">
					<div className="bg-[url('/home.svg')] bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl"></div>
				</div>
			</section>

			<div className="bg-[url('/quality-control-tools.svg')] bg-cover w-full h-[620.5594482421875px] bg-center rounded-2xl">
				<div className="container max-w-[1330px] pt-10 flex flex-col gap-5 mx-auto px-4">
					<div className="bg-white max-w-[634px] rounded-2xl p-5">
						<h4 className="font-bold text-base leading-[110%]">
							Инструменты контроля качества:
						</h4>
						<div className="flex flex-col gap-2 mt-5">
							<div className="items-start flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
							<div className="items-start flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
							<div className="items-start flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
							<div className="items-start flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
							<div className="items-start flex gap-2">
								<Image
									src={'/about-us/list-icon.png'}
									alt="check"
									width={22}
									height={22}
								/>
								<p className="text-base leading-[150%]">
									Стандартный объект (300 м²): 20-30 рабочих дней
								</p>
							</div>
						</div>
					</div>
					<div className="w-full flex md:mt-30 justify-end">
						<div className="bg-white md:max-w-[458px] rounded-2xl p-5">
							<h4 className="font-bold text-base leading-[110%]">
								Инструменты контроля качества:
							</h4>
							<div className="flex flex-col gap-2 mt-5">
								<div className="items-start flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={22}
										height={22}
									/>
									<p className="text-base leading-[150%]">
										Стандартный объект (300 м²): 20-30 рабочих дней
									</p>
								</div>
								<div className="items-start flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={22}
										height={22}
									/>
									<p className="text-base leading-[150%]">
										Стандартный объект (300 м²): 20-30 рабочих дней
									</p>
								</div>
								<div className="items-start flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={22}
										height={22}
									/>
									<p className="text-base leading-[150%]">
										Стандартный объект (300 м²): 20-30 рабочих дней
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="container py-15 mx-auto px-4 max-w-[1330px]">
				<div className="py-7 flex flex-col gap-5 text-center">
					<h3 className="text-[30px] md:text-[54px] font-bold leading-[110%]">
						Гарантии на монтаж <br /> и материал
					</h3>

					<p className="md:text-[18px]">Мы отвечаем за качество своей работы</p>

					<div className="bg-[#F5F5F5] md:py-10 flex flex-col md:flex-row md:justify-between rounded-2xl px-4 py-5">
						<div className="w-full">
							<h4 className="text-[30px] md:text-[68px] font-semibold">
								{' '}
								2 года
							</h4>
							<span className="font-semibold">ГАРАНТИЯ НА МОНТАЖ</span>

							<p className="mt-4 text-[#999999] text-[14px] font-bold">
								Покрывает:
							</p>
							<div className="w-full flex mt-10 flex-row">
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
								</div>
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
								</div>
							</div>
							<p className="mt-4 text-[#999999] text-[14px] font-bold">
								Не Покрывает:
							</p>
							<div className="w-full flex mt-3 flex-row">
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col justify-center items-center">
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px]">(не рашатаются не отойдут)</p>
									</div>
								</div>
								<div className="flex w-full gap-4 flex-col">
									<div className="flex flex-col justify-center items-center">
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px]">(не рашатаются не отойдут)</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
							{' '}
							<h4 className="text-[30px] md:text-[68px] font-semibold">
								{' '}
								50 лет
							</h4>
							<span className="font-semibold">ГАРАНТИЯ НА МОНТАЖ</span>
							<p className="mt-4 text-[#999999] text-[14px] font-bold">
								Покрывает:
							</p>
							<div className="w-full flex mt-10 flex-row">
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
								</div>
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
									<div className="flex flex-col gap-3 justify-center items-center">
										<img src={'/galka.png'} />
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px] leading-0">
											(не рашатаются не отойдут)
										</p>
									</div>
								</div>
							</div>
							<p className="mt-4 text-[#999999] text-[14px] font-bold">
								Не Покрывает:
							</p>
							<div className="w-full flex mt-3 flex-row">
								<div className="flex w-full gap-6 flex-col">
									<div className="flex flex-col justify-center items-center">
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px]">(не рашатаются не отойдут)</p>
									</div>
								</div>
								<div className="flex w-full gap-4 flex-col">
									<div className="flex flex-col justify-center items-center">
										<span className="text-[14px] font-bold">Крепёж и узлы</span>
										<p className="text-[14px]">(не рашатаются не отойдут)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col py-7 md:flex-row gap-5">
					<div className="">
						<div className="">
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
								Что входит в гарантийное обслуживание:
							</h2>
						</div>

						<div className="mt-5 md:mt-15 flex flex-col gap-2 md:flex-row md:justify-between flex-wrap">
							<div className="bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5">
								<h3 className="text-base font-bold">Со 2 по 10 год:</h3>

								<ul className="list-disc text-[14px] flex flex-col gap-2 pl-4">
									<li>
										Выезд инженера: 5 000 руб. (засчитывается в стоимость
										ремонта)
									</li>
									<li>Ремонт по гарантии: бесплатно (материалы и работа)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
								</ul>
							</div>
							<div className="bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5">
								<h3 className="text-base font-bold">Со 2 по 10 год:</h3>

								<ul className="list-disc text-[14px] flex flex-col gap-2 pl-4">
									<li>
										Выезд инженера: 5 000 руб. (засчитывается в стоимость
										ремонта)
									</li>
									<li>Ремонт по гарантии: бесплатно (материалы и работа)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
								</ul>
							</div>
							<div className="bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5">
								<h3 className="text-base font-bold">Со 2 по 10 год:</h3>

								<ul className="list-disc text-[14px] flex flex-col gap-2 pl-4">
									<li>
										Выезд инженера: 5 000 руб. (засчитывается в стоимость
										ремонта)
									</li>
									<li>Ремонт по гарантии: бесплатно (материалы и работа)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
								</ul>
							</div>
							<div className="bg-[#F3F3F3] md:max-w-[417px] md:h-[221] flex flex-col gap-4 rounded-2xl p-5">
								<h3 className="text-base font-bold">Со 2 по 10 год:</h3>

								<ul className="list-disc text-[14px] flex flex-col gap-2 pl-4">
									<li>
										Выезд инженера: 5 000 руб. (засчитывается в стоимость
										ремонта)
									</li>
									<li>Ремонт по гарантии: бесплатно (материалы и работа)</li>
									<li>Ремонт не по гарантии: по прайсу (материалы + работа)</li>
								</ul>
							</div>
						</div>
					</div>

					<Image
						src="/installation/home.jpg"
						alt="home"
						width={426}
						height={630}
						className="hidden w-full max-w-[426px] md:block"
					/>
				</div>
			</section>
		</>
	)
}
