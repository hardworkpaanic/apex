import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle
} from '@/shared/components/ui/item'
import { GraduationCap, Landmark, Shield, Users, Warehouse } from 'lucide-react'
import Image from 'next/image'

export function Differences() {
	return (
		<section className="rounded-t-3xl md:mt-30 z-0 pt-10">
			<div className="container max-w-[1320px] mx-auto px-4">
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
					Что отличает нас от других?{' '}
				</h2>

				{/* TODO: Заменить иконки */}

				<Image
					src="/homepage/differences.jpg"
					alt="differences"
					width={343}
					height={156}
					className="mt-5 bg-contain md:hidden w-full bg-center"
				/>

				<div className="hidden md:flex flex-row gap-5 mt-[90px] justify-between">
					<Image
						src="/homepage/differences-desctop.jpg"
						alt="differences"
						width={315}
						height={500}
						className="bg-contain  bg-center"
					/>

					<div className="flex flex-col gap-5">
						<Item
							variant={'muted'}
							className="md:flex-col w-[315px] h-[240px] md:items-start justify-between p-4 rounded-3xl md:gap-25"
						>
							<ItemMedia>
								<Shield />
							</ItemMedia>
							<ItemContent className="">
								<ItemTitle className="text-[16px]">
									Фиксированная цена и сроки. Всё прописано в договоре — без
									доплат и “непредвиденных работ”
								</ItemTitle>
							</ItemContent>
						</Item>
						<Item
							variant={'muted'}
							className="md:flex-col w-[315px] h-[240px] md:items-start md:gap-20 p-4 rounded-3xl"
						>
							<ItemMedia>
								<Users />
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="text-[16px]">
									Личный менеджер и инженер проекта. Вы общаетесь с одним
									специалистом, а не с «колл-центром»
								</ItemTitle>
							</ItemContent>
						</Item>
					</div>

					<div className="flex flex-col gap-5">
						<Item
							variant={'muted'}
							className="md:flex-col w-[315px] h-[240px] md:items-start justify-between p-4 rounded-3xl md:gap-25"
						>
							<ItemMedia>
								<Landmark />
							</ItemMedia>
							<ItemContent className="">
								<ItemTitle className="text-[16px]">
									Фасад под ключ — от идеи до монтажа. Один подрядчик, полная
									ответственность и контроль.
								</ItemTitle>
							</ItemContent>
						</Item>
						<Item
							variant={'muted'}
							className="md:flex-col w-[315px] h-[240px] md:items-start md:gap-15 p-4 rounded-3xl"
						>
							<ItemMedia>
								<GraduationCap />
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="text-[16px]">
									Сертифицированные фасадные решения. Безопасность и
									долговечность подтверждены техническим свидетельством ФАУ
									«ФЦС»
								</ItemTitle>
							</ItemContent>
						</Item>
					</div>

					<div className="flex flex-col gap-5">
						<Image
							src="/homepage/home-desctop.svg"
							alt="home"
							width={315}
							height={240}
							className="bg-contain  bg-center"
						/>

						<Item
							variant={'muted'}
							className="md:flex-col w-[315px] h-[240px] md:items-start md:gap-20 p-4 rounded-3xl"
						>
							<ItemMedia>
								<Warehouse />{' '}
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="text-[16px]">
									Производство и монтаж под контролем одной команды. Без
									посредников и ошибок на стыке подрядчиков
								</ItemTitle>
							</ItemContent>
						</Item>
					</div>
				</div>

				<div className="flex text-[#3C3C3C] md:hidden flex-col gap-5 mt-5">
					<Item variant={'muted'}>
						<ItemMedia>
							<Shield />
						</ItemMedia>
						<ItemContent>
							<ItemDescription className="text-[#3C3C3C]">
								Фиксированная цена и сроки. Всё прописано в договоре — без
								доплат и “непредвиденных работ”
							</ItemDescription>
						</ItemContent>
					</Item>

					<Item variant={'muted'}>
						<ItemMedia>
							<Landmark />
						</ItemMedia>
						<ItemContent>
							<ItemDescription className="text-[#3C3C3C]">
								Фасад под ключ — от идеи до монтажа. Один подрядчик, полная
								ответственность и контроль.
							</ItemDescription>
						</ItemContent>
					</Item>

					<Image
						src={'/homepage/home.jpg'}
						alt="home"
						width={343}
						height={95}
						className="w-full bg-contain bg-center"
					/>

					<Item variant={'muted'}>
						<ItemMedia>
							<Users />
						</ItemMedia>
						<ItemContent>
							<ItemDescription className="text-[#3C3C3C]">
								Личный менеджер и инженер проекта. Вы общаетесь с одним
								специалистом, а не с «колл-центром»
							</ItemDescription>
						</ItemContent>
					</Item>

					<Item variant={'muted'}>
						<ItemMedia>
							<GraduationCap />{' '}
						</ItemMedia>
						<ItemContent>
							<ItemDescription className="text-[#3C3C3C]">
								Сертифицированные фасадные решения. Безопасность и долговечность
								подтверждены техническим свидетельством ФАУ «ФЦС»
							</ItemDescription>
						</ItemContent>
					</Item>

					<Item variant={'muted'}>
						<ItemMedia>
							<Warehouse />{' '}
						</ItemMedia>
						<ItemContent>
							<ItemDescription className="text-[#3C3C3C]">
								Производство и монтаж под контролем одной команды. Без
								посредников и ошибок на стыке подрядчиков
							</ItemDescription>
						</ItemContent>
					</Item>
				</div>
			</div>
		</section>
	)
}
