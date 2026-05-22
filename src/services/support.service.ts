import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface SupportData {
  hero: {
    background_image: string;
    title: string;
    sub_title: string;
    description: string;
  };
  stat: {
    stats: {
      icon: string;
      value: string;
      text: string;
    }[];
  };
  ipo_steps: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  workflow: {
    title: string;
    description: string;
    left: {
      stats: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    right: {
      title_1: string;
      title_2: string;
      flows: string[];
    };
  };
  why_choose: {
    title: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  knowledge: {
    left: {
      title: string;
      description: string;
    };
    right: {
      background_image: string;
      title: string;
      description: string;
      content: string[];
    };
  };
}

const SLUG = "support";

export const SupportService = {
  async getData(): Promise<SupportData | null> {
    const data = await getACFDataBySlug<SupportData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      stat: {
        ...data.stat,
        stats: Object.values(data.stat?.stats || {}),
      },
      ipo_steps: {
        ...data.ipo_steps,
        steps: Object.values(data.ipo_steps?.steps || {}),
      },
      services: {
        ...data.services,
        stats: Object.values(data.services?.stats || {}),
      },
      workflow: {
        ...data.workflow,
        left: {
          ...data.workflow?.left,
          stats: Object.values(data.workflow?.left?.stats || {}),
        },
        right: {
          ...data.workflow?.right,
          flows: Object.values(data.workflow?.right?.flows || {}),
        },
      },
      why_choose: {
        ...data.why_choose,
        stats: Object.values(data.why_choose?.stats || {}),
      },
      knowledge: {
        ...data.knowledge,
        right: {
          ...data.knowledge?.right,
          content: Object.values(data.knowledge?.right?.content || {}),
        },
      },
    };
  },
};
