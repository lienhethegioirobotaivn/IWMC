import { REST_URL } from "@/lib/env";

export function createNewsQuery(
  params: Record<string, string | number | undefined>,
) {
  const url = new URL(`${REST_URL}/news`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}
