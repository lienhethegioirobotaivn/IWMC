export async function wpFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`WP Fetch Error: ${res.status}`);
  }

  return res.json();
}
