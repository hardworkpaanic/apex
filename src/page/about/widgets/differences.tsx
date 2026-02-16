import { Slider } from "@/shared/components/shared/slider";

export function Differences() {
  return (
    <section className="container max-w-[1320px] mt-10 md:mt-30 mx-auto px-4">
      <h2 className="text-[22px] md:text-[48px] font-bold text-center">
        Что отличает нас от других
      </h2>

      <p className="text-[14px] md:text-base text-[#3C3C3C] mt-2 text-center">
        6 принципов, которые делают нас лучшими в своём деле
      </p>

      <div className="hidden md:flex gap-3 mt-5 flex-col md:flex-wrap md:flex-row md:justify-between">
        <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2 rounded-3xl px-4 md:px-7 md:py-7 py-5">
          <img src="/price/users.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            Полный цикл под одной крышей
          </span>
          <p className="text-[14px] leading-[150%]">
            Архитектор, производство, монтаж — в одной команде. Единая
            ответственность
          </p>
        </div>

        <div className="bg-[#F3F3F3] w-full max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
          <img src="/price/lopa.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            Прозрачность процесса
          </span>
          <p className="text-[14px] leading-[150%]">
            Ежедневные фотоотчёты от менеджера. <br /> Прямая связь WhatsApp /
            Telegram
          </p>
        </div>

        <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
          <img src="/price/home.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            Инженерная точность
          </span>
          <p className="text-[14px] leading-[150%]">
            Стыковка элементов с точностью 0,5 мм  Идеальная геометрия
          </p>
        </div>

        <div className="bg-[#F3F3F3] w-full max-w-[418px] flex flex-col gap-2 rounded-3xl px-4 md:px-7 md:py-7 py-5">
          <img src="/price/time.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            Фиксированные сроки в договоре
          </span>
          <p className="text-[14px] leading-[150%]">
            Чёткий график каждого этапа. Прозрачность
          </p>
        </div>

        <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7  py-5">
          <img src="/price/rub2.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            Цена без сюрпризов
          </span>
          <p className="text-[14px] leading-[150%]">
            Фиксированная стоимость в договоре. Без скрытых доплат
          </p>
        </div>

        <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
          <img src="/price/shit.svg" className="w-10 h-10" alt="" />

          <span className="text-base font-semibold leading-[150%]">
            50 лет гарантии
          </span>
          <p className="text-[14px] leading-[150%]">
            Материал не потрескается, не потеряет цвет. Без ремонта
          </p>
        </div>
      </div>

      <Slider
        className={"mt-10"}
        items={[
          <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2 rounded-3xl px-4 md:px-7 md:py-7 py-5">
            <img src="/price/users.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              Полный цикл под одной крышей
            </span>
            <p className="text-[14px] leading-[150%]">
              Архитектор, производство, монтаж — в одной команде. Единая
              ответственность
            </p>
          </div>,

          <div className="bg-[#F3F3F3] w-full max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
            <img src="/price/lopa.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              Прозрачность процесса
            </span>
            <p className="text-[14px] leading-[150%]">
              Ежедневные фотоотчёты от менеджера. <br /> Прямая связь WhatsApp /
              Telegram
            </p>
          </div>,

          <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
            <img src="/price/home.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              Инженерная точность
            </span>
            <p className="text-[14px] leading-[150%]">
              Стыковка элементов с точностью 0,5 мм  Идеальная геометрия
            </p>
          </div>,

          <div className="bg-[#F3F3F3] w-full max-w-[418px] flex flex-col gap-2 rounded-3xl px-4 md:px-7 md:py-7 py-5">
            <img src="/price/time.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              Фиксированные сроки в договоре
            </span>
            <p className="text-[14px] leading-[150%]">
              Чёткий график каждого этапа. Прозрачность
            </p>
          </div>,

          <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7  py-5">
            <img src="/price/rub2.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              Цена без сюрпризов
            </span>
            <p className="text-[14px] leading-[150%]">
              Фиксированная стоимость в договоре. Без скрытых доплат
            </p>
          </div>,

          <div className="bg-[#F3F3F3] max-w-[418px] flex flex-col gap-2  rounded-3xl px-4 md:px-7 md:py-7 py-5">
            <img src="/price/shit.svg" className="w-10 h-10" alt="" />

            <span className="text-base font-semibold leading-[150%]">
              50 лет гарантии
            </span>
            <p className="text-[14px] leading-[150%]">
              Материал не потрескается, не потеряет цвет. Без ремонта
            </p>
          </div>,
        ]}
      />
    </section>
  );
}
