import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/components/ui/accordion'
import { Badge } from '@/shared/components/ui/badge'
import { Separator } from '@/shared/components/ui/separator'
import Image from 'next/image'

export function StagesList() {
	return (
		<section className="container mt-30 max-w-[1330px] mx-auto px-4">
			<div className="flex flex-col gap-10">
				{/* STAGE */}
				<div className="flex flex-col gap-10">
					<div className="flex flex-col">
						<div className="">
							<Badge>Этап 1</Badge>
							<h3 className="text-[30px] font-bold leading-[130%]">
								Консультация и 3D-визуализация
							</h3>

							<div className="flex mt-3 flex-col gap-2">
								<span className="font-semibold">Срок:</span>
								<span>5-10 рабочих дней</span>
							</div>

							<div className="flex mt-4 flex-col gap-2">
								<span className="font-semibold">Стоимость:</span>
								<span>
									Бесплатная консультация, 3D — от 50 000 руб. (засчитывается в
									заказ)
								</span>
							</div>
						</div>
						<div className="">
							{' '}
							<blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
								<span className="font-semibold">Важно:</span>
								"Мы не начинаем производство, пока вы не утвердите
								3D-визуализацию на 100%. Ваше 'да' — это гарантия, что результат
								будет именно таким."
							</blockquote>
						</div>
					</div>

					<Separator className="bg-[#E5E5E5]" />

					<div className="">
						<Accordion
							type="single"
							collapsible
							defaultValue="item-1"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 1: Первая встреча (онлайн или офлайн)
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 2-3: Создание 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 4: Презентация 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Результат этапа:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Что входит в 3D-визуализацию:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Если нужны изменения:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				{/* STAGE */}

				{/* STAGE 2 */}
				<div className="flex flex-col gap-10">
					<div className="flex flex-col">
						<div className="">
							<Badge>Этап 2</Badge>
							<h3 className="text-[30px] font-bold leading-[130%]">
								Проектирование
							</h3>

							<div className="flex mt-3 flex-col gap-2">
								<span className="font-semibold">Срок:</span>
								<span>7-20 рабочих дней</span>
							</div>
						</div>
					</div>

					<Separator className="bg-[#E5E5E5]" />

					<div className="">
						<Accordion
							type="single"
							collapsible
							defaultValue="item-1"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 1: Первая встреча (онлайн или офлайн)
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 2-3: Создание 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 4: Презентация 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Результат этапа:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Что входит в 3D-визуализацию:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Если нужны изменения:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				{/* STAGE 2*/}

				{/* STAGE 3*/}
				<div className="flex flex-col gap-10">
					<div className="flex flex-col">
						<div className="">
							<Badge>Этап 3</Badge>
							<h3 className="text-[30px] font-bold leading-[130%]">
								Производство
							</h3>

							<div className="flex mt-3 flex-col gap-2">
								<span className="font-semibold">Срок:</span>
								<span>
									от 20 до 50 рабочих дней (зависит от объёма и сложности)
								</span>
							</div>
						</div>
						<div className="">
							{' '}
							<blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
								<span className="font-semibold">Гарантия сроков:</span>
								"Сроки производства согласовываем индивидуально (20–50 рабочих
								дней) и закрепляем в договоре.
							</blockquote>
						</div>
					</div>

					<Separator className="bg-[#E5E5E5]" />

					<div className="">
						<Accordion
							type="single"
							collapsible
							defaultValue="item-1"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 1: Первая встреча (онлайн или офлайн)
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 2-3: Создание 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 4: Презентация 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Результат этапа:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Что входит в 3D-визуализацию:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Если нужны изменения:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				{/* STAGE 3*/}

				{/* STAGE 4*/}
				<div className="flex flex-col gap-10">
					<div className="flex flex-col">
						<div className="">
							<Badge>Этап 4</Badge>
							<h3 className="text-[30px] font-bold leading-[130%]">
								Монтаж на объекте
							</h3>

							<div className="flex mt-3 flex-col gap-2">
								<span className="font-semibold">Срок:</span>
								<span>20-45 рабочих дней (зависит от объёма и сложности)</span>
							</div>
						</div>
						<div className="">
							{' '}
							<blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
								<span className="font-semibold">Гарантия срока:</span>
								"Мы согласовываем сроки монтажа заранее. Если задерживаем по
								своей вине — компенсируем 3% от стоимости монтажа за каждый день
								задержки."
							</blockquote>
						</div>
					</div>

					<Separator className="bg-[#E5E5E5]" />

					<div className="">
						<Accordion
							type="single"
							collapsible
							defaultValue="item-1"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 1: Первая встреча (онлайн или офлайн)
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 2-3: Создание 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 4: Презентация 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Результат этапа:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Что входит в 3D-визуализацию:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Если нужны изменения:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				{/* STAGE 4*/}

				{/* STAGE 5 */}
				<div className="flex flex-col gap-10">
					<div className="flex flex-col">
						<div className="">
							<Badge>Этап 5</Badge>
							<h3 className="text-[30px] font-bold leading-[130%]">
								Контроль качества и сдача проекта
							</h3>

							<div className="flex mt-3 flex-col gap-2">
								<span className="font-semibold">Срок:</span>
								<span>1 день </span>
							</div>

							<div className="flex mt-4 flex-col gap-2">
								<span className="font-semibold">Стоимость:</span>
								<span>Включена в проект</span>
							</div>
						</div>
						<div className="">
							{' '}
							<blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
								<span className="font-semibold">Гарантия срока:</span>
								"Мы согласовываем сроки монтажа заранее. Если задерживаем по
								своей вине — компенсируем 3% от стоимости монтажа за каждый день
								задержки."
							</blockquote>
						</div>
					</div>

					<Separator className="bg-[#E5E5E5]" />

					<div className="">
						<Accordion
							type="single"
							collapsible
							defaultValue="item-1"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 1: Первая встреча (онлайн или офлайн)
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 2-3: Создание 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									День 4: Презентация 3D-визуализации
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Результат этапа:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Что входит в 3D-визуализацию:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger className="text-base font-semibold leading-[150%]">
									Если нужны изменения:
								</AccordionTrigger>
								<AccordionContent>
									<ul className="flex flex-col">
										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Знакомство с проектом
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение ваших пожеланий и стиля
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Изучение архитектурной документации (если есть)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Фото-фиксация объекта (если дом уже построен)
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Обсуждение бюджета и сроков
											</p>
										</div>

										<div className="items-center mt-4 flex gap-2">
											<Image
												src={'/about-us/list-icon.png'}
												alt="check"
												width={18}
												height={18}
											/>
											<p className="text-[12px] leading-[150%]">
												Формирование технического задания
											</p>
										</div>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				{/* STAGE 5 */}
			</div>
		</section>
	)
}
