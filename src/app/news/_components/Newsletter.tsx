import { Button, Input } from "@/components/ui";
import { NewsData } from "@/services/news.service";
import { Mail } from "lucide-react";

type NewsletterProps = Pick<NewsData, "newsletter">;

export function Newsletter({ newsletter }: NewsletterProps) {
  return (
    <section className="container mx-auto px-0 lg:px-8 pb-10">
      <div className="bg-linear-to-br from-[#f9d696] to-[#cfa557] px-12 py-8 lg:rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-6">
        <div className="flex flex-col lg:flex-row items-center lg:gap-6 text-center lg:text-left">
          <Mail className="text-black size-14 lg:size-16 shrink-0" />
          <div className="flex flex-col">
            <h2 className="pt-2 lg:pt-1 text-3xl lg:text-2xl mb-1 lg:mb-0 font-bold text-[#050810] uppercase">
              {newsletter.text_1}
            </h2>
            <p className="text-[17px] lg:text-base font-semibold text-[#050810]">
              {newsletter.text_2}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 w-full md:w-auto">
          <Input
            type="email"
            placeholder="Nhập email của bạn"
            className="bg-white/45 border-none text-[#050810] placeholder:text-[#050810]/60 h-12 w-full lg:w-70"
          />
          <Button className="w-full lg:w-fit bg-[#050810] text-white hover:bg-[#050810]/90 px-10 py-6 text-base transition-all duration-200 hover:scale-103 active:scale-95 cursor-pointer">
            ĐĂNG KÝ
          </Button>
        </div>
      </div>
    </section>
  );
}
