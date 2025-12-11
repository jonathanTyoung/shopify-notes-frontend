import { getSessionToken } from "@shopify/app-bridge-utils";
import { app } from "./shopifyApp";

export async function shopifyFetch(path: string, options: RequestInit = {}) {
  if (!app) throw new Error("App Bridge not initialized.");

  const token = await getSessionToken(app);

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
}
