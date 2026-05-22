import { SupportData } from "@/services/support.service";
import Image from "next/image";

type WorkflowProps = Pick<SupportData, "workflow">;

export function Workflow({ workflow }: WorkflowProps) {
  return (
    <section className="py-8 lg:py-12 px-6 mx-auto border border-white/15 bg-linear-to-br from-[#001020] to-[#0a1a30] rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase mb-2">
          {workflow.title}
        </h2>
        <p className="text-sm lg:text-base text-gray-400">
          {workflow.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 space-y-6">
          {workflow.left.stats.map((stat, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="relative size-10 lg:size-13 shrink-0">
                <div className="w-full h-full relative flex items-center justify-center">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-bold text-[#e5c185] mb-1 uppercase">
                  {stat.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7 flex items-center justify-center w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 w-full max-w-2xl relative">
            <div className="size-36 lg:size-40 rounded-full border border-[#d5ad64] bg-black/40 flex items-center justify-center text-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(213,173,100,0.15),inset_0_0_15px_rgba(213,173,100,0.1)] shrink-0 z-10">
              {workflow.right.title_1}
            </div>

            <div className="flex flex-col gap-3 w-full relative px-2">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-[#d5ad64]/30 to-transparent sm:hidden" />

              {workflow.right.flows.map((flow, i) => (
                <div
                  key={i}
                  className="text-[11px] lg:text-sm font-bold text-center text-[#e5c185] py-2 px-4 border border-[#d5ad64]/40 rounded-lg bg-[#040d1a] whitespace-nowrap shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10"
                >
                  {flow}
                </div>
              ))}
            </div>

            <div className="size-36 lg:size-40 rounded-full border border-[#d5ad64] bg-black/40 flex items-center justify-center text-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(213,173,100,0.15),inset_0_0_15px_rgba(213,173,100,0.1)] shrink-0 z-10 uppercase">
              {workflow.right.title_2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
