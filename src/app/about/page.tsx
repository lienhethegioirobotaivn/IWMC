import {
  AboutUs,
  BottomCTA,
  Hero,
  Leadership,
  MissionVision,
  Partners,
  Timeline,
} from "@/app/about/_components";
import { AboutService } from "@/services/about.service";

export default async function About() {
  const data = await AboutService.getData();
  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero hero={data.hero} />
      <AboutUs about_us={data.about_us} />
      <MissionVision mission_vision={data.mission_vision} />
      <Leadership leadership={data.leadership} />
      <Timeline timeline={data.timeline} />
      <Partners partners={data.partners} />
      <BottomCTA bottom_cta={data.bottom_cta} />
    </main>
  );
}
