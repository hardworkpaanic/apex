import { Button } from '@/shared/components'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
	return (
		<>
			<section className="bg-[url('/about-us/hero-bg.jpg')] md:hidden text-white w-full h-168.25 bg-cover bg-center rounded-3xl flex flex-col">
				<div className="container max-w-[1320px] mx-auto px-4 py-12 flex-1 flex flex-col">
					<div className="space-y-4">
						<Image
							src={'/logo-white.svg'}
							width={94.46}
							height={28}
							alt="Logo"
							unoptimized
						/>

						<h1 className="font-semibold text-[30px] leading-[110%]">
							Превращаем архитектурные мечты в реальность
						</h1>

						<p className="italic mt-2 text-white/70 text-[14px] leading-[150%]">
							Полный цикл производства фасадного декора из полимербетона. От
							3D-визуализации до монтажа.
						</p>
						{/* TODO: Доделать ещё одну кнопку */}
						<div className="flex gap-2 flex-row md:justify-between mt-8">
							<Button variant={'secondary'}>
								Записаться на консультацию <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Desctop */}

			<section className="hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-[580px] bg-cover bg-center flex-col">
				<div className="container bg-[url('/about-us/hero-bg-desktop.jpg')] px-[60px] py-6.25 flex-1 flex flex-col bg-cover bg-center rounded-3xl justify-center">
					<div className="space-y-4 flex flex-col justify-between h-full py-[93px]">
						<div className="">
							<div>
								<Image
									src="/logo-white.svg"
									alt="logo"
									width={94.46}
									height={28}
									unoptimized
								/>
							</div>

							<h1 className="font-semibold max-w-[817px] text-[54px] leading-[110%]">
								Превращаем архитектурные мечты в реальность
							</h1>

							<p className="italic mt-2 text-white/70 text-[16px] leading-[150%]">
								Полный цикл производства фасадного декора из полимербетона.{' '}
								<br /> От 3D-визуализации до монтажа.
							</p>
						</div>

						<div className="flex gap-2 flex-row justify-between mt-8">
							<Button
								size={'lg'}
								variant={'secondary'}
							>
								Записаться на консультацию <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
