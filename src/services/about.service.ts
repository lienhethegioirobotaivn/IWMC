import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface AboutData {
  hero: {
    background_image: string;
    title: string;
    sub_title: string;
    description: string;
    stats: {
      icon: string;
      value: string;
      text_1: string;
      text_2: string;
    }[];
  };
  about_us: {
    title: string;
    description: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  mission_vision: {
    stats: {
      background_image: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };
  leadership: {
    title: string;
    description: string;
    leaders: {
      avatar: string;
      name: string;
      role: string;
      description: string;
    }[];
  };
  timeline: {
    title: string;
    events: {
      year: string;
      text: string;
    }[];
  };
  partners: {
    left: {
      title: string;
      description: string;
      stats: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    right: {
      title: string;
      description: string;
      logos: string[];
    };
  };
  bottom_cta: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "about";

export const AboutService = {
  async getData(): Promise<AboutData | null> {
    const data = await getACFDataBySlug<AboutData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      about_us: {
        ...data.about_us,
        stats: Object.values(data.about_us?.stats || {}),
      },
      mission_vision: {
        ...data.mission_vision,
        stats: Object.values(data.mission_vision?.stats || {}),
      },
      leadership: {
        ...data.leadership,
        leaders: Object.values(data.leadership?.leaders || {}),
      },
      timeline: {
        ...data.timeline,
        events: Object.values(data.timeline?.events || {}),
      },
      partners: {
        ...data.partners,
        left: {
          ...data.partners?.left,
          stats: Object.values(data.partners?.left?.stats || {}),
        },
        right: {
          ...data.partners?.right,
          logos: Object.values(data.partners?.right?.logos || {}),
        },
      },
    };
  },
};
