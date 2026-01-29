import { Button } from '@/shared/components'
import { Input } from '@/shared/components/ui/input'
import Image from 'next/image'

export function Certificates() {
	return (
		<section className=" bg-white rounded-3xl pt-10 relative bottom-10">
			<div className="container max-w-[1320px] mx-auto px-4">
				<h1 className="font-semibold text-[30px] md:text-[48px] max-w-[650px] leading-[110%]">
					Сертификаты качества и протоколы испытаний
				</h1>

				<p className="italic mt-2 md:text-base text-[14px] leading-[150%]">
					Соответствие ГОСТам, пожарная безопасность, экологичность
				</p>

				<div className="flex justify-between md:px-10 mt-10">
					<div className="flex items-center flex-col justify-center gap-4">
						<Image
							src={'/materials/cert.png'}
							alt="Сертификат"
							width={244}
							height={345}
							className="hidden md:block"
						/>
						<Image
							src={'/materials/certificate.jpg'}
							alt="Сертификат"
							width={59.693450927734375}
							height={88.31694793701172}
							className="block md:hidden"
						/>

						<span className="text-center md:text-[14px] text-[12px]">
							Пожарный сертификат
						</span>
					</div>

					<div className="flex items-center flex-col justify-center gap-4">
						<Image
							src={'/materials/cert2.png'}
							alt="Сертификат"
							width={244}
							height={345}
							className="hidden md:block"
						/>
						<Image
							src={'/materials/certificate.jpg'}
							alt="Сертификат"
							width={59.693450927734375}
							height={88.31694793701172}
							className="block md:hidden"
						/>

						<span className="text-center md:text-[14px] text-[12px]">
							Протокол испытаний материала
						</span>
					</div>

					<div className="flex items-center flex-col justify-center gap-4">
						<Image
							src={'/materials/cert3.png'}
							alt="Сертификат"
							width={244}
							height={345}
							className="hidden md:block"
						/>
						<Image
							src={'/materials/certificate.jpg'}
							alt="Сертификат"
							width={59.693450927734375}
							height={88.31694793701172}
							className="block md:hidden"
						/>

						<span className="text-center md:text-[14px] text-[12px]">
							Заключение о морозостойкости
						</span>
					</div>
				</div>

				<form className="bg-[#EDEDED] sm:gap-2 flex flex-col md:flex-row w-full md:mt-15 mt-5 rounded-3xl px-[20px] py-[30px]">
					<div className="">
						<h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
							Получите расчёт вашего проекта за 24 часа
						</h3>

						<p className="text-[14px] md:text-base leading-[150%] mt-2">
							Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
						</p>
					</div>

					<div className="flex flex-col mt-2 w-full max-w-[625px] gap-2">
						<Input
							className="border-b outline-none border-black rounded-0"
							placeholder="Ваше Имя"
						/>
						<Input
							className="border-b border-black rounded-0"
							placeholder="Телефон"
						/>

						<Button
							className="mt-2"
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
