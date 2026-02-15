"use client";

import { Button } from "@/shared/components";
import { ReviewsSliderSimple } from "@/shared/components/ReviewsSliderSimple";
import { Input } from "@/shared/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Team() {
  return (
    <section className="bg-black mt-15 rounded-t-3xl text-white md:py-30 py-10">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
          Команда APEX — эксперты своего дела
        </h2>
        <p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
          Более 50 специалистов: архитекторы, инженеры, технологи, монтажники
        </p>
        <div className="flex flex-col md:flex-row gap-5 md:justify-between flex-wrap">
          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px] italic">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>
          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px]">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>

          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px] italic">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>

          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px] italic">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>

          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px] italic">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>

          <div className="bg-[url('/about-us/ceo.jpg')] md:w-[407px] mt-5 w-[320px] bg-cover bg-center rounded-3xl md:h-[508px] h-[300px] flex flex-col justify-end p-4">
            <div className="bg-[#1E1E1E] px-4 py-5 rounded-3xl">
              <h3 className="text-[20px] font-semibold">Имя Фамилия</h3>
              <p className="text-[14px] italic">Основатель/CEO</p>
              <p className="text-[14px] text-white/70 mt-1">
                Он успешно реализовал крупные проекты, включая жилые и
                коммерческие здания, став экспертом в строительстве.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[30px] md:mt-30 md:text-[48px] mt-10 font-semibold leading-[110%]">
          Наше производство — <br /> технологии и мощности
        </h2>
        <p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
          Современное оборудование и строгий контроль качества на каждом этапе
        </p>
        <Image
          src={"/about-us/2.png"}
          width={343}
          height={73.27727508544922}
          className="w-full md:hidden grayscale object-contain mt-5 object-center"
          alt="Производство APEX"
        />
        <Image
          src={"/about-us/2-desktop.png"}
          width={1320}
          height={282}
          className="w-full hidden md:block grayscale object-contain mt-15 object-center"
          alt="Производство APEX"
        />
        <div className="flex flex-col mt-10 md:flex-row md:justify-between">
          {" "}
          <h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold leading-[110%]">
            Мощности
          </h2>
          <div className="flex flex-col md:flex-row w-full md:justify-between md:max-w-[873px] gap-5">
            <div className="flex justify-between md:flex-col md:items-start items-center">
              <span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
                10+
              </span>
              <span className="text-[#B9B9B9]">станков ЧПУ</span>
            </div>

            <div className="flex justify-between md:flex-col md:items-start items-center">
              <span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
                5000+ м²
              </span>
              <span className="text-[#B9B9B9]">Производство в месяц</span>
            </div>

            <div className="flex justify-between md:flex-col md:items-start items-center">
              <span className="text-[30px] text-center md:text-[48px] font-semibold leading-[110%]">
                2000+ м²{" "}
              </span>
              <span className="text-[#B9B9B9]">Складские площади</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:flex-row md:justify-between">
          <h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold md:text-start leading-[110%]">
            Технологические <br /> преимущества
          </h2>

          <div className="flex flex-col w-full md:max-w-[873px]">
            <div className="flex flex-col mt-2 pb-4 border-b border-[#3C3C3C] gap-2">
              <span className="text-[14px] font-bold">ЧПУ-фрезеры</span>
              <p className="text-[14px] text-[#B9B9B9] italic">
                Точность 0,1 мм. Изготовлениеформ любой сложности
              </p>
            </div>

            <div className="flex flex-col mt-4 pb-4 border-b border-[#3C3C3C] gap-2">
              <span className="text-[14px] font-bold">
                Многослойная формовка
              </span>
              <p className="text-[14px] text-[#B9B9B9] italic">
                Ручная укладка в 3 слоя. Армирование каждого элемента
              </p>
            </div>

            <div className="flex flex-col pb-4 mt-2 gap-2">
              <span className="text-[14px] font-bold">Контроль качества</span>
              <p className="text-[14px] text-[#B9B9B9] italic">
                Лаборатория. 12 параметров проверки каждого элемента
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:flex-row md:justify-between">
          <h2 className="text-[30px] text-center md:text-[20px] md:font-normal md:italic md:text-[#B9B9B9] font-semibold leading-[110%]">
            Посещение производства
          </h2>

          <div className="flex flex-col w-full md:max-w-[873px]">
            <p className="text-[12px] md:text-[16px] leading-[150%] md:mt-0 mt-4">
              Наше производство оснащено современным оборудованием. ЧПУ-фрезеры
              с точностью 0,1 мм позволяют создавать формы любой сложности.
              Каждый элемент формуется вручную в три слоя с армированием и
              проходит строгий контроль качества на всех этапах. Мощность
              производства — до 5000 м² в месяц.
            </p>

            <div className="bg-[#171717] flex flex-col md:justify-between md:flex-row relative z-10 p-5 mt-5 rounded-3xl md:items-center">
              <div className="flex flex-row md:flex-col">
                <p className="text-[14px] md:text-[16px] leading-[150%]">
                  Хотите увидеть производство своими глазами?
                </p>
                <p className="text-[14px] md:text-[16px] leading-[150%]">
                  Проводим экскурсии для клиентов по предварительной записи.
                </p>
              </div>

              <Button
                className="w-full md:w-auto md:mt-0 mt-5"
                variant={"secondary"}
              >
                Записаться на экскурсию <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>

        <section className="relative">
          <div className="relative md:ml-[420px] z-10">
            {" "}
            <h2 className="text-[30px] max-w-[673px] md:text-[48px] mt-10 md:mt-20 font-semibold leading-[110%]">
              Трёхуровневая система контроля качества
            </h2>
            <p className="text-[14px] md:text-[16px] md:hidden leading-[150%] mt-4">
              Современное оборудование и строгий контроль качества на каждом
              этапе
            </p>
          </div>

          <Image
            src={"/about-us/col.png"}
            alt="колона"
            width={568}
            height={715}
            className="absolute z-0 top-[-80px] left-[-170px]"
          />

          <Image
            src={"/about-us/col2.png"}
            alt="колона"
            width={421}
            height={530}
            className="absolute z-0 bottom-[-160] right-[-50]"
          />
          {/*  */}
          <div className="flex flex-col relative z-10 md:py-10 md:flex-row md:gap-4">
            <div className="">
              <div className="bg-[#171717] mt-5 md:mt-0 rounded-3xl p-7">
                <h3 className="text-[20px] font-bold">1: Производство</h3>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Контроль сырья (мрамор, смола, пигменты)</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Проверка форм перед использованием</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>
                    Контроль толщины слоёв (лицевой 2мм, фактурный 5 мм,
                    армирующий 3мм)
                  </p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Визуальная проверка после формовки</p>
                </div>
              </div>

              <div className="bg-[#171717] mt-2 md:mt-4 rounded-3xl p-7">
                <h3 className="text-[20px] font-bold">
                  2: ОТК (отдел технического контроля)
                </h3>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Проверка геометрии (размеры, углы))</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Контроль цвета (соответствие эталону)</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Проверка фактуры и текстуры</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Визуальная проверка после формовки</p>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="w-full md:min-w-[873px]">
              <div className="bg-[#171717] mt-2 md:mt-0 rounded-3xl p-7">
                <h3 className="text-[20px] font-bold">3: Монтаж на объекте</h3>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Проверка целостности при доставке</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Контроль точности крепления (0,5 мм)</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Проверка стыков и швов</p>
                </div>

                <div className="items-center mt-4 flex gap-2">
                  <Image
                    src={"/about-us/list-icon.png"}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p>Финальная приёмка с заказчиком</p>
                </div>
              </div>

              <div className="bg-[#171717] p-7 rounded-3xl mt-1 md:mt-4">
                <span className="text-base font-semibold">
                  12 параметров проверки ОТК:
                </span>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-7">
                  {/* Все элементы теперь внутри одной grid-сетки */}
                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      1
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      2
                    </div>
                    <p>Размеры</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      3
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      4
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      5
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      6
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      7
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      8
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      9
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      10
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      11
                    </div>
                    <p>Геометрия</p>
                  </div>

                  <div className="flex py-1 items-center gap-2">
                    <div className="w-[32px] h-[32px] font-bold text-base rounded-md bg-black flex items-center justify-center">
                      12
                    </div>
                    <p>Геометрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:mt-30 md:flex-row md:justify-between md:items-end">
          <div className="">
            {" "}
            <h2 className="text-[30px] md:font-bold md:text-[48px] mt-10 font-semibold leading-[110%]">
              Сертификаты <br /> качества и соответствия
            </h2>
            <p className="text-[14px] md:text-base text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
              Все наши материалы сертифицированы и соответствуют ГОСТам
            </p>
          </div>

          <Button variant={"secondary"} className="mt-5" size={"lg"}>
            Скачать архивом .zip
          </Button>
        </div>

        <div className="flex flex-col mt-5 md:w-full md:justify-between md:gap-3 gap-8 md:flex-row">
          <div className="flex flex-row md:w-full justify-center md:justify-between md:gap-3 gap-8">
            <div className="items-center flex flex-col gap-3 justify-center">
              <div className="bg-[#171717] md:h-[253px] md:w-[315px]	rounded-2xl flex items-end justify-center pt-7 px-6">
                <Image
                  src={"/about-us/ser.png"}
                  width={112}
                  height={92}
                  className="md:hidden"
                  alt="sertificate"
                />
                <Image
                  src={"/about-us/ser-desktop.jpg"}
                  width={215}
                  height={175}
                  className="hidden rounded-t-2xl md:block"
                  alt="sertificate"
                />
              </div>
              <span className="text-center text-base font-semibold">
                Пожарный сертификат (Г1)
              </span>
              <Button
                className="text-[#B9B9B9] font-normal! underline-none"
                variant={"link"}
              >
                Скачать PDF
              </Button>
            </div>
            <div className="items-center flex flex-col gap-3 justify-center">
              <div className="bg-[#171717] md:h-[253px] md:w-[315px] rounded-2xl flex items-end justify-center pt-7 px-6">
                <Image
                  src={"/about-us/ser.png"}
                  width={112}
                  height={92}
                  className="md:hidden"
                  alt="sertificate"
                />
                <Image
                  src={"/about-us/ser-desktop.jpg"}
                  width={215}
                  height={175}
                  className="hidden rounded-t-2xl md:block"
                  alt="sertificate"
                />
              </div>
              <span className="text-center text-base font-semibold">
                Протокол испытаний материала
              </span>
              <Button
                className="text-[#B9B9B9] font-normal! underline-none"
                variant={"link"}
              >
                Скачать PDF
              </Button>
            </div>
          </div>
          <div className="flex flex-row  md:w-full md:justify-between justify-center md:gap-3 gap-8">
            <div className="items-center flex flex-col gap-3 justify-center">
              <div className="bg-[#171717] md:h-[253px] md:w-[315px] rounded-2xl flex items-end justify-center pt-7 px-6">
                <Image
                  src={"/about-us/ser.png"}
                  width={112}
                  height={92}
                  className="md:hidden"
                  alt="sertificate"
                />
                <Image
                  src={"/about-us/ser-desktop.jpg"}
                  width={215}
                  height={175}
                  className="hidden rounded-t-2xl md:block"
                  alt="sertificate"
                />
              </div>
              <span className="text-center text-base font-semibold">
                Радиационный контроль
              </span>
              <Button
                className="text-[#B9B9B9] font-normal! underline-none"
                variant={"link"}
              >
                Скачать PDF
              </Button>
            </div>
            <div className="items-center flex flex-col gap-3 justify-center">
              <div className="bg-[#171717] md:h-[253px] md:w-[315px] rounded-2xl flex items-end justify-center pt-7 px-6">
                <Image
                  src={"/about-us/ser.png"}
                  width={112}
                  height={92}
                  className="md:hidden"
                  alt="sertificate"
                />
                <Image
                  src={"/about-us/ser-desktop.jpg"}
                  width={215}
                  height={175}
                  className="hidden rounded-t-2xl md:block"
                  alt="sertificate"
                />
              </div>
              <span className="text-center text-base font-semibold">
                Заключение о морозостойкости
              </span>
              <Button
                className="text-[#B9B9B9] font-normal! underline-none"
                variant={"link"}
              >
                Скачать PDF
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant={"secondary"}
          className="w-full hidden mt-5"
          size={"lg"}
        >
          Скачать архивом .zip
        </Button>
        <h2 className="text-[30px] text-center md:text-[48px] md:mt-30 mt-10 font-semibold leading-[110%]">
          Отзывы наших клиентов
        </h2>
        <p className="text-[14px] text-center italic text-[#B9B9B9] md:text-[16px] leading-[150%] mt-4">
          Более 200 довольных заказчиков по всей России
        </p>
        <ReviewsSliderSimple />
        <div className="flex flex-col md:mt-30 md:flex-row gap-5 justify-between">
          <div className="bg-[#171717] w-full flex flex-col gap-3 rounded-3xl mt-5 px-4 py-5">
            <h5 className="text-[30px] font-bold">Партнерам</h5>
            <p className="text-[14px] mt-2 text-[#B9B9B9]">
              Приглашаем к сотрудничеству архитекторов, застройщиков и
              дизайнеров.
            </p>

            <p className="text-base font-semibold mt-3 text-[#B9B9B9]">
              Мы предлагаем:
            </p>

            <ul className="list-disc text-[#B9B9B9] text-[14px] flex flex-col gap-2 mt-2 pl-4">
              <li>Партнёрскую программу</li>
              <li>Техническую поддержку</li>
              <li>BIM-библиотеки</li>
              <li>Обучение</li>
            </ul>

            <Button className="font-bold mt-5 w-[171px]" variant={"secondary"}>
              Узнать условия
            </Button>
          </div>
          <div className="bg-[#171717] w-full flex flex-col gap-3 rounded-3xl mt-5 px-4 py-5">
            <h5 className="text-[30px] font-bold">Вакансии</h5>
            <p className="text-[14px] mt-2 text-[#B9B9B9]">
              Присоединяйтесь к команде профессионалов.
            </p>

            <p className="text-base font-semibold mt-3 text-[#B9B9B9]">
              Открытые позиции:
            </p>

            <ul className="list-disc text-white text-[14px] flex flex-col gap-2 mt-2 pl-4">
              <li>Архитектор</li>
              <li>Технолог</li>
              <li>Монтажник</li>
              <li>Менеджер проектов</li>
            </ul>

            <Button className="font-bold mt-5 w-[191px]" variant={"secondary"}>
              Отправить резюме{" "}
            </Button>
          </div>
        </div>

        <form className="flex sm:gap-2 md:mt-30 flex-col md:flex-row w-full mt-10 rounded-3xl">
          <div className="">
            <h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
              Готовы начать проект с APEX
            </h3>

            <p className="text-[14px] md:text-base leading-[150%] mt-2">
              Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
            </p>
          </div>

          <div className="flex flex-col mt-2 max-w-[650px] md:gap-4 gap-2">
            <Input
              className="border-b outline-none border-white rounded-0"
              placeholder="Ваше Имя"
            />
            <Input
              className="border-b border-white rounded-0"
              placeholder="Телефон"
            />

            <Button
              className="mt-2 max-w-[201px]"
              variant={"secondary"}
              size={"lg"}
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
  );
}
