import { Separator } from '@/shared/components/ui/separator'
import Image from 'next/image'

export function Stages() {
	return (
		<section className="container mt-15 md:mt-30 max-w-[1330px] mx-auto px-4">
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
				<h2 className="font-bold mt-2 text-[30px] md:text-[54px] leading-[110%]">
					5 этапов с прозрачными сроками
				</h2>

				<p className="mt-5 text-[14px] md:hidden italic text-[#3C3C3C]">
					"Мы называем сроки в рабочих днях (пн–пт). Календарные сроки зависят
					от выходных и праздников. Итоговый график фиксируем в договоре.
				</p>
			</div>

			<div className="mt-5 md:mt-15 flex flex-col flex-wrap md:flex-row gap-2">
				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						1
					</div>

					<div className="flex flex-col md:gap-2">
						<p className="text-base font-semibold">
							Консультация и 3D-визуализация
						</p>
						<p className="text-base">5-10 рабочих дней</p>
					</div>
				</div>

				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						2
					</div>

					<div className="flex flex-col md:gap-2">
						<p className="text-base font-semibold">Проектирование</p>
						<p className="text-base">
							от 20 до 50 рабочих дней (зависит от объёма и <br /> сложности)
						</p>
					</div>
				</div>

				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						3
					</div>

					<div className="flex flex-col md:gap-2">
						<p className="text-base font-semibold">Производство</p>
						<p className="text-base">7–20 дней</p>
					</div>
				</div>

				<div className="w-[280px]"></div>
				<div className="w-[638px] h-[253px] flex items-end">
					<p className="text-[14px] italic">
						"Мы называем сроки в рабочих днях (пн–пт). Календарные сроки зависят
						от выходных и праздников. Итоговый график фиксируем в договоре.
					</p>
				</div>

				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						4
					</div>

					<div className="flex flex-col md:gap-2">
						<p className="text-base font-semibold">Монтаж</p>
						<p className="text-base">
							20-45 рабочих дней (зависит от объёма и сложности)
						</p>
					</div>
				</div>

				<div className="bg-[#F3F3F3] border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]">
					<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
						5
					</div>

					<div className="flex flex-col md:gap-2">
						<p className="text-base font-semibold">
							Контроль качества и сдача проекта
						</p>
						<p className="text-base">1 день</p>
					</div>
				</div>
			</div>

			<div className="bg-black md:relative md:h-[283px] mt-15 md:mt-30 pb-35 md:pb-[59px] text-white rounded-2xl md:px-[50px] py-[59px] px-6 py-5">
				<h3 className="text-[22px] md:text-[28px] font-semibold leading-[130%]">
					Вы контролируете каждый этап
				</h3>
				<ul className="flex mt-2 flex-col">
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

				<Image
					src="/HowWeWorks/phone-desctop.png"
					alt="phone"
					width={312}
					height={396}
					className="absolute right-50 bottom-[-80px]"
				/>
			</div>

			<div className="relative flex justify-center items-center w-full">
				<Image
					src="/HowWeWorks/phone.png"
					alt="phone"
					width={157.56097412109375}
					height={200}
					className="absolute md:hidden bottom-[-80px]"
				/>
			</div>

			<Separator className="bg-[#EFEFEF] mt-40" />
		</section>
	)
}
