import { Checkbox } from '@/shared/components/ui/checkbox'
import Image from 'next/image'

export function Ecosystem() {
	return (
		<section className="w-full z-10 bg-black mt-15 text-white rounded-t-3xl pt-15 md:pt-30">
			<div className="container max-w-[1320px] flex flex-col md:flex-row md:justify-between gap-5 mx-auto px-4">
				<div className="max-w-[538px]">
					<h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
						Собственная экосистема — от идеи до фасада за 5 этапов
					</h2>

					<p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
						Вместо «конвейера» с разрозненными исполнителями у нас команда, где
						дизайнер, проектировщик и монтажник работают вместе с первого дня.
						Так рождается фасад, в котором продумана каждая деталь, исключены
						ошибки на стыках и заранее учтены все нюансы монтажа. Это подход,
						который экономит время, нервы и делает результат безупречным.
					</p>

					<div className="flex items-start md:hidden mt-2 gap-2">
						<Image
							src="/mini-logo-black.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className="mt-2"
							unoptimized
						/>

						<span className="text-[15px] font-light text-[#7A7A7A] italic">
							С контролем на каждом этапе и гарантированными сроками
						</span>
					</div>

					<Image
						src="/apex-flag.png"
						alt="apex-flag"
						width={519}
						height={387}
						className="mt-2 relative hidden md:block left-[-100px] top-[50px] z-[1] rotate-[-4deg]"
					/>
				</div>
				{/* TODO: Завтра доделать список */}
				<div className="w-full max-w-[700px]">
					<span className="bg-[#171717] hidden md:block max-w-[563px] md:flex items-center gap-3 text-base py-5 px-6 rounded-3xl">
						<Checkbox checked />С контролем на каждом этапе и гарантированными
						сроками
					</span>

					{/* тут */}
					<div className="hidden md:flex flex-row justify-between px-5 pt-10">
						<div className="flex flex-col gap-7.5">
							<div className="flex flex-row items-start gap-3">
								<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

								<div className="flex flex-col gap-2">
									<Image
										src="/homepage/eco/item1.jpg"
										alt=""
										width={92}
										height={92}
										className="w-[92px] h-[92px] rounded-xl"
									/>

									<h4 className="text-base font-semibold">
										Выскоточное лазерное сканирование
									</h4>
									<p className="text-[15px] text-p#7A7A7A] ">
										фасада от 3 до 7 раб. дней
									</p>
								</div>
							</div>
							<div className="flex flex-row items-start gap-3">
								<span className="text-[15px] text-[#7A7A7A] italic">(03)</span>

								<div className="flex flex-col gap-2">
									<Image
										src="/homepage/eco/item3.jpg"
										alt=""
										width={92}
										height={92}
										className="w-[92px] h-[92px] rounded-xl"
									/>

									<h4 className="text-base font-semibold">Проектирование</h4>
									<p className="text-[15px] text-p#7A7A7A] ">
										от 7 до 20 раб. дней
									</p>
								</div>
							</div>
							<div className="flex flex-row items-start gap-3">
								<span className="text-[15px] text-[#7A7A7A] italic">(05)</span>

								<div className="flex flex-col gap-2">
									<Image
										src="/homepage/eco/item5.jpg"
										alt=""
										width={92}
										height={92}
										className="w-[92px] h-[92px] rounded-xl"
									/>

									<h4 className="text-base font-semibold">Монтаж</h4>
									<p className="text-[15px] text-p#7A7A7A] ">
										от 20 до 45 раб. дней
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-7.5">
							<div className="flex flex-row items-start gap-3">
								<span className="text-[15px] text-[#7A7A7A] italic">(02)</span>

								<div className="flex flex-col gap-2">
									<Image
										src="/homepage/eco/item2.jpg"
										alt=""
										width={92}
										height={92}
										className="w-[92px] h-[92px] rounded-xl"
									/>

									<h4 className="text-base font-semibold">
										Разработка дизайна/ 3D визуализация
									</h4>
									<p className="text-[15px] text-p#7A7A7A] ">
										от 5 до 10 раб. дней
									</p>
								</div>
							</div>
							<div className="flex flex-row items-start gap-3">
								<span className="text-[15px] text-[#7A7A7A] italic">(04)</span>

								<div className="flex flex-col gap-2">
									<Image
										src="/homepage/eco/item4.jpg"
										alt=""
										width={92}
										height={92}
										className="w-[92px] h-[92px] rounded-xl"
									/>

									<h4 className="text-base font-semibold">Производство</h4>
									<p className="text-[15px] text-p#7A7A7A] ">
										от 20 до 50 раб. дней
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* тут2 */}

					{/* mpbile */}

					<div className="flex md:hidden flex-col gap-5">
						<div className="flex flex-row items-start gap-3">
							<span className="text-[15px] text-[#7A7A7A] italic">(01)</span>

							<div className="flex flex-row gap-2">
								<Image
									src="/homepage/eco/item1.jpg"
									alt=""
									width={62}
									height={62}
									className="w-[62px] h-[62px] rounded-xl"
								/>

								<div className="">
									<h4 className="text-[14px] font-semibold">
										Выскоточное лазерное сканирование
									</h4>
									<p className="text-[14px] text-p#7A7A7A] ">
										фасада от 3 до 7 раб. дней
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row items-start gap-3">
							<span className="text-[15px] text-[#7A7A7A] italic">(02)</span>

							<div className="flex flex-row gap-2">
								<Image
									src="/homepage/eco/item2.jpg"
									alt=""
									width={62}
									height={62}
									className="w-[62px] h-[62px] rounded-xl"
								/>

								<div className="">
									<h4 className="text-[14px] font-semibold">
										Разработка дизайна/ 3D визуализация
									</h4>
									<p className="text-[14px] text-p#7A7A7A] ">
										от 5 до 10 раб. дней
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row items-start gap-3">
							<span className="text-[15px] text-[#7A7A7A] italic">(03)</span>

							<div className="flex flex-row gap-2">
								<Image
									src="/homepage/eco/item3.jpg"
									alt=""
									width={62}
									height={62}
									className="w-[62px] h-[62px] rounded-xl"
								/>

								<div className="">
									<h4 className="text-[14px] font-semibold">Проектирование</h4>
									<p className="text-[14px] text-p#7A7A7A] ">
										от 7 до 20 раб. дней
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row items-start gap-3">
							<span className="text-[15px] text-[#7A7A7A] italic">(04)</span>

							<div className="flex flex-row gap-2">
								<Image
									src="/homepage/eco/item4.jpg"
									alt=""
									width={62}
									height={62}
									className="w-[62px] h-[62px] rounded-xl"
								/>

								<div className="">
									<h4 className="text-[14px] font-semibold">Производство</h4>
									<p className="text-[14px] text-p#7A7A7A] ">
										от 20 до 50 раб. дней
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row items-start gap-3">
							<span className="text-[15px] text-[#7A7A7A] italic">(05)</span>

							<div className="flex flex-row gap-2">
								<Image
									src="/homepage/eco/item5.jpg"
									alt=""
									width={62}
									height={62}
									className="w-[62px] h-[62px] rounded-xl"
								/>

								<div className="">
									<h4 className="text-[14px] font-semibold">Монтаж</h4>
									<p className="text-[14px] text-p#7A7A7A] ">
										от 20 до 45 раб. дней
									</p>
								</div>
							</div>
						</div>
					</div>

					<Image
						src="/homepage/eco/flag.png"
						alt="flag"
						width={281.88591832614395}
						height={225.52248588127844}
						className="mt-5 block md:hidden"
					/>
				</div>
			</div>
		</section>
	)
}
