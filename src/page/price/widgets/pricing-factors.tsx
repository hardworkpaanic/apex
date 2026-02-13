import { Flame } from 'lucide-react'
import Image from 'next/image'

export function PricingFactors() {
	return (
		<section className='mt-15 md:mt-30'>
			<div className='container max-w-[1320px] mx-auto px-4'>
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
					Что влияет на стоимость проекта
				</h2>

				<p className='mt-5 text-[14px] md:text-base italic text-[#3C3C3C]'>
					5 ключевых факторов, формирующих итоговую цену
				</p>

				{/* TODO: Заменить иконку */}

				<div className='flex flex-col md:flex-row md:justify-between md:flex-wrap'>
					<div className='bg-linear-to-r md:hidden w-full h-full md:max-w-[315px] md:h-[253px] from-[#444444]/99 to-[#000000] p-5 flex flex-col justify-between text-white rounded-2xl mt-5'>
						<Flame />
						<p className='text-[14px] '>
							Мы работаем по принципу фиксированной стоимости: все факторы
							учитываются на этапе проектирования и закрепляются в договоре.
							Никаких доплат и скрытых расходов в процессе реализации.
						</p>
					</div>

					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-5 rounded-3xl p-7.5'>
						<div className=''>
							<span className='text-base font-semibold leading-[150%]'>
								СЛОЖНОСТЬ КОЛИЧЕСТВО ИНДИВИДУАЛЬ-ЭЛЕМЕНТОВ
							</span>

							<p className='text-base text-[#3C3C3C] mt-2'>
								Простые типовые элементы дешевле. Уникальные формы требуют
								индивидуальных форм.
							</p>
						</div>

						<p className='font-bold text-base mt-3'>+0–30%</p>
					</div>
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-5 rounded-3xl p-7.5'>
						<div className=''>
							<span className='text-base font-semibold leading-[150%]'>
								КОЛИЧЕСТВО И РАЗМЕР
							</span>

							<p className='text-base text-[#3C3C3C] mt-2'>
								Чем больше площадь фасада и элементов, тем выше стоимость. Но
								цена за м² снижается.
							</p>
						</div>

						<p className='font-bold text-base mt-3'>{'−5–15% при > 200 м²'}</p>
					</div>

					<div className='bg-linear-to-r hidden w-full h-full md:max-w-[640px] md:h-[253px] from-[#444444]/99 to-[#000000] p-5 md:flex flex-col justify-between text-white rounded-2xl mt-5'>
						<Flame />
						<p className='text-[14px] '>
							Мы работаем по принципу фиксированной стоимости: все факторы
							учитываются на этапе проектирования и закрепляются в договоре.
							Никаких доплат и скрытых расходов в процессе реализации.
						</p>
					</div>
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl'>
						<img src={'/price/bgww.png'} />
					</div>
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl p-7.5'>
						<div className=''>
							<span className='text-base font-semibold leading-[150%]'>
								ИНДИВИДУАЛЬНОСТЬ
							</span>

							<p className='text-base text-[#3C3C3C] mt-2'>
								Типовые элементы дешевле. Авторские формы требуют разработки и
								изготовления уникальных матриц.
							</p>
						</div>

						<p className='font-bold text-base mt-3'>{'+15–40%'}</p>
					</div>
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl p-7.5'>
						<div className=''>
							<span className='text-base font-semibold leading-[150%]'>
								РЕГИОН И ЛОГИСТИКА
							</span>

							<p className='text-base text-[#3C3C3C] mt-2'>
								Москва и СПб — базовая стоимость. Удалённые регионы требуют
								дополнительной логистики.
							</p>
						</div>

						<p className='font-bold text-base mt-3'>{'+10–25%'}</p>
					</div>
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl p-7.5'>
						<div className=''>
							<span className='text-base font-semibold leading-[150%]'>
								СРОЧНОСТЬ РЕАЛИЗАЦИИ
							</span>

							<p className='text-base text-[#3C3C3C] mt-2'>
								Стандартные сроки — базовая цена. Ускоренное производство
								требует приоритета и дополнительных ресурсов.
							</p>
						</div>

						<p className='font-bold text-base mt-3'>{'+15–20%'}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
