import { AboutData } from "@/services/about.service";

type TimelineProps = Pick<AboutData, "timeline">;

export function Timeline({ timeline }: TimelineProps) {
  return (
    <section className="py-12 bg-[#050810] overflow-hidden">
      <div className="container mx-auto px-10 lg:px-4">
        <h2 className="text-center text-[28px] lg:text-4xl font-bold text-white mb-10 lg:mb-12 uppercase">
          {timeline.title}
        </h2>

        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
          <div className="lg:hidden absolute left-1.75 top-2 bottom-0 w-px h-[90%] bg-[#d5ad64]/30" />

          <div className="hidden lg:block absolute top-3.5 left-18 w-[85%] mx-auto h-px bg-[#d5ad64]/30" />

          {timeline.events.map((event, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-row lg:flex-col items-start lg:items-center w-full pl-8 lg:pl-0"
            >
              <div className="absolute left-0 top-2 lg:hidden size-4 rounded-full bg-[#d5ad64] shadow-[0_0_15px_rgba(213,173,100,0.5)]" />

              <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                <div className="relative flex items-center">
                  <div className="bg-[#050810] text-[#d5ad64] font-bold text-xl sm:text-lg lg:text-xl whitespace-nowrap">
                    {event.year}
                  </div>

                  {idx !== timeline.events.length - 1 && (
                    <div className="hidden lg:block absolute -right-21 size-4 rounded-full bg-[#d5ad64] shadow-[0_0_15px_rgba(213,173,100,0.5)]" />
                  )}
                </div>

                <p className="text-base lg:text-[12px] text-gray-400 mt-1 lg:mt-2 max-w-full lg:max-w-36">
                  {event.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
