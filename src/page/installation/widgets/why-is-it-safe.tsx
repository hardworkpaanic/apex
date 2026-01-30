import Image from 'next/image'

export function WhyIsItSafe() {
	return (
		<>
			<section className="container mt-15 max-w-[1330px] mx-auto px-4">
				<div className="md:max-w-[500px]">
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
						Почему монтаж APEX — это безопасно
					</h2>
				</div>

				<div className="mt-5">
					<div className="border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-between w-full max-w-[315px] h-[310px]">
						<div className="w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center">
							1
						</div>

						<div className="">
							<p className="text-base font-semibold">
								Обученные и сертифицированные монтажники
							</p>
							<p className="text-[12px]">
								Все наши монтажники прошли обучение на производстве и знают
								каждый нюанс материала. Каждый специалист имеет сертификат APEX
								и опыт работы минимум 3 года. Монтажники владеют технологией
								сухого крепления, умеют работать с узлами любой сложности и
								знают, как достичь идеальной стыковки элементов.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="container mt-15 max-w-[1330px] mx-auto px-4">
				<div className="">
					<Image
						src="/installation/nodes.svg"
						alt="mini-logo"
						width={105}
						height={108}
						className=""
						unoptimized
					/>
					<h3 className="text-[22px] mt-5 font-bold">
						Узлы крепления и технические решения
					</h3>

					<p className="text-[14px] mt-2">
						Индивидуально спроектированные узлы для каждого элемента
					</p>

					<h3 className="text-base mt-5 font-bold">
						Для каждого проекта мы разрабатываем индивидуальные узлы крепления с
						учётом:
					</h3>

					<ul className="flex flex-col gap-3">
						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base leading-[150%]">
								Типа фасада (кирпич, газоблок, монолит, вентфасад)
							</p>
						</div>

						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base leading-[150%]">
								Толщины стены и её несущей способности
							</p>
						</div>

						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base leading-[150%]">
								Ветровой нагрузки в регионе (до 60 кг/м² по СНиП)
							</p>
						</div>

						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base leading-[150%]">
								Геометрии элементов декора (вес, размер, выступ)
							</p>
						</div>

						<div className="items-center mt-4 flex gap-2">
							<Image
								src={'/about-us/list-icon.png'}
								alt="check"
								width={22}
								height={22}
							/>
							<p className="text-base leading-[150%]">
								Требований к теплотехнике (исключаем мостики холода)
							</p>
						</div>
					</ul>
				</div>
			</section>
		</>
	)
}
