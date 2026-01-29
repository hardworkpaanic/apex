import { Separator } from '@/shared/components/ui/separator'
import Image from 'next/image'

export function Materials() {
	return (
		<section className="container max-w-[1320px] mt-12.5 mx-auto px-4 flex  flex-col">
			<div className="flex gap-5 md:gap-20 flex-col md:flex-row">
				<Image
					src="/material.jpg"
					alt="material"
					width={343}
					height={213.83905029296875}
					className="bg-cover md:hidden w-full bg-center"
				/>

				<Image
					src="/material-desctop.jpg"
					alt="material"
					width={343}
					height={213.83905029296875}
					className="bg-cover hidden md:block w-full bg-center"
				/>

				<div className="flex flex-col justify-center gap-5">
					<div className="flex items-center gap-2">
						<Image
							src="/mini-logo-gray.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className=""
							unoptimized
						/>

						<span className="text-[15px] font-light text-[#7A7A7A] italic">
							материалы
						</span>
					</div>
					<h2 className="font-semibold text-[30px] md:text-[42px] md:max-w-[520px] leading-[110%]">
						Полимербетон нового поколения
					</h2>

					<blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%]  pl-6 italic">
						Визуально неотличим от итальянского мрамора. Но в 5 раз легче и в 3
						раза долговечнее
					</blockquote>

					<span className="text-base font-semibold md:text-[16px] text-black mt-3">
						Состав:
					</span>

					{/* TODO: Вынести #7A7A7A как отдельный цвет */}
					<p className="text-[14px] md:text-[16px] leading-[150%] text-[#7A7A7A]">
						85% молотый мрамор и доломит, 10% полиэфирная смола, 5% итальянские
						пигменты. Толщина элементов всего 10 мм, морозостойкость 200+
						циклов. Не требует усиления фундамента — в 7 раз легче натурального
						камня.
					</p>

					{/* TODO: Исправить Баг  */}
					<div className="flex sm:hidden gap-5 flex-col">
						<div className="flex gap-21.5 items-center">
							<div className="flex justify-center flex-col items-center gap-3">
								<Image
									src="/homepage/rock.svg"
									alt="rock"
									width={48}
									height={48}
								/>

								<Separator className="h-0.5! w-6.5!" />

								<span className="text-[12px] leading-[140%] text-[#3C3C3C]">
									85% натуральный камень
								</span>
							</div>
							<div className="flex justify-center flex-col items-center gap-3">
								<Image
									src="/homepage/kilogramm.svg"
									alt="kilogramm"
									width={48}
									height={48}
								/>

								<Separator className="h-0.5! w-6.5!" />

								<span className="text-[12px] leading-[140%] text-[#3C3C3C]">
									17 кг/м² вес элемента
								</span>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<div className="flex justify-center flex-col items-center gap-3">
								<Image
									src="/homepage/snow.svg"
									alt="snow"
									width={48}
									height={48}
								/>

								<Separator className="h-0.5! w-6.5!" />

								<span className="text-[12px] leading-[140%] text-[#3C3C3C]">
									200+ циклов морозостойкости
								</span>
							</div>{' '}
							<div className="flex justify-center flex-col items-center gap-3">
								<Image
									src="/homepage/time.svg"
									alt="time"
									width={48}
									height={48}
								/>

								<Separator className="h-0.5! w-6.5!" />

								<span className="text-[12px] leading-[140%] text-[#3C3C3C]">
									Срок эксплутации не ограничен{' '}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full mt-20 hidden md:flex justify-between">
				<div className="flex justify-center flex-col items-center gap-3">
					<Image
						src="/homepage/rock.svg"
						alt="rock"
						width={48}
						height={48}
					/>

					<Separator className="h-0.5! w-6.5!" />

					<span className="text-[12px] md:text-base leading-[140%] text-[#3C3C3C]">
						85% натуральный камень
					</span>
				</div>

				<div className="flex justify-center flex-col items-center gap-3">
					<Image
						src="/homepage/kilogramm.svg"
						alt="kilogramm"
						width={48}
						height={48}
					/>

					<Separator className="h-0.5! w-6.5!" />

					<span className="text-[12px] md:text-base leading-[140%] text-[#3C3C3C]">
						17 кг/м² вес элемента
					</span>
				</div>

				<div className="flex justify-center flex-col items-center gap-3">
					<Image
						src="/homepage/snow.svg"
						alt="snow"
						width={48}
						height={48}
					/>

					<Separator className="h-0.5! w-6.5!" />

					<span className="text-[12px] md:text-base leading-[140%] text-[#3C3C3C]">
						200+ циклов морозостойкости
					</span>
				</div>

				<div className="flex justify-center flex-col items-center gap-3">
					<Image
						src="/homepage/time.svg"
						alt="time"
						width={48}
						height={48}
					/>

					<Separator className="h-0.5! w-6.5!" />

					<span className="text-[12px] md:text-base leading-[140%] text-[#3C3C3C]">
						Срок эксплутации не ограничен{' '}
					</span>
				</div>
			</div>
		</section>
	)
}
