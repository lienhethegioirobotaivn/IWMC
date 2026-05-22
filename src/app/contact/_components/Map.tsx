import { ContactData } from "@/services/contact.service";

type MapProps = Pick<ContactData, "map">;

export function Map({ map }: MapProps) {
  return (
    <section className="bg-[#050810] px-6 md:px-12">
      <div className="mx-auto relative h-65 w-full rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src={map.google_map_src}
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />
      </div>
    </section>
  );
}
