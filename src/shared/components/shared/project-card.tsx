import { cn } from '@/shared/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'

type ButtonVariant =
	| 'link'
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'

export function ProjectCard({
	className,
	buttonVariant
}: {
	className?: string
	buttonVariant?: ButtonVariant
}) {
	return (
		<div
			className={`w-full border border-[#707070] px-4 py-5 rounded-2xl ${className}`}
		>
			<Link
				className=""
				href={'/projects/project1'}
			>
				<Image
					src={'/blog.jpg'}
					alt=""
					width={311}
					height={183}
					className="object-cover object-center w-full md:h-[440px] rounded-2xl"
				/>
				<div className="flex flex-col md:flex-row">
					<div className="flex w-full flex-col gap-3">
						<h4 className="text-base md:text-[22px] mt-5 font-bold">
							Особняк в неоклассике, Рублёвка
						</h4>

						<span className="text-[14px] font-bold">
							Характеристики монтажа:{' '}
						</span>

						<div className="flex flex-col md:flex-row md:gap-10">
							<ul className="list-disc pl-4">
								<li>47 элементов декора (колонны, карнизы, пилястры)</li>
								<li>Площадь фасада: 280 м²</li>
								<li>Высота: до 12 метров (3 этажа)</li>
							</ul>

							<ul className="list-disc mt-2 md:mt-0 pl-4">
								<li>Срок монтажа: 12 рабочих дней</li>
								<li>Бригада: 4 человека + альпинист</li>
								<li>Сложность: высокая (точная стыковка колонн)</li>
							</ul>
						</div>
					</div>

					<Button
						size={'lg'}
						variant={buttonVariant || 'default'}
						className={cn('w-48.5 mt-5')}
					>
						Смотреть кейс <ArrowUpRight />
					</Button>
				</div>
			</Link>
		</div>
	)
}
