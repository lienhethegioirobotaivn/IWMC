import { ContactData } from "@/services/contact.service";
import { ArrowRight } from "lucide-react";

type BottomCTAProps = Pick<ContactData, "bottom_cta">;

export function BottomCTA({ bottom_cta }: BottomCTAProps) {
  return (
    <section className="bg-[#050810] lg:px-12 pb-12 font-sans">
      <div className="mx-auto bg-linear-to-r from-[#f0debd] via-[#c59f5a] to-[#f0debd] lg:rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 shadow-xl">
        <div className="text-center lg:text-left">
          <h2 className="text-[26px] lg:text-2xl font-bold text-[#050810] uppercase mb-2">
            {bottom_cta.text_1}
          </h2>
          <p className="text-[17px] lg:text-base text-[#050810]/80 font-medium">
            {bottom_cta.text_2}
          </p>
        </div>
        <button className="shrink-0 bg-[#050810] hover:bg-[#0b1120] text-[#f0debd] font-bold text-base lg:text-sm py-3.5 px-8 rounded-lg uppercase transition-all duration-200 hover:scale-103 active:scale-95 cursor-pointer flex items-center gap-2">
          Kết nối ngay
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
