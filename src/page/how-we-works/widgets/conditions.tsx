import { Button } from '@/shared/components'
import { Input } from '@/shared/components/ui/input'
import Image from 'next/image'

export function Conditions() {
	return (
		<section className="bg-black text-white rounded-t-3xl md:py-30 py-15">
			<div className="container max-w-[1330px] mx-auto px-4">
				<div className="">
					<div className="flex flex-col md:flex-row md:justify-between">
						<div className="md:max-w-[762px]">
							<div className="flex items-center gap-2">
								<Image
									src="/mini-logo-black.svg"
									alt="mini-logo"
									width={28}
									height={8}
									className=""
									unoptimized
								/>
							</div>
							<h2 className="font-semibold mt-2 text-[30px] md:font-bold md:text-[48px] leading-[110%]">
								Один менеджер ведёт ваш проект от начала до конца
							</h2>

							<p className="mt-5 text-[14px] md:text-[20px] ">
								Не нужно объяснять ситуацию каждый раз новому человеку
							</p>
						</div>

						<div className="md:max-w-[427px]">
							<p className="mt-5 text-[14px] ">
								"В отличие от большинства компаний, где вас передают из отдела в
								отдел, у нас вас ведёт **один менеджер-руководитель проекта** от
								первого звонка до сдачи объекта.
							</p>

							<p className="mt-5 text-[14px] ">
								Он знает все детали вашего проекта, ваши пожелания, особенности
								объекта. Он — ваша единая точка контакта с компанией."
							</p>
						</div>
					</div>

					<Image
						src={'/HowWeWorks/conditions.png'}
						alt="Conditions"
						width={343.0013732910156}
						height={99.7001953125}
						className="w-full md:hidden object-cover mt-5 object-center"
					/>
					<Image
						src={'/HowWeWorks/conditions-desctop.png'}
						alt="Conditions"
						width={343.0013732910156}
						height={99.7001953125}
						className="w-full md:block hidden object-cover mt-20 object-center"
					/>
				</div>

				<div className="mt-15 md:mt-30">
					<div className="">
						{' '}
						<div className="flex items-center gap-2">
							<Image
								src="/mini-logo-black.svg"
								alt="mini-logo"
								width={28}
								height={8}
								className=""
								unoptimized
							/>
						</div>
						<h2 className="font-semibold md:font-bold max-w-[650px] mt-2 text-[30px] md:text-[48px] leading-[110%]">
							Что делает менеджер проекта?
						</h2>
						<p className="mt-5 md:hidden text-[14px]  ">
							Технология сухого крепления не зависит от температуры
						</p>
						<p className="mt-5 md:hidden text-[14px] leading-[150%] italic text-[#B9B9B9]">
							Большинство конкурентов монтируют декор на клей или раствор — это
							невозможно при отрицательных температурах. Мы используем
							запатентованную систему механического крепления: элементы
							фиксируются на металлокаркасе из нержавеющей стали без клея и
							раствора.
						</p>
					</div>

					<div className="mt-5 md:mt-15 flex flex-col md:flex-row md:justify-between md:flex-wrap">
						<div className="border border-[#E5E5E54D] md:max-w-[315px] max-w-[345px] h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-base">
								На этапе консультации
							</span>

							<ul className="flex flex-col gap-2">
								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Выезжает на объект (если нужно)
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Обсуждает ваши пожелания
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Формирует техническое задание
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Рассчитывает стоимость и сроки
									</p>
								</div>

								<div className="items-center  flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">Готовит договор</p>
								</div>
							</ul>
						</div>
						<div className="border border-[#E5E5E54D] md:max-w-[315px] max-w-[345px] h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-base">
								На этапе консультации
							</span>

							<ul className="flex flex-col gap-2">
								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Выезжает на объект (если нужно)
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Обсуждает ваши пожелания
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Формирует техническое задание
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Рассчитывает стоимость и сроки
									</p>
								</div>

								<div className="items-center  flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">Готовит договор</p>
								</div>
							</ul>
						</div>

						<div className="border border-[#E5E5E54D] md:max-w-[315px] max-w-[345px] h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-base">
								На этапе консультации
							</span>

							<ul className="flex flex-col gap-2">
								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Выезжает на объект (если нужно)
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Обсуждает ваши пожелания
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Формирует техническое задание
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Рассчитывает стоимость и сроки
									</p>
								</div>

								<div className="items-center  flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">Готовит договор</p>
								</div>
							</ul>
						</div>
						<div className="border border-[#E5E5E54D] md:max-w-[315px] max-w-[345px] h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-base">
								На этапе консультации
							</span>

							<ul className="flex flex-col gap-2">
								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Выезжает на объект (если нужно)
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Обсуждает ваши пожелания
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Формирует техническое задание
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Рассчитывает стоимость и сроки
									</p>
								</div>

								<div className="items-center  flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">Готовит договор</p>
								</div>
							</ul>
						</div>
						<div className="max-w-[315px] bg-linear-to-r from-[#5A5C69] to-[#20232C]   h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-[20px]">
								Как связаться с менеджером:
							</span>

							<ul>
								<li className="text-[14px]">- Телефон (прямой мобильный)</li>

								<li className="text-[14px]">- WhatsApp / Telegram)</li>

								<li className="text-[14px]">- Email</li>

								<li className="text-[14px]">
									- Время ответа: в течение 2 часов (пн-пт 9:00-20:00)
								</li>
							</ul>
						</div>
						<div className="max-w-[315px] w-full"></div>
						<div className="border border-[#E5E5E54D] md:max-w-[315px] max-w-[345px] h-[280px] flex flex-col justify-between rounded-3xl p-7">
							<span className="font-semibold text-base">
								На этапе консультации
							</span>

							<ul className="flex flex-col gap-2">
								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Выезжает на объект (если нужно)
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Обсуждает ваши пожелания
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Формирует техническое задание
									</p>
								</div>

								<div className="items-center flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">
										Рассчитывает стоимость и сроки
									</p>
								</div>

								<div className="items-center  flex gap-2">
									<Image
										src={'/about-us/list-icon.png'}
										alt="check"
										width={18}
										height={18}
									/>
									<p className="text-[14px] leading-[150%]">Готовит договор</p>
								</div>
							</ul>
						</div>
						<div className="max-w-[315px] w-full"></div>
					</div>
				</div>

				<div className="mt-15 md:mt-30 flex flex-col md:flex-row md:justify-between">
					{' '}
					<div className="md:max-w-[762px]">
						<div className="flex items-center gap-2">
							<Image
								src="/mini-logo-black.svg"
								alt="mini-logo"
								width={28}
								height={8}
								className=""
								unoptimized
							/>
						</div>
						<h2 className="font-semibold mt-2 text-[30px] md:font-bold md:text-[48px] leading-[110%]">
							Фиксированная цена в договоре. Без доплат.
						</h2>

						<p className="mt-5 text-[14px] md:text-[20px] ">
							Цена не изменится от слова 'никогда'. Если мы ошиблись —
							доплачиваем сами.
						</p>
					</div>
					<div className="md:max-w-[427px]">
						<p className="mt-5 md:mt-0 text-[14px] ">
							"Одна из главных болей при работе с подрядчиками — постоянные
							доплаты: 'не учли', 'не знали', 'так вышло'. 
						</p>

						<p className="mt-5 text-[14px] ">
							Мы работаем иначе: фиксируем цену в договоре после утверждения
							проекта. И эта цена не изменится, даже если: — Мы ошиблись в
							расчётах — Что-то не учли при проектировании — Изменился курс
							валюты или выросли цены на материалы"
						</p>
					</div>
				</div>

				<div className="flex flex-col md:justify-between gap-10 md:flex-row">
					<div className="bg-[#1C1C1C] flex flex-col md:justify-between md:max-w-[650px] md:h-[460px] w-full mt-10 rounded-3xl md:px-10 px-4 py-10">
						<Image
							src={'/HowWeWorks/lw.svg'}
							alt="Conditions"
							width={82.99906921386719}
							height={42.87386703491211}
							className="md:w-[163px] md:h-[84px]"
						/>

						<div className="">
							<h6 className="text-[22px] md:text-[24px] font-semibold mt-4">
								Что входит в фиксированную цену
							</h6>

							<ul className="list-disc flex flex-col gap-2 pl-4 md:mt-2 mt-10 text-[14px]">
								<li>3D-визуализация (до 5 ракурсов)</li>
								<li>Проектирование (раскладка + узлы крепления)</li>
								<li>Производство всех элементов декора</li>
								<li>Доставка на объект (в пределах 100 км от МКАД)</li>
								<li>Монтаж (подсистема + элементы + герметизация)</li>
								<li>Контроль качества (3-уровневый)</li>
								<li>Гарантии (10 лет на монтаж, 50 лет на материал)</li>
							</ul>
						</div>
					</div>

					<div className="bg-[#1C1C1C] md:max-w-[650px] flex flex-col md:justify-between md:h-[460px] w-full mt-10 rounded-3xl px-4 md:px-10 py-10">
						<div className="">
							<h6 className="text-[22px] font-semibold">
								Когда цена МОЖЕТ измениться (только по согласованию):
							</h6>

							<p className="text-[14px] md:mt-2 mt-10">
								⚠️ Изменение проекта по вашей инициативе (добавили элементы,
								изменили дизайн) <br /> ⚠️ Дополнительные услуги по вашему
								запросу (покраска, доп. защита) <br /> ⚠️ Усложнение монтажа
								из-за непредвиденных особенностей фасада (если не было доступа
								для осмотра)
							</p>
						</div>

						<div className="bg-[#161616] p-2.5 text-[14px] rounded-2xl mt-5">
							НО: даже в этих случаях мы согласовываем допработы и их стоимость
							ДО выполнения. Никаких сюрпризов при финальном расчёте.
						</div>
					</div>
				</div>

				<div className="mt-15 md:mt-30">
					<div className="flex items-center gap-2">
						<Image
							src="/mini-logo-black.svg"
							alt="mini-logo"
							width={28}
							height={8}
							className=""
							unoptimized
						/>
					</div>
					<h2 className="font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]">
						Структура оплаты
					</h2>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between flex-wrap">
					<div className="border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7">
						<div className="flex flex-row items-center gap-3">
							<Image
								src={'/HowWeWorks/oplasy.svg'}
								width={30}
								height={30}
								alt="oplasy"
							/>
							<p className="text-base font-semibold">
								Проектирование и производство изделий:
							</p>
						</div>
						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 10%</span>
							<p className="text-[14px]">
								— Минимальный аванс для старта проектирования
							</p>
							<p className="text-[14px]">
								Вы видите 3D-визуализацию до основных вложений
							</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 40%</span>
							<p className="text-[14px]">— Только после утверждения проекта</p>
							<p className="text-[14px]">
								Вы платите, когда довольны результатом │
							</p>
							<p className="text-[14px]">Мы запускаем производство</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 50%</span>
							<p className="text-[14px]">— Перед отгрузкой готовых изделий │</p>
							<p className="text-[14px]">
								Вы видите качество до финального платежа
							</p>
						</div>
					</div>
					<div className="border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7">
						<div className="flex flex-row items-center gap-3">
							<Image
								src={'/HowWeWorks/oplasy.svg'}
								width={30}
								height={30}
								alt="oplasy"
							/>
							<p className="text-base font-semibold">
								Проектирование и производство изделий:
							</p>
						</div>
						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 10%</span>
							<p className="text-[14px]">
								— Минимальный аванс для старта проектирования
							</p>
							<p className="text-[14px]">
								Вы видите 3D-визуализацию до основных вложений
							</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 40%</span>
							<p className="text-[14px]">— Только после утверждения проекта</p>
							<p className="text-[14px]">
								Вы платите, когда довольны результатом │
							</p>
							<p className="text-[14px]">Мы запускаем производство</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 50%</span>
							<p className="text-[14px]">— Перед отгрузкой готовых изделий │</p>
							<p className="text-[14px]">
								Вы видите качество до финального платежа
							</p>
						</div>
					</div>
					<div className="border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7">
						<div className="flex flex-row items-center gap-3">
							<Image
								src={'/HowWeWorks/oplasy.svg'}
								width={30}
								height={30}
								alt="oplasy"
							/>
							<p className="text-base font-semibold">
								Проектирование и производство изделий:
							</p>
						</div>
						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 10%</span>
							<p className="text-[14px]">
								— Минимальный аванс для старта проектирования
							</p>
							<p className="text-[14px]">
								Вы видите 3D-визуализацию до основных вложений
							</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 40%</span>
							<p className="text-[14px]">— Только после утверждения проекта</p>
							<p className="text-[14px]">
								Вы платите, когда довольны результатом │
							</p>
							<p className="text-[14px]">Мы запускаем производство</p>
						</div>

						<div className="flex flex-col mt-5">
							<span className="text-[24px] font-semibold">✓ 50%</span>
							<p className="text-[14px]">— Перед отгрузкой готовых изделий │</p>
							<p className="text-[14px]">
								Вы видите качество до финального платежа
							</p>
						</div>
					</div>
				</div>

				<form className="flex sm:gap-2 md:mt-30 flex-col md:flex-row w-full mt-10 rounded-3xl">
					<div className="">
						<h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
							Получите расчёт вашего проекта за 24 часа
						</h3>

						<p className="text-[14px] md:text-base leading-[150%] mt-2">
							Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
						</p>
					</div>

					<div className="flex flex-col mt-2 max-w-[650px] gap-2">
						<Input
							className="border-b outline-none border-white rounded-0"
							placeholder="Ваше Имя"
						/>
						<Input
							className="border-b border-white rounded-0"
							placeholder="Телефон"
						/>

						<Button
							className="mt-2"
							variant={'secondary'}
							size={'lg'}
						>
							Оставить заявку
						</Button>

						<p className="text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2">
							Нажимая кнопку «Отправить», я даю согласие на обработку моих
							персональных данных на условиях и для целей, определенных
							в политике о конфиденциальности
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
