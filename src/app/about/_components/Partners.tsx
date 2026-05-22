import { AboutData } from "@/services/about.service";
import Image from "next/image";

type PartnersProps = Pick<AboutData, "partners">;

export function Partners({ partners }: PartnersProps) {
  return (
    <section className="py-12 bg-[#050810]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left */}
          <div className="p-8 rounded-2xl text-center lg:text-left border border-white/10 bg-white/2">
            <h3 className="text-white font-bold text-2xl mb-4 uppercase">
              {partners.left.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {partners.left.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {partners.left.stats.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative size-16 mb-2">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-[12px] lg:text-[10.5px] font-bold text-[#d5ad64] mb-2 uppercase flex items-center justify-center">
                    {item.title}
                  </h4>
                  <p className="text-[10px] lg:text-[9px] text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="p-8 rounded-2xl text-center lg:text-left border border-white/10 bg-white/2">
            <h3 className="text-white font-bold text-2xl mb-4 uppercase">
              {partners.right.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {partners.right.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {partners.right.logos.map((logo, index) => (
                <div
                  key={index}
                  className="relative h-20 w-full border border-white/5 hover:border-white/20 rounded-lg bg-white/3 flex items-center justify-center p-4"
                >
                  <Image
                    src={logo}
                    alt="Partner"
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
