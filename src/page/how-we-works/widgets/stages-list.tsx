import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";

export function StagesList() {
  return (
    <section className="container mt-30 max-w-[1330px] mx-auto px-4">
      <div className="flex flex-col gap-10">
        {/* STAGE */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-[650px] w-full">
            <div className="flex flex-col">
              <div className="">
                <Badge>Этап 1</Badge>
                <h3 className="text-[30px] md:text-[48px] font-bold leading-[130%]">
                  Консультация и 3D-визуализация
                </h3>

                <div className="flex md:mt-7 flex-col md:flex-row">
                  <div className="flex mt-3 max-w-[315px] w-full flex-col gap-2">
                    <span className="font-semibold">Срок:</span>
                    <span>5-10 рабочих дней</span>
                  </div>

                  <div className="flex mt-4 flex-col gap-2">
                    <span className="font-semibold">Стоимость:</span>
                    <span>
                      Бесплатная консультация, 3D — от 50 000 руб.
                      (засчитывается в заказ)
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                {" "}
                <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                  <span className="font-semibold">Важно:</span>
                  "Мы не начинаем производство, пока вы не утвердите
                  3D-визуализацию на 100%. Ваше 'да' — это гарантия, что
                  результат будет именно таким."
                </blockquote>
              </div>
            </div>

            <Separator className="bg-[#E5E5E5] mt-3 md:mt-10" />

            <div className="mt-2">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    День 1: Первая встреча (онлайн или офлайн)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
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
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
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
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
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
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
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
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
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
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="">
            <Image
              src={"/HowWeWorks/stage1.png"}
              alt="stage1"
              width={538}
              height={600}
            />

            <div className="md:block mt-[267px] ml-[91px] hidden">
              {" "}
              <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                <span className="font-semibold">Важно:</span>
                "Мы не начинаем производство, пока вы не утвердите
                3D-визуализацию на 100%. Ваше 'да' — это гарантия, что результат
                будет именно таким."
              </blockquote>
            </div>
          </div>
        </div>
        {/* STAGE */}

        {/* STAGE 2*/}
        <div className="flex flex-col md:mt-30 mt-15 md:flex-row-reverse md:gap-0 gap-10">
          <div className="flex flex-col w-full md:justify-between md:flex-row-reverse">
            {" "}
            <div className="md:max-w-[650px] flex flex-col  w-full">
              <div className="flex flex-col">
                <div className="">
                  <Badge>Этап 2</Badge>
                  <h3 className="text-[30px] md:text-[48px] font-bold leading-[130%]">
                    Проектирование
                  </h3>

                  <div className="flex md:mt-7 flex-col md:flex-row">
                    <div className="flex mt-3 max-w-[315px] w-full flex-col gap-2">
                      <span className="font-semibold">Срок:</span>
                      <span>7-20 рабочих дней</span>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  {" "}
                  <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                    <span className="font-semibold">Важно:</span>
                    "Мы не начинаем производство, пока вы не утвердите
                    3D-визуализацию на 100%. Ваше 'да' — это гарантия, что
                    результат будет именно таким."
                  </blockquote>
                </div>
              </div>

              <Separator className="bg-[#E5E5E5] mt-3 md:mt-10" />

              <div className="">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      День 1-2: Разработка проекта раскладки
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      День 3-4: Разработка узлов крепления
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      День 5: Спецификация и комплектация
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      День 6-7: Согласование и корректировки:
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Результат этапа:
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Документация, которую вы получаете:
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="">
              <Image
                src={"/HowWeWorks/stage2.png"}
                alt="stage1"
                width={538}
                height={600}
              />
            </div>
          </div>
        </div>
        {/* STAGE 2*/}

        {/* STAGE 3*/}
        <div className="flex flex-col mt-15 md:mt-30 md:flex-row md:justify-between">
          <div className="max-w-[650px] w-full">
            <div className="flex flex-col">
              <div className="">
                <Badge>Этап 3</Badge>
                <h3 className="text-[30px] md:text-[48px] font-bold leading-[130%]">
                  Производство
                </h3>

                <div className="flex md:mt-7 flex-col md:flex-row">
                  <div className="flex mt-3 max-w-[315px] w-full flex-col gap-2">
                    <span className="font-semibold">Срок:</span>
                    <span>
                      от 20 до 50 рабочих дней (зависит от объёма и сложности)
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                {" "}
                <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                  <span className="font-semibold">Важно:</span>
                  "Мы не начинаем производство, пока вы не утвердите
                  3D-визуализацию на 100%. Ваше 'да' — это гарантия, что
                  результат будет именно таким."
                </blockquote>
              </div>
            </div>

            <Separator className="bg-[#E5E5E5] mt-3 md:mt-10" />

            <div className="">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    День 1: Изготовление форм
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Создание форм на ЧПУ-станке (из МДФ)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Для сложных элементов — силиконовые формы
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Контроль геометрии форм (точность ±0,1 мм)
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    День 2-4: Формовка элементов
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    День 5-6: Обработка и контроль качества
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    День 7: Упаковка и маркировка
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Вы получаете регулярные отчёты:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Результат этапа
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="max-w-[538px]">
            <Image
              src={"/HowWeWorks/stage3.png"}
              alt="stage1"
              width={538}
              height={600}
            />

            <div className="md:block mt-[170px] ml-[91px] hidden">
              {" "}
              <blockquote className="mt-6 border-l-2  text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                <span className="font-semibold">Гарантия сроков:</span>
                "Сроки производства согласовываем индивидуально (20–50 рабочих
                дней) и закрепляем в договоре.
              </blockquote>
            </div>
          </div>
        </div>
        {/* STAGE 3*/}

        {/* STAGE 4*/}
        <div className="flex flex-col md:mt-30 mt-15 md:flex-row-reverse md:gap-0 gap-10">
          <div className="flex flex-col w-full md:justify-between md:flex-row-reverse">
            {" "}
            <div className="md:max-w-[650px] flex flex-col  w-full">
              <div className="flex flex-col">
                <div className="">
                  <Badge>Этап 4</Badge>
                  <h3 className="text-[30px] md:text-[48px] font-bold leading-[130%]">
                    Монтаж на объекте
                  </h3>

                  <div className="flex md:mt-7 flex-col md:flex-row">
                    <div className="flex mt-3 max-w-[315px] w-full flex-col gap-2">
                      <span className="font-semibold">Срок:</span>
                      <span>
                        20-45 рабочих дней (зависит от объёма и сложности)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  {" "}
                  <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                    <span className="font-semibold">Гарантия срока:</span>
                    "Мы согласовываем сроки монтажа заранее. Если задерживаем по
                    своей вине — компенсируем 3% от стоимости монтажа за каждый
                    день задержки."
                  </blockquote>
                </div>
              </div>

              <Separator className="bg-[#E5E5E5] mt-3 md:mt-10" />

              <div className="">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Подготовка (1 день)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание форм на ЧПУ-станке (из МДФ)
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Для сложных элементов — силиконовые формы
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Контроль геометрии форм (точность ±0,1 мм)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Монтаж подсистемы (2-3 дня)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Монтаж элементов (5-25 дней)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Герметизация швов (1-2 дня)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Финальная проверка (1 день)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Вы получаете регулярные отчёты
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-base font-semibold leading-[150%]">
                      Результат этапа
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        <div className="items-center flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Детализация 3D-визуализации
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Создание чертежей каждого элемента
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Точные размеры, координаты, высоты
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Раскладка элементов по фасаду
                          </p>
                        </div>

                        <div className="items-center mt-4 flex gap-2">
                          <Image
                            src={"/about-us/list-icon.png"}
                            alt="check"
                            width={18}
                            height={18}
                          />
                          <p className="text-[12px] md:text-base leading-[150%]">
                            Учёт всех архитектурных особенностей (окна, двери,
                            выступы)
                          </p>
                        </div>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="">
              <Image
                src={"/HowWeWorks/stage4.png"}
                alt="stage1"
                width={538}
                height={600}
              />

              <div className="md:block mt-[168px] hidden">
                {" "}
                <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                  <span className="font-semibold">Гарантия срока:</span>
                  "Мы согласовываем сроки монтажа заранее. Если задерживаем по
                  своей вине — компенсируем 3% от стоимости монтажа за каждый
                  день задержки."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        {/* STAGE 4*/}

        {/* STAGE 5*/}
        <div className="flex flex-col mt-15 md:mt-30 md:flex-row md:justify-between">
          <div className="max-w-[650px] w-full">
            <div className="flex flex-col">
              <div className="">
                <Badge>Этап 5</Badge>
                <h3 className="text-[30px] md:text-[48px] font-bold leading-[110%]">
                  Контроль качества <br /> и сдача проекта
                </h3>

                <div className="flex md:mt-7 flex-col md:flex-row">
                  <div className="flex mt-3 max-w-[315px] w-full flex-col gap-2">
                    <span className="font-semibold">Срок:</span>
                    <span>1 день</span>
                  </div>
                  <div className="flex mt-4 flex-col gap-2">
                    <span className="font-semibold">Стоимость:</span>
                    <span>Включена в проект</span>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                {" "}
                <blockquote className="mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic">
                  <span className="font-semibold">Важно:</span>
                  "Мы не начинаем производство, пока вы не утвердите
                  3D-визуализацию на 100%. Ваше 'да' — это гарантия, что
                  результат будет именно таким."
                </blockquote>
              </div>
            </div>

            <Separator className="bg-[#E5E5E5] mt-3 md:mt-10" />

            <div className="">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Финальный контроль инженером:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Проверка геометрии всех элементов (лазерный уровень)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Проверка прочности крепежа (выборочный тест)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Проверка качества герметизации швов
                        </p>
                      </div>
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Проверка отсутствия сколов и повреждений
                        </p>
                      </div>
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Контрольные замеры (соответствие проекту)
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Приёмка с заказчиком:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Документы при сдаче:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Финальные фотографии:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px]	md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Результат этапа
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-base font-semibold leading-[150%]">
                    Статистика
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Знакомство с проектом
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение ваших пожеланий и стиля
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Изучение архитектурной документации (если есть)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Фото-фиксация объекта (если дом уже построен)
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Обсуждение бюджета и сроков
                        </p>
                      </div>

                      <div className="items-center mt-4 flex gap-2">
                        <Image
                          src={"/about-us/list-icon.png"}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[12px] md:text-base leading-[150%]">
                          Формирование технического задания
                        </p>
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="max-w-[538px]">
            <Image
              src={"/HowWeWorks/stage5.png"}
              alt="stage1"
              width={538}
              height={600}
            />
          </div>
        </div>
        {/* STAGE 5*/}
      </div>
    </section>
  );
}
