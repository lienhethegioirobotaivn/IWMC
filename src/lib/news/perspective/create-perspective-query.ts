import { REST_URL } from "@/lib/env";

export function createPerspectiveQuery(
  params: Record<string, string | number | undefined>,
) {
  const url = new URL(`${REST_URL}/perspective`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}
