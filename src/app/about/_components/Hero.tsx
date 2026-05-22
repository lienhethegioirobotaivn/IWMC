import { AboutData } from "@/services/about.service";
import Image from "next/image";

type HeroProps = Pick<AboutData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#050810] overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.background_image}
          alt="Background"
          fill
          priority
          className="w-full h-full object-cover object-bottom-left lg:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-8 md:px-12 pt-12 pb-14 flex flex-col">
        <div className="mb-6">
          <h1 className="text-6xl lg:text-[66px] text-center lg:text-left font-bold text-white uppercase mb-2">
            {hero.title}
          </h1>
          <div className="hidden lg:block w-12 h-[2.5px] bg-[#d5ad64] mb-6 lg:mb-4" />
          <h2 className="mb-4 text-[24px] lg:text-[28px] font-bold text-center lg:text-left">
            <span className="bg-linear-to-b from-[#f0debd] to-[#c59f5a] bg-clip-text text-[#f3d9a9] lg:text-transparent whitespace-pre-wrap">
              {hero.sub_title}
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg lg:w-140 mb-4 opacity-90">
            {hero.description}
          </p>
        </div>

        <div className="w-full lg:w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 lg:p-6 rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md">
          {hero.stats.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-4 lg:flex items-center gap-2 lg:gap-3 px-4 border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-white/15 pb-4 lg:py-0`}
            >
              <div className="col-span-1 flex justify-center items-center">
                <div className="relative size-22 lg:size-16">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="col-span-3 flex flex-col pl-4 lg:pl-0">
                <span className="text-3xl font-bold text-[#d5ad64] leading-tight">
                  {item.value}
                </span>
                <span className="text-lg lg:text-base text-gray-200 uppercase mt-0.5">
                  {item.text_1}
                </span>
                <span className="text-base lg:text-sm text-gray-400">
                  {item.text_2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
