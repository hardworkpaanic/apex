import { Button } from "@/shared/components";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function InstallationHero() {
  return (
    <>
      <section className="bg-[url('/installation/hero-bg.jpg')] md:hidden text-white w-full h-168.25 bg-cover bg-center h-[504px] rounded-3xl justify-end flex flex-col py-10">
        <div className="container max-w-[1320px] mx-auto px-4">
          <Image
            src="/mini-logo.svg"
            alt="mini-logo"
            width={28}
            height={8}
            className=""
            unoptimized
          />

          <h1 className="font-semibold mt-4 text-[30px] leading-[110%]">
            Монтаж с точностью до миллиметра
          </h1>

          <p className="italic mt-2 text-white/70 text-[14px] leading-[150%]">
            Высококвалифицированные бригады. Всесезонная технология.
            Трёхуровневый контроль качества. Гарантия 10 лет на монтажные
            работы.
          </p>
          {/* TODO: Доделать ещё одну кнопку */}
          <div className="flex gap-2 flex-row justify-between mt-8">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="text-[15px] font-bold px-7 py-4"
            >
              Заказать выезд на объект <ArrowUpRight />
            </Button>

            <button className="border-none rounded-full bg-white/10 w-[40px] h-[40px] justify-center items-center flex backdrop-blur-sm">
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Desktop */}

      <section className="hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-[480px] flex-col">
        <div className="container bg-[url('/installation/hero-bg-desctop.jpg')] px-[60px] py-6.25 flex-1 flex flex-col bg-cover h-[480px] w-full bg-center rounded-3xl justify-center">
          <div className="space-y-4 flex flex-col justify-between h-full py-[93px]">
            <div className="">
              <div>
                <Image
                  src="/mini-logo.svg"
                  alt="mini-logo"
                  width={28}
                  height={8}
                  unoptimized
                />
              </div>

              <h1 className="font-semibold max-w-[817px] text-[54px] leading-[110%]">
                Монтаж с точностью до миллиметра
              </h1>

              <p className="italic mt-2 max-w-[596px] text-white/70 text-[16px] leading-[150%]">
                Высококвалифицированные бригады. Всесезонная технология.
                Трёхуровневый контроль качества. Гарантия 10 лет на монтажные
                работы.
              </p>
            </div>

            <div className="flex gap-2 flex-row justify-between mt-8">
              <Button size={"lg"} variant={"secondary"} className="font-bold">
                Заказать выезд на объект <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:w-full md:justify-between md:items-center md:px-40 md:flex-row container mt-5 max-w-[1320px] mx-auto px-4 flex-col">
        <div className="flex md:flex-col justify-between py-2 items-center">
          <span className="text-[30px] md:text-[46px] font-semibold">
            0,5 мм
          </span>
          <span className="text-[12px] md:text-base italic">
            точность стыковки
          </span>
        </div>

        <div className="flex md:flex-col justify-between border-b md:border-none border-t border-#EDEDED py-2 items-center">
          <span className="text-[30px] md:text-[46px] font-semibold">200+</span>
          <span className="text-[12px] md:text-base italic">
            объектов смонтировано
          </span>
        </div>

        <div className="flex md:flex-col justify-between py-2 items-center">
          <span className="text-[30px] md:text-[46px] font-semibold">
            10 лет
          </span>
          <span className="text-[12px] md:text-base italic">
            Гарантия работы
          </span>
        </div>
      </div>
    </>
  );
}
