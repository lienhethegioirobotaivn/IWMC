import { AboutData } from "@/services/about.service";
import Image from "next/image";

type LeadershipProps = Pick<AboutData, "leadership">;

export function Leadership({ leadership }: LeadershipProps) {
  return (
    <section className="py-16 bg-[#050810]">
      <div className="container mx-auto px-8 md:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-3 uppercase">
          {leadership.title}
        </h2>
        <div className="w-16 h-0.5 bg-[#d5ad64] mx-auto mb-6" />
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-base">
          {leadership.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {leadership.leaders.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative size-52 lg:size-56 rounded-full overflow-hidden border-2 border-[#d5ad64]/30 group-hover:border-[#d5ad64] transition-colors mb-6">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-[#f3d9a9] font-bold text-xl lg:text-lg mb-1">
                {person.name}
              </h4>
              <p className="text-white/80 text-base lg:text-sm mb-2">
                {person.role}
              </p>
              <p className="text-gray-400 text-sm lg:text-xs max-w-50">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
