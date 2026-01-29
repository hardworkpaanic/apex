import Image from 'next/image'

export function Comparisons() {
	return (
		<section className="bg-[#F0F0F0] mt-15 rounded-t-3xl py-10">
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
				<h2 className="font-semibold mt-2 md:max-w-[762px] text-[30px] md:text-[48px] leading-[110%]">
					Почему полимербетон лучше других материалов?
				</h2>

				<p className="mt-5 text-[14px]  text-[#3C3C3C]">
					Сравнение ключевых характеристик с альтернативными решениями
				</p>

				<Image
					src={'materials/table.svg'}
					alt="table"
					width={1320}
					height={444}
					className="mt-5 w-full"
				/>

				<div className="flex items-center mt-10 gap-2">
					<Image
						src="/mini-logo-gray.svg"
						alt="mini-logo"
						width={28}
						height={8}
						className=""
						unoptimized
					/>
				</div>

				<div className="flex flex-col md:flex-row justify-between">
					<div className=" md:w-1/2">
						<h2 className="font-semibold mt-2 text-[30px] md:max-w-[550px] md:text-[48px] leading-[110%] ">
							Реальная экономия на дистанции
						</h2>

						<p className="mt-5 text-[14px] max-w-[389px] z-10 text-white bg-black rounded-3xl px-2 py-[3px]">
							Пример расчета: фасад дома 300 м² декора:
						</p>
						<div className="relative">
							<Image
								src={'/materials/mat.png'}
								alt="a"
								width={1021.7252197265625}
								height={869.2107543945312}
								className="absolute object-cover w-[1021px] h-[869px] top-[-150px] z-0 left-20"
							/>
						</div>
					</div>

					<div className="">
						<div className="flex flex-col md:flex-row gap-5">
							<div className="bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5">
								<div className="flex items-center gap-2">
									<h5 className="text-base font-bold">Полимербетон</h5>
									<Image
										src={'/logo.svg'}
										width={47.23044967651367}
										height={14}
										alt="Logo"
										unoptimized
									/>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">Стоимость:</span>
									<p>23 000 ₽/м² × 300 м² = 6 900 000 ₽</p>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Срок службы:
									</span>
									<p>50 лет</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Обслуживание:
									</span>
									<p>0 ₽ (не требуется)</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Итого за 25 лет:
									</span>
									<p>6 900 000 ₽</p>
								</div>
							</div>
							<div className="bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5">
								<div className="flex items-center gap-2">
									<h5 className="text-base font-bold">Полимербетон</h5>
									<Image
										src={'/logo.svg'}
										width={47.23044967651367}
										height={14}
										alt="Logo"
										unoptimized
									/>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">Стоимость:</span>
									<p>23 000 ₽/м² × 300 м² = 6 900 000 ₽</p>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Срок службы:
									</span>
									<p>50 лет</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Обслуживание:
									</span>
									<p>0 ₽ (не требуется)</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Итого за 25 лет:
									</span>
									<p>6 900 000 ₽</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5">
							<div className="bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5">
								<div className="flex items-center gap-2">
									<h5 className="text-base font-bold">Полимербетон</h5>
									<Image
										src={'/logo.svg'}
										width={47.23044967651367}
										height={14}
										alt="Logo"
										unoptimized
									/>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">Стоимость:</span>
									<p>23 000 ₽/м² × 300 м² = 6 900 000 ₽</p>
								</div>

								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Срок службы:
									</span>
									<p>50 лет</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Обслуживание:
									</span>
									<p>0 ₽ (не требуется)</p>
								</div>
								<div className="mt-2">
									<span className="text-[14px] font-semibold">
										Итого за 25 лет:
									</span>
									<p>6 900 000 ₽</p>
								</div>
							</div>
							<div className="bg-black text-white max-w-[315px] flex flex-col gap-[198px] w-full rounded-2xl mt-5 p-5">
								<div className="flex items-center gap-2">
									<h5 className="text-base font-bold">Экономия с </h5>
									<Image
										src={'/logo-white.svg'}
										width={47.23044967651367}
										height={14}
										alt="Logo"
										unoptimized
									/>
								</div>

								<div className="font-semibold text-[20px]">
									15 100 000 ₽ (68%)
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* TODO: Добавть картинку на задник */}
			</div>
		</section>
	)
}
