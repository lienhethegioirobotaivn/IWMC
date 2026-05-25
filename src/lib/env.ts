export const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;
export const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

if (!REST_URL) {
  throw new Error("NEXT_PUBLIC_WP_REST_URL is missing in .env");
}

if (!WP_URL) {
  throw new Error("NEXT_PUBLIC_WP_URL is missing in .env");
}
