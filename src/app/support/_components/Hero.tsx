import { Button } from "@/components/ui";
import { SupportData } from "@/services/support.service";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

type HeroProps = Pick<SupportData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative flex flex-col justify-center bg-[#050810] overflow-hidden font-sans">
      <div className="absolute lg:left-70 inset-0 z-0">
        <Image
          src={hero.background_image}
          alt="Background image"
          fill
          priority
          className="w-full h-full object-cover object-bottom-left lg:object-center"
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-transparent lg:bg-linear-to-r from-black via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-8 md:px-12 py-10 flex flex-col">
        <div className="mb-6">
          <Button className="w-full lg:w-fit rounded-lg bg-[#d5ad64] p-2 mb-5 text-base lg:text-[13px] font-semibold text-black hover:bg-[#c49a50] uppercase transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95">
            DỊCH VỤ TRỌNG TÂM
          </Button>

          <h1 className="py-2 text-6xl lg:text-6xl text-center lg:text-left font-bold bg-linear-to-b from-[#f0debd] to-[#c59f5a] bg-clip-text text-[#f3d9a9] lg:text-transparent uppercase mb-1 lg:mb-3">
            {hero.title}
          </h1>
          <h2 className="lg:w-150 mb-4 lg:mb-3 text-white text-[30px] lg:text-[28px] font-bold text-center lg:text-left">
            {hero.sub_title}
          </h2>

          <p className="text-gray-200 lg:text-gray-300 text-base md:text-lg lg:w-150 mb-4 opacity-90">
            {hero.description}
          </p>

          <div className="flex flex-col lg:flex-row flex-wrap items-center gap-6">
            <Button className="w-full lg:w-fit rounded-lg bg-[#d5ad64] p-6 text-base font-semibold text-black hover:bg-[#c49a50] uppercase transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95">
              TƯ VẤN MIỄN PHÍ <ArrowRight className="size-4" />
            </Button>

            <Button className="w-full lg:w-fit bg-black/60 border border-white/40 hover:border-[#c49a50] flex items-center p-6 gap-2 text-white/90 hover:text-[#c49a50] transition-all duration-200 hover:scale-102 cursor-pointer active:scale-95 uppercase text-base font-semibold">
              TẢI BROCHURE
              <Download className="size-4.5 opacity-80 group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
