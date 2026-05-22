import { AboutData } from "@/services/about.service";
import Image from "next/image";

type AboutUsProps = Pick<AboutData, "about_us">;

export function AboutUs({ about_us }: AboutUsProps) {
  return (
    <section className="py-12 bg-[#050810] text-white">
      <div className="container mx-auto px-8 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">
            {about_us.title}
          </h2>
          <div className="w-12 h-[2.5px] bg-[#d5ad64] mb-8" />
          <div className="space-y-4 opacity-90 text-gray-300 text-base md:text-lg whitespace-pre-wrap">
            <p>{about_us.description}</p>
          </div>
        </div>

        <div className="space-y-4 w-full">
          {about_us.stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 lg:gap-5 p-4 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="relative size-16 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#f3d9a9] text-xl mb-0.5 lg:mb-0">
                  {item.title}
                </h4>
                <p className="text-[15px] lg:text-base text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
