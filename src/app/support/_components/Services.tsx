import { SupportData } from "@/services/support.service";
import Image from "next/image";

type ServicesProps = Pick<SupportData, "services">;

export function Services({ services }: ServicesProps) {
  return (
    <section className="px-7 lg:px-6 py-8 my-8 bg-[#001020] border border-white/15 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase lg:px-4 py-2">
          {services.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
        {services.stats.map((item, idx) => (
          <div
            key={idx}
            className="px-3 py-4 rounded-xl border border-white/10 bg-[#0a1a30] hover:border-white/20 transition-all duration-200 flex flex-col items-center text-center group hover:scale-103"
          >
            <div className="relative size-18 md:size-14 mb-1 md:mb-2">
              <Image
                src={item.icon}
                alt="Icon"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="py-1 text-sm lg:text-[12.5px] font-bold text-[#d5ad64] mb-1 flex items-center">
              {item.title}
            </h3>
            <p className="text-xs lg:text-[11.5px] text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
