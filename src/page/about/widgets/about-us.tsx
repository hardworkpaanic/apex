import Image from 'next/image'

export function AboutUs() {
	return (
		<section className="container max-w-[1320px] mt-15 md:mt-30 mx-auto px-4">
			<div className="flex flex-col md:flex-row md:justify-between">
				<div className="">
					<Image
						src="/mini-logo-gray.svg"
						alt="mini-logo"
						width={28}
						height={8}
						className=""
						unoptimized
					/>
					<h2 className="font-semibold text-[30px] md:text-[48px] leading-[110%]">
						О компании APEX
					</h2>

					<p className="hidden md:block text-base mt-3">
						Инженерная архитектура премиум-класса под ключ
					</p>
				</div>

				{/* TODO: Добавить сепараторы */}

				<div className="flex flex-col w-full md:max-w-[640px] md:mt-0 mt-5 gap-5">
					<p className="text-[#3C3C3C] text-[14px] md:text-base leading-[150%]">
						<span className="font-semibold">APEX</span> — российская компания
						полного цикла, специализирующаяся на производстве премиального
						фасадного декора из полимербетона. Мы объединяем архитектурное бюро,
						высокотехнологичное производство и сертифицированный монтаж в единую
						экосистему.
					</p>

					<p className="text-[#3C3C3C] text-[14px] md:text-base leading-[150%]">
						<span className="font-semibold">Наша миссия —</span> дать каждому
						владельцу дома возможность создать уникальный, статусный облик
						фасада, который будет передаваться следующим поколениям. Мы
						используем инновационные материалы, которые не уступают натуральному
						камню по красоте, но превосходят его по всем техническим
						характеристикам.
					</p>

					<p className="text-[#3C3C3C] text-[14px] md:text-base leading-[150%]">
						За время работы мы реализовали
						<span className="font-semibold">более 200 проектов</span> в Москве,
						Санкт-Петербурге и регионах России. Мы работаем с частными
						клиентами, архитекторами и застройщиками, предлагая комплексные
						решения 'под ключ'. Наша команда объединяет профессионалов с
						многолетним опытом в архитектуре, производстве и строительстве.
					</p>
				</div>
			</div>

			<Image
				src={'/about-us/about-us.jpg'}
				alt="О компании APEX"
				width={342.99871826171875}
				height={99.328125}
				className="w-full md:hidden h-auto mt-10"
			/>

			<Image
				src={'/about-us/about-us-desktop.jpg'}
				alt="О компании APEX"
				width={342.99871826171875}
				height={99.328125}
				className="w-full hidden md:block h-auto mt-15"
			/>

			<div className="flex flex-col w-full gap-10  md:py-15 md:flex-row md:justify-between">
				<div className="w-full md:max-w-[490px]">
					<p className="text-[#3C3C3C] italic mt-5 text-[16px] font-semibold leading-[150%]">
						Наша цель:
					</p>

					<p className="text-[#3C3C3C] italic md:mt-2 text-[14px] leading-[150%]">
						Стать эталоном качества и надёжности среди производителей
						премиального фасадного декора.Мы хотим, чтобы каждый клиент говорил:
					</p>

					<p className="text-base italic font-semibold leading-[150%]">
						«APEX — это гарантия того, что ваш дом будет выглядеть именно так,
						как вы мечтали, и простоит века.»
					</p>
				</div>

				<div className="w-full flex justify-end">
					<Image
						src={'/about-us/numbers.svg'}
						width={640.224609375}
						height={214}
						alt="numbers"
					/>
				</div>
			</div>

			{/* TODO: Сделать блок с цифрами */}

			<div className="w-full justify-center text-center items-center">
				<h2 className="font-semibold text-[22px] mt-10 md:text-[48px] md:font-bold leading-[110%] text-center">
					APEX в цифрах — факты, <br /> которым можно доверять
				</h2>
			</div>

			{/* TODO: Добавить блоки */}
			<div className="bg-[#F3F3F3] mt-5 flex flex-row rounded-3xl">
				<div className="w-full border-r-2 border-white">
					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>

					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>
				</div>

				<div className="w-full border-r-2 border-white">
					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>

					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>
				</div>

				<div className="w-full border-r-2 border-white">
					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>

					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">200+</span>
						<span className="text-center">Реализованных проектов</span>
					</div>
				</div>
				<div className="w-full">
					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">85%</span>
						<span className="text-center">Натуральный камень в составе</span>
					</div>

					<div className="flex justify-center flex-col border-b-2 border-white py-5 px-4 items-center gap-2">
						<span className="text-[22px] font-bold">85%</span>
						<span className="text-center">Натуральный камень в составе</span>
					</div>
				</div>
			</div>
		</section>
	)
}
