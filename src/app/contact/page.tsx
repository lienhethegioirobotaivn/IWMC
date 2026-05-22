import {
  ContactSection,
  Hero,
  Map,
  Faq,
  BottomCTA,
} from "@/app/contact/_components";
import { ContactService } from "@/services/contact.service";

export default async function Contact() {
  const data = await ContactService.getData();
  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#050810]">
      <Hero hero={data.hero} />
      <ContactSection contact_section={data.contact_section} />
      <Map map={data.map} />
      <Faq faq={data.faq} />
      <BottomCTA bottom_cta={data.bottom_cta} />
    </main>
  );
}
