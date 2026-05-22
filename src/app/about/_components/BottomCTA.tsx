import { Button } from "@/components/ui/button";
import { AboutData } from "@/services/about.service";
import { ArrowRight } from "lucide-react";

type BottomCTAProps = Pick<AboutData, "bottom_cta">;

export function BottomCTA({ bottom_cta }: BottomCTAProps) {
  return (
    <section className="container mx-auto lg:px-12 pb-12">
      <div className="bg-linear-to-br from-[#f9d696] to-[#cfa557] px-12 py-8 lg:rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center lg:text-left">
          <h2 className="pt-2 lg:pt-1 text-3xl lg:text-2xl mb-1 lg:mb-0 font-bold text-[#050810] uppercase">
            {bottom_cta.text_1}
          </h2>
          <p className="text-lg lg:text-base font-semibold text-[#050810]">
            {bottom_cta.text_2}
          </p>
        </div>
        <Button className="w-fit bg-[#050810] text-white hover:bg-[#050810]/90 px-10 py-6 text-base transition-all duration-200 hover:scale-103 active:scale-95 cursor-pointer">
          KẾT NỐI VỚI CHÚNG TÔI
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
