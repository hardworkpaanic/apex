import Image from 'next/image'

export function Stages() {
	return (
		<section className="container mt-15 max-w-[1330px] mx-auto px-4">
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
					5 этапов с прозрачными сроками
				</h2>

				<p className="mt-5 text-[14px] italic text-[#3C3C3C]">
					"Мы называем сроки в рабочих днях (пн–пт). Календарные сроки зависят
					от выходных и праздников. Итоговый график фиксируем в договоре.
				</p>
			</div>

			<div className="mt-5">
				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						1
					</div>

					<div className="">
						<p className="text-base font-semibold">
							Консультация и 3D-визуализация
						</p>
						<p className="text-base">5-10 рабочих дней</p>
					</div>
				</div>
			</div>

			<div className="bg-black mt-15 pb-35 text-white rounded-2xl px-6 py-5">
				<h3 className="text-[22px] font-semibold leading-[130%]">
					Вы контролируете каждый этап
				</h3>
				<ul className="flex mt-2 flex-col gap-2">
					<div className="items-center mt-4 flex gap-2">
						<Image
							src={'/about-us/list-icon.png'}
							alt="check"
							width={24}
							height={24}
						/>
						<p className="text-white/70 leading-[150%]">
							Ежедневные фото-отчёты с производства и монтажа
						</p>
					</div>

					<div className="items-center mt-4 flex gap-2">
						<Image
							src={'/about-us/list-icon.png'}
							alt="check"
							width={24}
							height={24}
						/>
						<p className="text-white/70 leading-[150%]">
							Прямая связь с менеджером проекта (WhatsApp/Telegram)
						</p>
					</div>

					<div className="items-center mt-4 flex gap-2">
						<Image
							src={'/about-us/list-icon.png'}
							alt="check"
							width={24}
							height={24}
						/>
						<p className="text-white/70 leading-[150%]">
							Уведомления о переходе на следующий этап
						</p>
					</div>
				</ul>
			</div>

			<div className="relative flex justify-center items-center w-full">
				<Image
					src="/HowWeWorks/phone.png"
					alt="phone"
					width={157.56097412109375}
					height={200}
					className="absolute bottom-[-80px]"
				/>
			</div>
		</section>
	)
}
