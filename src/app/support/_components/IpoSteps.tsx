import { SupportData } from "@/services/support.service";
import { ArrowRight, ArrowDown } from "lucide-react";

type IpoStepsProps = Pick<SupportData, "ipo_steps">;

export function IpoSteps({ ipo_steps }: IpoStepsProps) {
  return (
    <section className="border border-white/15 bg-[#020a17] rounded-2xl my-8 lg:my-6 py-12 px-4 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase mb-3 py-1">
          {ipo_steps.title}
        </h2>
        <p className="text-base text-gray-400 mx-auto max-w-3xl">
          {ipo_steps.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0 relative">
        {ipo_steps.steps.map((step, idx) => {
          const indexDisplay = String(idx + 1).padStart(2, "0");

          return (
            <div key={idx} className="relative flex flex-col items-center">
              <div className="flex flex-col items-center text-center px-2 w-full">
                <div className="flex items-center justify-center w-full mb-4">
                  <div className="size-14 lg:size-14 rounded-full border-[1.5px] border-[#d5ad64] flex items-center justify-center bg-[#020712] text-[#e5c185] text-lg lg:text-xl font-semibold shadow-[0_0_15px_rgba(213,173,100,0.15)]">
                    {indexDisplay}
                  </div>
                </div>

                <div className="px-1">
                  <h3 className="text-sm lg:text-[12px] font-bold text-[#e5c185] mb-2 flex items-center justify-center uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs lg:text-[11px] text-gray-400 px-2">
                    {step.description}
                  </p>
                </div>
              </div>

              {idx < ipo_steps.steps.length - 1 && (
                <>
                  <div className="hidden lg:flex absolute left-[calc(100%-12px)] top-8 -translate-y-1/2 items-center justify-center z-10 w-6">
                    <ArrowRight className="size-4 lg:size-full text-[#d5ad64]" />
                  </div>

                  <div className="flex lg:hidden justify-center items-center mt-4 w-full">
                    <ArrowDown className="size-8 text-[#d5ad64] sm:hidden" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
