import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface ContactData {
  hero: {
    background_image: string;
    title: string;
    sub_title: string;
    description: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  contact_section: {
    left: {
      title: string;
      description: string;
    };
    right: {
      title: string;
      description: string;
      address: string;
      phone: string;
      email: string;
      working_hours: string;
      link_linkedin: string;
      link_facebook: string;
      link_youtube: string;
    };
  };
  map: {
    google_map_src: string;
  };
  faq: {
    title: string;
    description: string;
    qna: {
      question: string;
      answer: string;
    }[];
  };
  bottom_cta: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "contact";

export const ContactService = {
  async getData(): Promise<ContactData | null> {
    const data = await getACFDataBySlug<ContactData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      faq: {
        ...data.faq,
        qna: Object.values(data.faq?.qna || {}),
      },
    };
  },
};
