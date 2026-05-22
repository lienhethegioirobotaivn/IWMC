import { SupportData } from "@/services/support.service";
import Image from "next/image";

type StatProps = Pick<SupportData, "stat">;

export function Stat({ stat }: StatProps) {
  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 my-8 lg:my-6 p-4 lg:p-6 rounded-2xl border border-white/15 bg-[#020a17] backdrop-blur-md">
      {stat.stats.map((item, idx) => (
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
            <span className="text-3xl lg:text-[24px] font-bold text-[#d5ad64] lg:mb-0.5">
              {item.value}
            </span>
            <span className="text-base lg:text-[13px] text-gray-400">
              {item.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
