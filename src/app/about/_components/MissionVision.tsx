import { AboutData } from "@/services/about.service";
import Image from "next/image";

type MissionVisionProps = Pick<AboutData, "mission_vision">;

export function MissionVision({ mission_vision }: MissionVisionProps) {
  return (
    <section className="py-4 bg-[#050810]">
      <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {mission_vision.stats.map((item, idx) => (
          <div
            key={idx}
            className="relative h-60 rounded-3xl overflow-hidden group border border-white/20 hover:border-white/30"
          >
            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors" />
            <Image
              src={item.background_image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
              <div className="relative size-16 lg:size-22 mb-1.5">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-[#d5ad64] mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-base text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
