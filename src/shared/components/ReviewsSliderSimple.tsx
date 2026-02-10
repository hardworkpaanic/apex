'use client'

import { Star } from 'lucide-react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const reviews = [
	{
		id: 1,
		rating: 5,
		name: 'Иван Петрович К.',
		position: 'Владелец дома, Рублёвка',
		text: 'Работали с APEX над фасадом нашего дома в Подмосковье. Очень довольны результатом. Особенно порадовала прозрачность процесса — каждый день получали фото с объекта. Сроки выдержали точно.'
	},
	{
		id: 2,
		rating: 5,
		name: 'Мария Сергеевна Л.',
		position: 'Владелец квартиры, Москва',
		text: 'Отличная работа! Качество материалов и профессиональный подход команды впечатляют. Все сделали вовремя, даже чуть раньше срока. Рекомендую!'
	},
	{
		id: 3,
		rating: 4,
		name: 'Алексей Владимирович П.',
		position: 'Директор компании',
		text: 'Сотрудничали по отделке офиса. Все прошло гладко, команда работала аккуратно, убирали за собой. Есть небольшие замечания, но в целом доволен.'
	},
	{
		id: 4,
		rating: 5,
		name: 'Елена Дмитриевна С.',
		position: 'Владелец ресторана',
		text: 'Делали ремонт в ресторане. Очень ответственный подход, учли все нюансы общественного заведения. Клиенты отмечают красивый дизайн.'
	},
	{
		id: 5,
		rating: 5,
		name: 'Дмитрий Игоревич М.',
		position: 'Владелец коттеджа, Барвиха',
		text: 'Полный цикл работ по отделке дома. От проекта до реализации. Профессионалы своего дела. Цена/качество соответствуют.'
	},
	{
		id: 6,
		rating: 5,
		name: 'Ольга Викторовна Т.',
		position: 'Владелец салона красоты',
		text: 'Быстро и качественно сделали ремонт в салоне. Уложились в сроки и бюджет. Особенно понравился индивидуальный подход к планировке.'
	}
]

export function ReviewsSliderSimple() {
	return (
		<div className="w-full">
			<Swiper
				spaceBetween={20}
				slidesPerView={1.1}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				}}
				className="w-full"
			>
				{reviews.map(review => (
					<SwiperSlide key={review.id}>
						<div className="bg-[#171717] px-7 py-8 flex flex-col mt-5 gap-5 rounded-2xl">
							<div className="flex flex-col md:flex-row-reverse md:items-start md:justify-between md:w-full">
								<span className="flex items-center gap-1 text-[20px] font-bold">
									5 <Star size={18} />
								</span>
								<div className="flex flex-col">
									<span className="text-[20px] font-bold">
										Иван Петрович К.
									</span>
									<p className="text-[14px] italic">Владелец дома, Рублёвка</p>
								</div>
							</div>

							<p className="text-[14px] leading-[150%] text-[#B9B9B9]">
								Работали с APEX над фасадом нашего дома в Подмосковье. Очень
								довольны результатом. Особенно порадовала прозрачность процесса
								— каждый день получали фото с объекта. Сроки выдержали точно.
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
