import { SupportData } from "@/services/support.service";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

type KnowledgeProps = Pick<SupportData, "knowledge">;

export function Knowledge({ knowledge }: KnowledgeProps) {
  const articles = [
    {
      image: "/support/NewsIcon1.png",
      date: "10 THÁNG 5, 2024",
      title: "Xu hướng IPO tại Việt Nam 2024: Cơ hội và thách thức",
    },
    {
      image: "/support/NewsIcon2.png",
      date: "25 THÁNG 4, 2024",
      title: "Checklist 45 tiêu chí doanh nghiệp cần chuẩn bị trước khi IPO",
    },
    {
      image: "/support/NewsIcon3.png",
      date: "25 THÁNG 4, 2024",
      title: "Định giá doanh nghiệp: Các phương pháp phổ biến và ứng dụng",
    },
  ];

  return (
    <section className="my-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch">
      <div className="lg:col-span-7 p-6 border border-white/15 bg-linear-to-br from-[#001020] to-[#0a1a30] rounded-2xl flex flex-col justify-between">
        <div className="mb-6">
          <h2 className="text-[19px] lg:text-2xl font-bold text-[#e5c185] uppercase mb-1">
            {knowledge.left.title}
          </h2>
          <p className="text-[15px] lg:text-lg text-gray-400">
            {knowledge.left.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-[#000c17] border border-white/10 hover:border-white/20 rounded-2xl flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 lg:p-3">
                  <div className="text-[13px] text-[#e5c185] font-medium mb-1.5">
                    {art.date}
                  </div>
                  <h3 className="text-[13px] lg:text-xs font-bold text-white leading-snug line-clamp-3 group-hover:text-[#e5c185] transition-colors">
                    {art.title}
                  </h3>
                  <div className="text-[13px] text-[#e5c185] font-bold mt-3 flex items-center gap-1">
                    Đọc thêm <ArrowRight className="size-2.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#040d1a] relative overflow-hidden flex flex-col p-6">
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <Image
            src={knowledge.right.background_image}
            alt="Background Chart"
            fill
            className="object-cover object-bottom-right"
          />
        </div>

        <div className="relative z-10">
          <h3 className="text-center lg:text-left text-2xl lg:text-2xl font-bold text-white mb-2 uppercase">
            {knowledge.right.title}
          </h3>
          <p className="text-[15px] lg:text-base text-gray-200 mb-4">
            {knowledge.right.description}
          </p>

          <div className="space-y-3">
            {knowledge.right.content.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-200"
              >
                <div className="size-4 rounded-full bg-[#e5c185] flex items-center justify-center shrink-0">
                  <Check className="size-2.5 text-[#020712] stroke-4" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:mb-2 mt-4 lg:mt-6">
          <button className="w-full lg:w-fit rounded-md bg-[#020712] border border-[#e5c185] py-2.5 px-4 lg:px-8 text-[11px] lg:text-sm font-bold text-white hover:bg-[#e5c185] hover:text-[#020712] transition-colors duration-200 active:scale-95 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
            <span>ĐẶT LỊCH TƯ VẤN</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
