import { ContactData } from "@/services/contact.service";
import Image from "next/image";

type HeroProps = Pick<ContactData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative flex flex-col justify-center bg-[#050810] overflow-hidden font-sans">
      <div className="absolute lg:left-20 inset-0 z-0">
        <Image
          src={hero.background_image}
          alt="Background"
          fill
          priority
          className="w-full h-full object-cover object-bottom-left lg:object-center"
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-transparent lg:bg-linear-to-r from-black via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-8 md:px-12 py-8 lg:py-10 flex flex-col">
        <div className="mb-3">
          <h1 className="py-2 text-[48px] lg:text-[56px] px-8 lg:px-0 text-center lg:text-left font-bold bg-linear-to-b from-[#f0debd] to-[#c59f5a] bg-clip-text text-[#f3d9a9] lg:text-transparent uppercase lg:mb-1 leading-14">
            {hero.title}
          </h1>
          <h2 className="py-1 lg:py-2 text-3xl lg:text-[32px] text-center lg:text-left font-bold bg-linear-to-b from-[#f0debd] to-[#c59f5a] bg-clip-text text-[#f3d9a9] lg:text-transparent uppercase mb-1">
            {hero.sub_title}
          </h2>

          <p className="text-gray-200 lg:text-gray-300 text-base md:text-lg lg:w-150 mb-4 opacity-90">
            {hero.description}
          </p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 p-3 lg:p-6 rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md">
          {hero.stats.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-4 lg:flex items-center gap-2 lg:gap-3 lg:px-4 border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-white/15 pb-3 lg:pb-0 lg:py-0`}
            >
              <div className="col-span-1 flex justify-center items-center">
                <div className="relative size-20 lg:size-16">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="col-span-3 flex flex-col pl-2 lg:pl-0">
                <span className="text-[16px] lg:text-[14px] font-bold text-[#d5ad64] mb-1">
                  {item.title}
                </span>
                <span className="text-[14px] lg:text-xs text-gray-300">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
