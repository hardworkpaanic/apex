import { Check } from 'lucide-react'
import Image from 'next/image'

export function Control() {
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
					Вы контролируете каждый этап проекта
				</h2>
			</div>

			<div className="w-full bg-[#EDEDED] rounded-2xl px-5 py-2.5 flex items-center justify-center text-[#3C3C3C] text-base italic text-center mt-5">
				Ежедневные фото-отчёты и прямая связь с вашим менеджером
			</div>

			<div className="w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3">
				<Check
					size={24}
					className="mt-1"
				/>
				<div className="">
					<span className="text-[14px] font-semibold">Не нужно звонить</span>
					<span>менеджер сам отправляет отчёты</span>
				</div>
			</div>

			<div className="w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3">
				<Check
					size={24}
					className="mt-1"
				/>
				<div className="">
					<span className="text-[14px] font-semibold">
						Нет неопределённости
					</span>
					<span>точные сроки и план работ</span>
				</div>
			</div>

			<div className="w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3">
				<Check
					size={24}
					className="mt-1"
				/>
				<div className="">
					<span className="text-[14px] font-semibold">Прозрачность</span>
					<span>фото-отчёты каждый день</span>
				</div>
			</div>

			<div className="w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3">
				<Check
					size={24}
					className="mt-1"
				/>
				<div className="">
					<span className="text-[14px] font-semibold">Архив</span>
					<span>все материалы сохранены</span>
				</div>
			</div>

			<div className="w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3">
				<Check
					size={24}
					className="mt-1"
				/>
				<div className="">
					<span className="text-[14px] font-semibold">Контроль</span>
					<span>всегда знаете, что происходит</span>
				</div>
			</div>

			<h6 className="text-[14px] text-center mt-5">
				Как вы контролируете процесс:
			</h6>

			<div className="flex flex-col mt-5 gap-5">
				<div className="h-[282px] w-full flex gap-5">
					<div className="flex w-full  flex-col items-center">
						<div className="w-[60px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center">
							1
						</div>

						<p className="text-center mt-4 font-semibold text-base">
							Ежедневные фото-отчёты:
						</p>
						<p className="text-center mt-2 text-[12px]">
							Фотографии с производства Фотографии с монтажа Отчёты от менеджера
							в WhatsApp/Telegram Все фото сохраняются в архив
						</p>
					</div>

					<div className="flex w-full flex-col items-center">
						<div className="w-[60px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center">
							2
						</div>

						<p className="text-center mt-4 font-semibold text-base">
							Прямая связь с менеджером:
						</p>
						<p className="text-center mt-2 text-[12px]">
							Ваш личный менеджер проекта на связи Ответ в течение 2 часов
							(пн-пт 9:00-20:00) WhatsApp, Telegram, телефон, email Уведомления
							о переходе на следующий этап
						</p>
					</div>
				</div>
				<div className="h-[282px] w-full flex gap-5">
					<div className="flex w-full  flex-col items-center">
						<div className="w-[60px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center">
							3
						</div>

						<p className="text-center mt-4 font-semibold text-base">
							Документы:
						</p>
						<p className="text-center mt-2 text-[12px]">
							Договор Проект раскладки Узлы крепления Спецификация Акты
							выполненных работ (по завершении) Гарантийные талоны
						</p>
					</div>

					<div className="flex w-full flex-col items-center">
						<div className="w-[60px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center">
							4
						</div>

						<p className="text-center mt-4 font-semibold text-base">
							График проекта:
						</p>
						<p className="text-center mt-2 text-[12px]">
							Точные даты начала и окончания каждого этапа Согласованный
							календарь работ Уведомления о важных событиях
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
