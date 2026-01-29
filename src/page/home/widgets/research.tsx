import { Button } from '@/shared/components'
import Image from 'next/image'

export function Research() {
	return (
		<section className="container max-w-[1320px] mt-15 md:mt-24 mx-auto px-4">
			<div className="flex flex-col md:flex-row md:items-start md:justify-between">
				<div className="">
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
						Наше исследование{' '}
					</h2>

					<p className="mt-5 text-[14px] md:text-[16px] leading-[150%] text-[#3C3C3C]">
						Экономика фасадного декора: полный расчёт стоимости владения
					</p>

					<Button
						size={'lg'}
						className="mt-10.5"
					>
						Скачать исследования
					</Button>
				</div>
				<Image
					src="/homepage/research.jpg"
					alt="research"
					width={342}
					height={170}
					className="w-full block md:hidden bg-contain bg-center mt-7.5"
				/>

				<Image
					src="/homepage/research-desctop.jpg"
					alt="research"
					width={624}
					height={307}
					className="hidden md:block bg-contain bg-center mt-7.5"
				/>
			</div>
		</section>
	)
}
