import { Badge } from '@/shared/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function QualityControlSystem() {
	return (
		<section className="mt-15 container mx-auto max-w-[1330px] px-4">
			<div className="md:max-w-[500px]">
				<div className="flex flex-col gap-2">
					<Image
						src="/blabla.svg"
						alt="blabla"
						width={80}
						height={41}
						className=""
						unoptimized
					/>
					<Image
						src="/mini-logo-gray.svg"
						alt="mini-logo"
						width={28}
						height={8}
						className="mt-5"
						unoptimized
					/>
				</div>
				<h2 className="font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]">
					Трёхуровневая система контроля качества
				</h2>

				<p className="mt-5 text-[14px] italic text-[#3C3C3C]">
					Проверяем каждый элемент на каждом этапе монтажа
				</p>
			</div>

			<div className="mt-5">
				<div className="border border-[#EDEDED] rounded-2xl p-5 flex flex-col justify-between w-full max-w-[315px] h-[310px]">
					<div className="flex items-center justify-between">
						<p className="text-base font-semibold">Бригадир (ежедневно)</p>

						<Badge>Уровень 1</Badge>
					</div>

					<div className="">
						<p className="text-[14px] font-semibold">Проверяет:</p>
						<div className="text-[14px]">
							<p>• Геометрия каждого элемента (лазерный уровень)</p>
							<p>• Качество стыковки (зазоры до 0,5 мм)</p>
							<p>• Прочность крепежа (проверка на подвижность)</p>
							<p>• Отсутствие сколов и повреждений</p>
							<p>• Соответствие проекту (по чертежам)</p>
						</div>
					</div>

					<div className="">
						<p className="text-[14px] flex items-center gap-1 font-semibold">
							Результае <ArrowUpRight size={16} />
						</p>
						<p className="text-[12px]">Фото-отчёт в конце дня → заказчику</p>
					</div>
				</div>
			</div>
		</section>
	)
}
