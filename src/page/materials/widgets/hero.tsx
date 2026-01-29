import { Button } from '@/shared/components'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
	return (
		<section className="container max-w-[1320px] mx-auto px-4">
			<Image
				src="/material.jpg"
				alt="material"
				width={343}
				height={213.83905029296875}
				className="bg-cover md:hidden w-full bg-center mt-10"
			/>

			<div className="flex flex-row md:items-center md:justify-between md:gap-15">
				<div className="mt-10">
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
					<h2 className="font-semibold mt-2 text-[30px] max-w-[650px] md:text-[48px] leading-[110%]">
						Полимербетон нового поколения
					</h2>

					<p className="mt-5 text-[14px] md:text-[16px] max-w-[480px] leading-[150%] text-[#3C3C3C]">
						85% натурального мрамора и доломита. Визуально идентичен камню. Но в
						7 раз легче и в 3 раза долговечнее.
					</p>

					<Button
						size={'lg'}
						className="mt-10.5"
					>
						Заказать образцы <ArrowUpRight />
					</Button>
				</div>

				<Image
					src="/materials/materials-desctop.png"
					alt="material"
					width={640}
					height={399}
					className="object-cover hidden md:block max-w-[640px] max-h-[400px] object-center mt-10"
				/>
			</div>
		</section>
	)
}
