import {
  Hero,
  IpoSteps,
  Knowledge,
  Services,
  Stat,
  WhyChoose,
  Workflow,
} from "@/app/support/_components";
import { SupportService } from "@/services/support.service";

export default async function Support() {
  const data = await SupportService.getData();
  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#000d16]">
      <Hero hero={data.hero} />
      <div className="px-8">
        <Stat stat={data.stat} />
        <IpoSteps ipo_steps={data.ipo_steps} />
        <Services services={data.services} />
        <Workflow workflow={data.workflow} />
        <WhyChoose why_choose={data.why_choose} />
        <Knowledge knowledge={data.knowledge} />
      </div>
    </main>
  );
}
